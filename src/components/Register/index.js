// Helper styles for demo
import React from "react";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import { Button } from "react-bootstrap";

import "./Register.css";

class Register extends React.Component {
  form = {};

  handleSubmit = e => {
    e.preventDefault();
    this.registerPurchase();
  };

  async registerPurchase() {
    await fetch("https://httpbin.org/post", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.form.values)
    });
  }

  render() {
    return (
      <div>
        <Formik
          initialValues={{ producerID: "", fanegas: "" }}
          validationSchema={Yup.object().shape({
            producerID: Yup.number().required("Required"),
            fanegas: Yup.number().required("Required")
          })}
        >
          {form => {
            const { dirty, isSubmitting, handleReset } = form;
            this.form = form;
            return (
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="producerID">Identificacion del Productor</label>
                <Field id="producerID" name="producerID" placeholder="" />
                <label htmlFor="fanegas">Cantidad de Fanegas</label>
                <Field id="fanegas" name="fanegas" placeholder="" />
                <Button onClick={handleReset} disabled={!dirty || isSubmitting}>
                  Reset
                </Button>
                <Button bsStyle="primary" type="submit" disabled={isSubmitting}>
                  Submit
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
