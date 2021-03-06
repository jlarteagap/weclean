import React from 'react'
import {
  Header,
  Slide,
  HowWork,
  Testimonial,
  Services,
  Banner,
  Footer,
  About
} from './components'
import { SplashScreen } from './components/utils/SplashScreen'
import { AppProvider } from './context/AppContext'

function App() {
  return (
    <AppProvider>
      <div className="App">
        <div className="main">
          <SplashScreen />
          <Header />
          <Slide />
          <About />
          <HowWork />
          <Testimonial />
          <Services />
          <Banner />
          <Footer />
        </div>
      </div>
    </AppProvider>
  )
}

export default App
