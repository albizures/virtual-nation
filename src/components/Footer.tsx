import { Logo } from './Logo';
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

export function Footer() {
	return (
		<>
			<div className="bg-dark-5 py-8  text-white">
				<div className="max-w-5xl mx-auto flex py-8 justify-between">
					<div>
						<h4 className="text-sm">
							<IoIosChatboxes className="inline-block -ml-1 h-4 w-4 mr-3 text-yellow" />
							<span className="align-middle">Chat Messaging</span>
						</h4>
						<ul className="tree">
							<li className="tree-item">Pricing</li>
							<li className="tree-item">Docs</li>
							<li className="tree-item">Solutions</li>
							<li className="tree-item">SDKs</li>
							<li className="tree-item">UI Kits</li>
							<li className="tree-item">API Tour</li>
							<li className="tree-item">Chat Demos</li>
						</ul>
					</div>
					<div>
						<h4 className="text-sm">
							<RiSignalTowerFill className="inline-block -ml-0.5 h-4 w-4 mr-3 text-yellow" />
							<span className="align-middle">Activity Feeds</span>
						</h4>
						<ul className="tree">
							<li className="tree-item">Pricing</li>
							<li className="tree-item">Docs</li>
							<li className="tree-item">Notification Feeds</li>
							<li className="tree-item">Personalization</li>
							<li className="tree-item">SDKs</li>
							<li className="tree-item">UI Kits</li>
							<li className="tree-item">Build Social Networks</li>
							<li className="tree-item">Try the API</li>
						</ul>
					</div>
					<div>
						<h4 className="text-sm">
							<RiRobotFill className="inline-block -ml-1 h-4 w-4 mr-3 text-yellow" />
							<span className="align-middle">Auto Moderation</span>
						</h4>
						<h4 className="text-sm mt-6">
							Company{' '}
							<span className="uppercase inline-block text-xs px-2 origin-left-center scale-70 bg-green-8 bg-opacity-30 text-green">
								hiring
							</span>
						</h4>
						<ul className="tree">
							<li className="tree-item">About us</li>
							<li className="tree-item">Careers</li>
							<li className="tree-item">Enterprise</li>
							<li className="tree-item">Glossary</li>
							<li className="tree-item">Blog /</li>
							<li className="tree-item">Case Studies /</li>
						</ul>
					</div>
					<div>
						<h4 className="text-sm">Contact Us</h4>
						<ul className="tree">
							<li className="tree-item">Sales</li>
							<li className="tree-item">Support</li>
							<li className="tree-item">Bug Report</li>
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
