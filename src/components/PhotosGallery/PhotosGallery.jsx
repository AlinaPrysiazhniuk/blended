import { PhotosGalleryItem } from '../PhotosGalleryItem/PhotosGalleryItem';
import { Grid } from '../Grid/Grid';

export const PhotosGallery = ({ gallery }) => {
  return (
    <Grid>
      {gallery.map(({ id, avg_color, alt, src }) => {
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
