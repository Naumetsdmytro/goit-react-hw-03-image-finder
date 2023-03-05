import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'components/Modal';

import styles from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(({ isModalOpen }) => ({ isModalOpen: !isModalOpen }));
  };

  render() {
    const {
      image: { webformatURL, tags, largeImageURL },
    } = this.props;
    const { isModalOpen } = this.state;
    return (
      <li className="galleryItem">
        <img
          src={webformatURL}
          alt={tags}
          className={styles.galleryItemImage}
          onClick={this.toggleModal}
        />
        {isModalOpen && (
          <Modal
            largeImageURL={largeImageURL}
            tags={tags}
            onClose={this.toggleModal}
          />
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypesm = {
  image: PropTypes.exact({
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};
