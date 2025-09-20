import React from 'react';

export default function Button({ color, bgColor, text, borderRadius }) {
	return (
		<button type="button" style={{ backgroundColor: bgColor, color, borderRadius }} className={`p-3 hover:drop-shadow-xl`}>
			{text}
		</button>
	);
}
