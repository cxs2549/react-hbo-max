import { NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components'

const StyledAccount = styled.div`
margin-bottom: 60px;
	margin-top: 56px;
	color: white;
	position: relative;
	z-index: 1;
	background-color: #e056fd;
background-image: linear-gradient(315deg, #561f61 0%, #000000 74%);
	height: 100%;
	padding-bottom: 60px;
	height: 100vh;
	@media (min-width: 640px) {
	}
	#wrapper {
		max-width: 1300px;
		margin: 0 auto;
	}
	a {
		opacity: .5;
		position: relative;
		&:hover {
			opacity: 1;
		}
	}
	.active {
		font-weight: 600;
		opacity: 1;
		position: relative;
		&::after {
			content: "";
			position: absolute;
			left: 0;
			bottom: -14px;
			width: 100%;
			height: 3px;
			background-color: #ff00e4;
		}
	}
	#top {
		padding: 0 1rem;
		height: 250px;
		position: relative;
		z-index: 2;
		max-width: 100%;
			margin: 0 auto;
		@media (min-width: 768px) {
			height: 300px;
			margin-left: -56px;
			padding: 0 1.25rem;
		}
		
		@media (min-width: 1280px) {
			margin-left: 0;
			padding: 0;
		
		}
		@media (min-width: 1367px) {

		}
		#innerTop {
			border-color: #353549;
			height: 100%;
			top: 2.75rem;
			left: 0;
			width: 100%;
			transition: height 200ms;
			
			@media (min-width: 768px) {
				top: 3.5rem;
				height: 300px;
			}
			span {
				font-size: 90%;
				color: #b535f5;
				&:hover {
					color: white;
				}
			}
			#topBottom {
				width: 100%;
				padding-bottom: 2rem;
				height: 74px;
				@media (min-width: 768px) {
					margin-left: 56px;
					
				}
				@media (min-width: 1280px) {
					margin-left: 0;
				}
				#links {
					border-color: #353549;
					display: flex;
					justify-content: space-between;
					@media (min-width: 470px) {
						justify-content: flex-start;
						gap: 2.5rem;
					}
				}
			}
		}
	}
	#profileButton {
		width: 100%;
		@media (min-width: 1024px) {

			margin-left: 28px;
		}
		@media (min-width: 1280px) {
			margin-left: 0;
		}
	}
	#bottom {
		position: relative;
		z-index: 1;
	}
`

const Account = () => {
	return (
		<StyledAccount>
			<div id="wrapper">
				<div id="top" className="pb-3">
					<div id="innerTop" className="">
						<div id="profileButton" className="flex flex-col space-y-3 items-center justify-center py-8">
							<div className="h-20 w-20 md:h-32 md:w-32 border-2 rounded-full flex items-center justify-center text-3xl md:text-5xl cursor-pointer transform hover:scale-110 transition duration-200">
								CS
							</div>
							<span className="uppercase font-semibold text-purple-500 cursor-pointer hover:text-purple-200">
								switch profiles
							</span>
						</div>
						<div id="topBottom" className="">
							<div
								id="links"
								className="border-b pb-3 whitespace-nowrap text-sm md:text-base"
							>
								<NavLink to="my-list" activeClassName="active">
									My List
								</NavLink>
								<NavLink to="downloads" activeClassName="active">
									Downloads
								</NavLink>
								<NavLink activeClassName="active" to="continue-watching">
									Continue Watching
								</NavLink>
							</div>
							<div className="pt-2 cursor-pointer">
								<div className="flex items-center space-x-1 text-sm md:text-base pb-4">
									<div className="opacity-90">Sort: Recently Added</div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-4 w-4"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="bottom" className="pt-2 md:pt-5">
					<Outlet />
				</div>
			</div>
		</StyledAccount>
	)
}

export default Account
