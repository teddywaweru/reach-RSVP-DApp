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


class Person extends React.Component {
  random() { return reach.hasRandom.random(); }
  async getHand() { // Fun([], UInt)

    return;
  }
  seeOutcome(i) { this.setState({view: 'Done', outcome: intToOutcome[i]}); }
}

class Participant extends Person {
  constructor(props) {
    super(props);
    this.state = {view: 'WantsRSVP'};
  }
  wantsRSVP(){
    console.log(("wantsRSVP"));
    return this.props.idx;}

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

  getReceipt([cost, wantedRSVP]) {

    console.log("getReceipt")
    console.log(`${cost}`)
    console.log(`${wantedRSVP}`)
    this.setState({view: "Done",cost,wantedRSVP})
    return
  }

  confirmInventory(v) {
    // TODO
    return
  }

  attach(ctcInfoStr) {
      const ctc = this.props.acc.contract(backend, JSON.parse(ctcInfoStr));
      console.log(`${ctcInfoStr}`);
      backend.Seller(ctc, this);
      this.setState({view: 'SellerJoined'})
  }

  RSVPCost() {
    return (reach.parseCurrency(10));
  }

  acceptRSVPCost(cost){
    let RSVPCost = reach.formatCurrency(cost)
    console.log(`acceptRSVPCost: ${reach.formatCurrency(RSVPCost)}`)
    this.setState({view: 'AcceptCost', RSVPCost });
    return

  }
  render() { return renderView(this, DeployerViews); }
}

renderDOM(<App />);




//show list of products
//select prouct
//seller generates contract that links to the product
//buyer attaches
//buyer pays
//transfer funds to seller, store transaction hex.

