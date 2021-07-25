import { NavLink } from 'react-router-dom'
import logo from '../../../assets/logo.png'
import styled from 'styled-components'

const StyledNav = styled.nav`
	height: 56px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: #fff;
	background-color: black;
	border-bottom: 1px solid #353549;
	padding: 0 1rem;
	position: relative;
	z-index: 3;
	max-width: 1320px;
	margin: 0 auto;
	@media (min-width: 1280px) {
		padding: 0;
	}
	svg {
		max-width: 24px;
		transition: all 250ms;
		transition-delay: 90ms;
	}

	#logo {
		filter: brightness(0) invert(1);
		left: 50%;
		transform: translateX(-50%);
		max-width: 120px;
	}
`

const Navigation = ({ open, clicked, close }) => {
	return (
		<StyledNav>
			<div className="space-x-5 xl:space-x-10 flex md:hidden xl:flex -ml-1">
				<div onClick={clicked} className="cursor-pointer">
					{!open ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 text-brand-pink"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					)}
				</div>
				<div className="hidden xl:block">
					<NavLink to="/search" activeClassName="text-brand-pink">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</NavLink>
				</div>
			</div>
			<NavLink onClick={close} id="logo" to="/" className="absolute">
				<img src={logo} alt="" />
			</NavLink>
			<div className="hidden xl:flex items-center space-x-10 cursor-pointer">
				<div>
					<button className="font-semibold p-2 border-2 rounded border-gray-300">Subscribe Now</button>
				</div>
				<div className="flex space-x-2">
					<NavLink
						to="/account/my-list"
						activeClassName="text-brand-pink"
						onClick={close}
					>
						<div className="flex items-center space-x-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
								/>
							</svg>
							<p className="font-semibold">My Account</p>
						</div>
					</NavLink>
				</div>
			</div>
			<div className="fixed h-14 bg-black bottom-0 left-0 w-full md:hidden">
				<div className="space-x-24 flex md:hidden items-center justify-center h-full">
					<NavLink to="/" end activeClassName="text-brand-pink" onClick={close}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
							/>
						</svg>
					</NavLink>
					<NavLink to="/search" activeClassName="text-brand-pink" onClick={close}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</NavLink>
					<NavLink
						to="/account/my-list"
						activeClassName="text-brand-pink"
						onClick={close}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
							/>
						</svg>
					</NavLink>
				</div>
			</div>
		</StyledNav>
	)
}

export default Navigation
