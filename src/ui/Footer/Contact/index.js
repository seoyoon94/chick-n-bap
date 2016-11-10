import React, { PropTypes } from 'react';
import '../footer.css';

const Contact = ({tel, address, email}) => {
  return (
    <div className="c-footer__contact">
      <h3>Contact Us</h3>
      { !!address && <p>{address}</p> }
      { !!tel && <p>{tel}</p> }
      { !!email && <p>{email}</p> }
    </div>
  );
};

Contact.propTypes = {
  tel: PropTypes.string,
  address: PropTypes.string,
  email: PropTypes.string
};

export default Contact;
