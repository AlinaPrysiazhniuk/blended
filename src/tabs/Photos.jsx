import { Form, PhotosGallery, Loader, Button, Text } from 'components';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from '../redux/photosOps';
import { selectPhotos } from '../redux/photosSlice';
import { selectQueryName } from '../redux/querySlice';

export const Photos = () => {
  const [page, setPage] = useState(1);
  const photosArr = useSelector(selectPhotos);
  const loading = useSelector(state => state.photos.loading);
  const dispatch = useDispatch();
  const queryName = useSelector(selectQueryName);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    if (!queryName) return;
    dispatch(fetchPhotos({ queryName, page }));
  }, [dispatch, page, queryName]);

  return (
    <>
      <Form />

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
