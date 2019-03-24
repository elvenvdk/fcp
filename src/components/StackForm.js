import React, { Component } from "react";
import { connect } from "react-redux";
import { addStack } from "../actions";
import { Link } from "react-router-dom";
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button
} from "react-bootstrap";

export class StackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      cards: []
    };
  }

  addCard() {
    const { cards } = this.state;
    cards.push({ id: cards.length, prompt: "", answer: "" });
    this.setState({ cards });
  }

  updateCardPart(event, idx, part) {
    const { cards } = this.state;
    cards[idx][part] = event.target.value;
    this.setState({ cards });
  }

  addStack() {
    console.log("StackForm state", console.log(this.state));
    this.props.addStack(this.states);
  }

  render() {
    return (
      <div>
        <Link to='/' className='link-home'>
          <h4>Home</h4>
        </Link>
        <h4>Create a new stack</h4>
        <br />
        <Form className='stack-form' inline>
          <FormGroup className='stack-form-group-title'>
            <FormLabel className='stack-form-label-tile'>Title:</FormLabel>{" "}
            <FormControl
              className='stack-form-control-title'
              onChange={event => this.setState({ title: event.target.value })}
            />
          </FormGroup>
          {this.state.cards.map((card, idx) => {
            return (
              <div key={card.id}>
                <br />
                <FormGroup className='stack-form-group-prompt'>
                  <FormLabel className='stack-form-label-prompt'>
                    Prompt:
                  </FormLabel>{" "}
                  <FormControl
                    className='stack-form-control-prompt'
                    onChange={event =>
                      this.updateCardPart(event, idx, "prompt")
                    }
                  />{" "}
                  <FormLabel className='stack-form-label-answer'>
                    Answer:
                  </FormLabel>{" "}
                  <FormControl
                    className='stack-form-control-answer'
                    onChange={event =>
                      this.updateCardPart(event, idx, "answer")
                    }
                  />
                </FormGroup>
              </div>
            );
          })}
        </Form>
        <br />
        <Button className='stack-form-button' onClick={() => this.addStack()}>
          Save and Add to Stack
        </Button>
        <Button className='stack-form-button' onClick={() => this.addCard()}>
          Add Card
        </Button>{" "}
      </div>
    );
  }
}

export default connect(
  null,
  { addStack }
)(StackForm);
