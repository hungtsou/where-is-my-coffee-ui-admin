import React, { Component } from "react";
import { FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";

class CategorizeForm extends Component {
  constructor(props) {
    super(props);
    this.state = { category: "" };
  }

  onSetCategory(e) {
    this.setState({ category: this.inputEl.value });
  }

  onSubmit(category, id) {
    fetch(`http://localhost:10100/cafe/${id}/upgrade`, {
      method: "POST",
      body: JSON.stringify({
        category
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(() => this.props.history.push("/orders"));
  }
  render() {
    return (
      <div>
        <p>Seleccione una categoría para el Recibo #{this.props.orderId}</p>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>{this.state.category}</ControlLabel>
          <FormControl
            onChange={() => this.onSetCategory()}
            inputRef={el => (this.inputEl = el)}
            componentClass="select"
            placeholder="select"
          >
            <option value="">select</option>
            <option value="convencional">Convencional</option>
            <option value="categoria A">Categoria A</option>
            <option value="categoria B">Categoria B</option>
            <option value="rainforest">Rainforest</option>
          </FormControl>
        </FormGroup>
        <Button
          disabled={!this.state.category}
          bsStyle="primary"
          onClick={() => this.onSubmit(this.state.category, this.props.orderId)}
        >
          Guardar
        </Button>
      </div>
    );
  }
}

export default CategorizeForm;
