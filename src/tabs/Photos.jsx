import { Form, PhotosGallery, Loader, Button, Text } from 'components';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from '../redux/photosOps';
import { selectPhotos } from '../redux/photosSlice';
import { selectQueryName } from '../redux/querySlice';
import toast, { Toaster } from 'react-hot-toast';

export const Photos = () => {
  const [page, setPage] = useState(1);
  const photosArr = useSelector(selectPhotos);
  const loading = useSelector(state => state.photos.loading);
  const dispatch = useDispatch();
  const queryName = useSelector(selectQueryName);
  const error = useSelector(state => state.photos.error);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleSubmit = newPage => {
    setPage(newPage);
  };

  useEffect(() => {
    if (!queryName) return;

    dispatch(fetchPhotos({ queryName, page }))
      .unwrap()
      .then(() => {
        // console.log(value);
        toast.success('fetchPhotos fulfilled');
      })
      .catch(error => {
        console.log(error);
        toast.error('fetchPhotos rejected');
      });
  }, [dispatch, page, queryName]);

  return (
    <>
      <Form onSubmit={handleSubmit} />
      {error && <div>error...</div>}
      {!photosArr.length && (
        <Text textAlign="center">Let`s begin search 🔎</Text>
      )}
      {photosArr.length !== 0 && <PhotosGallery />}
      {photosArr.length > 0 && (
        <Button onClick={handleLoadMore} disabled={loading}>
          Load More
        </Button>
      )}
      {loading && <Loader />}
      <Toaster />
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
