import { useEffect, useRef } from 'react';
import UserProfile from '../components/UserProfile';

const Home = () => {
  let userDetails = useRef(null);
  let userSelectedGenre = useRef(null);
  let userDetailsString = useRef(null);
  let userSelectedGenreString = useRef(null);
  useEffect(() => {
    userDetailsString.current = localStorage.getItem('userDetails');
    userSelectedGenreString.current = localStorage.getItem('userSelectedGenre');

    userDetails.current = userDetailsString.current
      ? JSON.parse(userDetailsString.current)
      : null;
    userSelectedGenre.current = userSelectedGenreString.current
      ? JSON.parse(userSelectedGenreString.current)
      : null;

    // console.log(userDetails.current, userSelectedGenre.current);
  }, []);

  return (
    <div>
      <UserProfile
        userDetails={userDetails.current}
        userSelectedGenre={userSelectedGenre.current}
      />
    </div>
  );
};

export default Home;
