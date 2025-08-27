import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import { ImProfile } from 'react-icons/im';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';

import './Footer.scss';

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

const Footer = () => {
	const [formData, setFormData] = useState({ name: '', email: '', message: '' });
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	const { name, email, message } = formData;

	const handleChangeInput = e => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
	};

	const handleSubmit = e => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
			.then(() => {
				setLoading(false);
				setIsFormSubmitted(true);
			})
			.catch(error => {
				console.error('EmailJS error:', error);
				setLoading(false);
			});
	};

	return (
		<>
			<h2 className='head-text'>Contact Me</h2>

			<div className='app__footer-cards'>
				<div className='app__footer-card '>
					<a href='mailto:guyelon@gmail.com' target='_blank' rel='noreferrer' className='p-text'>
						<MdOutlineEmail />
						guyelon@gmail.com
					</a>
				</div>

				<div className='app__footer-card'>
					<a
						href='https://api.whatsapp.com/send?phone=972527255511'
						target='_blank'
						rel='noreferrer'
						className='p-text'>
						<BsWhatsapp />
						+972527255511
					</a>
				</div>
			</div>

			{!isFormSubmitted ? (
				<form className='app__footer-form app__flex' onSubmit={handleSubmit}>
					<div className='app__flex'>
						<input
							className='p-text'
							type='text'
							placeholder='Name'
							name='name'
							value={name}
							onChange={handleChangeInput}
							required
						/>
					</div>
					<div className='app__flex'>
						<input
							className='p-text'
							type='email'
							placeholder='Email'
							name='email'
							value={email}
							onChange={handleChangeInput}
							required
						/>
					</div>
					<div>
						<textarea
							className='p-text'
							placeholder='Message'
							value={message}
							name='message'
							onChange={handleChangeInput}
							required
							rows='7'
						/>
					</div>
					<button type='submit' className='p-text' disabled={loading}>
						{loading ? 'Sending...' : 'Send Message'}
					</button>
				</form>
			) : (
				<div>
					<h3 className='head-text'>Thanks for reaching out! I’ll get back to you soon.</h3>
				</div>
			)}

			<div className='app__footer-links'>
				<div>
					<a href={images.CV} download>
						<ImProfile />
					</a>
				</div>
				<div>
					<a href='https://www.linkedin.com/in/guy-eilon/' target='_blank' rel='noreferrer'>
						<FaLinkedin />
					</a>
				</div>
				<div>
					<a href='https://github.com/guyeilon' target='_blank' rel='noreferrer'>
						<FaGithub />
					</a>
				</div>
			</div>
		</>
	);
};

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__primarybg');
