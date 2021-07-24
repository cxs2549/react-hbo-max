import styled from 'styled-components'

const StyledList = styled.div`
	background-color: transparent;
	padding: 1.5rem 0;
	color: white;
	display: grid;
	gap: 1.25rem;
	padding-bottom: 1rem;
`

const Lists = ({ children }) => {
	return <StyledList>{children}</StyledList>
}

export default Lists
