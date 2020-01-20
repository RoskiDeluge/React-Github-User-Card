import React from 'react';
import logo from './logo.svg';
import './App.css';
import Followers from './components/Followers/Followers'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

class App extends React.Component {
  state = {
    myprofile: []
  };

  componentDidMount() {
    fetch("https://api.github.com/users/RoskiDeluge")
      .then(res => res.json())
      .then(profile => {
        console.log("rd: fetch: profile: ", profile);
        this.setState({ ...this.state, myprofile: profile });
      })
      .catch(err => console.log("error on fetch: ", err));
  }

  // handleDogTextChange = e => {
  //   this.setState({ ...this.state, doggoText: e.target.value });
  // };

  // handleDogFetch = e => {
  //   e.preventDefault();
  //   fetch(`https://dog.ceo/api/breed/${this.state.doggoText}/images`)
  //     .then(res => res.json())
  //     .then(dogData => {
  //       console.log("handleDogFetch: dogData: ", dogData);
  //       if (dogData.status !== "error") {
  //         this.setState({ ...this.state, doggos: dogData.message });
  //       }
  //     })
  //     .catch(err => console.log("fethc in handleDogFetch error: err:", err));
  // };

  render() {
    return (
      <div className="App">
        <h1>My Profile</h1>
        {/* <form>
          <input
            type="text"
            value={this.state.doggoText}
            onChange={this.handleDogTextChange}
          />
          <button onClick={this.handleDogFetch}>fetch dogs</button>
        </form> */}

        <div className="doggos">
          <img src={this.state.myprofile.avatar_url} alt="myprofile img"/>
          <div>
            {this.state.myprofile.login}
            <Followers />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
