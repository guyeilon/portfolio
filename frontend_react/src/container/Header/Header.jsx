import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';

import './Header.scss';

const scaleVariants = {
	hidden: { scale: 0, opacity: 0 },
	visible: {
		scale: 1,
		opacity: 1,
		transition: {
			duration: 1,
			ease: 'easeInOut',
		},
	},
};

function Header() {
	return (
		<div className='app__header app__flex'>
			{/* Left Info */}
			<motion.div
				initial={{ x: -100, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className='app__header-info'>
				<div className='app__header-badge'>
					<div className='badge-cmp app__flex'>
						<div>
							<p className='p-text'>Hi, I'm</p>
							<h1 className='head-text'>Guy</h1>
						</div>
					</div>

					<div className='tag-cmp app__flex'>
						<p className='p-text'>Frontend Developer</p>
						<p className='p-text'>React | TypeScript</p>
					</div>
				</div>
			</motion.div>

			{/* Profile Image */}
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className='app__header-img'>
				<img className='profile' src={images.profile} alt='profile_bg' />
				<motion.img
					initial={{ scale: 0 }}
					whileInView={{ scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1, ease: 'easeInOut' }}
					className='overlay_circle'
					src={images.circle}
					alt='profile_circle'
				/>
			</motion.div>

			{/* Tech Circles */}
			<motion.div
				variants={scaleVariants}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				className='app__header-circle'>
				{[images.typescript, images.react, images.css].map((circle, index) => (
					<div className='circle-cmp app__flex' key={`circle-${index}`}>
						<img src={circle} alt='circle' />
					</div>
				))}
			</motion.div>
		</div>
	);
}

export default AppWrap(Header, 'home');
