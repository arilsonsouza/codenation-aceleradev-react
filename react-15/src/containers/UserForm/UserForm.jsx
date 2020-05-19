import React, { useState } from 'react';

import SuccessMessage from '../../components/SuccessMessage';
import profilePlaceholder from '../../assets/img/profile-placeholder.png';

import './UserForm.scss';

import { UsersService } from '../../services';

const UserForm = () => {
	const [name, setName] = useState('John Doe');
  const [avatar, setAvatar] = useState('');
  const [username, setUsername] = useState('johndoe');
  const [email, setEmail] = useState('johndoe@gmail.com');
  const [submit, setSubmit] = useState(false);
	
	const handleSubmit = async (e) => {
		e.preventDefault();

		const user = {
			name,
			username,
			email,
			avatar
		}

		try {
			const response = await UsersService.registerUser(user);
			setSubmit(true);
		} catch(e) {

		}

	}
  return (
    <>
    	<section className="profile" data-testid="user-form">
				<div className="container">
					<div className="profile-data">
						<div className="user">
							<div className="user__thumb">
								{avatar
									? <img src={avatar} alt=''/>
									: <img src={profilePlaceholder} alt=''/>
								}
							</div>
							{name && (
								<p className="user__name">
									{name}
									<span>@{username}</span>
								</p>
							)}
						</div>
					</div>
				</div>
    	</section>

    	<section className="post__form">
				<div className="container">
					<div className="post__form__wrapper">
						<labe>Nome</labe>
						<input 
							type='text'
							value={name}
							placeholder="Ex: Fulano da Silva"
							onChange={({target: { value }}) => setName(value)}
						/>

						<label>Usuário</label>
						<input 
							type='text'
							value={username}
							placeholder="Ex: fulano_da_silva"
							onChange={({target: { value }}) => setUsername(value)}
						/>

						<label>Email</label>
						<input 
							type='email'
							value={email}
							placeholder="Ex: fulano@provedor.com"
							onChange={({target: { value }}) => setEmail(value)}
						/>

						<label>Url da Imagem de Perfil (use a url da imagem do Linkedin)</label>
						<input 
							type='text'
							placeholder="http://..."
							onChange={({target: { value }}) => setAvatar(value)}
						/>
							
						<button
							type="button"
							onClick={(e) => handleSubmit(e)}
						>
								Cadastar
						</button>
					</div>
				</div>
    	</section>

    	{ submit && (<SuccessMessage/>) }
    </>
  );
};

export default UserForm;
