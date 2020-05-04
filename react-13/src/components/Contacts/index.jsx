import React from "react";

import "./styles.scss";
import Contact from "../Contact";

const Contacts = ({ contacts }) => (
	<section className="contacts">
		<Contact 
			name="Nome"
			company='Empresa'
			department='Departamento'
			admissionDate='Admissão'
			phone='Telefone'
			country='País'
		/>
		{contacts.map(contact => (
			<Contact 
				key={contact.id}
				{...contact}
			/>
		))}
		
	</section>
)

export default Contacts;
