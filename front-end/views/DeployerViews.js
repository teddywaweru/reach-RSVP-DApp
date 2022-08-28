import React from 'react';
import PlayerViews from './PlayerViews';
import RSVPTickets from './RSVPTickets.json'
import "../styles/DeployerViews.css"


const exports = {...PlayerViews};

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Deployer">
        {/* <h2>Deployer (Alice)</h2> */}
        <h2> </h2>
        {content}
      </div>
    );
  }
}


exports.WantsRSVP = class extends React.Component {
  render() {
    const {parent, defaultToken, standardUnit} = this.props;
    const token = (this.state || {}).token || defaultToken;
    console.log("DeplyerViews.WantsRSVP")
    const RSVPEvent = RSVPTickets.events[this.props.idx];
    // console.log(`${.eventName}`)
    return (
      <div>
        <div>

        Please confirm selected event as:
        <p>Event Ticket ID: {RSVPEvent.ticketID}</p>
        <br />
        <p>Event Name: {RSVPEvent.eventName}</p>
        <br />
        </div>
        <div>

        <p>Event Motto: {RSVPEvent.eventmotto}</p>
        <br />
        <button
          onClick={() => parent.deploy(token)}
        >Confirm
        </button>
        </div>
        {/* <input
          type='number'
          placeholder={defaultToken}
          onChange={(e) => this.setState({token: e.currentTarget.value})}
        /> {standardUnit} */}
        <br />
      </div>
    );
  }
}

exports.Deploy = class extends React.Component {
  render() {
    const {parent, wager, standardUnit} = this.props;
    return (
      <div>
        {/* Wager (pay to deploy): <strong>{wager}</strong> {standardUnit} */}
        Confirm Deployment?
        <br />
        <button
          onClick={() => parent.deploy()}
        >Deployconfirm</button>
      </div>
    );
  }
}

exports.Deploying = class extends React.Component {
  render() {
    return (
      <div>Deploying... please wait.</div>
    );
  }
}

exports.WaitingForAttacher = class extends React.Component {
  async copyToClipboard(button) {
    const {ctcInfoStr} = this.props;
    navigator.clipboard.writeText(ctcInfoStr);
    const origInnerHTML = button.innerHTML;
    button.innerHTML = 'Copied!';
    button.disabled = true;
    await sleep(1000);
    button.innerHTML = origInnerHTML;
    button.disabled = false;
  }

  render() {
    const {ctcInfoStr} = this.props;
    return (
      <div>
        Connecting to Seller Backend...
        <br /> Please give them this contract info:
        <pre className='ContractInfo'>
          {ctcInfoStr}
        </pre>
        <button
          onClick={(e) => this.copyToClipboard(e.currentTarget)}
        >Copy to clipboard</button>
      </div>
    )
  }
}
exports.SellerJoined = class extends React.Component {
  // async copyToClipboard(button) {
  //   const {ctcInfoStr} = this.props;
  //   navigator.clipboard.writeText(ctcInfoStr);
  //   const origInnerHTML = button.innerHTML;
  //   button.innerHTML = 'Copied!';
  //   button.disabled = true;
  //   await sleep(1000);
  //   button.innerHTML = origInnerHTML;
  //   button.disabled = false;
  // }

  render() {
    const {ctcInfoStr} = this.props;
    return (
      <div>
        Seller has joined
        <br /> The RSVP's contract is captured as:
        <pre className='ContractInfo'>
          {ctcInfoStr}
        </pre>
        {/* <button
          onClick={(e) => this.copyToClipboard(e.currentTarget)}
        >Copy to clipboard</button> */}
      </div>
    )
  }
}

exports.AcceptCost = class extends React.Component {
  render(){
    const {RSVPCost} = this.props;
    console.log(`${RSVPCost}`)
    return(
      <div>
        Do you accept the cost of: {RSVPCost}
        <button>
          Yes
        </button>
        <button disabled={true}>
          No
        </button>
      </div>
    );
  }
}

exports.Done = class extends React.Component {
  render() {
    const { cost, wantedRSVP } = this.props;

    var RSVP = RSVPTickets.events[wantedRSVP]
    return(
      <div>
        {RSVP.eventName}
        <p>
        </p>
        <p>Transaction Completed.</p>
      </div>


    );
  }
}

export default exports;
