import clsx from 'clsx';
import React from 'react';
import { ArrowMessage } from '../Svgs';

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
		<div
			className={clsx('h-23 mb-8 text-right md:text-left', className)}
		>
			{children}
		</div>
	);
}

interface CellProps {
	children: React.ReactNode;
	className?: string;
	status: 'shown' | 'hidden';
}

function Cell(props: CellProps) {
	const { children, className, status } = props;

	return (
		<td
			className={clsx(className, {
				'hidden md:table-cell': status === 'hidden',
			})}
		>
			{children}
		</td>
	);
}

interface MainCellProps {
	children: React.ReactNode;
	className?: string;
}

export function MainCell(props: MainCellProps) {
	const { children, className } = props;

	return (
		<Cell
			className="border-b border-gray-2 border-opacity-60"
			status={'shown'}
		>
			<p className={clsx('pb-3 mt-3', className)}>{children}</p>
		</Cell>
	);
}

interface HeaderCellProps {
	children: React.ReactNode;
	className?: string;
	column?: Plans;
	current: Plans;
}

function HeaderCell(props: HeaderCellProps) {
	const { children, current, column = current, className } = props;

	return (
		<Cell
			className="border-b border-gray-2 border-opacity-60"
			status={column === current ? 'shown' : 'hidden'}
		>
			<Header className={className}>{children}</Header>
		</Cell>
	);
}

interface ItemCellProps {
	children: React.ReactNode;
	className?: string;
	column: Plans;
	current: Plans;
	type?: 'main' | 'normal';
}

function ItemCell(props: ItemCellProps) {
	const {
		children,
		className,
		current,
		column = current,
		type = 'normal',
	} = props;

	return (
		<Cell
			className="border-b border-gray-2 border-opacity-60"
			status={column === current ? 'shown' : 'hidden'}
		>
			<p
				className={clsx('pb-3 mt-3', className, {
					'text-right md:text-left': type === 'normal',
				})}
			>
				{children}
			</p>
		</Cell>
	);
}

interface SelectorProps {
	plan: Plans;
	current: Plans;
	className?: string;
	onSelect: (value: Plans) => void;
}

export function Selector(props: SelectorProps) {
	const { plan, onSelect, current, className } = props;
	return (
		<button
			onClick={() => onSelect(plan)}
			className={clsx(
				'p-1 border border-stone-6 capitalize',
				className,
				{
					'shadow font-bold z-10 relative': current === plan,
				},
			)}
		>
			{plan}
		</button>
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
			<h2 ref={ref} className="inline-block relative z-10">
				<div className="absolute inset-0 text-center">
					<div className="w-full mx-auto text-left">
						<span
							className={clsx(
								'font-sans transition-all duration-2000 text-7xl uppercase font-bold inline-block text-gray-5 overflow-hidden',
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
							textAnchor="start"
							className="font-sans text-7xl uppercase"
							fontWeight="bold"
							x="0"
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

type Plans = 'startup' | 'standard' | 'premium' | 'enterprise';

export function Pricing() {
	const [selected, setSelected] = React.useState<Plans>('enterprise');

	const trial = (
		<div className="text-left">
			<div>
				<button className="bg-nation-light rounded-xl uppercase font-bold tracking-widest py-1.5 font-sans px-4">
					<ArrowMessage className="inline-block mr-1" />
					STARt free trial
				</button>
			</div>
			<PlanAction label="Talk to sales" />
		</div>
	);
	const startup = (
		<>
			<h3 className="v-h3">Startup</h3>
			<TwoParts left="$499" type="bold" className="text-sm" />
			<PlanAction />
		</>
	);
	const standard = (
		<>
			<h3 className="v-h3">Standard</h3>
			<TwoParts left="$1,299" type="bold" className="text-sm" />
			<PlanAction />
		</>
	);
	const premium = (
		<>
			<h3 className="v-h3">Premium</h3>
			<TwoParts left="$2,299" type="bold" className="text-sm" />
			<PlanAction />
		</>
	);
	const enterprise = (
		<>
			<h3 className="v-h3">Enterprise</h3>
			<span className="text-sm font-medium">Customized</span>
			<PlanAction label="CONTACT US" />
		</>
	);

	return (
		<div className="px-6">
			<div className="max-w-5xl mx-auto pb-16 relative">
				<Title />
				<div className="pricing-tag">
					<span className="mx-4 my-8 text-center">
						Trusted by over one billion end users.
					</span>
				</div>
				<div className="flex overflow-visible items-center children:flex-1 mb-8">
					<Selector
						plan="startup"
						className="rounded-l"
						onSelect={setSelected}
						current={selected}
					/>
					<Selector
						plan="standard"
						className="border-l-0"
						onSelect={setSelected}
						current={selected}
					/>
					<Selector
						plan="premium"
						className="border-l-0"
						onSelect={setSelected}
						current={selected}
					/>
					<Selector
						plan="enterprise"
						className="border-l-0 rounded-r"
						onSelect={setSelected}
						current={selected}
					/>
				</div>
				<table className="w-full">
					<tbody>
						<tr className=" md:table-row">
							<HeaderCell
								current={selected}
								className="flex flex-col justify-between"
							>
								{trial}
							</HeaderCell>
							<HeaderCell current={selected} column="startup">
								{startup}
							</HeaderCell>
							<HeaderCell current={selected} column="standard">
								{standard}
							</HeaderCell>
							<HeaderCell current={selected} column="premium">
								{premium}
							</HeaderCell>
							<HeaderCell current={selected} column="enterprise">
								{enterprise}
							</HeaderCell>
						</tr>
						<tr>
							<MainCell>Core & Key Features</MainCell>
							<ItemCell current={selected} column="startup">
								Everything is included
							</ItemCell>
							<ItemCell current={selected} column="standard">
								Everything is included
							</ItemCell>
							<ItemCell current={selected} column="premium">
								Everything is included
							</ItemCell>
							<ItemCell current={selected} column="enterprise">
								Everything is included
							</ItemCell>
						</tr>
						<tr>
							<MainCell>
								Monthly Active Users{' '}
								<span className="opacity-30">(MAU)*</span>
							</MainCell>
							<ItemCell current={selected} column="startup">
								<TwoParts left="10,000" />
							</ItemCell>
							<ItemCell current={selected} column="standard">
								<TwoParts left="25,000" />
							</ItemCell>
							<ItemCell current={selected} column="premium">
								<TwoParts left="50,000" />
							</ItemCell>
							<ItemCell current={selected} column="enterprise">
								<TwoParts left="100,000+" />
							</ItemCell>
						</tr>
						<tr>
							<MainCell className="pl-6">MAU Overage Rate</MainCell>
							<ItemCell current={selected} column="startup">
								<TwoParts
									left="$0.08"
									separator=" "
									right="per user"
								/>
							</ItemCell>
							<ItemCell current={selected} column="standard">
								<TwoParts
									left="$0.06"
									separator=" "
									right="per user"
								/>
							</ItemCell>
							<ItemCell current={selected} column="premium">
								<TwoParts
									left="$0.04"
									separator=" "
									right="per user"
								/>
							</ItemCell>
							<ItemCell current={selected} column="enterprise">
								Custom
							</ItemCell>
						</tr>
						<tr>
							<MainCell>Concurrent Included</MainCell>
							<ItemCell current={selected} column="startup">
								500
							</ItemCell>
							<ItemCell current={selected} column="standard">
								1,250
							</ItemCell>
							<ItemCell current={selected} column="premium">
								2,500
							</ItemCell>
							<ItemCell current={selected} column="enterprise">
								5,000+
							</ItemCell>
						</tr>
						<tr>
							<MainCell>Concurrent Overage Rate</MainCell>
							<ItemCell current={selected} column="startup">
								<TwoParts
									left="$0.75"
									separator=" "
									right="per concurrent"
								/>
							</ItemCell>
							<ItemCell current={selected} column="standard">
								<TwoParts
									left="$0.65"
									separator=" "
									right="per concurrent"
								/>
							</ItemCell>
							<ItemCell current={selected} column="premium">
								<TwoParts
									left="$0.55"
									separator=" "
									right="per concurrent"
								/>
							</ItemCell>
							<ItemCell current={selected} column="enterprise">
								Custom
							</ItemCell>
						</tr>
						<tr>
							<MainCell>Message Storage</MainCell>
							<ItemCell current={selected} column="startup">
								Unlimited
							</ItemCell>
							<ItemCell current={selected} column="standard">
								Unlimited
							</ItemCell>
							<ItemCell current={selected} column="premium">
								Unlimited
							</ItemCell>
							<ItemCell current={selected} column="enterprise">
								Unlimited
							</ItemCell>
						</tr>
						<tr>
							<MainCell>Support Response</MainCell>
							<ItemCell current={selected} column="startup">
								Email
							</ItemCell>
							<ItemCell current={selected} column="standard">
								Email
							</ItemCell>
							<ItemCell current={selected} column="premium">
								Email + Support Calls
							</ItemCell>
							<ItemCell current={selected} column="enterprise">
								Email + Support Calls
							</ItemCell>
						</tr>
						<tr>
							<MainCell>
								EDGE Network{' '}
								<span className="text-xs inline-block scale-80 px-1 uppercase text-pink-8 rounded bg-pink-6 bg-opacity-20">
									NEW
								</span>
							</MainCell>
							<ItemCell current={selected} column="startup">
								Included
							</ItemCell>
							<ItemCell current={selected} column="standard">
								Included
							</ItemCell>
							<ItemCell current={selected} column="premium">
								Included
							</ItemCell>
							<ItemCell current={selected} column="enterprise">
								Included
							</ItemCell>
						</tr>
						<tr>
							<MainCell>Advanced Moderation</MainCell>
							<ItemCell current={selected} column="startup">
								Additional fees apply
							</ItemCell>
							<ItemCell current={selected} column="standard">
								Additional fees apply
							</ItemCell>
							<ItemCell current={selected} column="premium">
								Additional fees apply
							</ItemCell>
							<ItemCell current={selected} column="enterprise">
								Additional fees apply
							</ItemCell>
						</tr>
						<tr>
							<MainCell>Moderation Dashboard</MainCell>
							<ItemCell current={selected} column="startup">
								Included
							</ItemCell>
							<ItemCell current={selected} column="standard">
								Included
							</ItemCell>
							<ItemCell current={selected} column="premium">
								Included
							</ItemCell>
							<ItemCell current={selected} column="enterprise">
								Included
							</ItemCell>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
