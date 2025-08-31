import React, { useState, useEffect, useCallback, useRef } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

import SocialMedia from '../SocialMedia';
import './Navbar.scss';

const navItems = ['home', 'about', 'work', 'skills', 'contact'];

function Navbar() {
	const [toggle, setToggle] = useState(false);
	const menuRef = useRef(null);

	// Prevent background scroll
	useEffect(() => {
		if (toggle) {
			document.body.style.overflow = 'hidden';
			document.body.style.position = 'fixed';
			document.body.style.width = '100%';
		} else {
			document.body.style.overflow = '';
			document.body.style.position = '';
			document.body.style.width = '';
		}
		return () => {
			document.body.style.overflow = '';
			document.body.style.position = '';
			document.body.style.width = '';
		};
	}, [toggle]);

	// Close on Escape key
	const handleKeyDown = useCallback(e => {
		if (e.key === 'Escape') setToggle(false);
	}, []);

	useEffect(() => {
		if (toggle) {
			document.addEventListener('keydown', handleKeyDown);
		} else {
			document.removeEventListener('keydown', handleKeyDown);
		}
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [toggle, handleKeyDown]);

	// Close when clicking outside
	useEffect(() => {
		function handleClickOutside(e) {
			if (menuRef.current && !menuRef.current.contains(e.target)) {
				setToggle(false);
			}
		}
		if (toggle) {
			document.addEventListener('mousedown', handleClickOutside);
			document.addEventListener('touchstart', handleClickOutside);
		}
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			document.removeEventListener('touchstart', handleClickOutside);
		};
	}, [toggle]);

	return (
		<nav className='app__navbar'>
			<ul className='app__navbar-links'>
				{navItems.map(item => (
					<li className='app__flex p-text' key={`link-${item}`}>
						<div />
						<a href={`#${item}`}>{item}</a>
					</li>
				))}
			</ul>

			<div className='app__navbar-menu'>
				<button aria-label='Open menu' onClick={() => setToggle(true)}>
					<HiMenuAlt4 />
				</button>

				<AnimatePresence>
					{toggle && (
						<motion.div
							className='menu-panel'
							ref={menuRef}
							initial={{ x: 300 }}
							animate={{ x: 0 }}
							exit={{ x: 300 }}
							transition={{ duration: 0.85, ease: 'easeOut' }}>
							<div className='menu-content'>
								<button aria-label='Close menu' onClick={() => setToggle(false)}>
									<HiX />
								</button>
								<ul>
									{navItems.map(item => (
										<li key={item}>
											<a href={`#${item}`} onClick={() => setToggle(false)}>
												{item}
											</a>
										</li>
									))}
								</ul>
							</div>

							<div className='menu-social'>
								<SocialMedia onLinkClick={() => setToggle(false)} />
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</nav>
	);
}

export default Navbar;
