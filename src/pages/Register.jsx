import { useState } from 'react';
import photo from '../assets/image.png';
function Register() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    isChecked: false,
  });
  const [error, setError] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    isChecked: '',
  });

  const headingStyle = {
    color: '#72DB73',
    fontFamily: 'Single Day',
    fontSize: '67px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '139.688%',
  };

  const inputStyle = {
    width: '518px',
    height: '64.87px',
    top: '243px',
    left: '1047px',
    borderRadius: '3.82px',
    border: '1px',
    background: 'linear-gradient(0deg, #292929, #292929)',
    color: '#FFFFFF',
  };
  const formStyleDiv = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const handleRegisterDiv = {
    width: '50%',
    height: '100%',
    position: 'relative',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#292929',
    color: '#FFFFFF',
    background: '#000',
    padding: '0',
  };

  const handleImageDiv = {
    width: '50%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0',
  };

  const pageDiv = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    margin: '0 auto',
    padding: '0',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newError = {};
    if (formData.name === '') {
      newError.name = 'Name is required';
    }

    if (formData.username === '') {
      newError.username = 'UserName is required';
    }

    if (formData.email === '') {
      newError.email = 'Email is required';
    }

    if (formData.phone === '') {
      newError.phone = 'Phone Number is required';
    } else if (formData.phone.length !== 10) {
      newError.phone = 'Phone number should be 10 digits';
    }

    if (formData.isChecked === false) {
      newError.isChecked = 'Please check the box';
    }

    setError(newError);
  };

  const errorParaStyles = {
    color: '#F00',
    fontFamily: 'DM Sans',
    fontSize: '20.033px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '139.688%',
    letterSpacing: '0.401px',
    width: '504px',
    height: '24px',
  };
  const onChangeHandler = (e) => {
    setError({ ...error, [e.target.name]: '' });
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={pageDiv}>
      <section style={handleImageDiv}>
        <img src={photo} alt="a photo"></img>
      </section>
      <section style={handleRegisterDiv}>
        <h1 style={headingStyle}>Super App</h1>
        <p>Create New Account</p>

        <form className={formStyleDiv}>
          <div>
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={(e) => onChangeHandler(e)}
              value={formData.name}
              style={inputStyle}
            />

            {error.name && <p style={errorParaStyles}>{error.name}</p>}
          </div>
          <div>
            <input
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={(e) => onChangeHandler(e)}
              name="username"
              style={inputStyle}
            />
            {error.username && <p style={errorParaStyles}>{error.username}</p>}
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              style={inputStyle}
              onChange={(e) => onChangeHandler(e)}
              value={formData.email}
            />
            {error.email && <p style={errorParaStyles}>{error.email}</p>}
          </div>
          <div>
            <input
              type="number"
              placeholder="Phone Number"
              style={inputStyle}
              onChange={(e) => onChangeHandler(e)}
              name="phone"
              value={formData.phone}
            />
            {error.phone && <p style={errorParaStyles}>{error.phone}</p>}
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <input
              type="checkbox"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  isChecked: e.target.checked,
                }))
              }
            />
            <p>Share my Info with SuperApp </p>
          </div>
          {error.isChecked && <p style={errorParaStyles}>{error.isChecked}</p>}

          <button
            style={{
              width: '518px',
              height: '55px',
              top: '813px',
              left: '1047px',
              borderRadius: '28px',
              backgroundColor: '#72DB73',
            }}
            onClick={handleSubmit}
          >
            SignUp
          </button>

          <div>
            <p>
              By clicking on Sign up. you agree to Superapp Terms and Conditions
              of Use
            </p>
            <p>
              To learn more about how Superapp collects, uses, shares and
              protects your personal data please head Superapp Privacy Policy
            </p>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Register;
