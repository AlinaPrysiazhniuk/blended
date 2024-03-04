import { Form, PhotosGallery, Button, Loader, Text } from 'components';
import { useEffect, useState } from 'react';
import { getPhotos } from 'apiService/photos';

export const Photos = () => {
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = query => {
    setQuery(query);
    console.log('query', query);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    if (!query) return;
    const findImage = async () => {
      setIsLoading(true);
      try {
        const { photos } = await getPhotos(query, page);
        setPhotos(prevPhotos => [...prevPhotos, ...photos]);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    findImage();
  }, [query, page]);

  return (
    <>
      <Form onSubmit={handleSubmit} />
      {photos.length === 0 && (
        <Text textAlign="center">Let`s begin search 🔎</Text>
      )}
      <PhotosGallery gallery={photos} />
      {photos.length > 0 && (
        <Button onClick={handleLoadMore} disabled={isLoading}>
          Load More
        </Button>
      )}

      {isLoading && <Loader />}
    </>
  );
};
