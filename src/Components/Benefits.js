import React from 'react';
import './Benefits.css'
const Benefits=(props)=> {
  return (
    <>
      <div className='mx-5'>
          <div className='board mx-3'>{props.text}</div>
          <div className='photo'>
              <figure className='swing'>
                  <img src={props.pic}/>
              </figure>
          </div>
          <div className='pfont mx-3'>{props.text2}</div>
        </div>
    </>

  ) 
}
export default Benefits;
