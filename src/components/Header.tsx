import clsx from 'clsx';
import React from 'react';
import { appleImg, googleImg } from '../assets';
import { Logo } from './Logo';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function useOverflowHidden(isShown: boolean) {
	React.useEffect(() => {
		if (isShown) {
		}
		document.body.style.overflow = isShown ? 'hidden' : '';
	}, [isShown]);
}

export function Header() {
	const [isOpen, setIsOpen] = React.useState(false);

	useOverflowHidden(isOpen);

	function onToggle() {
		setIsOpen((current) => {
			return !current;
		});
	}

	return (
		<div
			className={clsx(
				'absolute transition-all top-0 w-full px-6 z-10',
				{
					'inset-0 bg-black': isOpen,
				},
			)}
		>
			<header
				className={clsx(
					'flex max-w-5xl mx-auto items-center justify-between h-16 text-white',
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
	const [isOpen, setIsOpen] = React.useState(false);

	useOverflowHidden(isOpen);

	const [status, setStatus] = React.useState<'hidden' | 'shown'>(
		'hidden',
	);

	function onToggle() {
		setIsOpen((current) => {
			return !current;
		});
	}

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
				'flex w-full px-6 fixed transition-all h-16 z-30 bg-black text-nation  text-xl',
				{
					'top-0 md:flex-row md:items-center md:justify-around':
						status === 'shown',
					'-top-36': !isOpen && status === 'hidden',
					'h-full flex-col items-center': isOpen,
				},
			)}
		>
			<div className="flex w-full justify-between md:px-0">
				<Logo className="h-16 -ml-3" />

				<button className={clsx('md:hidden')} onClick={onToggle}>
					{isOpen ? (
						<AiOutlineClose className="w-7 h-7" />
					) : (
						<AiOutlineMenu className="w-7 h-7" />
					)}
				</button>
			</div>

			<div
				className={clsx('md:flex items-center', {
					'space-x-3 flex-row hidden': !isOpen,
					'space-y-3 flex flex-col mt-10': isOpen,
				})}
			>
				<a
					href="#"
					className="uppercase md:inline-block font-sans font-bold"
				>
					are you a creator?
				</a>
				<a
					href="#"
					className="uppercase border px-4 py-2 border-nation rounded font-sans font-bold"
				>
					sign up here
				</a>
			</div>
			<div
				className={clsx('md:flex items-center', {
					'hidden space-x-3': !isOpen,
					'flex flex-col justify-end mt-6 space-y-3 flex-1 pb-8':
						isOpen,
				})}
			>
				<p className="uppercase font-sans font-bold font-sans font-bold">
					download our app
				</p>
				<div className="flex space-x-3">
					<img className="h-9 md:h-12" src={googleImg} alt="google" />
					<img className="h-9 md:h-12" src={appleImg} alt="apple" />
				</div>
			</div>
		</div>
	);
}
