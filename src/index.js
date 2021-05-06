import React from "react";
import ReactDom from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, errorMessage: "" }; // Babel will convert this to constructor function.
  // Lifecycle event which is used for initial loading.
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // We only update the state on setState method.
        // Once we update the state it instantly re-renders the component.
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        // It only updates mentioned property not whole state Object.
        this.setState({ errorMessage: err.message });
      }
    );
  }

  // React says that we have to define render method which return jsx.
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message="Please allow Location!" />;
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
