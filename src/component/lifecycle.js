import React from "react";

class Lifecycle extends React.Component {
  constructor() {
    super();
    console.log(" am first constructor");
    this.state = {
      update: 9,
    };
  }

  componentWillMount() {
    console.log("willmount befor component mounted second");
    alert();
  }

  componentDidMount() {
    console.log("did mount after comp gets mounted");
  }
  componentWillUpdate() {
    console.log("willl update any time state changes");
  }

  componentDidUpdate() {
    console.log("has updated");
  }
  render() {
      console.log("render")
    return (
      <div>
        <h1>lifecycle</h1>
        <button
          onClick={() =>
            this.setState({
              update: this.state.update + 1,
            })
          }
        >
          Button
        </button>
      </div>
    );
  }
}

export default Lifecycle;
