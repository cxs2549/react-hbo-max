import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { hub1, hub2, hub3, hub4, hub5, hub6, hub7, hub8, hub9, hub10 } from '../../../assets/hubs'

const StyledDrawer = styled.div`
	position: fixed;
	left: ${({ open }) => (open ? '0' : '-100%')};
	top: 10;
	max-width: 340px;
	height: 94%;
	background-color: black;
	transition: left 0.35s ease-in;
	transition-delay: 200ms;
	z-index: 9;
	min-height: 0 !important; /* added */
	overflow-y: auto;
	scrollbar-width: none;
	padding: 0;
	z-index: 20;
	padding-bottom: 1rem;
	@media (min-width: 768px) {
		max-width: 400px;
		left: ${({ open }) => (open ? '56px' : '-100%')};
	}
	@media (min-width: 1280px) {
		left: ${({ open }) => (open ? '0' : '-100%')};
		
	}
	nav {
		height: min-content;
		color: white;
		width: 100%;
		display: flex;
		flex-flow: column;
		align-items: flex-start;
		padding: 0 !important;
		
		.active {
			opacity: .98;
			color: black;
			background-color: white;
		}
		a {
			padding: 12px 1.25rem;
			font-size: 1.25rem;
			font-weight: 300;
			width: 100%;
			text-transform: capitalize;
			transition: all 150ms;
			transition-delay: 100ms;
			@media (min-width: 1280px) {
				padding-left: 1.25rem;
			}
		

			&:hover {
				background-color: #ffffffd7;
				color: black;
			
			}
			&:is(:nth-child(7), :nth-child(26)) {
				border-bottom: 1px solid #353549;
			}
			@media (min-width: 768px) {
				font-size: 1.7rem;
			}
		}
	}
`
const StyledHubs = styled.div`
	background-color: black;
	border-top: 1px solid #353549;
	width: 100%;
	padding: 1rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

	padding-bottom: 4rem;
	@media (min-width: 768px) {
		padding-bottom: 0;
	}

	#imageWrapper {
		cursor: pointer;
		min-width: 48%;
		height: 76px;
		padding: 4px 32px;
		border-radius: 99999px;
		margin-bottom: 1rem;
		background-color: #1fd1f9;
		background-image: linear-gradient(315deg, #1fd1f9 0%, #B535F5 74%);
		position: relative;
		img {
			height: 90%;
			width: 90%;
			object-fit: contain;
			padding: 0;
		}
		#imageBG {
			position: absolute;
			left: 50%;
			right: 0;
			top: 50%;
			transform: translate(-50%, -50%);
			height: 92%;
			width: 97%;
			background-color: black;
			display: grid;
			place-items: center;
		}
	}
`

const Drawer = ({ open, clicked }) => {
	const links1 = [
		{ name: 'series', to: '/series' },
		{ name: 'movies', to: '/movies' },
		{ name: 'originals', to: '/originals' },
		{ name: 'just added', to: '/just_added' },
		{ name: 'last chance', to: '/last_chance' },
		{ name: 'coming soon', to: '/coming_soon' },
		{ name: 'trending now', to: '/trending_now' }
	]
	const links2 = [
		'action',
		'animation',
		'comedy',
		'crime',
		'docuseries',
		'drama',
		'fantasy & sci-fi',
		'horror',
		'international',
		'kids & family',
		'latino',
		'music',
		'news/talk',
		'reality',
		'romance',
		'shorts',
		'sports',
		'suspense'
	]
	const hubs = [ hub1, hub2, hub3, hub4, hub5, hub6, hub7, hub8, hub9, hub10 ]
	return (
		<StyledDrawer open={open}>
			<nav>
				<NavLink to="/" end activeClassName="active" onClick={clicked}>
					Home
				</NavLink>
				{links1.map((link) => (
					<NavLink to={`genre/${link.to}`} activeClassName="active" onClick={clicked}>
						{link.name}
					</NavLink>
				))}
				{links2.map((link, i) => (
					<NavLink key={i} to={`genre/${i}`} activeClassName="active" onClick={clicked}>
						{link}
					</NavLink>
				))}
				<NavLink to="/genre/audio-description" activeClassName="active" onClick={clicked}>
					Audio Description
				</NavLink>
				<StyledHubs>
					{hubs.map((hub, i) => (
						<div key={i} id="imageWrapper">
							<div className=" rounded-full h-full" id="imageBG">
								<img src={hub} alt="" />
							</div>
						</div>
					))}
				</StyledHubs>
			</nav>
		</StyledDrawer>
	)
}

export default Drawer
