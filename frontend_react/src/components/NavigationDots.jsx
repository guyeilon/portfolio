import React from 'react';

function NavigationDots({ active }) {
	return (
		<div className='app__navigation'>
			{['home', 'about', 'work', 'skills', 'contact'].map((item, index) => (
				<a
					href={`#${item}`}
					key={item + index}
					className='app__navigation-dot'
					style={active === item ? { backgroundColor: '#313BAC' } : {}}
					aria-label={item}>
					<span
						style={{
							position: 'absolute',
							width: 1,
							height: 1,
							padding: 0,
							margin: -1,
							overflow: 'hidden',
							clip: 'rect(0,0,0,0)',
							border: 0,
						}}>
						{item}
					</span>
				</a>
			))}
		</div>
	);
}

export default NavigationDots;
