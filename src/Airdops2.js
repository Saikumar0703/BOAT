import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star';
import VerifiedIcon from '@mui/icons-material/Verified';
import TollSharpIcon from '@mui/icons-material/TollSharp';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import CircleIcon from '@mui/icons-material/Circle';
import WorkIcon from '@mui/icons-material/Work';
import Api2 from './Api2'
import PagenotFound from './PagenotFound'



export default function Airdops1() {


  const [data,setData]= useState(Api2)

 

  const [isVideoPlaying, setVideoPlaying] = useState(false);

  // Function to handle video hover
  const handleVideoHover = () => {
    setVideoPlaying(true)
    console.log(setVideoPlaying)
  };

  // Function to handle video mouse leave
  const handleVideoLeave = () => {
    setVideoPlaying(false);
  };
 

  


    
  return (
  
  <div className='container-fluid d-flex flex-wrap ' >
      <div className=' col-xl-6 col-lg-6 col-md-6  col-sm-12  col-12  d-flex container-fixed  align-items-center' >

        <div className=' d-flex flex-column justify-content-center align-items-center my-4' style={{gap:"10px"}} >
            <button><img  className='rounded' src='https://www.boat-lifestyle.com/cdn/shop/products/ivory-white_72x.png?v=1639466536'/></button>
            <button><img  className='rounded' src='https://www.boat-lifestyle.com/cdn/shop/files/131-6_72x.jpg?v=1702008197'/></button>
            <button><img  className='rounded' src='https://www.boat-lifestyle.com/cdn/shop/products/FeatureImagesAD1314XChargecopy4_72x.jpg?v=1702008197'/></button>
            <button><img  className='rounded' src='https://www.boat-lifestyle.com/cdn/shop/products/ad131FIAD131TypeCcopy4_72x.jpg?v=1702008197'/></button>
            <button><img  className='rounded' src='https://www.boat-lifestyle.com/cdn/shop/products/FeatureImagesAD131BV5.0copy4_72x.jpg?v=1702008197'/></button>
            <button><img  className='rounded' src='https://www.boat-lifestyle.com/cdn/shop/products/FeatureImagesAD131VAcopy4_72x.jpg?v=1702008197'/></button>
            
            </div>

        <div className='container-fixed d-flex flex-wrap justify-content-start align-items-center' >
           <img className=' img-fluid rounded  ' src='https://www.boat-lifestyle.com/cdn/shop/products/ivory-white_600x.png?v=1639466536'/>
        </div>
        </div>

        <div className='container-fluid col-xl-6 col-sm-12 col-lg-6 col-md-6   col-12 d-flex flex-wrap ' >
        <div>
        <StarIcon className='mx-2 ' style={{color:"#f4c730",fontSize:"1.2rem"}}/><span style={{fontSize:"0.7em"}}>4.1 | 1236 reviews</span><VerifiedIcon style={{color:"green",height:"0.9rem"}}></VerifiedIcon>
        <h1 className='mx-2' style={{fontFamily:"sans-serif",fontWeight:"bold"}}>Airdops 131</h1>
        <p className='mx-2' style={{fontFamily:"sans-serif"}}>Wireless Earbuds with upto 60 Hours Playback, 13mm Drivers, IWP Technology, 650mAh Charging </p>
        
        <h2 className='d-flex flex-wrap justify-content-start align-items-center amount1 text-success mx-2'> $899<small className='amount3'> $2,990.00</small>
        </h2>
        <small className='d-flex flex-wrap justify-content-start align-items-center amount2 mx-2 fw-bold my-2'>60% Off</small>
        
        <span className='d-flex flex-wrap justify-content-start align-items-center mx-2'><b>Choose your color:</b> lvory White </span><br></br>
        <CircleIcon className='mx-1' style={{fontSize:"40px",color:"gray"}}></CircleIcon>
        <CircleIcon className='mx-1' style={{fontSize:"40px",color:"black"}}></CircleIcon>
        <CircleIcon className='mx-1' style={{fontSize:"40px",color:"pink"}}></CircleIcon>
        <CircleIcon className='mx-1' style={{fontSize:"40px",color:"#e52b50"}}></CircleIcon>
        <CircleIcon className='mx-1' style={{fontSize:"40px",color:"lightblue"}}></CircleIcon>
        <CircleIcon className='mx-1' style={{fontSize:"40px",color:"red"}}></CircleIcon>
        <CircleIcon className='mx-1' style={{fontSize:"40px",color:"chocolate"}}></CircleIcon>
        

         </div>
         
         <div>
          <span className='d-flex mx-2 '>Delivered to: 122008</span><button className='mx-5 ' style={{width:"100px",height:"40px",borderRadius:"8px"}}>Change</button>
          <hr></hr>
          <span className='d-flex mx-2'><b><small style={{color:"green"}}>Free Delivery </small>| <small>Fatest Delivery by Tuesday, December</small></b></span>
          <span className='d-flex mx-2'>If you Order within <b style={{color:"red"}}>22hrs 15mins</b> </span>
          <span className='d-flex align-items-center py-2' style={{color:"#395b92"}}><small>Get A Customized Engraving And Make it Unmistakably Yours.</small></span>
          <button className='btn bg-black btn btn-primary my-4 mx-1' style={{width:"400px"}}><WorkIcon className='mx-2' style={{color:"white"}}></WorkIcon>Add To Cart</button>
         </div>

       
        

        </div>
      

      

        <div className='container-fluid d-flex flex-wrap justify-content-center align-items-center'>

<div className='d-flex  flex-column justify-content-center align-items-center m-5' >
  <img src='https://www.boat-lifestyle.com/cdn/shop/files/Group_334305_small.svg?v=1682336123' style={{width:"180px"}} />
  <b>1 year Warranty</b>
</div>

<div className='category img3 d-flex  flex-column justify-content-center align-items-center m-5'>
  <img src='https://www.boat-lifestyle.com/cdn/shop/files/Group_334304_small.svg?v=1682336123' style={{width:"180px"}} />
  <b>7-days Replacement</b>
</div>

<div className='category img3 d-flex  flex-column justify-content-center align-items-center m-5' >
  <img src='https://www.boat-lifestyle.com/cdn/shop/files/Group_334303_small.svg?v=1682336123' style={{width:"180px"}} />
  <b>Free Shipping</b>
</div>

  <div className='category  img3 d-flex  flex-column justify-content-center align-items-center m-5' >
  <img src='https://www.boat-lifestyle.com/cdn/shop/files/Group_334302_small.svg?v=1682336123' style={{width:"180px"}} />
  <b>GST Billing</b>
</div>


</div>



<div className=' video d-flex flex-wrap justify-content-center align-items-center'>

          <video className='img-fluid col-xl-1 mb-1'
            autoPlay={true}
            loop={true}
            muted={true}
            controls={false}
            onMouseEnter={handleVideoHover}
            onMouseLeave={handleVideoLeave} >
            <source src='https://www.boat-lifestyle.com/cdn/shop/files/quinn_pg65jn75zh6mmu8d3gm7crxg.mp4' type='video/mp4'/>
            </video>

          <video className='col-xl-2 mb-2' autoPlay={true}
            loop={true}
            muted={true}
            controls={false}>
            <source src='https://www.boat-lifestyle.com/cdn/shop/files/quinn_q2khc1ta6ipyptu6qrorhjt7.mp4' type='video/mp4' />
            </video>

          <video className='col-xl-2 mb--2' autoPlay={true}
            loop={true}
            muted={true}
            controls={false}>
            <source src='https://www.boat-lifestyle.com/cdn/shop/files/quinn_uv2kbs6z3i0y9h5yryddiapg.mp4' type='video/mp4' />
          </video>

          <video className='col-xl-2 mb-2' autoPlay={true}
            loop={true}
            muted={true}
            controls={false}>
            <source src='https://www.boat-lifestyle.com/cdn/shop/files/quinn_ggcjtzeu4ymi051nsli76xaa.mp4' type='video/mp4' />
          </video>
  

        </div>

       

        <PagenotFound/>
        
    </div>
    
  )
  }
