import { Form, PhotosGallery, Loader, Button, Text } from 'components';
import { useEffect, useState } from 'react';
// import { getPhotos } from 'apiService/photos';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from '../redux/photosOps';
import { selectPhotos } from '../redux/photosSlice';

export const Photos = () => {
  const [query, setQuery] = useState('');
  const photosArr = useSelector(selectPhotos);
  // const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  // const [isLoading, setIsLoading] = useState(false);

  const loading = useSelector(state => state.photos.loading);
  const dispatch = useDispatch();

  console.log(photosArr);

  const handleSubmit = query => {
    setQuery(query);
    console.log('query', query);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
    console.log('click');
  };

  useEffect(() => {
    if (!query) return;
    dispatch(fetchPhotos({ query, page }));
  }, [dispatch, query, page]);

  return (
    <>
      <Form onSubmit={handleSubmit} />

      <Text textAlign="center">Let`s begin search 🔎</Text>

      {photosArr.length !== 0 && <PhotosGallery />}
      {photosArr.length > 0 && (
        <Button onClick={handleLoadMore} disabled={loading}>
          Load More
        </Button>
      )}

      {loading && <Loader />}
    </>
  );
};

// useEffect(() => {
//   if (!query) return;
//   const findImage = async () => {
//     setIsLoading(true);
//     try {
//       const { photos } = await getPhotos(query, page);
//       setPhotos(prevPhotos => [...prevPhotos, ...photos]);
//     } catch (error) {
//       console.log(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   findImage();
// }, [query, page]);
