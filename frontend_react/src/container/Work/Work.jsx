import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';

const Work = () => {
	const [activeFilter, setActiveFilter] = useState('All');
	const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
	const [works, setWorks] = useState([]);
	const [filterWork, setFilterWork] = useState([]);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const query = '*[_type == "works"]';
		client.fetch(query).then(data => {
			setWorks(data);
			setFilterWork(data);
		});
	}, []);

	// ✅ Proper resize listener with cleanup
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 450);
		};

		handleResize(); // run once on mount
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const handleWorkFilter = item => {
		setActiveFilter(item);
		setAnimateCard({ y: 100, opacity: 0 });

		setTimeout(() => {
			setAnimateCard({ y: 0, opacity: 1 });
			if (item === 'All') {
				setFilterWork(works);
			} else {
				setFilterWork(works.filter(work => work.tags.includes(item)));
			}
		}, 500);
	};

	return (
		<>
			<h2 className='head-text'>
				My <span>Portfolio </span>Section
			</h2>

			{/* Filter Tabs */}
			<div className='app__work-filter'>
				{['Zustand', 'Material-UI', 'React', 'WordPress', 'All'].map((item, index) => (
					<div
						key={index}
						className={`app__work-filter-item app__flex p-text ${
							activeFilter === item ? 'item-active' : ''
						}`}
						onClick={() => handleWorkFilter(item)}>
						{item}
					</div>
				))}
			</div>

			{/* Portfolio Grid */}
			<motion.div
				animate={animateCard}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className='app__work-portfolio'>
				{filterWork.map((work, index) => (
					<div className='app__work-item app__flex' key={index}>
						<div className='app__work-img app__flex'>
							<img src={urlFor(work.imgUrl)} alt={work.name} />

							{/* Hover Overlay */}
							<motion.div
								className='app__work-hover app__flex'
								whileHover={{ opacity: 1 }}
								initial={{ opacity: isMobile ? 0.5 : 0 }}
								animate={{ opacity: isMobile ? 0.5 : 0 }}
								transition={{ duration: 0.25, ease: 'easeInOut' }}>
								<a href={work.projectLink} target='_blank' rel='noreferrer'>
									<motion.div
										whileInView={{ scale: [0, 1] }}
										whileHover={{ scale: [1, 0.9] }}
										transition={{ duration: 0.25 }}
										className='app__flex'>
										<AiFillEye />
									</motion.div>
								</a>
								<a href={work.codeLink} target='_blank' rel='noreferrer'>
									<motion.div
										whileInView={{ scale: [0, 1] }}
										whileHover={{ scale: [1, 0.9] }}
										transition={{ duration: 0.25 }}
										className='app__flex'>
										<AiFillGithub />
									</motion.div>
								</a>
							</motion.div>
						</div>

						{/* Work Content */}
						<div className='app__work-content app__flex'>
							<h4 className='bold-text'>{work.title}</h4>
							<p className='p-text' style={{ marginTop: 10 }}>
								{work.description}
							</p>
							<div className='app__work-tag app__flex'>
								<p className='p-text'>{work.tags[0]}</p>
							</div>
						</div>
					</div>
				))}
			</motion.div>
		</>
	);
};

export default AppWrap(MotionWrap(Work, 'app__works'), 'work', 'app__primarybg');
