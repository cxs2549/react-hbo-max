import styled from 'styled-components'
import hero from '../../../assets/hero.png'

const StyledHero = styled.div`
	/* max-height: 75%; */
	overflow: hidden;
	position: relative;
	@media (min-width: 1024px) {
		/* display: grid;
		grid-template-columns: 1fr auto; */
		min-height: max-content;
	}
	img {
		min-height: 100%;
		min-width: 100%;
		object-fit: cover;
	}
	#info {
		background-image: linear-gradient(#0f0337, black);
		color: white;
		height: 120px;
		position: relative;
		z-index: 0;
		@media (min-width: 768px) {
			/* height: 165px; */
		}
		@media (min-width: 1024px) {
			background-image: none;
			background-color: transparent;
			width: 340px;
			position: absolute;
			bottom: 0;
			left: 0;
			top: 0;
			height: 100%;
			background-image: linear-gradient(to right, #0000005c 25%, transparent 100%);
		}
		@media (min-width: 1286px) {
		}

		h2 {
			text-transform: uppercase;
			font-size: 0.85rem;
			font-weight: 700;
			opacity: .9;
			@media (min-width: 768px) {
				font-size: 1rem;
			}
			@media (min-width: 1024px) {
				text-shadow: 1px 1px 1px #6d2b63;
				font-size: 1.25rem;
			}
		}
		p {
			font-size: 0.8rem;
			line-height: 1.25;
			opacity: 0.85;
			padding-top: 4px;
			@media (min-width: 768px) {
				font-size: 0.9rem;
			}
			@media (min-width: 1024px) {
				text-shadow: 1px 1px 1px rgba(0,0,0,0.4);
				font-size: 1rem;
			}
		}
		button {
			font-weight: 700;
			letter-spacing: 0.15em;
			padding: 0.6em 1.5em 0.6em;
			width: max-content;
			white-space: nowrap;
			font-size: 0.75rem;
			@media (min-width: 768px) {
				font-size: 0.9rem;
			}
			&:first-child {
				position: relative;
				/* scale: .9; */
				/* background: black; */
				z-index: 500;
				/* color: black; */
				
				
			}
		}
	}
	#text {
		position: absolute;
		bottom: 1.25rem;
		height: max-content;
		@media (min-width: 768px) {
			/* bottom: 14%; */
		}
		@media (min-width: 1024px) {
			/* top: 0; */
			bottom: 4%;

			left: 2rem;
		}
	}
`

const Hero = () => {
	return (
		<StyledHero>
			<img src={hero} alt="" className="md:order-2" />

			<div id="info" className="px-4 md:px-8 md:order-1">
				<div id="text">
					<h2>Now playing</h2>
					<p>
						In theaters and on HBO Max. Streaming <br /> through Aug 15.
					</p>
					<div className="text-sm flex space-x-4 mt-6">
						<button className="border-2 border-gray-100 rounded-full uppercase font-semibold flex items-center space-x-1">
							<div className="text-brand-bright-pink">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5 text-brand-pink"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
							<h4>watch</h4>
						</button>
						<button className="rounded-full uppercase font-semibold inline bg-brand-bright-pink bg-opacity-80 bg-brand-pink">
							more info
						</button>
					</div>
				</div>
			</div>
		</StyledHero>
	)
}

export default Hero
