import React, { Component } from "react";
import { FormGroup, ControlLabel, FormControl } from "react-bootstrap";

class CategorizeForm extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "" };
  }

  onPickColor(e) {
    console.log("[onPickColor]", this.inputEl);
    this.setState({ color: this.inputEl.value });
  }
  render() {
    return (
      <div style={{ backgroundColor: this.state.color }}>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>{this.state.color}</ControlLabel>
          <FormControl
            onChange={this.onPickColor.bind(this)}
            inputRef={el => (this.inputEl = el)}
            componentClass="select"
            placeholder="select"
          >
            <option value="">select</option>
            <option value="red">Convencional</option>
            <option value="green">Categoria A</option>
            <option value="blue">Categoria B</option>
            <option value="rainforest">rainforest</option>
          </FormControl>
        </FormGroup>
      </div>
    );
  }
}

export default CategorizeForm;
