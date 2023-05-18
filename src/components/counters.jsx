import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          style={this.styles}
          onClick={this.props.onReset}
          className="btn btn-priary btn-sm btn-m2"
        >
          reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncriment={this.props.onIncriment}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
