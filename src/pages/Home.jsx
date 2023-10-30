import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    const userDetailsString = localStorage.getItem('userDetails');
    const userSelectedGenreString = localStorage.getItem('userSelectedGenre');

    const userDetails = userDetailsString
      ? JSON.parse(userDetailsString)
      : null;
    const userSelectedGenre = userSelectedGenreString
      ? JSON.parse(userSelectedGenreString)
      : null;

    console.log(userDetails, userSelectedGenre);
  }, []);

  return <div></div>;
};

export default Home;
