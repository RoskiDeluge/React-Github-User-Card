import React from 'react';
import './Followers.scss'

class Followers extends React.Component {
  state = {
    myfollowers: []
  };

  componentDidMount() {
    fetch("https://api.github.com/users/RoskiDeluge/followers")
      .then(res => res.json())
      .then(followers => {
        console.log("rd: fetch: followers: ", followers);
        this.setState({ ...this.state, myfollowers: followers });
      })
      .catch(err => console.log("error on fetch: ", err));
  }

  render() {
    return (
      <div className="followers">
        <h2>Followers</h2>
        <div>
          {this.state.myfollowers.map(follower => <p>{follower.login}</p>)}
        </div>
      </div>
    );
  }
}

export default Followers;