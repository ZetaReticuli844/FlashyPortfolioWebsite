import particlesConfig from '../config/particles-config'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
export default function ParticlesBackground() {
	const particlesInit = async (main) => {
		console.log(main);
		await loadFull(main);
	};
	const particlesLoaded = (container) => {
		console.log(container);
	};
	return (
        <div className='absolute top-0 left-0 w-full h-full'>
		<Particles
			options={particlesConfig}
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
		/>
        </div>
	);
}

