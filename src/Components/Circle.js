import React from 'react';
import './Circle.css'
const Circle=(props)=> {
    
  return (
    <>
        <div className='circular'>
            <div className='placer'>
            </div>
            <div className='imageRotater'>
                <img className="product1" src ={props.product} width={"100px"} height={"100px"}/>
                <img className="product2" src ={props.product} width={"100px"} height={"100px"}/>
                <img className="product3" src ={props.product} width={"100px"} height={"100px"}/>
                <img className="product4" src ={props.product} width={"100px"} height={"100px"}/>
                <img className="product5" src ={props.product} width={"100px"} height={"100px"}/>
                <img className="product6" src ={props.product} width={"100px"} height={"100px"}/>
                <img className="product7" src ={props.product} width={"100px"} height={"100px"}/>
                <img className="product8" src ={props.product} width={"100px"} height={"100px"}/>
                <img className="product9" src ={props.product} width={"100px"} height={"100px"}/>
            </div>
            <div className="logo">
                <img className="logo-pic" src ={props.logo} width={"200px"} height={"200px"}/>
            </div>
        </div>
        
    </>

  ) 
}
export default Circle;
