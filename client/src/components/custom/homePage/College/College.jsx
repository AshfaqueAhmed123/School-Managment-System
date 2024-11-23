import React from 'react'
import "./College.css"
import gallery_1 from "../../../../assets/gallery-1.png"
import gallery_2 from "../../../../assets/gallery-2.png"
import gallery_3 from "../../../../assets/gallery-3.png"
import gallery_4 from "../../../../assets/gallery-4.png"
import white_arrow from "../../../../assets/white-arrow.png"



const College = () => {
  return (
    <div className='college' id='college'>
        <div className="gallery">
            <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" />
            <img src={gallery_3} alt="" />
            <img src={gallery_4} alt="" />
        </div>
        <button className='btn dark-btn m-auto'>See more here<img className='w-[30px] ml-3' src={white_arrow} alt="" />
        </button>
    </div>
  )
}

export default College