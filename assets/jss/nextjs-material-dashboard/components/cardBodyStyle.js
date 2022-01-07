const cardBodyStyle = {
  cardBody: {
    padding: "0.9375rem 20px",
    flex: "1 1 auto",
    WebkitBoxFlex: "1",
    position: "relative",
  },
  cardBodyPlain: {
    paddingLeft: "5px",
    paddingRight: "5px",
  },
  cardBodyProfile: {
    marginTop: "0",
    color: '#fff',
    '& h4': {
      marginTop: "0",
      fontSize: "24px",
      lineHeight: "30px",
      fontWeight: "bold",
      marginBottom: '10px'
    },
    '& p': {
      fontSize: '14px',
      lineHeight: '20px',
      textAlign: 'center',
      color: '#BEC2C9',
      marginTop: '18px',
      marginBottom: '0px',
      '&:last-child': {
        marginTop: '8px'
      }
    }
  },
};

export default cardBodyStyle;
