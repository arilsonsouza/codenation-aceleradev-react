import React from 'react';
import moment from 'moment';

import "./styles.scss";

const Contact = ({	data: { name, avatar = null, company, department, admissionDate, phone, country } }) => {
    
  const getFormatedDate = date => {
    const momentDate = moment(date);
    return momentDate.isValid() ? momentDate.format('DD/MM/YYYY') : date
  }
  return (
    <article className="contact" data-testid="contact">
      <span className="contact__avatar">
        { avatar && <img src={avatar} title={name} alt={name}/>}
      </span>
      <span className="contact__data" data-testid="contact-name">{name}</span>
      <span className="contact__data" data-testid="contact-phone">{phone}</span>
      <span className="contact__data" data-testid="contact-country">{country}</span>
      <span className="contact__data" data-testid="contact-date">{getFormatedDate(admissionDate)}</span>
      <span className="contact__data" data-testid="contact-company">{company}</span>
      <span className="contact__data" data-testid="contact-department">{department}</span>
    </article>
    
  )
}
export default Contact;
