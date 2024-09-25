import './App.css'
import { TwitterFollowCard } from './Components/TwitterFollowCard'

export function App() {
  return (
    <section className='App'>
      <TwitterFollowCard isFollowing={true} username="midudev" name="Miguel Ángel Durán" />
      <TwitterFollowCard isFollowing={false} username="elonmusk" name="Elon Musk" />
      <TwitterFollowCard isFollowing={true} username="incibe" name="Instituto Nacional de ciberseguridad" />
      <TwitterFollowCard isFollowing={false} username="react" name="React" />
    </section>
  )
}