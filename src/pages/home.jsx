import HomeProfile from '../components/home/home-profile'
import HomeCarousel from '../components/home/home-carousel'
import HomeSkills from '../components/home/home-skills'
import HomeFormation from '../components/home/home-formation'
import HomeReact from '../components/home/home-react'


const Home = () => {
  return (
    <main>
      <HomeProfile />
      <HomeCarousel />
      <HomeSkills />
      <HomeReact />
      <HomeFormation />
    </main>
  )
}

export default Home