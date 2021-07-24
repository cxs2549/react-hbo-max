import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { cover1, cover9 } from '../../assets/art'

const StyledAccount = styled.div`
	margin-top: 56px;
	padding: 0 1rem;
	color: white;
    @media (min-width: 768px) {
        padding: 0 2rem;
    }
	a {
		font-weight: 600;
		margin-right: 2rem;
		position: relative;
		&:first-child::after {
			content: '';
			position: absolute;
			left: 0;
			bottom: -14px;
			width: 100%;
			height: 3px;
			background-color: purple;
		}
	}
	#top {
		border-color: #353549;
        @media (min-width: 1024px) {
            margin-right: 56px;
        }
	}
`

const Account = () => {
	return (
		<StyledAccount>
			<div id="top" className="border-b pb-3">
				<div className="flex flex-col space-y-3 items-center justify-center py-8">
					<div className="h-32 w-32 border-2 rounded-full flex items-center justify-center text-5xl">
						CS
					</div>
					<span className="uppercase font-semibold text-purple-500">switch profiles</span>
				</div>
				<div>
					<Link to="/my-list" className="active">
						My List
					</Link>
					<Link to="/downloads">Downloads</Link>
					<Link to="/continue-watching">Continue Watching</Link>
				</div>
			</div>
			<div id="bottom">
				<div className="pt-2 cursor-pointer">
					<div className="flex items-center space-x-2 text-base">
						<div>Sort: Recently Added</div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
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
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
					<img src={cover1} className="py-5 rounded" alt="" />
					<img src={cover9} className="py-5 rounded" alt="" />
				</div>
			</div>
		</StyledAccount>
	)
}

export default Account
