const Iconos = ({iconoDeJugador}) => {

    let icons = [
        [true, <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
        <path d="M2.5 10H3.5V17H2.5V16H1.5V11H2.5V10Z" fill="#12E292"/>
        <path d="M19.5 7H18.5V6H13.5V3H11.5V6H6.5V7H5.5V8H4.5V18H5.5V19H6.5V20H18.5V19H19.5V18H20.5V8H19.5V7ZM17.5 13H14.5V10H17.5V13ZM13.5 17H11.5V16H13.5V17ZM7.5 16H10.5V17H7.5V16ZM7.5 10H10.5V13H7.5V10ZM14.5 17V16H17.5V17H14.5Z" fill="#12E292"/>
        <path d="M23.5 11V16H22.5V17H21.5V10H22.5V11H23.5Z" fill="#12E292"/>
      </svg>],

        [false, <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><g clipPath="url(#clip0_9_914)">
          <path d="M18.3333 5.83331V4.99998H17.4999V4.16665H16.6666V3.33331H15.8333V2.49998H14.9999V1.66665H14.1666V0.833313H1.66659V1.66665H0.833252V18.3333H1.66659V19.1666H18.3333V18.3333H19.1666V5.83331H18.3333ZM7.49992 15.8333V12.5H8.33325V11.6666H11.6666V12.5H12.4999V15.8333H11.6666V16.6666H8.33325V15.8333H7.49992ZM13.3333 8.33331H3.33325V3.33331H13.3333V8.33331Z" fill="#12E292"/></g>
        <defs><clipPath id="clip0_9_914"><rect width="20" height="20" fill="white"/></clipPath></defs>
      </svg>]
    ]


  return (
    <>

    <div className="iconContainer">
        { icons[0][0] === iconoDeJugador ? icons[0][1]: icons[1][1] }
    </div>
    </>
      
  );
};

export default Iconos;
