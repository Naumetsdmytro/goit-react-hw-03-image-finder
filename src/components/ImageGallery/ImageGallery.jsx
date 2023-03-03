import React, { Component } from 'react';

import { fetchImagesByTheme } from '../../services/pixabayAPI';
import { ImageGalleryItem } from 'components/ImageGalleryItem';

import styles from './ImageGallery.module.css';

export class ImageGallery extends Component {
  state = {
    images: null,
    error: false,
  };

  async componentDidUpdate(prevprops, prevstate) {
    if (prevprops.theme !== this.props.theme) {
      try {
        const images = await fetchImagesByTheme(this.props.theme);
        console.log(images);
        // if (!images.ok) {
        //   return Promise.reject(new Error('No images find :('));
        // }
        this.setState({
          images: images.hits,
        });
      } catch (error) {
        console.log(error);
        this.setState({ error });
      }
    }
  }

  render() {
    const { images, error } = this.state;
    return (
      <>
        {/* // {error && <h2>{error.message}</h2>} */}
        {images && (
          <ul className={styles.gallery}>
            {images.map(image => (
              <ImageGalleryItem image={image} key={image.id} />
            ))}
          </ul>
        )}
      </>
    );
  }
}
