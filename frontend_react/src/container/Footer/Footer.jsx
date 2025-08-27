import React, { useState, useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';

import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import { RiMessengerLine } from 'react-icons/ri';
import { BsInstagram } from 'react-icons/bs';
import { ImProfile } from 'react-icons/im';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';

import './Footer.scss';

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_USER_ID;

const Footer = () => {
	const form = useRef();

	const sendEmail = e => {
		e.preventDefault();

		emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
			result => {
				console.log(result.text);
			},
			error => {
				console.log(error.text);
			}
		);
	};

	const [formData, setFormData] = useState({ name: '', email: '', message: '' });
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	const { name, email, message } = formData;

	const handleChangeInput = e => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		setLoading(true);
		sendEmail(e);
		setLoading(false);
		setIsFormSubmitted(true);
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
				<form className='app__footer-form app__flex' ref={form} onSubmit={e => handleSubmit(e)}>
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
					<button type='submit' className='p-text'>
						{!loading ? 'Send Message' : 'Sending...'}
					</button>
				</form>
			) : (
				<div>
					<h3 className='head-text'>Thank you for getting in touch!</h3>
				</div>
			)}
			<div className='app__footer-links'>
				<div>
					<a href={images.CV} download>
						<ImProfile />
					</a>
				</div>
				<div>
					<a href={'https://www.linkedin.com/in/guy-eilon/'} target='_blank' rel='noreferrer'>
						<FaLinkedin />
					</a>
				</div>

				<div>
					<a href={'https://github.com/guyeilon'} target='_blank' rel='noreferrer'>
						<FaGithub />
					</a>
				</div>
			</div>
		</>
	);
};

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__primarybg');
