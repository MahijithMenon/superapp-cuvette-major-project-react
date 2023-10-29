import PropTypes from 'prop-types';
const GenreBox = ({ userSelectedGenre, setUserSelectedGenre }) => {
  const genres = [
    'Action',
    'Drama',
    'Romance',
    'Thriller',
    'Western',
    'Horror',
    'Fantasy',
    'Music',
    'Fiction',
  ];

  const genreBoxStyles = {
    width: '250px',
    height: '251px',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid white',
  };

  const gridContainerStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
    maxWidth: '750px',
    margin: '0 auto',
  };
  const handleClickDiv = (genre) => {
    if (userSelectedGenre.includes(genre)) {
      let newArr = userSelectedGenre.filter((item) => item !== genre);
      setUserSelectedGenre(newArr);
    } else {
      setUserSelectedGenre((prev) => [...prev, genre]);
    }
  };

  return (
    <>
      <div style={gridContainerStyles}>
        {genres.map((genre, index) => {
          return (
            <div
              key={index}
              style={genreBoxStyles}
              onClick={() => handleClickDiv(genre)}
            >
              <h1>{genre}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
};
GenreBox.propTypes = {
  setUserSelectedGenre: PropTypes.func.isRequired,
  userSelectedGenre: PropTypes.array.isRequired,
};
export default GenreBox;
