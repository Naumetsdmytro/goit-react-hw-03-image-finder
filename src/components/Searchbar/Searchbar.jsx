import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';

export class Searchbar extends Component {
  initialValues = {
    theme: '',
  };

  handleSubmit = (values, { resetForm }) => {
    resetForm();
    this.props.onSubmit(values.theme.trim());
  };

  render() {
    return (
      <header className="searchbar">
        <Formik initialValues={this.initialValues} onSubmit={this.handleSubmit}>
          <Form className="form">
            <button type="submit" className="button">
              <span className="button-label">Search</span>
            </button>
            <Field
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              name="theme"
            />
          </Form>
        </Formik>
      </header>
    );
  }
}
