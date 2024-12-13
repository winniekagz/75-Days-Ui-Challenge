
import OnScrollReveal from '../components/AnOnScrollReveal'
import About from './About'
import Home from './Home'

export default function Website() {
  return (
    <div>
       <OnScrollReveal ><Home/></OnScrollReveal>
       <OnScrollReveal ><About/></OnScrollReveal>
    </div>
  )
}
