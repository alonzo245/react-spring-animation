import React from "react";
import { useTransition, animated } from "react-spring";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp3 from "./components/Comp3";

import "./styles.css";

class App extends React.Component {
  state = {
    showComponent3: false
  };

  toggle = e => this.setState({ showComponent3: !this.state.showComponent3 });

  render() {
    return (
      <div className="App">
        <Comp1 />
        <Comp2 toggle={this.toggle} />
        <useTransition
          native
          items={this.state.showComponent3}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {show =>
            show &&
            (props => (
              <animated.div style={props}>
                <Comp3 />
              </animated.div>
            ))
          }
        </useTransition>
      </div>
    );
  }
}
export default App;