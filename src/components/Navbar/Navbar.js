import { useState } from 'react'
import styled from 'styled-components'
import Overlay from './Drawer/Overlay/Overlay'
import Drawer from './Drawer/Drawer'
import Sidebar from './Sidebar/Sidebar'
import Navigation from './Navigation/Navigation'

const StyledHeader = styled.header`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
`

const Navbar = () => {
	const [ isOpen, setIsOpen ] = useState(false)

	const handleClick = () => {
		setIsOpen(!isOpen)
		if (!isOpen) {
			document.body.classList.add('modal-open')
		} else {
			document.body.classList.remove('modal-open')
		}
	}

	const handleClose = () => {
		setIsOpen(false)
		document.body.classList.remove('modal-open')
	}

	return (
		<StyledHeader>
			<Navigation open={isOpen} clicked={handleClick} close={handleClose} />
			<Sidebar open={isOpen} clicked={handleClick} close={() => setIsOpen(false)} />
			<Overlay open={isOpen} clicked={handleClick} />
			<Drawer open={isOpen} clicked={handleClick} />
		</StyledHeader>
	)
}

export default Navbar
