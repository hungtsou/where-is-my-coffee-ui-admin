// Helper styles for demo
import React from "react";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import { Button } from "react-bootstrap";
import APIService from "../../APIService";

import "./Register.css";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.form = {};
    this.state = {
      users: []
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    APIService.registerPurchase(this.form.values);
  };

  componentDidMount() {
    APIService.getUsers().then(users => {
      this.setState({ users });
    });
  }

  render() {
    return (
      <div>
        <Formik
          enableReinitialize
          initialValues={{
            productorId: this.state.users[0] ? this.state.users[0].id : "",
            fanegas: "",
            id: ""
          }}
          validationSchema={Yup.object().shape({
            productorId: Yup.string().required("Required"),
            fanegas: Yup.number().required("Required"),
            id: Yup.number().required("Required")
          })}
        >
          {form => {
            const { dirty, isSubmitting, handleReset } = form;
            this.form = form;
            return (
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="productorId">Productor</label>
                <Field
                  className="form-control"
                  component="select"
                  name="productorId"
                  id="productorId"
                >
                  {this.state.users.map(item => (
                    <option key={item.id} value={item.id}>
                      {item.user}
                    </option>
                  ))}
                </Field>
                <label htmlFor="id">Número de Recibo</label>
                <Field id="id" name="id" placeholder="" />
                <label htmlFor="fanegas">Cantidad de Fanegas</label>
                <Field id="fanegas" name="fanegas" placeholder="" />
                <Button onClick={handleReset} disabled={!dirty || isSubmitting}>
                  Limpiar
                </Button>
                <Button bsStyle="primary" type="submit" disabled={isSubmitting}>
                  Registrar Compra
                </Button>
              </form>
            );
          }}
        </Formik>
      </div>
    );
  }
}

export default Register;
