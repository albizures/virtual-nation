import clsx from 'clsx';
import React from 'react';
import { appleImg, googleImg } from '../assets';
import { Logo } from './Logo';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export function Header() {
	const [isOpen, setIsOpen] = React.useState(false);

	function onToggle() {
		setIsOpen((current) => {
			return !current;
		});
	}

	return (
		<div
			className={clsx('absolute top-0 w-full px-6 z-10', {
				'inset-0 bg-black': isOpen,
			})}
		>
			<header
				className={clsx(
					'flex max-w-5xl mx-auto items-center justify-between h-16 text-white px-4',
					{
						'flex-col': isOpen,
					},
				)}
			>
				<div
					className={clsx('flex-1 flex ', {
						'justify-between w-full': isOpen,
					})}
				>
					<Logo className="h-16 -ml-3" />
					<button
						className={clsx({
							'inline-block': isOpen,
							hidden: !isOpen,
						})}
						onClick={onToggle}
					>
						<AiOutlineClose className="w-7 h-7" />
					</button>
				</div>
				<nav
					className={clsx(' md:flex flex-1 text-xl justify-center', {
						hidden: !isOpen,
						'flex mt-8': isOpen,
					})}
				>
					<ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 font-sans">
						<li>Home</li>
						<li>About Us</li>
						<li>Contact</li>
					</ul>
				</nav>
				<div
					className={clsx(' md:block flex-1 text-right', {
						hidden: !isOpen,
						'block mt-8': isOpen,
					})}
				>
					<a className="font-sans font-bold" href="">
						Sign Up
					</a>
				</div>
				<div className="md:hidden">
					<button
						className={clsx({
							'inline-block': !isOpen,
							hidden: isOpen,
						})}
						onClick={onToggle}
					>
						<AiOutlineMenu className="w-7 h-7" />
					</button>
				</div>
			</header>
		</div>
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
				'flex fixed w-full transition-all h-16 z-30 bg-black text-nation items-center justify-around text-xl',
				{
					'top-0': status === 'shown',
					'-top-36': status === 'hidden',
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
				className="uppercase border px-4 py-2 border-nation rounded font-sans font-bold"
			>
				sign up here
			</a>
			<div className="flex space-x-3 items-center">
				<p className="uppercase font-sans font-bold font-sans font-bold">
					download our app
				</p>
				<img className="h-12" src={googleImg} alt="google" />
				<img className="h-12" src={appleImg} alt="apple" />
			</div>
		</div>
	);
}
