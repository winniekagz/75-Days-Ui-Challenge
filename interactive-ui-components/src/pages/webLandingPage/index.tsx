
import Home from './Home'
import Classes from './Classes'
import About from './About'
import BMICalculator from '../userOnboarding/forms/BMICalculator'

export default function LandingPage() {
  return (
    <div>
      <Home/>
      <BMICalculator/>
      <About/>
      <Classes/>
    </div>
  )
}
