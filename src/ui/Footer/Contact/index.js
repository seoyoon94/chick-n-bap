import React, { PropTypes } from 'react';
import '../footer.css';

const Contact = ({tel, address, email}) => {
  return (
    <div className="footer__contact">
      <h3>Contact Us</h3>
      { !!tel && <p>Phone: {tel}</p> }
      { !!address && <p>Address: {address}</p> }
      { !!email && <p>Email: {email}</p> }
    </div>
  );
};

Contact.propTypes = {
  tel: PropTypes.string,
  address: PropTypes.string,
  email: PropTypes.string
};

export default Contact;
