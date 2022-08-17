
import React from "react";
import { renderDOM, renderView } from "./front-end/views/render"
// import { loadStdLib } from '@reach-sh/stdlib';
// const reach = loadStdLib(process.env);
import './index.css';

import AppViews from './front-end/views/AppViews'

// const { standardUnit } = reach;

// const defaults = {defaultFundAmt: '10', defaultWager: '3', standardUnit};
const defaults = {defaultFundAmt: '10', defaultWager: '3'};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view:"HomePage",
      ...defaults
    }
  }


  render() { return renderView(this,AppViews);}
}


renderDOM(<App />)



// List of possible views
// 1. Provide acct info
// 2. Place order for <RSVP
// 3. Timer till due Date & fast forward
// 4. Provide token details
// 5. confirm token details
