import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';

import styles from './SearchBar.module.css';

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
      <header className={styles.searchbar}>
        <Formik initialValues={this.initialValues} onSubmit={this.handleSubmit}>
          <Form className={styles.searchForm}>
            <button type="submit" className={styles.searchFormButton}>
              <span className={styles.searchFormButtonLabel}>Search</span>
            </button>
            <Field
              className={styles.searchFormInput}
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
