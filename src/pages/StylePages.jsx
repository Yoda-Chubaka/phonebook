export const paperMainStyle = (photo) => ({
  position: 'relative',
  // backgroundColor: 'green',
  color: '#fff',
  mb: 4,
  mt: 10,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'bottom',
  backgroundImage: `url(${photo})`,
  minHeight: 450,
  height: '100%',
});

export const boxMainStyle = {
  position: 'relative',
  height: '100%',
  // backgroundColor: 'green',
  p: { xs: 5, md: 8 },
  pr: { md: 0 },
};

export const containerContactsStyle = (photo) => ({
  position: 'relative',
  // backgroundColor: 'grey.300',
  color: '#0c0808',
  mb: 4,
  mt: 10,
  height: '100%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top',
  backgroundImage: `url(${photo})`,
  backgroundColor: 'red',
});

export const boxContactsStyle = {
  bgcolor: 'rgba(145, 185, 229, 0.15)',
  mx: 'auto',
  borderRadius: 5,
  maxWidth: 500,
  px: 5,
  marginTop: 10,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  // backgroundColor: 'red',
};

export const boxFormStyle = {
  marginTop: 8,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export const boxBottomFStyle = {
  display: 'flex',
  justifyContent: 'center',
  mb: 2,
  alignItems: 'center'
};

export const avatarStyle = {
  m: 1,
  bgcolor: 'secondary.main'
};
