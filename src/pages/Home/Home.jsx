import styled from 'styled-components'
import Hero from './Hero/Hero'
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
import Hubs from '../../components/ui/Hubs/Hubs'
import { hub1, hub2, hub3, hub4, hub5, hub6, hub7, hub8, hub9, hub10 } from '../../assets/hubs'

const StyledHome = styled.div`
	position: relative;
	z-index: 0;
	
	height: 100%;
#hubs {
  max-width: 1320px;
	margin: 0 auto;
}
`

const Home = () => {
	const justAdded = [ cover1, cover2, cover3, cover4, cover5, cover13 ]
	const popular = [ cover6, cover7, cover8, cover9, cover10 ]
	const newEps = [ cover11, cover12, cover13, cover14 ]
	const trending = [ cover15, cover16, cover17, cover18, cover19, cover20 ]
	const hubs = [ hub1, hub2, hub3, hub4, hub5, hub6, hub7, hub8, hub9, hub10 ]
	return (
		<StyledHome className="h-screen">
			<Hero />
			<Lists>
				<List title="just added" art={justAdded} size="18%" />
				<List title="popular" art={popular} size="23%" />
				<List title="New Episodes this week" art={newEps} size="36%" />
				<List title="Trending Drama" art={trending} />
			</Lists>
			<div id="hubs">
				<h3 className="text-white mb-1">HBO Hubs</h3>
				<Hubs hubs={hubs} />
			</div>
		</StyledHome>
	)
}

export default Home
