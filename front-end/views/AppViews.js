import React from 'react';
import '../styles/AppViews.css';
import  RSVPTickets from "./RSVPTickets.json";

const exports = {};




exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="App">
        <header className="App-header" id="root">
          <h1>Welcome here. Book your RSVP</h1>
          {content}
        </header>
      </div>
    );
  }
}
exports.HomePage = class extends React.Component {
  render() {
    return(
      <div>
        <p>Hey there Newbie!</p>
      </div>
    );
  }
}

exports.ConnectAccount = class extends React.Component {
  render() {
    return (
      <div>
        Please wait while we connect to your account.
        If this takes more than a few seconds, there may be something wrong.
      </div>
    )
  }
}

exports.FundAccount = class extends React.Component {
  render() {
    const {bal, standardUnit, defaultFundAmt, parent} = this.props;
    const amt = (this.state || {}).amt || defaultFundAmt;
    return (
      <div>
        <h2>Fund account</h2>
        <br />
        Balance: {bal} {standardUnit}
        <hr />
        Would you like to fund your account with additional {standardUnit}?
        <br />
        (This only works on certain devnets)
        <br />
        <input
          type='number'
          placeholder={defaultFundAmt}
          onChange={(e) => this.setState({amt: e.currentTarget.value})}
        />
        <button onClick={() => parent.fundAccount(amt)}>Fund Account</button>
        <button onClick={() => parent.skipFundAccount()}>Skip</button>
      </div>
    );
  }
}

exports.DeployerOrAttacher = class extends React.Component {

  checkIsTaken(isTaken){
    if(isTaken===true) {
      return(
        <div>
          Taken
        </div>
      )
    } else{
            return(
              <div>
                Available
              </div>
            )
    }
  }
  render() {
    const {parent} = this.props;

    return (
        <div>
        <p>
        Here's a list of events that are currently available in our system
        </p>
        <br />
        <table>
          <thead>
            <tr>
              <th>TicketNumber</th>
              <th>Event Name</th>
            </tr>
          </thead>
          <tbody>
            {
              RSVPTickets.events.map
              ((RSVP, idx) =>
                (
                  <tr>
                    <td>{RSVP.ticketID}</td>
                    <td>{RSVP.eventName}</td>
                    <td>
                      <button onClick={() =>parent.RSVPQuery(idx)}>
                      {this.checkIsTaken(RSVP.isTaken)}
                      </button>
                    </td>
                  </tr>
                )
              )
            }
          </tbody>
        </table>
        {/* Please select a role:
        <br />
        <p>
          <button
            onClick={() => parent.selectDeployer()}
          >Deployer</button>
          <br /> Set the wager, deploy the contract.
        </p>
        <p>
          <button
            onClick={() => parent.selectAttacher()}
          >Attacher</button>
          <br /> Attach to the Deployer's contract.
        </p> */}
      </div>
    );
  }
}

function clicked(idx) {
  console.log(`clicked ${idx}`);
}
export default exports;