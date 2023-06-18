import React ,{useRef,useEffect,useState}from 'react';
import './Fall.css'
import { useInView } from 'react-intersection-observer';
const Fall=(props)=> {
  const{ref:fallRef,inView:fallVisible,entry2} = useInView();
  console.log(fallRef);
  return (
    <>
        <div ref={fallRef} className='wrap'>
            <h2 className='pt-font'>BENEFITS</h2>
            <div className={`${fallVisible?"panel1":''}`}><span className='sp'>EXPOSURE</span></div>
            <div className={`${fallVisible?"panel2":''}`}><span className='sp'>POSITIVITY</span></div>
            <div className={`${fallVisible?"panel3":''}`}><span className='sp'>RECOGNITION</span></div>
            <div className={`${fallVisible?"panel4":''}`}><span className='sp'>NETWORKING</span></div>
            <div className={`${fallVisible?"panel5":''}`}><span className='sp'>DIFFERENTIATION</span></div>
            <div className={`${fallVisible?"panel6":''}`}><span className='sp'>SHOWCASING</span></div>
            <div className={`${fallVisible?"panel7":''}`}><span className='sp'>INCREASE SALES</span></div>
            <div className={`${fallVisible?"panel8":''}`}><span className='sp'>PR</span></div>
            <div className={`${fallVisible?"panel9":''}`}><span className='sp'>EXCELLENCE</span></div>
        </div>
    </>

  ) 
}
export default Fall;
