export const ImageGalleryItem = ({ image }) => {
  return (
    <li className="galleryItem">
      <img src={image.previewURL} alt={image.tags} />
    </li>
  );
};
