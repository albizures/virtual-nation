import { HorizontalSections } from './HorizontalSections';
import { textingImg } from './assets';

export function UseCases() {
	return (
		<HorizontalSections className="bg-light-1 text-stone-6">
			<div className="flex items-center min-w-screen justify-between">
				<h2 className="ml-10 uppercase font-bold">
					<span className="block text-4xl whitespace-nowrap">
						The virtual nation app
					</span>{' '}
					<span className="block text-5xl">gives creators</span>
					<span className="block text-6xl underline-yellow-2 underline">
						superpowers
					</span>
				</h2>

				<h3 className="transform whitespace-nowrap text-center translate-x-10 rotate-90 text-5xl text-black font-bold">
					Use Cases
				</h3>
			</div>

			<div className="flex justify-center flex-col pr-15">
				<h2 className="text-7xl uppercase font-bold">
					<span className="block">Immediate</span>
					<span className="block">organized</span>
					<span className="block underline underline-yellow-2">
						communication
					</span>
				</h2>
				<div>
					<button className="border mt-5 text-xl py-5 px-10 border-stone-6">
						know more {'-->'}
					</button>
				</div>
			</div>
			<img className="flex-1 my-4" src={textingImg} alt="texting" />
			<div className="flex  items-center w-full">
				<h2 className="text-7xl">
					Immediate <span className="text-8xl block">response</span>
					<span className="block whitespace-nowrap">
						from your subscribers
					</span>
					<span className="text-8xl block whitespace-nowrap">
						24/7 - 365 days
					</span>
				</h2>
			</div>
			<div className="flex items-center">
				<h3 className="text-5xl ">
					<span className="block whitespace-nowrap">
						Engage directly
					</span>
					<span className="block whitespace-nowrap">
						with your community,
					</span>
					<span className="block whitespace-nowrap">
						subscribers and fans
					</span>
				</h3>
			</div>
		</HorizontalSections>
	);
}
