import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import { toast } from 'react-hot-toast';
import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types';

import styles from './SearchBar.module.css';

export class Searchbar extends Component {
  initialValues = {
    theme: '',
  };

  handleSubmit = (values, { resetForm }) => {
    if (!values.theme) {
      toast.error('Please, enter a valid theme');
    }
    resetForm();
    this.props.onSubmit(values.theme.trim());
  };

  render() {
    return (
      <header className={styles.searchbar}>
        <Formik initialValues={this.initialValues} onSubmit={this.handleSubmit}>
          <Form className={styles.searchForm}>
            <button type="submit" className={styles.searchFormButton}>
              <ImSearch />
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

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
