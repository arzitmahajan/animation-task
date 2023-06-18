import React from 'react';
import Circle from './Circle';
import './Slideshow.css'
const Slideshow = (props) => {
    return (
        <div className='d-flex whole'>
            <div className='style'>
                <div className='my-4 mx-5'>
                    <h1 className='pt-font' style={{ "color": "white", "z-index": 2 }}>Award Categories</h1>
                </div>
                <div className='down'>
                    <div className='wrapping'>
                        <div className='pHead'>
                            <h2 className="line">Product Of Year</h2>
                            <h2 className="line">Brand Of Year</h2>
                            <h2 className="line">Product Launch Of Year</h2>
                        </div>
                    </div>
                    <div className='para'>
                        <p className="lineFade1">The Product of the Year Award celebrates the best products in the market in different categories of FMCG products and rewards manufacturers for quality, strategy, marketing and other parameters.</p>
                        <p className="lineFade2">The Brand of the Year is a distinctive and premier recognition for a brand recognized as a champion in its industry category based on current year market standing and consumer preference.</p>
                        <p className="lineFade3">The Product Launch of the Year Award celebrates the efforts of FMCG companies who continuously develop new products, brand extensions and packaging updates to meet the new industry standards and demands of the consumers.</p>

                    </div>
                </div>
            </div>
            <Circle logo={props.logo} product={props.product} />
        </div>
    )
}
export default Slideshow;
