import React from "react";
import Home from "./Home";
import About from "./About";
import Links from "./Links";

const user = {
  name: "Liza",
  city: "New York",
  bio: "I made this!",
  color: "firebrick",
  links: {
    github: "https://github.com/liza",
    linkedin: "https://www.linkedin.com/in/liza/",
  },
};

class App extends React.Component {
  render() {
    return (
      <div>
        <nav></nav> 
        <Home username={user.name} city={user.city} color={user.color} />
        <About bio={user.bio} color={user.color} links={user.links} />
      </div>
    );
  }
}

export default App;