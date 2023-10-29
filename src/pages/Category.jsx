import GenreBox from '../components/GenreBox';
import { useState } from 'react';

const Category = () => {
  const [userSelectedGenre, setUserSelectedGenre] = useState([]);

  const categoryPageStyle = {
    background: '#000000',
    display: 'flex',
  };

  const handleDelete = (genre) => {
    let newArr = userSelectedGenre.filter((item) => item !== genre);
    setUserSelectedGenre(newArr);
  };
  const categorySection = {};
  return (
    <div style={categoryPageStyle}>
      <div>
        <h1
          style={{
            color: '#72DB73',
            fontFamily: 'Single Day',
            fontSize: '71px',
            fontWeight: '400',
            lineHeight: '99px',
            letterSpacing: '0em',
            textAlign: 'left',
          }}
        >
          Super App
        </h1>
        <p style={{ color: '#FFFFFF' }}>Choose your entertainment category</p>
        <div>
          <p style={{ color: '#FFFFFF' }}>Selected Genre:</p>
          <div>
            {userSelectedGenre.map((genre, index) => (
              <div
                style={{
                  background: '#148A08',
                  width: '193px',
                  height: '52px',
                  top: '643px',
                  left: '133px',
                  borderRadius: '31px',
                  display: 'flex',
                }}
                key={index}
              >
                <p
                  style={{
                    color: '#FFFFFF',
                    width: '112px',
                    height: '22px',
                    top: '656px',
                    left: '161px',
                  }}
                >
                  {genre}
                </p>
                <button
                  style={{
                    color: '#085C00',
                    background: '#148A08',
                    border: 'none',
                  }}
                  onClick={() => handleDelete(genre)}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section style={categorySection}>
        <GenreBox
          setUserSelectedGenre={setUserSelectedGenre}
          userSelectedGenre={userSelectedGenre}
        />
        <div>
          <button
            style={{
              width: '200px',
              height: '56px',
              top: '1010px',
              left: '1394px',
              borderRadius: '38.86px',
              background: '#148A08',
              color: '#FFFFFF',
            }}
          >
            Next Page
          </button>
        </div>
      </section>
    </div>
  );
};

export default Category;
