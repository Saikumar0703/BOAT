import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './style.css'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useNavigate } from 'react-router-dom'


export default function Nav() {
  const navigate = useNavigate()

  const [name,setname]=useState("")
  const [user,setuser]=useState("")

  const airpods = useSelector((state) => state.Airpods.airpodscart)


    const smartWatch = useSelector((state) => state.smartWatch.smartwatchescart)
    const neckband = useSelector((state) => state.neckband.neckbandcart)
    const Headphones = useSelector((state) => state.Headphones.Headphonescart)

  const handleclick=()=>{

    if(localStorage.getItem("username")){
      localStorage.removeItem("username")
    }
    else{
      localStorage.setItem("username",name)
    }
    navigate("/")
  }


  const logout=()=>{
      localStorage.removeItem("username")
   
      navigate("/")
  }

  useEffect(()=>{
      const data=localStorage.getItem("username")
    
      if(!data){
        setuser("")
      }else{
        setuser(data)
      }
    
    })

  return (


    <div>

      <div className='header fs-7 text-center d-flex align-items-center justify-content-center rootelement ' >
        <p className='boat my-2'>"Catch the year ultimate crossover!"
          <b>Boat x Archies</b>
          "btrings to You"
          <b>Riverdable Rocker</b>
          "Shop Now!"
        </p>
      </div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light py-4 px-3">
        <div class="img container-fluid">

          <div className='img-fluid mb-2'>
            <img onClick={() => { navigate("/") }} src='https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg?v=1693549434' href='home.js' style={{ height: "40px" }} />
          </div>

          

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse mx-5" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown mx-3">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </a>



                <ul class="dropdown-menu " aria-labelledby="navbarDropdown">
                  <li>

                  <div className="container-fluid">
                  <div className="row">
                   <div className="col-12">
                   <div className="table-responsive">
                    <table className="categories d-flex flex-wrap justify-content-center align-items-center py-4 px-5 rounded">
                      <tr className=''>
                        <td className='px-4'><img src='https://www.boat-lifestyle.com/cdn/shop/collections/dropdown-TWS_100x.png?v=1684827062' style={{ width: "100px" }} onClick={() => navigate("/Airpods")} />
                          <span>True Wireless Earbuds</span></td>

                        <td className='px-4'><img src='https://www.boat-lifestyle.com/cdn/shop/collections/Neckbands_06214c1a-5e30-48ea-ac14-4a6bff679f48_100x.png?v=1684828287' onClick={() => navigate("/Neckband")} />
                          <span className='mx-2'>Neckbands</span></td>

                        <td className='px-4'><img src='https://www.boat-lifestyle.com/cdn/shop/collections/smartwatches_100x.png?v=1684827668' onClick={() => navigate("/Smartwatches")} />
                          <span>Smartwatches</span></td>

                        <td className='px-4'><img src='https://www.boat-lifestyle.com/cdn/shop/collections/Rectangle271_100x.png?v=1701414051' onClick={() => navigate("/Headphones")} />
                          <span>Headphones</span></td>


                        <td className='px-4'><img src='https://www.boat-lifestyle.com/cdn/shop/collections/box-5_100x.png?v=1684827751' onClick={() => navigate("/Headphones")} />
                          <span className='mx-3'>Speakers</span></td>
                      </tr>

                      <tr>
                        <td className='px-4'>
                          <img src='https://www.boat-lifestyle.com/cdn/shop/collections/Collections_5baef8f1-a67a-40a5-a537-4258c6caae6a_100x.png?v=1684827849' onClick={() => navigate("/Headphones")} />
                          <span className='mx-2'>Speakers</span>
                        </td>


                        <td className='px-4'>
                          <img src='https://www.boat-lifestyle.com/cdn/shop/collections/Immortal_category_Image_100x.png?v=1684827903' onClick={() => navigate("/Headphones")} />
                          <span>Headphones</span>
                        </td>

                        <td className='px-4'>
                          <img src='https://www.boat-lifestyle.com/cdn/shop/collections/latest_background_b4f773ca-05d9-41cc-a7cf-3104993ae895_100x.png?v=1684827816' onClick={() => navigate("/Neckband")} />
                          <span className='mx-3'>Earphones</span>
                        </td>

                        <td className='px-4'>
                          <img src='https://www.boat-lifestyle.com/cdn/shop/collections/bassheads-Wired-Headphones_0877b292-85ab-42ed-a055-26e1c246be73_100x.png?v=1684827787' onClick={() => navigate("/Headphones")} />
                          <span className=''>Headphones</span>
                        </td>
                        <td className='px-4'>
                          <img src='https://www.boat-lifestyle.com/cdn/shop/collections/Nirvana-ION-Black-_-1_-1.1_100x.png?v=1699269477' onClick={() => navigate("/Airpods")} />
                          <span>True Wireless Earbuds</span>
                        </td>

                      </tr>

                    </table>
                    </div>
                    </div>
                    </div>
                    </div>

                  </li>

                </ul>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link active" aria-current="page" href="#">boat Truly Yours</a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link" href="#">Gift with boAt</a>
              </li>

              <li class="nav-item mx-3">
                <a class="nav-link" href="#">Corporate Orders</a>
              </li>
            </ul>
            <form className="d-flex mx-2">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success " type="submit">Search</button>
            </form>

            <div className="dropdown login12">
              <button className="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Profile-1.png?v=1663762989" style={{ height: "25px" }} />
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
                <button type="button d-flex" className="btn-close" aria-label="Close" style={{ float: "right" }} />
                <li><a className="dropdown-item text-center" >

                  <h5 className='d-flex flex-wrap justify-content-center text-align-center' style={{marginTop:"-20px"}}>Hi {user? (user):(<>Boat</>)}</h5>

                  </a>

                  {
                    user ? (<>
                        <a className="btn bg-dark text-white text-center mx-2 px-5 " role="button" onClick={logout}>logout
                  </a>
                    </>):(<>
                        <a className="btn bg-dark text-white text-center mx-2 px-5" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Login
                  </a>
                    </>)
                  }  
                
                </li>
                <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex={-1}>
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">

                    </div>
                  </div>
                </div>
              </ul>
            </div>


            
            <button type="button" class="btn px-1 position-Absolute">
            <ShoppingBagOutlinedIcon onClick={() => navigate("/mycard")} style={{ fontSize:"28px"}}/>
  <span class="position-relative top-0 start-20 translate-middle badge rounded-pill bg-danger">
    {airpods.length+smartWatch.length+neckband.length+Headphones.length}
    <span class="visually-hidden">unread messages</span>
  </span>
</button>

            
          </div>
        </div>
      </nav>


      <div className='col-8'>

        <div className="modal fade box1" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex={-1}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title" id="exampleModalToggleLabel" style={{ marginLeft: "160px" }}>Get Started</h3>



                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />

              </div>
              <p style={{ marginLeft: "120px" }}>Please enter Your name to Continue....</p>
              
              <h5 className='rounded mx-2 mt-3'>Please enter your name : <input type="text" style={{ width: "250px", height: "30px", borderRadius: "6px" }}  onChange={(e)=>{setname(e.target.value)}}/></h5>


              <div className="modal-body">

                <button onClick={handleclick} className="btn btn-success mt-4" data-bs-dismiss="modal" style={{ width: "180px", height: "45px", borderRadius: "8px", marginLeft: "150px" }}>Submit</button>
                <p className='text-center mt-3' style={{ fontSize: "12px" }}>By Confirming, you agree to boAt's Terms and Conditions and <p className='text-center'>Privacy Policy.</p></p>

              </div>

            </div>
          </div>
        </div>


      </div>

    </div>

  )
}
