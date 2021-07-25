import styled from 'styled-components'

const StyledPage = styled.div`
	max-width: 1320px;
	margin: 0 auto;
	#imageWrapper {
		cursor: pointer;
		&::after {
			content: '';
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.3);
		}
	}
	#wrapper {
		grid-template-columns: 1.5fr 2fr;
		padding-bottom: 2rem;
		@media (min-width: 768px) {
			grid-template-columns: 3fr 4fr;
		}
	}
	#info {
		font-size: 12px;
		@media (min-width: 768px) {
			font-size: 13px;
		}
		@media (min-width: 1280px) {
			font-size: 1rem;
		}
	}
	img {
		position: relative;
	}
	.durationBar {
		bottom: -.75rem;
		height: 5px;
	}
`

const Page = ({ page }) => {
	return (
		<StyledPage className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 md:px-5 xl:px-0">
			{page.map((item, i) => (
				<div key={i} id="wrapper" className="grid grid-cols-2 gap-3">
					<div id="imageWrapper" className="relative">
						<img src={item.image} className="rounded" alt="" />
						<div className="absolute top-1 right-1 opacity-75 text-purple-700">
							<i class="fa fa-play" aria-hidden="true" />
						</div>
						<div className="absolute top-2 right-2 shadow">
							<i class="fa fa-play" aria-hidden="true" />
						</div>
						<div className="absolute bottom-1 left-1 right-0 rounded bg-blue-500 bg-opacity-30 h-1 durationBar">
							<div
								style={{ width: item.duration }}
								className="bg-gradient-to-r from-green-400 to-brand-pink h-full rounded-l opacity-80"
							/>
						</div>
					</div>
					<div id="info">
						<p>{item.title}</p>
						{item.year && <p className="text-xs">({item.year})</p>}
						{item.original && <span className="opacity-70 xl:text-xs">HBO</span>}
					</div>
				</div>
			))}
		</StyledPage>
	)
}

export default Page
