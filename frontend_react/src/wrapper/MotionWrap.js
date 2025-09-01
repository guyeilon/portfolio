import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MotionWrap = (Component, className) =>
	function HOC() {
		return (
			<AnimatePresence mode='wait'>
				<motion.div
					key='motion-wrapper'
					initial={{ y: 100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: -50, opacity: 0 }}
					transition={{ duration: 0.5 }}
					className={`${className || ''} app__flex`}>
					<Component />
				</motion.div>
			</AnimatePresence>
		);
	};

export default MotionWrap;
