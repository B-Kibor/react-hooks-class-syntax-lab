import React from "react";

class Home extends React.Component {
  render() {
    const { username, city, color } = this.props;

    return (
      <div id="home">
        <h1 style={{ color: color }}>
          {username} is a Web Developer from {city}
        </h1>
      </div>
    );
  }
}

export default Home;
