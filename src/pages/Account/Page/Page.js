import styled from 'styled-components'

const StyledPage = styled.div`
	max-width: 1300px;
	margin: 0 auto;
	@media (min-width: 768px) {
		padding: 0 1.25rem;

	}
	@media (min-width: 1280px) {
		padding: 0;
	}
	#wrapper {
		grid-template-columns: 1.5fr 2fr;
		padding-bottom: 2rem;
		position: relative;
		transition: 400ms;
		@media (min-width: 640px) {
			grid-template-columns: 2fr 1.5fr;
		}
		@media (min-width: 768px) {
			grid-template-columns: 1fr;
		}
	}
	#imageWrapper {
		cursor: pointer;
		&::after {
			content: '';
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.1);
		}
	}
	svg {
		@media (min-width: 768px) {
			font-size: 1.5rem;
		}
		@media (min-width: 1280px) {
			font-size: 1.24rem;
		}
	}
	#info {
		font-size: 12px;
		@media (min-width: 540px) {
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
		height: 6px;
	}
`

const Page = ({ page }) => {
	return (
		<StyledPage className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 px-4 md:px-5 xl:px-0">
			{page.map((item, i) => (
				<div key={i} id="wrapper" className="grid grid-cols-2 md:grid-cols-1  gap-3">
					<div id="imageWrapper" className="relative">
						<img src={item.image} className="rounded" alt="" />
						<div className="absolute top-1 left-1 opacity-75 text-purple-700">
							<i class="fa fa-play" aria-hidden="true" />
						</div>
						<div className="absolute top-2 left-2">
							<i class="fa fa-play" aria-hidden="true" />
						</div>
						<div className="absolute bottom-1 left-1 right-0 rounded bg-blue-500 bg-opacity-30 durationBar">
							<div
								style={{ width: item.duration }}
								className="bg-gradient-to-r from-green-400 to-brand-pink h-full rounded-l opacity-80"
							/>
						</div>
					</div>
					<div id="info" className='md:mt-2'>
						<p className='leading-5'>{item.title}</p>
						{item.year && <p className="text-xs">({item.year})</p>}
					</div>
				</div>
			))}
		</StyledPage>
	)
}

export default Page
