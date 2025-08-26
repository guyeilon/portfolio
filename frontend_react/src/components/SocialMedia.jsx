import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { ImProfile } from 'react-icons/im';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

import { images } from '../constants';

function SocialMedia() {
	return (
		<div className='app__social'>
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
			{/* <div>
				<a href={'https://www.instagram.com/geilon66/'} target='_blank' rel='noreferrer'>
					<BsInstagram />
				</a>
			</div> */}

			<div>
				<a href={'https://www.facebook.com/guy.eilon'} target='_blank' rel='noreferrer'>
					<FaFacebook />
				</a>
			</div>
			<div>
				<a href={'https://github.com/guyeilon'} target='_blank' rel='noreferrer'>
					<FaGithub />
				</a>
			</div>
		</div>
	);
}

export default SocialMedia;
