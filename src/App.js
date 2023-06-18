import './App.css';
import React  from 'react'
import Benefits from './Components/Benefits';
import pic from './Assets/card.png'
// import pic2 from './Assets/card2.png'
import pic3 from './Assets/casrd3.png'
import pic4 from './Assets/card4.png'
import product from './Assets/product.png'
import logo from './Assets/logo.png'
import bgVideo from './Assets/bgVideo.mp4'
import Fall from './Components/Fall';
import Slideshow from './Components/Slideshow';
export default function App() {

  return (
    <div  data-speed="-5" className='main'>
      <video data-speed="-2" className="first-ved" autoPlay loop muted>
        <source src = {bgVideo} type="video/mp4"/>
      </video> 
      <video data-speed="-6" className="second-ved" autoPlay loop muted>
            <source src = {bgVideo} type="video/mp4"/>
      </video> 
      <Slideshow logo={logo} product={product} />
      <div className='cont'>
        <div className='container'>
          
          <Fall />
          <div  className='d-flex sectioning flex-row'>
            <Benefits  text2={"Awards trophy"} text={"PRIDE"} pic={pic} />
            <Benefits text2={"Certificate of excellence"} text={"PROMOTION"} pic={pic4} />
            <Benefits text2={"Digital seal"} text={"PRESTIGE"} pic={pic3} />
            <Benefits text2={"Coffee table book"} text={"MOTIVATION"} pic={pic4} />
          </div>
        </div>
      </div>
      <div style={{ "height": "500px" }}></div>
 
    </div>
  )
}
