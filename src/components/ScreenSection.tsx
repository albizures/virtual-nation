import React from 'react';
import clsx from 'clsx';

interface Props {
	children: React.ReactNode;
	className?: string;
}

export function ScreenSection(props: Props) {
	const { children, className } = props;
	return (
		<div
			className={clsx('h-screen w-screen min-w-screen', className)}
		>
			{children}
		</div>
	);
}
