import styled from 'styled-components'

const StyledList = styled.div`
	background-color: black;
	padding: 1.5rem 0;
	color: white;
	display: grid;
	gap: 1.25rem;
	margin-bottom: 56px;
	
	
`

const Lists = ({ children }) => {
	return <StyledList>{children}</StyledList>
}

export default Lists
