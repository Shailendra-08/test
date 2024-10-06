
import './App.css'
import MainLayout from './components/BlockImage/MainLayout'
import Feature from './components/feature/Feature'
import Footer from './components/Footer/Footer'
import Gap from './components/gap/Gap'
import Hero from './components/Hero/Hero'
import NavBar from './components/Navbar/Navbar'
import SignupForm from './components/signup/SignupForm'
import StylishPhotos from './components/Stylish/StylishPhotos'


function App() {


  return (
    <>
    <NavBar/>
    <Hero/>
    <Feature/>
    <Gap/>
    <MainLayout/>
    <StylishPhotos />
    <Gap/>
    <SignupForm/>
    <Footer/>
    </>
  )
}

export default App
