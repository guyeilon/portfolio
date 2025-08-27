import React from 'react';
import { ImProfile } from 'react-icons/im';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

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

			<div>
				<a href={'https://github.com/guyeilon'} target='_blank' rel='noreferrer'>
					<FaGithub />
				</a>
			</div>
		</div>
	);
}

export default SocialMedia;
