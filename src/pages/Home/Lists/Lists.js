import styled from 'styled-components'

const StyledList = styled.div`
	background-color: transparent;
	padding: 1.5rem 0;
	color: white;
	display: grid;
	gap: 1.25rem;
	padding-bottom: 1rem;
	max-width: 1320px;
	margin: 0 auto;
`

const Lists = ({ children }) => {
	return <StyledList>{children}</StyledList>
}

export default Lists
