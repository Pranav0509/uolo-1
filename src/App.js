import Header from './components/Header'
import About from './components/About'
import LearningPrograms from './components/LearningPrograms'
import Final from './components/Final'

import './App.css'
import Management from './components/Management'

const App = () => (
  <switch>
    <Header />
    <About />
    <LearningPrograms />
    <Management/>
    <Final />

  </switch>
)

export default App
