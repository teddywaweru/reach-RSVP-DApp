import React from 'react';
import AppViews from './front-end/views/AppViews';
import DeployerViews from './front-end/views/DeployerViews';

import './index.css';
import * as backend from './build/index.main.mjs';
import { renderView, renderDOM } from './front-end/views/render.js';
import { loadStdlib, ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);
reach.setWalletFallback(reach.walletFallback({
  providerEnv: 'TestNet', MyAlgoConnect }));
const {standardUnit} = reach;

const defaults = {defaultFundAmt: '10', defaultWager: '3', standardUnit};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'ConnectAccount', ...defaults};
  }

  async componentDidMount() {
    const acc = await reach.getDefaultAccount();
    const balAtomic = await reach.balanceOf(acc);
    const bal = reach.formatCurrency(balAtomic, 4);
    this.setState({acc, bal});
    if (await reach.canFundFromFaucet()) {
      this.setState({view: 'FundAccount'});
    } else {
      this.setState({view: 'DeployerOrAttacher'});
    }
    
  }
  async fundAccount(fundAmount) {
    await reach.fundFromFaucet(this.state.acc, reach.parseCurrency(fundAmount));
    this.setState({view: 'DeployerOrAttacher'});
  }
  async skipFundAccount() { this.setState({view: 'DeployerOrAttacher'}); }

  RSVPQuery(idx) {

    this.setState({view: 'Wrapper', ContentView: Participant,idx});
    
  }

  render() {return renderView(this,AppViews); }
}



class Participant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'WantsRSVP'};
  }
  //returns index of selected product
  wantsRSVP(){
    console.log(("wantsRSVP"));
    return this.props.idx;}

  //initiates backend.Buyer
  async deploy() {
    console.log((`${this.props.idx}`));

    const ctc = this.props.acc.contract(backend);
    this.setState({view: 'Deploying', ctc});
    this.deadline = {ETH: 10, ALGO: 100, CFX: 1000}[reach.connector]; // UInt
    backend.Buyer(ctc, this);
    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);

    this.setState({view: 'WaitingForAttacher', ctcInfoStr});
    
    this.attach(ctcInfoStr); 
  }

  
  // intiate backend.Seller & attach to contract
  attach(ctcInfoStr) {
    const ctc = this.props.acc.contract(backend, JSON.parse(ctcInfoStr));
    console.log(`Attaching to: ${ctcInfoStr}`);
      backend.Seller(ctc, this);
      this.setState({view: 'SellerJoined'})
    }
    
    // return cost of RSVP 
    RSVPCost() {
    console.log("Getting Cost for RSVP");
    return (reach.parseCurrency(10));
  }
  
  // accept RSVP Cost
  acceptRSVPCost(cost){
    let RSVPCost = reach.formatCurrency(cost)
    console.log(`acceptRSVPCost: ${RSVPCost}`)
    this.setState({view: 'AcceptCost', RSVPCost });
    return
    
  }

  //return receipt for buyer else next procedure
  getReceipt([cost, wantedRSVP]) {

    console.log("Getting Buyer's Receipt")
    console.log(`${cost}`)
    console.log(`${wantedRSVP}`)
    this.setState({view: "Done",cost,wantedRSVP})
    console.log("Application completed. Requires reload.")
    return
  }
  
  //intended for backend.Seller to update intentory with details 
  confirmInventory(v) {
    // TODO
    return
  }
  render() { return renderView(this, DeployerViews); }
}

renderDOM(<App />);




