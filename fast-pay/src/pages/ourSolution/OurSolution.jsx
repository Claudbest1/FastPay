import './ourSolution.css'
import HeroImage from "../../images/Group 196hero-bg.png"
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer/Footer'

const OurSolution = () => {
  return (
    
       // Beginning of Hero section 
    <main className='ourSolution'>

      <header className='ourSolution__hero'>
        <Navbar />
        <div className="ourSolution__text">
          <h1>Send & Receive Money Globally.</h1>
          <h3>Make local and international payments, receive money swiftly, and manage multiple currencies on one account.</h3>
          <button className='header__btn'>Create Free Account</button>
        </div>
    </header>
      {/* //End of Hero section */}
      <Footer/>
      
    </main>
    
  )
}

export default OurSolution