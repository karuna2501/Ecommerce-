import React, { useEffect, useState } from 'react'
import "./Content.css"
import { FaEye, FaHeart, FaGreaterThan, FaLessThan } from 'react-icons/fa';
import image from './product images/Apple.jpg';
import slideimage1 from './Untitled 1.png';
import slideimage2 from './Untitled 2.png';
import { FaIndianRupeeSign } from 'react-icons/fa6';

const Content = ({showMenuBar}) => {
    const [imageSlideNo,setImageSlideNo] = useState(0)
    let imageSlider = [slideimage1,slideimage2]

    const SliderImageChange = () =>{
        if(imageSlideNo == (imageSlider.length)-1){
            setImageSlideNo(0);
        }
        else{
            setImageSlideNo(imageSlideNo+1)
        }
    }

    setTimeout(SliderImageChange,3000);

    return (
        <>
        <center>
        <div class="slider1">
            <img src={imageSlider[imageSlideNo]} />
        </div>
      </center>
        <div className='card-container' >
            <div className='card'>
                <FaEye className='eyeIcon'/>
                <FaHeart className='heartIcon'/>
                <img src={image} alt='image 1'/> <br/>
                <div className='productSpec'>
                    <h4>Name :</h4><h4>Apple   1kg</h4><br/>
                    <h4>Price  :</h4><h4><FaIndianRupeeSign />120</h4>
                </div>
            </div>

            <div className='summerCard'>
                <FaEye className='eyeIcon'/>
                <FaHeart className='heartIcon'/>
                <img src={image} alt='image 1'/> <br/>
                <div className='productSpec'>
                    <h4>Name :</h4><h4>Apple   1kg</h4><br/>
                    <h4>Price  :</h4><h4><FaIndianRupeeSign />120</h4>
                </div>
            </div>
           <div className='winterCard'>
                <FaEye className='eyeIcon'/>
                <FaHeart className='heartIcon'/>
                <img src={image} alt='image 1'/><br/>
                <div className='productSpec'>
                    <h4>Name</h4><br/>
                    <h4>Price</h4>
                </div>
            </div> 
        </div>
        </>
    )
}

export default Content;