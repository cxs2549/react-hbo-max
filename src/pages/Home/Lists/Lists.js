import styled from 'styled-components'

const StyledList = styled.div`
	background-color: transparent;
	padding: 1.5rem 0;
	color: white;
	display: grid;
	gap: 1.25rem;
	padding-bottom: 1rem;
	max-width: 1366px;
	margin: 0 auto;
	position: relative;
	padding-top: 2.5rem;

	@media (min-width: 768px) {
		padding-top: 3rem;
	}
	@media (min-width: 1024px) {
		padding-top: 4rem;
	}
	@media (min-width: 1280px) {
		padding-top: 5rem;
	}
`

const Lists = ({ children }) => {
	return <StyledList>{children}</StyledList>
}

export default Lists
