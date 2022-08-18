import { Logo } from '../Logo';
import { IoIosChatboxes } from 'react-icons/io';
import {
	RiSignalTowerFill,
	RiRobotFill,
	RiTwitterFill,
	RiFacebookFill,
	RiLinkedinFill,
	RiGithubFill,
	RiMailLine,
} from 'react-icons/ri';
import { ImArrowUpRight2 } from 'react-icons/im';

interface ItemTreeProps {
	children: React.ReactNode;
	type?: 'external' | 'normal';
}

function ItemTree(props: ItemTreeProps) {
	const { children, type = 'normal' } = props;
	return (
		<li className="tree-item">
			<a className="hover:underline">
				{children}
				{type === 'external' && (
					<ImArrowUpRight2 className="inline-block w-2.5 h-2.5 ml-0.5" />
				)}
			</a>
		</li>
	);
}

export function Footer() {
	return (
		<>
			<div className="bg-dark-5 py-8  text-white">
				<div className="max-w-5xl mx-auto flex py-8 justify-between">
					<div>
						<h4 className="text-sm">
							<IoIosChatboxes className="inline-block -ml-1 h-4 w-4 mr-3 text-nation" />
							<span className="align-middle">Chat Messaging</span>
						</h4>
						<ul className="tree">
							<ItemTree>Pricing</ItemTree>
							<ItemTree>Docs</ItemTree>
							<ItemTree>Solutions</ItemTree>
							<ItemTree>SDKs</ItemTree>
							<ItemTree>UI Kits</ItemTree>
							<ItemTree>API Tour</ItemTree>
							<ItemTree>Chat Demos</ItemTree>
						</ul>
					</div>
					<div>
						<h4 className="text-sm">
							<RiSignalTowerFill className="inline-block -ml-0.5 h-4 w-4 mr-3 text-nation" />
							<span className="align-middle">Activity Feeds</span>
						</h4>
						<ul className="tree">
							<ItemTree>Pricing</ItemTree>
							<ItemTree>Docs</ItemTree>
							<ItemTree>Notification Feeds</ItemTree>
							<ItemTree>Personalization</ItemTree>
							<ItemTree>SDKs</ItemTree>
							<ItemTree>UI Kits</ItemTree>
							<ItemTree>Build Social Networks</ItemTree>
							<ItemTree>Try the API</ItemTree>
						</ul>
					</div>
					<div>
						<h4 className="text-sm">
							<RiRobotFill className="inline-block -ml-1 h-4 w-4 mr-3 text-nation" />
							<span className="align-middle">Auto Moderation</span>
						</h4>
						<h4 className="text-sm mt-6">
							Company{' '}
							<span className="uppercase inline-block text-xs px-2 origin-left-center scale-70 bg-green-8 bg-opacity-30 text-green">
								hiring
							</span>
						</h4>
						<ul className="tree">
							<ItemTree>About us</ItemTree>
							<ItemTree>Careers</ItemTree>
							<ItemTree>Enterprise</ItemTree>
							<ItemTree>Glossary</ItemTree>
							<ItemTree type="external">Blog</ItemTree>
							<ItemTree type="external">Case Studies</ItemTree>
						</ul>
					</div>
					<div>
						<h4 className="text-sm">Contact Us</h4>
						<ul className="tree">
							<ItemTree>Sales</ItemTree>
							<ItemTree>Support</ItemTree>
							<ItemTree>Bug Report</ItemTree>
						</ul>
					</div>
				</div>
			</div>
			<div className="bg-dark-9 text-white py-8">
				<div className="max-w-5xl mx-auto">
					<div className="flex justify-between space-x-30 items-center">
						<Logo className="text-white h-20 -ml-4" />
						<p className="text-right text-sm">
							Virtual Nation is proudly designed, built and
							continually enhance in DMedia and HyperReality with a
							global remote team.
						</p>
					</div>
					<div className="flex justify-between mt-4">
						<p>
							<span className="rounded bg-green w-2 h-2 inline-block mr-1"></span>
							<span className="opacity-50">
								System Status{' '}
								<span className="font-italic">
									© All Rights Reserved
								</span>
							</span>
						</p>
						<ul className="flex space-x-4 items-center">
							<li className="opacity-50 hover:underline">
								<a href="#">Privacy</a>
							</li>
							<li className="opacity-50 hover:underline">
								<a className="mr-2" href="#">
									Privacy
								</a>
							</li>
							<li>
								<a href="https://twitter.com" target="_blank">
									<RiTwitterFill />
								</a>
							</li>
							<li>
								<a href="https://fb.com" target="_blank">
									<RiFacebookFill />
								</a>
							</li>
							<li>
								<a href="https://linkedin.com" target="_blank">
									<RiLinkedinFill />
								</a>
							</li>
							<li>
								<a href="https://github.com" target="_blank">
									<RiGithubFill />
								</a>
							</li>
							<li>
								<RiMailLine />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
