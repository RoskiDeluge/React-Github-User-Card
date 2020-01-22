import React from 'react';
import './App.scss';
import Followers from './components/Followers/Followers'


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

  render() {
    return (
      <div className="App">
        <div className="profile">
          <h1>My Profile</h1>
          <img src={this.state.myprofile.avatar_url} alt="myprofile img"/>
          <div className="myname">
            {this.state.myprofile.login}
          </div>
          <Followers />
        </div>
      </div>
    );
  }
}

export default App;
