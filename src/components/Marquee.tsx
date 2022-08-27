import clsx from 'clsx';
import styles from './Marquee.module.css';
import { OutlineText } from './OutlineText';

interface MarqueeProps {
	className?: string;
	children: React.ReactNode;
}

export function Marquee(props: MarqueeProps) {
	const { children, className } = props;
	return (
		<div
			className={clsx(
				'overflow-hidden absolute pointer-events-none',
				className,
			)}
		>
			{children}
		</div>
	);
}

interface MarqueeInnerProps {
	className?: string;
}

export function MarqueeInner(props: MarqueeInnerProps) {
	const { className } = props;
	return (
		<div
			className={clsx(
				styles.marquee__inner,
				'font-bold text-9xl text-white children:inline-block',
				className,
			)}
		>
			<OutlineText id="super-powers-1" text="SuperPowers" />
			<OutlineText id="super-powers-2" text="SuperPowers" />
			<OutlineText id="super-powers-3" text="SuperPowers" />
			<OutlineText id="super-powers-4" text="SuperPowers" />
		</div>
	);
}
