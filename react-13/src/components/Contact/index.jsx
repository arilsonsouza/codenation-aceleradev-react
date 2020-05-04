import React from 'react';

import "./styles.scss";

const Contact = ({	name, avatar = null, company, department, admissionDate, phone, country}) => {
    
  return (
    <article className="contact">
      <span className="contact__avatar">
        { avatar && <img src={avatar} title={name} alt={name}/>}
      </span>
      <span className="contact__data">{name}</span>
      <span className="contact__data">{phone}</span>
      <span className="contact__data">{country}</span>
      <span className="contact__data">{admissionDate}</span>
      <span className="contact__data">{company}</span>
      <span className="contact__data">{department}</span>
    </article>
    
  )
}
export default Contact;
