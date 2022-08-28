import React from 'react';
// import ReactDOM from 'react-dom/client';
import AppViews from './front-end/views/AppViews';
import DeployerViews from './front-end/views/DeployerViews';
// import AttacherViews from './front-end/views/AttacherViews';

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

    this.setState({view: 'Wrapper', ContentView: Deployer,idx});
    
  }
  // selectAttacher() { this.setState({view: 'Wrapper', ContentView: Attacher}); }
  // selectAttacher() { this.setState({view: 'Wrapper', ContentView: Attacher}); }
  // selectDeployer() { this.setState({view: 'Wrapper', ContentView: Deployer}); }

  render() {return renderView(this,AppViews); }
}


class Player extends React.Component {
  random() { return reach.hasRandom.random(); }
  async getHand() { // Fun([], UInt)
    const hand = await new Promise(resolveHandP => {
      this.setState({view: 'GetHand', playable: true, resolveHandP});
    });
    this.setState({view: 'WaitingForResults', hand});
    return handToInt[hand];
  }
  seeOutcome(i) { this.setState({view: 'Done', outcome: intToOutcome[i]}); }
  // informTimeout() { this.setState({view: 'Timeout'}); }
  // playHand(hand) { this.state.resolveHandP(hand); }
  // wantRSVPecho() { console.log("clicked")}
}

class Deployer extends Player {
  constructor(props) {
    super(props);
    this.state = {view: 'WantsRSVP'};
  }
  // setRSVP(RSVP){this.setState({view: 'Deploy',RSVP});};
  // setWager(wager) { this.setState({view: 'Deploy', wager}); }
  wantsRSVP(){
    console.log(("wantsRSVP"));
    return this.props.idx;}
  // wantsRSVPecho(){
  //   console.log(("wantsRSVP"));
  //   return this.state.ctcInfoStr;}

  async deploy() {
    console.log((`${this.props.idx}`));

    const ctc = this.props.acc.contract(backend);
    this.setState({view: 'Deploying', ctc});
    // this.token = reach.parseCurrency(this.state.token); // UInt
    this.deadline = {ETH: 10, ALGO: 100, CFX: 1000}[reach.connector]; // UInt
    backend.Buyer(ctc, this);
    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);

    this.setState({view: 'WaitingForAttacher', ctcInfoStr});
    
    this.attach(ctcInfoStr);
    
    
  }

  getReceipt([cost, wantedRSVP]) {

    // TODO
    console.log("getReceipt")
    console.log(`${cost}`)
    console.log(`${wantedRSVP}`)
    // this.setState(state)
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
      // this.setState({view: 'Attaching'});
      backend.Seller(ctc, this);
      this.setState({view: 'SellerJoined'})
  }

  RSVPCost() {
    return (reach.parseCurrency(10));
  }

  acceptRSVPCost(RSVPCost){
    console.log(`acceptRSVPCost: ${reach.formatCurrency(RSVPCost)}`)
    let RSVPCost_dup = reach.formatCurrency(RSVPCost)
    this.setState({view: 'AcceptCost', RSVPCost_dup });
    return

  }
  // async deploy() {
  //   const ctc = this.props.acc.contract(backend);
  //   this.setState({view: 'Deploying', ctc});
  //   this.wager = reach.parseCurrency(this.state.wager); // UInt
  //   this.deadline = {ETH: 10, ALGO: 100, CFX: 1000}[reach.connector]; // UInt
  //   backend.Buyer(ctc, this);
  //   const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
  //   this.setState({view: 'WaitingForAttacher', ctcInfoStr});
  // }
  render() { return renderView(this, DeployerViews); }
}
// class Attacher extends Player {
//   constructor(props) {
//     super(props);
//     // this.state = {view: 'Attach'};
//   }
//   attach(ctcInfoStr) {
//     const ctc = this.props.acc.contract(backend, JSON.parse(ctcInfoStr));
//     // this.setState({view: 'Attaching'});
//     backend.Seller(ctc, this);
//   }
//   async acceptWager(wagerAtomic) { // Fun([UInt], Null)
//     const wager = reach.formatCurrency(wagerAtomic, 4);
//     return await new Promise(resolveAcceptedP => {
//       this.setState({view: 'AcceptTerms', wager, resolveAcceptedP});
//     });
//   }
//   termsAccepted() {
//     this.state.resolveAcceptedP();
//     this.setState({view: 'WaitingForTurn'});
//   }
//   render() { return renderView(this, AttacherViews); }
// }


renderDOM(<App />);




// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     {App}
//   </React.StrictMode>
// );



// function App(){

//     return(
//     <div className="main_div">
//       <div className=' bg-black'>
//         <p className=' text-4xl'>Available RSVPs</p>
//       <AvailableRSVPs />
//       {/* <WantsTokens /> */}
        
//       </div>
//       <div>
//       <p className=''>
//         This is a start...
//       </p>
//       </div>

//     </div>
//     );
//     }

// function AvailableRSVPs() {
//   const tokens_wanted = () => WantsTokens();
//   return(
//     <div className='available_rsvps'>
//       <p>Another section</p>
//       <p>You looking to buy?</p>
//       <button onClick={() => WantsTokens()}>

//       </button>
//     </div>

//   );
// }


//show list of products
//select prouct
//seller generates contract that links to the product
//buyer attaches
//buyer pays
//transfer funds to seller, store transaction hex.

