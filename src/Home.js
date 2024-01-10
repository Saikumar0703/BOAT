import React, { useState, useEffect } from 'react';
import Snowfall from 'react-snowfall';
import myapi from './Api';
import StarIcon from '@mui/icons-material/Star';
import VerifiedIcon from '@mui/icons-material/Verified';
import TollSharpIcon from '@mui/icons-material/TollSharp';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Nav from './Nav';
import { useNavigate } from 'react-router-dom';
import PagenotFound from './PagenotFound';



export default function Home() {
  
  const navigate=useNavigate()

  const [data, setData] = useState(myapi)

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
    <div className="mx-auto" style={{ position: 'relative', overflow: 'hidden' }}>
      <Snowfall snowflakeCount={1500} style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 1,filter: 'blur(1px)'}} />

      <nav>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval={1000}>
              <img src="https://www.boat-lifestyle.com/cdn/shop/files/WEB_SHOPNOW_1440x.jpg?v=1701927737" className="d-block w-100" alt="Boat1" />

            </div>
            <div className="carousel-item" data-bs-interval={2000}>
              <img src="https://www.boat-lifestyle.com/cdn/shop/files/Lunar_TIgon_WEB_Banner_1440x.jpg?v=1701333079" className="d-block w-100" alt="Boat2" />
            </div>
            <div className="carousel-item " data-bs-interval={2000}>
              <img src="https://www.boat-lifestyle.com/cdn/shop/files/Ion_Banner_WEB_1440x.gif?v=1701695553" className="d-block w-100" alt="Boat3" />
            </div>
            <div className="carousel-item" data-bs-interval={2000}>
              <img src="https://www.boat-lifestyle.com/cdn/shop/files/Crest-banner-dark-desktop_1600x.png?v=1699269025" className="d-block w-100" alt="Boat4" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </nav>

      <div className='container-fluid'>

        <div className='cards container-fluid '>


          <h3 className='ps-3 py-4'>Explore <b>Bestsellers</b></h3>
        </div>

        <div className=' video d-flex flex-wrap  justify-content-between align-items-center'>

          <video className='img-fluid col-xl-2 '
         
            autoPlay={true}
            loop={true}
            muted={true}
            controls={false}
            onMouseEnter={handleVideoHover}
            onMouseLeave={handleVideoLeave} >
            <source src='https://www.boat-lifestyle.com/cdn/shop/files/quinn_RUxbhR7CvjkNtlFUDxgw9.mp4' alt="./About.js" type='video/mp4' />
            <span>Smart Watch</span>
          </video>

          

          <video className='col-xl-2 ' autoPlay={true}
            loop={true}
            muted={true}
            controls={false}>
            <source src='https://www.boat-lifestyle.com/cdn/shop/files/quinn_Bejc8URjU1NSXdhabLCmD.mp4' type='video/mp4' />

          </video>

          <video className='col-xl-2 ' autoPlay={true}
            loop={true}
            muted={true}
            controls={false}>
            <source src='https://www.boat-lifestyle.com/cdn/shop/files/quinn_OyJHanx4QSdUN3OVGTO7C.mp4' type='video/mp4' />
          </video>

          <video className='col-xl-2' autoPlay={true}
            loop={true}
            muted={true}
            controls={false}>
            <source src='https://www.boat-lifestyle.com/cdn/shop/files/quinn_CpsRIdJWtpXyFN3enwbXd.mp4' type='video/mp4' />
          </video>

        </div>


        <h3 className='mx-3'>Today's <b>Offers</b> </h3>






        <div className='container-fluid'>
          <img src="https://www.boat-lifestyle.com/cdn/shop/files/Strip_Web_copy_1_1600x.png?v=1701415389" className=' rounded img-fluid' />
        </div>


        <div className='container-fixed d-flex flex-wrap justify-content-center mx-2 align-items-center mt-4'>

          {
            data.map((value, index) => {
              return (<div className="card" style={{ width: '21rem' }} onClick={()=>{
                
               const ans=value.category
                navigate(ans)
              }}>


                <img src= {value.img}   className="card-img-top" alt="./Contact.js" />

                <span class="playback1">{value.playback}</span>

                <div className="card-body">
                  <h5 className="card-title">{value.name}</h5>
                  <div className="mycircle d-flex flex-wrap justify-content-end">
                     <p><span style={{background:"grey",display:"flex",justifyContent:"end"}}></span><span className="two" style={{background:"black"}}></span>+3</p>
                      </div>
                  <p style={{ fontWeight: "bold" }} className='amount10 '>{value.price} <small className='amount'>{value.price1}</small><small className='amount2'>{value.off}</small></p>
                  <StarIcon style={{ color: "#f4c730" }} /> <span style={{ fontSize: "0.8em" }}>{value.star} | {value.verified}</span><VerifiedIcon style={{ color: "green", height: "0.9rem" }}></VerifiedIcon>


                  <a  className="btn1 bg-black btn btn-primary">Add to Cart</a>
                </div>
              </div>)
            })
          }

        </div>

        
          <div className='container-fluid categories'>
            <h3>Shop by <b>categories</b></h3>
            </div>

            <div className='py-3 flex-wrap container-fluid justify-content-around d-flex mx-1'>
           

            <div className='d-flex flex-column  justify-content-center align-items-center'>
              
              <img style={{height:"90px",width:"90px"}} src="https://www.boat-lifestyle.com/cdn/shop/files/True-wireless-earbuds_small.png?v=1684842854" className='img-fluid' href="./About.js" onClick={()=>navigate("/Airpods")}/>
              <h4 className='fs-5'>True Wireless</h4>
            </div>
            <div className='d-flex flex-column  justify-content-center align-items-center'>
              <img style={{height:"90px",width:"90px"}} src="https://www.boat-lifestyle.com/cdn/shop/files/Neckbands_bc6343f4-622f-4ebd-bb36-205643c3bf78_small.png?v=1684842854" className='img-fluid' onClick={()=>navigate("/Neckband")}/>
              <h4 className='fs-5'>Neckbands</h4>
            </div>
            <div className='d-flex flex-column  justify-content-center align-items-center'>
              <img style={{height:"90px",width:"90px"}} src="https://www.boat-lifestyle.com/cdn/shop/files/Smartwatches_88f12bcf-24bd-4e3a-aacb-ecc204f62179_small.png?v=1684842853" className='img-fluid'onClick={()=>navigate("/Smartwatches")}/>
              <h4 className='fs-5'>Smart Watches</h4>
            </div>
            <div className='d-flex flex-column  justify-content-center align-items-center'>
              <img style={{height:"90px",width:"90px"}} src="https://www.boat-lifestyle.com/cdn/shop/files/Wireless-Headphones_small.png?v=1684842854" className='img-fluid' onClick={()=>navigate("/Headphones")}/>
              <h4 className='fs-5'>headphone</h4>
            </div>
            <div className='d-flex flex-column  justify-content-center align-items-center'>
              <img style={{height:"90px",width:"90px"}} src="https://www.boat-lifestyle.com/cdn/shop/files/Wireless-Speaker_small.png?v=1684842854" className='img-fluid'onClick={()=>navigate("/Headphones")}/>
              <h4 className='fs-5'>Speakers</h4>
            </div>
            <div className='d-flex flex-column  justify-content-center align-items-center'>
              <img style={{height:"90px",width:"90px"}} src="https://www.boat-lifestyle.com/cdn/shop/files/Wired-Headphones_small.png?v=1684842854" className='img-fluid'onClick={()=>navigate("/Headphones")}/>
              <h4 className='fs-5'>Wired Headphones</h4>
            </div>
            <div className='d-flex flex-column  justify-content-center align-items-center'>
              <img style={{height:"90px",width:"90px"}} src="https://www.boat-lifestyle.com/cdn/shop/files/Soundbars_d9a7bdfd-e780-4581-ab85-f2e86f84cd28_small.png?v=1684842854" className='img-fluid' onClick={()=>navigate("/Headphones")}/>
              <h4 className='fs-5'>Soundbars</h4>
            </div>
            <div className='d-flex flex-column  justify-content-center align-items-center'>
              <img style={{height:"90px",width:"90px"}} src="https://www.boat-lifestyle.com/cdn/shop/files/Gaming-Headphones_small.png?v=1684842853" className='img-fluid'onClick={()=>navigate("/Headphones")}/>
              <h4 className='fs-5'>Gaming Headphones</h4>
            </div>
            <div className='d-flex flex-column  justify-content-center align-items-center'>
              <img style={{height:"90px",width:"90px"}} src="https://www.boat-lifestyle.com/cdn/shop/files/Wired-Earphones_small.png?v=1684842854" className='img-fluid'onClick={()=>navigate("/Headphones")}/>
              <h4 className='fs-5'>Earphones</h4>
            </div>
            <div className='d-flex flex-column  justify-content-center align-items-center'>
              <img style={{height:"90px",width:"90px"}} src="https://www.boat-lifestyle.com/cdn/shop/files/w_de57f25b-de5b-4d1a-bed0-765975b25da8_small.png?v=1684847228" className='img-fluid' onClick={()=>navigate("/Headphones")}/>
              <h4 className='fs-5'>Party Speakers</h4>
            </div>


            </div>
      </div>
      <br></br>
<div className='container-fluid'>
  <div className=' container-fluid launches'>
  <h3>New <b>Launches</b></h3>
  </div>
</div>
<div className='container-fixed d-flex flex-wrap justify-content-center align-items-center'>

{
            data.map((value, index) => {
              return (<div className="card" style={{ width: '22rem' }}
              onClick={()=>{
                
                const ans=value.category1
                 navigate(ans)
               }}>



                <img src={value.image} className="card-img-top" alt="..." />

                <span class="playback1">{value.battery}</span>

                <div className="card-body">
                  <h5 className="card-title">{value.nam}</h5>
                  <div className="mycircle d-flex flex-wrap justify-content-end">
                     <p><span style={{background:"grey",display:"flex",justifyContent:"end"}}></span><span className="two" style={{background:"black"}}></span>+3</p>
                      </div><p style={{float:"right",marginTop: "-21px", marginRight: "-50px"}}></p>
                  <p style={{ fontWeight: "bold"}} className='amount10 '>{value.price2} <small className='amount'>{value.price3}</small><small className='amount2'>{value.off1}</small></p>
                  <StarIcon style={{color:"#f4c730"}}/> <span style={{fontSize:"0.8em"}}>{value.star} | {value.verified}</span><VerifiedIcon style={{color:"green",height:"0.9rem"}}></VerifiedIcon>
                  

                  <a href="#" className="btn1 bg-black btn btn-primary">Add to Cart</a>
                </div>
              </div>)
            })
          }

</div>

<div className='container-fluid d-flex flex-wrap justify-content-center align-items-center'>

<div className='categoryimg3 d-flex  flex-column justify-content-center align-items-center m-5' >
  <img src='https://www.boat-lifestyle.com/cdn/shop/files/Group_334305_small.svg?v=1682336123' style={{width:"180px"}} />
  <b>1 year Warranty</b>
</div>

<div className='categoryimg3 d-flex  flex-column justify-content-center align-items-center m-5'>
  <img src='https://www.boat-lifestyle.com/cdn/shop/files/Group_334304_small.svg?v=1682336123' style={{width:"180px"}} />
  <b>7-days Replacement</b>
</div>

<div className='categoryimg3 d-flex  flex-column justify-content-center align-items-center m-5' >
  <img src='https://www.boat-lifestyle.com/cdn/shop/files/Group_334303_small.svg?v=1682336123' style={{width:"180px"}} />
  <b>Free Shipping</b>
</div>

  <div className='categoryimg3 d-flex  flex-column justify-content-center align-items-center m-5' >
  <img src='https://www.boat-lifestyle.com/cdn/shop/files/Group_334302_small.svg?v=1682336123' style={{width:"180px"}} />
  <b>GST Billing</b>
</div>

</div>




<div className='container-fluid'>
  <div className='container-fluid'>
  <h4>Shop by <b>Lifestyle</b></h4>
  </div>
  <div className='d-flex flex-wrap justify-content-center align-items-center img-fluid mx-2' style={{ gap: "40px" }}>
  <div className='' style={{height:"430px",borderRadius:"2px solid black"}}>
    <img src='https://www.boat-lifestyle.com/cdn/shop/files/shreyas-chronos-new.png?v=1696843687' style={{ width: "250px", height: "360px" }} />
    <b className='d-flex justify-content-center ' style={{fontSize:"25px"}}>For Fitness</b>
    <span className='d-flex justify-content-center fw-bold'>View All <ArrowCircleRightIcon style={{color:"skyblue",fontSize:"23px"}} onClick={()=>navigate("/Airpods")}></ArrowCircleRightIcon></span>
  </div>

  <div className=''>
    <img src='https://www.boat-lifestyle.com/cdn/shop/files/Party_Animal_4.png?v=1685942349' style={{ width: "250px", height: "360px" }} />
    <b className='d-flex justify-content-center ' style={{fontSize:"25px"}}>For Parties</b>
    <span className='d-flex justify-content-center fw-bold'>View All <ArrowCircleRightIcon style={{color:"skyblue",fontSize:"23px"}} onClick={()=>navigate("/Headphones")}></ArrowCircleRightIcon></span>
  </div>

  <div className=''>
    <img src='https://www.boat-lifestyle.com/cdn/shop/files/Workaholic_2.png?v=1685083745' style={{ width: "250px", height: "360px" }} />
    <b className='d-flex justify-content-center ' style={{fontSize:"25px"}}>For Work</b>
    <span className='d-flex justify-content-center fw-bold'>View All <ArrowCircleRightIcon style={{color:"skyblue",fontSize:"23px"}} onClick={()=>navigate("/Smartwatches")}></ArrowCircleRightIcon></span>
  </div>


  <div className=''>
    <img src='https://www.boat-lifestyle.com/cdn/shop/files/Entertainment_2.png?v=1685083746' style={{ width: "250px", height: "360px" }} />
    <b className='d-flex justify-content-center ' style={{fontSize:"25px"}}>For Entertainment</b>
    <span className='d-flex justify-content-center fw-bold'>View All <ArrowCircleRightIcon style={{color:"skyblue",fontSize:"23px"}} onClick={()=>navigate("/Airpods")}></ArrowCircleRightIcon></span>
  </div>

  <div className=''>
    <img src='https://www.boat-lifestyle.com/cdn/shop/files/Audiophile_5.png?v=1696328658' style={{ width: "250px", height: "360px" }} />
    <b className='d-flex justify-content-center ' style={{fontSize:"25px"}}>For Audiophiles</b>
    <span className='d-flex justify-content-center fw-bold'>View All <ArrowCircleRightIcon style={{color:"skyblue",fontSize:"23px"}} onClick={()=>navigate("/Neckband")}></ArrowCircleRightIcon></span>
  </div>
</div>

</div>
<br></br>

<div className='container-fluid'>
  <div className='container-fluid d-flex justify-content-between'>
    <h3>Best of <b>boAt</b></h3>
    <span className='fw-bold'>
      View All
      <ArrowCircleRightIcon style={{ color: "skyblue", fontSize: "23px" }} onClick={()=>navigate("/Airpods")}/>
    </span>
  </div>
</div>
<br></br>

<div className='container-fluid'>
  <button style={{width:"150px",borderRadius:"15px",marginLeft:"20px"}}><h5 style={{marginTop:"4px"}} onClick={()=>navigate("/Airpods")}>Best Seller</h5></button>
  <button style={{width:"150px",borderRadius:"15px",marginLeft:"20px"}}><h5 style={{marginTop:"4px"}} onClick={()=>navigate("/Smartwatches")}>Top Watches</h5></button>
  <button style={{width:"150px",borderRadius:"15px",marginLeft:"20px"}}><h5 style={{marginTop:"4px"}} onClick={()=>navigate("/Airpods")}>Top Earbuds</h5></button>
  <button style={{width:"180px",borderRadius:"15px",marginLeft:"20px"}} onClick={()=>navigate("/Headphones")}><h5>Top Headphones</h5></button>
  </div>


  <div className='container-fixed d-flex justify-content-center align-items-center flex-wrap py-4'>

{
            data.map((value, index) => {
              return (<div className="card" style={{ width: '22rem' }}
              onClick={()=>{
                
                const ans=value.category2
                 navigate(ans)

               }}>



                <img src={value.image1} className="card-img-top" alt="..." />

                <span class="playback1">{value.battery}</span>

                <div className="card-body">
                  
                  <h5 className="card-title">{value.name}</h5>
                  <div className="mycircle d-flex flex-wrap justify-content-end">
                     <p><span style={{background:"grey",display:"flex",justifyContent:"end"}}></span><span className="two" style={{background:"black"}}></span>+3</p>
                      </div>
                  <p style={{float:"right",marginTop: "-21px", marginRight: "-50px"}}></p>
                  <p style={{ fontWeight: "bold"}} className='amount10 '>{value.price} <small className='amount'>{value.price1}</small><small className='amount2'>{value.off}</small></p>
                  <StarIcon style={{color:"#f4c730"}}/> <span style={{fontSize:"0.8em"}}>{value.star} | {value.verified}</span><VerifiedIcon style={{color:"green",height:"0.9rem"}}></VerifiedIcon>
                  

                  <a href="#" className="btn1 bg-black btn btn-primary">Add to Cart</a>
                </div>
              </div>)
            })
          }

</div>

<div className='container-fluid'>

  <div className='container-fluid'>
    <h3>Join the <b>Tribe</b></h3>
  </div>


  <div className=' video d-flex flex-wrap justify-content-center align-items-center'>

          <video className='img-fluid col-xl-2 mb-2'
            autoPlay={true}
            loop={true}
            muted={true}
            controls={false}
            onMouseEnter={handleVideoHover}
            onMouseLeave={handleVideoLeave} >
            <source src='https://www.boat-lifestyle.com/cdn/shop/files/quinn_n8398cnfdzlxagw1ywk4qsxr.mp4' type='video/mp4'/>
            </video>

          <video className='col-xl-2 mb-2' autoPlay={true}
            loop={true}
            muted={true}
            controls={false}>
            <source src='https://www.boat-lifestyle.com/cdn/shop/files/quinn_j88xq8kqgwevksxkcw33z5ub.mp4' type='video/mp4' />
            </video>

          <video className='col-xl-2 mb--2' autoPlay={true}
            loop={true}
            muted={true}
            controls={false}>
            <source src='https://www.boat-lifestyle.com/cdn/shop/files/quinn_qmg4zde9msqpdgmksx9bcuch.mp4' type='video/mp4' />
          </video>

          <video className='col-xl-2 mb-2' autoPlay={true}
            loop={true}
            muted={true}
            controls={false}>
            <source src='https://www.boat-lifestyle.com/cdn/shop/files/quinn_gk1ijtpehxlumfqzzs76zwgs.mp4' type='video/mp4' />
          </video>
  

        </div>
</div>



<PagenotFound/>


</div>



  



  )
}

