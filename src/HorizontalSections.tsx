import React, { useRef } from 'react';
import clsx from 'clsx';

interface Props {
	children: React.ReactNode;
	className?: string;
}

export function HorizontalSections(props: Props) {
	const { children, className } = props;

	const contentRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	const [height, setHeigt] = React.useState(window.innerHeight);

	React.useEffect(() => {
		const content = contentRef.current!;

		setHeigt(content.scrollWidth);
		console.log(content, content.scrollWidth);

		function onResize() {
			setHeigt(content.scrollWidth);
		}
		window.addEventListener('resize', onResize);

		return () => {
			window.removeEventListener('resize', onResize);
		};
	}, []);

	React.useEffect(() => {
		const container = containerRef.current!;
		const content = contentRef.current!;
		console.log(height);

		function onScroll() {
			content.scrollLeft = window.scrollY - container.offsetTop;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					window.addEventListener('scroll', onScroll);
				} else {
					window.removeEventListener('scroll', onScroll);
				}
			},
			{
				threshold: 0.1,
			},
		);
		observer.observe(container);

		return () => {
			observer.disconnect();
			window.removeEventListener('scroll', onScroll);
		};
	}, [height]);

	return (
		<div
			style={{
				height,
			}}
			ref={containerRef}
		>
			<div
				ref={contentRef}
				className={clsx(
					'sticky top-0 - h-screen flex flex-nowrap overflow-hidden',
					className,
				)}
			>
				{children}
			</div>
		</div>
	);
}
