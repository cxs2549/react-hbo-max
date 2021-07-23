import styled from 'styled-components'
import Hero from "./Hero/Hero"
import Lists from './Lists/Lists'
import List from './Lists/List/List'
import {
    cover1,
    cover2,
    cover3,
    cover4,
    cover5,
    cover6,
    cover7,
    cover8,
    cover9,
    cover10,
    cover11,
    cover12,
    cover13,
    cover14,
    cover15,
    cover16,
    cover17,
    cover18,
    cover19,
    cover20
} from '../../assets/art'

const StyledHome = styled.div`
    position: relative;
    z-index: 0;
`

const Home = () => {
    const justAdded = [cover1, cover2, cover3, cover4, cover5, cover13]
    const popular = [cover6, cover7, cover8, cover9, cover10]
    const newEps = [cover11, cover12, cover13, cover14]
    const trending = [cover15, cover16, cover17, cover18, cover19, cover20]
    return (
        <StyledHome className="h-screen">
            <Hero />
            <Lists>
                <List title="just added" art={justAdded} size="18%" />
                <List title="popular" art={popular} size="23%" />
                <List title="New Episodes this week" art={newEps} size="36%" />
                <List title="Trending Drama" art={trending} />
            </Lists>
        </StyledHome>
    )
}

export default Home
