import clsx from 'clsx';
import React from 'react';
import { appleImg, googleImg } from '../assets';
import { Logo } from './Logo';

export function Header() {
	return (
		<header className="absolute top-0 w-full flex justify-between items-center h-16 z-10 text-white px-4">
			<div className="flex-1">
				<Logo className="h-16" />
			</div>
			<nav className="flex-1 text-xl flex justify-center">
				<ul className="flex space-x-8 font-sans">
					<li>Home</li>
					<li>About Us</li>
					<li>Contact</li>
				</ul>
			</nav>
			<div className="flex-1 text-right">
				<a className="font-sans font-bold" href="">
					Sign Up
				</a>
			</div>
		</header>
	);
}

export function StickyHeader() {
	const [status, setStatus] = React.useState<'hidden' | 'shown'>(
		'hidden',
	);
	React.useEffect(() => {
		function onScroll() {
			if (window.scrollY > window.innerHeight - 100) {
				setStatus('shown');
			} else {
				setStatus('hidden');
			}
		}

		window.addEventListener('scroll', onScroll);
		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	}, []);

	return (
		<div
			className={clsx(
				'flex fixed w-full transition-all h-16 z-30 bg-black text-yellow-2 items-center justify-around text-xl',
				{
					'top-0': status === 'shown',
					'-top-16': status === 'hidden',
				},
			)}
		>
			<div className="">
				<Logo className="h-16" />
			</div>

			<a href="#" className="uppercase font-sans font-bold">
				are you a creator?
			</a>
			<a
				href="#"
				className="uppercase border px-4 py-2 border-yellow-2 rounded font-sans font-bold"
			>
				sign up here
			</a>
			<p className="uppercase font-sans font-bold font-sans font-bold">
				download our app
			</p>
			<div className="flex space-x-10">
				<img className="h-12" src={googleImg} alt="google" />
				<img className="h-12" src={appleImg} alt="apple" />
			</div>
		</div>
	);
}
