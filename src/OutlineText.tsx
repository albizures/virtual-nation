interface OutlineText {
	text: string;
	id: string;
	className?: string;
}

export function OutlineText(props: OutlineText) {
	const { text, id, className } = props;
	return (
		<span className={`inline-block ${className}`}>
			<svg
				width="840"
				height="140"
				xmlns="http://www.w3.org/2000/svg"
			>
				<symbol id={id}>
					<text
						className="font-sans text-9xl"
						font-weight="bold"
						text-anchor="middle"
						x="50%"
						y="80%"
					>
						{text}
					</text>
				</symbol>
				<g>
					<use
						xlinkHref={`#${id}`}
						className="fill-none stroke-black stroke-2"
					></use>
				</g>
			</svg>
		</span>
	);
}
