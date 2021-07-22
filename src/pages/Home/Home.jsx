import styled from 'styled-components'
import Hero from "./Hero/Hero"

const StyledHome = styled.div`
    position: relative;
    z-index: -1;
`

const Home = () => {
    return (
        <StyledHome className="h-screen">
            <Hero />
        </StyledHome>
    )
}

export default Home
