import { PhotosGalleryItem } from '../PhotosGalleryItem/PhotosGalleryItem';
import { Grid } from '../Grid/Grid';
import { useSelector } from 'react-redux';
import { selectPhotos } from '../../redux/photosSlice';

export const PhotosGallery = () => {
  const photosArr = useSelector(selectPhotos);

  return (
    <Grid>
      {photosArr.map(({ id, avg_color, alt, src }) => {
        return (
          <PhotosGalleryItem
            key={id}
            avg_color={avg_color}
            alt={alt}
            src={src.large}
          />
        );
      })}
    </Grid>
  );
};
