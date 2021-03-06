import sizes from './sizes';
export default {
  Navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '40px',
  },
  logo: {
    marginRight: '15px',
    padding: '0 13px',
    fontSize: '1rem',
    fontFamily: 'Roboto',
    fontWeight: 500,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    '& a': {
      textDecoration: 'none',
      color: 'black',
    },
    [sizes.down('xs')]: {
      display: 'none',
    },
  },
  slider: {
    width: '340px',
    margin: '0 10px',
    display: 'inline-block',
    '& .rc-slider-track': {
      backgroundColor: 'transparent',
    },
    '& .rc-slider-rail': {
      height: '8px',
    },
    '& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover': {
      backgroundColor: '#607D8B',
      outline: 'none',
      border: '#607D8B',
      boxShadow: 'none',
      width: '13px',
      height: '13px',
      marginTop: '-3px',
    },
    [sizes.down('sm')]: {
      width: '150px',
    },
  },
  selectContainer: {
    marginLeft: 'auto',
    marginRight: '1rem',
  },
  messageId: {
    fontSize: '1rem',
  },
};
