import React, { Component } from "react";
import stacks from "../data/stacks.json";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setStack, loadStacks } from "../actions";

export class Stacklist extends Component {
  componentDidMount() {
    if (!this.props.stacks.length) this.props.loadStacks(stacks);
  }

  render() {
    console.log("stacklist props", this.props);
    return (
      <div>
        {stacks.map(stack => {
          return (
            <Link
              key={stack.id}
              to='/stack'
              onClick={() => this.props.setStack(stack)}
            >
              <h4>{stack.title}</h4>
            </Link>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stacks: state.stacks
});

export default connect(
  mapStateToProps,
  { setStack, loadStacks }
)(Stacklist);
