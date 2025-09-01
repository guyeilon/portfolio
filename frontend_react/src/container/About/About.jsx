import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {
	const [abouts, setAbouts] = useState([]);

	useEffect(() => {
		const query = '*[_type == "abouts"]';
		client.fetch(query).then(data => setAbouts(data));
	}, []);

	return (
		<>
			<h2 className='head-text'>
				Building <span>Modern</span>, User-Friendly <span>Web Applications</span>
				<br />
				with <span>Passion</span> and <span>Precision</span>
			</h2>

			<div className='app__profiles'>
				{abouts.map((about, index) => (
					<motion.div
						key={about.title + index}
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						whileHover={{ scale: 1.05 }}
						viewport={{ once: true }} // 👈 ensures animation runs only once
						transition={{ duration: 0.5, type: 'tween' }}
						className='app__profile-item'>
						<img src={urlFor(about.imgUrl)} alt={about.title} />
						<h2 className='bold-text' style={{ marginTop: 20 }}>
							{about.title}
						</h2>
						<p className='p-text' style={{ marginTop: 10 }}>
							{about.description}
						</p>
					</motion.div>
				))}
			</div>
		</>
	);
};

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg');
