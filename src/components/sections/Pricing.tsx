import clsx from 'clsx';
import React from 'react';

interface PlanActionProps {
	label?: string;
}
function PlanAction(props: PlanActionProps) {
	const { label = 'GET STARTED' } = props;
	return (
		<p className="uppercase mt-4 text-gray-5 text-sm font-sans font-bold tracking-widest">
			{label}
		</p>
	);
}

interface TwoPartsProps {
	left: string;
	separator?: string;
	right?: string;
	className?: string;
	type?: 'bold' | 'normal';
}

export function TwoParts(props: TwoPartsProps) {
	const {
		type = 'normal',
		left,
		separator = '/',
		right = 'mo',
		className,
	} = props;
	return (
		<span className={clsx(' font-light', className)}>
			<span
				className={clsx({
					'font-medium': type === 'bold',
				})}
			>
				{left}
			</span>
			<span
				className={clsx({
					'opacity-50': type !== 'bold',
				})}
			>
				{separator}
				{right}
			</span>
		</span>
	);
}

interface HeaderProps {
	children: React.ReactNode;
	className?: string;
}
function Header(props: HeaderProps) {
	const { children, className } = props;
	return (
		<div className={clsx('h-23 mb-8', className)}>{children}</div>
	);
}

interface CellProps {
	children: React.ReactNode;
	className?: string;
}

function Cell(props: CellProps) {
	const { children, className } = props;
	return (
		<div
			className={clsx(
				'border-b border-gray-2 border-opacity-60 pb-3 mt-3',
				className,
			)}
		>
			{children}
		</div>
	);
}

function Title() {
	const ref = React.useRef(null);
	const [status, setStatus] = React.useState<'idle' | 'filling'>(
		'idle',
	);
	React.useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setStatus('filling');
				}
			},
			{
				threshold: 1,
			},
		);
		observer.observe(ref.current!);

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<div className="text-center mt-20 mb-6 ">
			<h2 ref={ref} className="inline-block relative">
				<div className="absolute inset-0 text-center">
					<div className="w-full mx-auto text-left">
						<span
							className={clsx(
								'font-sans transition-all duration-2000 text-7xl ml-1.5 -mt-0.5 uppercase font-bold inline-block text-gray-5 overflow-hidden',
								{
									'w-0': status === 'idle',
									'w-full': status === 'filling',
								},
							)}
						>
							Pricing
						</span>
					</div>
				</div>
				<svg
					width="19rem"
					height="5rem"
					xmlns="http://www.w3.org/2000/svg"
				>
					<symbol id="pricing-title">
						<text
							className="font-sans text-7xl uppercase"
							fontWeight="bold"
							textAnchor="middle"
							x="50%"
							y="80%"
						>
							Pricing
						</text>
					</symbol>
					<g>
						<use
							xlinkHref="#pricing-title"
							className="fill-none stroke-gray-5 stroke-2"
						></use>
					</g>
				</svg>
			</h2>
		</div>
	);
}

export function Pricing() {
	return (
		<div className="max-w-5xl mx-auto pb-16">
			<Title />
			<div className="flex w-full ">
				<div className="grow-1.5">
					<Header className="flex flex-col justify-between">
						<div>
							<button className="bg-nation rounded-xl uppercase font-bold tracking-widest pb-1 font-sans px-4">
								STARt free trial
							</button>
						</div>
						<PlanAction label="Talk to sales" />
					</Header>
					<div className="font-medium text-sm  children:(whitespace-nowrap)">
						<Cell>Core & Key Features</Cell>
						<Cell>
							Monthly Active Users{' '}
							<span className="opacity-30">(MAU)*</span>
						</Cell>
						<Cell className="pl-6">MAU Overage Rate</Cell>
						<Cell>Concurrent Included</Cell>
						<Cell className="pl-6">Concurrent Overage Rate</Cell>
						<Cell>Message Storage</Cell>
						<Cell>Support Response</Cell>
						<Cell>
							EDGE Network{' '}
							<span className="text-xs inline-block scale-80 px-1 uppercase text-pink-8 rounded bg-pink-6 bg-opacity-20">
								NEW
							</span>
						</Cell>
						<Cell>Advanced Moderation</Cell>
						<div className="pb-3 mt-3">Moderation Dashboard</div>
					</div>
				</div>
				<div className="grow-1">
					<Header>
						<h3 className="v-h3">Startup</h3>
						<TwoParts left="$499" type="bold" className="text-sm" />
						<PlanAction />
					</Header>
					<div className="font-light text-sm">
						<Cell>Everything is included</Cell>
						<Cell>
							<TwoParts left="10,000" />
						</Cell>
						<Cell>
							<TwoParts left="$0.08" separator=" " right="per user" />
						</Cell>
						<Cell>500</Cell>
						<Cell>
							<TwoParts
								left="$0.75"
								separator=" "
								right="per concurrent"
							/>
						</Cell>
						<Cell>Unlimited</Cell>
						<Cell>Email</Cell>
						<Cell>Included</Cell>
						<Cell>Additional fees apply</Cell>

						<div className="pb-3 mt-3">Included</div>
					</div>
				</div>
				<div className="grow-1">
					<Header>
						<h3 className="v-h3">Standard</h3>
						<TwoParts left="$1,299" type="bold" className="text-sm" />
						<PlanAction />
					</Header>
					<div className="font-light text-sm">
						<Cell>Everything is included</Cell>
						<Cell>
							<TwoParts left="25,000" />
						</Cell>
						<Cell>
							<TwoParts left="$0.06" separator=" " right="per user" />
						</Cell>
						<Cell>1,250</Cell>
						<Cell>
							<TwoParts
								left="$0.65"
								separator=" "
								right="per concurrent"
							/>
						</Cell>
						<Cell>Unlimited</Cell>
						<Cell>Email</Cell>
						<Cell>Included</Cell>
						<Cell>Additional fees apply</Cell>
						<div className="pb-3 mt-3">Included</div>
					</div>
				</div>
				<div className="grow-1">
					<Header>
						<h3 className="v-h3">Premium</h3>
						<TwoParts left="$2,299" type="bold" className="text-sm" />
						<PlanAction />
					</Header>
					<div className="font-light text-sm">
						<Cell>Everything is included</Cell>
						<Cell>
							<TwoParts left="50,000" />
						</Cell>
						<Cell>
							<TwoParts left="$0.04" separator=" " right="per user" />
						</Cell>
						<Cell>2,500</Cell>
						<Cell>
							<TwoParts
								left="$0.55"
								separator=" "
								right="per concurrent"
							/>
						</Cell>
						<Cell>Unlimited</Cell>
						<Cell>Email + Support Calls</Cell>
						<Cell>Included</Cell>
						<Cell>Additional fees apply</Cell>
						<div className="pb-3 mt-3">Included</div>
					</div>
				</div>
				<div className="grow-1">
					<Header>
						<h3 className="v-h3">Enterprise</h3>
						<span className="text-sm font-medium">Customized</span>
						<PlanAction label="CONTACT US" />
					</Header>
					<div className="font-light text-sm">
						<Cell>Everything is included</Cell>
						<Cell>
							<TwoParts left="100,000+" />
						</Cell>
						<Cell>Custom</Cell>
						<Cell>5,000+</Cell>
						<Cell>Custom</Cell>
						<Cell>Unlimited</Cell>
						<Cell>Email + Support Calls</Cell>
						<Cell>Included</Cell>
						<Cell>Additional fees apply</Cell>
						<div className="pb-3 mt-3">Included</div>
					</div>
				</div>
			</div>
		</div>
	);
}
