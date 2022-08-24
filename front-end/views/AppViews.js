import React from 'react';

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="App">
        <header className="App-header" id="root">
          <h1>Request for your RSVP</h1>
          {content}
        </header>
      </div>
    );
  }
}


exports.SignInAccount = class extends React.Component {
  render() {
    return (
      <div> 
        <label>Enter your Email</label>
        <input 
          type='text'
          placeholder=''
        />
        <label>Enter your password</label>
        <input 
          type='password'
          placeholder=''
        />
        <button> Sign In </button>
      </div>
    )
  }
}


exports.SignUpAccount = class extends React.Component {
  render() {
     return (
      <div>
        <label>Name</label>
        <input 
        type='text'
        placeholder='Enter Your Name'
        />
        <label>Email</label>
        <input 
        type='text'
        placeholder='Enter Your Email'
        />
        <label>Password</label>
        <input 
        type='password'
        placeholder='Enter Your Password'
        />
        <label>Confirm Password</label>
        <input 
        type='text'
        placeholder='Confirm Password'
        />
        <button> Register </button>
      </div>
     )
  }
}


export default exports;

// const AppViews = () => {
//     useState
//     return (
//       <div className="App">
//         <header className="App-header" id="root">
//           <h1>Place your RSVP</h1>
//           {content}
//           <label>Name</label>
//           <input 
//             type="text"
        
//           />
//           <label>Password</label>
//           <input 
//             type="text"
        
//           />
//           <label>Confirm password</label>
//           <input 
//             type="text"
        
//           />
//           <button>Submit</button>
          
//         </header>
//       </div>
//     );
//   }

