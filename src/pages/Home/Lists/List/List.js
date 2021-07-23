import styled from 'styled-components'

const StyledList = styled.div`
	h3 {
		font-size: 115%;
		font-weight: 600;
		text-transform: capitalize;
		padding: 0 1rem;
		padding-bottom: .35rem;
		@media (min-width: 768px) {
			padding: 0 2rem;
			padding-bottom: .45rem;
			font-size: 120%;
		}
		@media (min-width: 1024px) {
			font-size: 138%;
		}
	}

	#imageContainer {
		display: flex;
		overflow-x: scroll;
		padding: 0 1rem;
		scrollbar-width: none;
		@media (min-width: 768px) {
			padding: 0 2rem;
			padding-bottom: 20px;
		}
		#image {
			min-width: 48%;
			@media (min-width: 768px) {
				min-width: ${(props) => props.size || '30%'};
			}
			@media (min-width: 1024px) {
				min-width: ${(props) => props.size || '20%'};
			}
		}
	}
`

const List = ({ title, art, size }) => {
	return (
		<StyledList size={size}>
			<h3>{title}</h3>
			<div id="imageContainer" className="gap-4">
				{art.map((image, i) => (
					<div key={i} id="image">
						<img src={image} alt="" className="rounded" />
					</div>
				))}
			</div>
		</StyledList>
	)
}

export default List
