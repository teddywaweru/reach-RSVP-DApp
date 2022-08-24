import React from 'react';


const exports = {};

exports.Login = class extends React.Component {
    render() {
        const { content } = this.props;
        return (
            <div>
            <label>Enter your Email</label>
            <input 
            type='text'
            placeholder='Enter Email'
            />

            <label>Enter Password</label>
            <input 
            type='password'
            placeholder='Enter Password'
            />
            <button>Lgin</button>
            </div>
            
        )

    }
}

exports.ConnectAccount = class extends React.Component {
    render () {
        return (
            <div>
                Please wait while we connect to your account. <br></br>
                If this takes more than a few seconds, there may be somethng wrong.
            </div>
        )
        
    }
}


exports.MakePayment = class extends React.Component {
    render () {
        const { bal, standardUnit, defaultFundAmt} = this.props
        const amt = (this.state || {}).amt || defaultFundAmt;
        return (
            <div>
                <input 
                type='number'
                placeholder={defaultFundAmt}
                onChange={(e) => this.setState({amt: e.currentTarget.value})}
                />
            </div>
        )
    }
}

exports.ConfirmPayment = class extends React.Component {
    render() {
        const { bal } = this.props
        return(
            <div>
                Balance: {bal}
            </div>
        )
    }
}