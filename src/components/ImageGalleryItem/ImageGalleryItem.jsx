import styles from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ image: { webformatURL, tags } }) => {
  return (
    <li className="galleryItem">
      <img src={webformatURL} alt={tags} className={styles.galleryItemImage} />
    </li>
  );
};
