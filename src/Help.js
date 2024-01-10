import React, { useState } from 'react';
import myapi from './Api1';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import StarIcon from '@mui/icons-material/Star';
import VerifiedIcon from '@mui/icons-material/Verified';
import TollSharpIcon from '@mui/icons-material/TollSharp';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Nav from './Nav'
import myapi1 from './Api1';
import TuneIcon from '@mui/icons-material/Tune';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PagenotFound from './PagenotFound';

export default function About() {

  const [data, setData] = useState(myapi1)

  return (
    <div>

      

      <div className='py-3 container-fluid'>
        <h3>Smartwatches</h3>
      </div>
      <div className='container-fluid'>
       <button className='custom-button'><span className='col-md-6'><TuneIcon></TuneIcon>Fliter By <ArrowDropDownIcon></ArrowDropDownIcon></span></button> 
      </div>
      <br></br>



      <div className='container-fluid d-flex flex-wrap justify-content-between align-items-center' style={{ gap: "10px" }}>



        <div className='d-flex flex-wrap justify-content-center'>
          {
            data.map((value, index) => {
              return (<div className="card mb-3 " style={{ maxWidth: "540", width: "460px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={value.img2} className="img-fluid " alt="..." />
                    <span className="d-flex flex-wrap justify-center-align-items-center Hours">{value.playback1}</span> 
                  </div>
                  
                  <div className="col-md-8">
                    <div className="card-body">
                    <StarIcon style={{color:"#f4c730"}}/> <span style={{fontSize:"0.8em"}}>{value.star} | {value.verified}</span><VerifiedIcon style={{color:"green",height:"0.9rem"}}></VerifiedIcon>

                      <h5 className="card-title">{value.watches}</h5>
                      <p style={{ fontWeight: "bold"}} className='amount1 text-success py-1'>{value.price} <small className='amount'>{value.price1}</small><small className='amount2'>{value.off}</small></p>
                      <hr></hr>
                      
                      <a href="#" className="d-flex flex-wrap justify-content-center btn bg-black btn btn-primary py-2 px-12 mb-4">Add to Cart</a>
                      
                    </div>
                  </div>
                </div>
              </div>)
            })
          }
        </div>




      </div>
      <PagenotFound/>

    </div>
  )
}
