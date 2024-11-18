'use client';

import { useState } from 'react';

export const TestAuth = () => {
	const [disabled, setDisabled] = useState(false);
	const [authorized, setAuthorized] = useState<boolean | null>(null);

	const handler = async () => {
		setDisabled(true);

		const response = await fetch('/api/test');
		setAuthorized(response.ok);

		setDisabled(false);
	};

	return (
		<div>
			<button
				disabled={disabled}
				onClick={handler}>
				Click to check auth
			</button>
			<p>{authorized ? 'Authorized' : 'Not authorized'}</p>
		</div>
	);
};
