import React, { useState } from 'react';
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
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addAirpods} from './Redux/Slice';

export default function About() {

  const dispatch=useDispatch()

  const [data, setData] = useState(myapi1)

 

  const Navigate = useNavigate()


  return (
    <div>

      

      <div className='py-3 container-fluid mx-4'>
        <h3>Smartwatches</h3>
      </div>
      <div className='container-fluid'>
       <button className='custom-button mx-4'><span className='col-md-6'><TuneIcon></TuneIcon>Fliter By <ArrowDropDownIcon></ArrowDropDownIcon></span></button> 
      </div>
      <br></br>



      <div className='container-fluid d-flex flex-wrap justify-content-between align-items-center' >


        <div className='d-flex flex-wrap justify-content-center align-items-center'>



         
          {
            data.map((value, index) => {
              return (<div className="card mb-3 mx-3" style={{ maxWidth: "540", width: "450px" }}>
                <div className="row g-0">
                  <div className="col-md-4 ">
                   <img src={value.img} className="img-fluid" 
                   onClick={()=>Navigate('/Airdops1')}/>
                    <span className="d-flex flex-wrap justify-center-align-items-center Hours">{value.playback1} </span> 
                  </div>
                  
                  <div className="col-md-8 np">
                    <div className="card-body">
                    <StarIcon style={{color:"#f4c730"}}/> <span style={{fontSize:"0.8em"}}>{value.star} | {value.verified}</span><VerifiedIcon style={{color:"green",height:"0.9rem"}}></VerifiedIcon>

                      <h5 className="card-title">{value.name}</h5>
                      <p style={{ fontWeight: "bold"}} className='amount1 text-success py-1'>₹{value.price} <small className='amount'>₹{value.price1}</small><small className='amount2'>{value.off}</small></p>
                      <hr></hr>
                      
                      <a className="d-flex flex-wrap justify-content-center btn bg-black btn btn-primary py-2 px-12 mb-4" onClick={()=>{dispatch(addAirpods(value))}}>Add to Cart</a>
                      
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
