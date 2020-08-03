import React from 'react';
import { Link } from 'react-router-dom';
import Foot from '../../Foot/Foot';

import './Footer.css';

const Footer = () => {
  return (
    <Foot />
    // <div className="Footer">
    //   <Button>Twitter</Button>
    //   <Link to="/careers">
    //     <Button>Careers</Button>
    //   </Link>
    //   <Link to="/blog">
    //     <Button>Blog</Button>
    //   </Link>
    //   <Button>Discord</Button>
    //   <Link to="/terms">
    //     <Button>Terms</Button>
    //   </Link>
    // </div>
  );
};

export default Footer;
