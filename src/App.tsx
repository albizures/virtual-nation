import React, { useRef } from 'react';
import { createItem, useSetItem, useItemValue } from 'react-take';

const currentElementItem = createItem<HTMLDivElement | null>(
	'current-element',
);

function Section() {
	const set = useSetItem(currentElementItem);
	const contentRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	const [height, setHeigt] = React.useState(window.innerHeight);

	React.useEffect(() => {
		const content = contentRef.current!;

		setHeigt(content.scrollWidth);
	}, []);

	React.useEffect(() => {
		const container = containerRef.current!;

		let isIntersecting = false;

		const observer = new IntersectionObserver(([entry]) => {
			console.log(container, entry);

			set((current) => {
				if (!current && entry.isIntersecting) {
					return container;
				}

				if (
					isIntersecting &&
					!entry.isIntersecting &&
					container.nextSibling
				) {
					if (
						entry.boundingClientRect.top < 0 &&
						container.nextSibling
					) {
						return container.nextSibling as HTMLDivElement;
					} else if (container.previousSibling) {
						return container.previousSibling as HTMLDivElement;
					}
				}

				return current;
			});

			isIntersecting = entry.isIntersecting;
		});
		observer.observe(container);

		return () => {
			observer.disconnect();
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
				className={`sticky top-0 border border-indigo-400 h-screen flex flex-row overflow-y-hidden overflow-x-auto `}
			>
				<div className="border-red-400 border h-screen w-screen min-w-screen">
					1
				</div>
				<div className="border-red-400 border h-screen w-screen min-w-screen">
					2
				</div>
				<div className="border-red-400 border h-screen w-screen min-w-screen">
					3
				</div>
				<div className="border-red-400 border h-screen w-screen min-w-screen">
					4
				</div>
			</div>
		</div>
	);
}

export function App() {
	const element = useItemValue(currentElementItem);
	React.useEffect(() => {
		if (!element) {
			return;
		}

		const container = element!;
		const content = element.children[0]! as HTMLDivElement;
		content.scrollLeft = window.scrollY - container.offsetTop;

		function onScroll() {
			content.scrollLeft = window.scrollY - container.offsetTop;
			console.log(
				window.scrollY,
				container.offsetTop,
				window.scrollY - container.offsetTop,
				content.scrollLeft,
			);
		}

		window.addEventListener('scroll', onScroll);
		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	}, [element]);

	return (
		<div className=" bg-black text-white">
			<Section />
			<Section />
			<Section />
			<Section />
		</div>
	);
}
