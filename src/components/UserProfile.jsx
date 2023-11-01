import PropTypes from 'prop-types';

const UserProfile = ({ userDetails, userSelectedGenre }) => {
  console.log(userDetails, userSelectedGenre);

  if (!userDetails || !userSelectedGenre) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ color: 'white', background: 'black' }}>
      <h1>dhoiduodi</h1>
      <section></section>
      <section>
        <section>
          <p>User Details</p>
          <p>{userDetails.name}</p>
          <p>{userDetails.email}</p>
          <p>{userDetails.username}</p>
        </section>
        <section>
          <p>{userSelectedGenre}</p>
          {userSelectedGenre.map((genre, index) => (
            <p key={index}>{genre}</p>
          ))}
        </section>
      </section>
    </div>
  );
};

UserProfile.propTypes = {
  userDetails: PropTypes.object,
  userSelectedGenre: PropTypes.array,
};

export default UserProfile;
