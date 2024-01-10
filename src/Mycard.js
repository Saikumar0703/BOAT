import React from 'react'
import { useSelector } from 'react-redux'
import { decrementsmartwatches , removesmartWatch } from './Redux/Slice2'
import { removeneckband } from './Redux/Slice3'
import {  incrementAirpods, removeAirpods } from './Redux/Slice'
import { decrementAirpods } from './Redux/Slice'
import { removeHeadphones } from './Redux/Slice4'
import { useDispatch } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import "./App.css"
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect } from 'react'
import { incrementsmartwatches } from './Redux/Slice2' 
import { freeze } from '@reduxjs/toolkit'
import { incrementneckband ,decrementneckband } from './Redux/Slice3'
import { incrementheadphones , decrementHeadphones } from './Redux/Slice4'


export default function Mycard() {

    //const data = useSelector((state) => state.Mycart)
    const dispatch = useDispatch()
   
    const airpods = useSelector((state) => state.Airpods.airpodscart);
    const airpodsTotal = useSelector((state) => state.Airpods.airpodsTotal);
    const airpodsQuentity = useSelector((state) => state.Airpods.airpodsQuentity);




    const smartWatch = useSelector((state) => state.smartWatch.smartwatchescart);
    const smartwatchestotal = useSelector((state) => state.smartWatch.smartwatchestotal);
    const smartWatchesQuentity = useSelector((state) => state.smartWatch.smartWatchesQuentity)




    const neckband = useSelector((state) => state.neckband.neckbandcart)
    const neckbandTotal = useSelector((state) => state.neckband.neckbandTotal)
    const neckbandQuentity = useSelector((state) => state.neckband.neckbandQuentity)




    const Headphones = useSelector((state) => state.Headphones.Headphonescart)
    const Headphonestotal = useSelector((state) => state.Headphones.Headphonestotal)
    const HeadphonesQuentity = useSelector((state) => state.Headphones.HeadphonesQuentity)



    const Navigate = useNavigate()
    

    // console.log("==> " + smartWatch)
    // console.log("==> " + neckband)
    // console.log("==>" + airpods)
    // console.log("==>" + Headphones)


    useEffect(() => {
        try{
        const cartData = {
            airpods,
            smartWatch,
            neckband,
            Headphones,
        };
        localStorage.setItem('cartData', JSON.stringify(cartData));
    } catch (error) {
        console.error('Error storing data in localStorage:', error);
    }
      
    }, [airpods, smartWatch, neckband, Headphones]);


    

   

    return (



        <div>
            <section className="h-100 h-custom" style={{ backgroundColor: '#d2c9ff' }}>
                <div className="container  py-5 h-100">
                    <div className="justify-content-center align-items-center h-100" >
                        <div className="col-12 col-lg-12  col-xl-12 ">
                            <div className=" bg-light  card-registration card-registration-2 " style={{ borderRadius: 15 }}>
                                <div className="card-body p-0">


                                    <div className="row g-0">
                                        {/*---------------------------------------------*/}



                                        <div className="col-lg-8  col-xl-8    ">
                                            <div className="p-5">
                                                <div className="d-flex justify-content-between align-items-center mb-5">
                                                    <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                                                    <h6 className="mb-0 text-muted">{airpods.length + smartWatch.length + neckband.length + Headphones.length}</h6>
                                                </div>
                                                <hr className="my-4" />

                                                {
                                                    airpods?.map((value, index) => {
                                                        return (
                                                            <div className="row mb-4 d-flex justify-content-between align-items-center">
                                                                <div className="col-md-2 col-lg-2 col-xl-2">
                                                                    <img src={value.img} className="img-fluid rounded-3" alt="Cotton T-shirt" />

                                                                </div>
                                                                <div className="col-md-3 col-lg-3 col-xl-2">
                                                                    <h6 className="text-muted">{value.name}</h6>
                                                                    <span className='mx-2'>{value.off}</span>
                                                                    <h6 className="text-black mb-0">{ }</h6>
                                                                </div>
                                                                <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                                    
                                                               <span className="mx-2 fs-3" onClick={()=>{dispatch(decrementAirpods(value))}} style={{cursor: "pointer"}}>-</span>
                                                               <span className="mx-2 fs-3">{value.airpodsQuentity}</span>
                                                               <span className="mx-2 fs-3" onClick={()=>{dispatch(incrementAirpods(value))}} style={{cursor: "pointer"}}>+</span>

                                                                </div>
                                                                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                                    <h6 className="mb-0 d-flex"> ₹{value.price}</h6>

                                                                </div>

                                                                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                                    <a className="text-muted"><i className="fas fa-times" /></a>
                                                                    <input className="bg-danger py-2 px-2 rounded" type='button' value="Remove" onClick={() => { dispatch(removeAirpods(value.id)) }} />
                                                                </div>

                                                            </div>
                                                        )
                                                    })
                                                }


                                                {
                                                    smartWatch?.map((value, index) => {
                                                        return (
                                                            <div className="row mb-4 d-flex justify-content-between align-items-center">
                                                                <div className="col-md-2 col-lg-2 col-xl-2">
                                                                    <img src={value.image} className="img-fluid rounded-3" alt="Cotton T-shirt" />

                                                                </div>
                                                                <div className="col-md-3 col-lg-3 col-xl-2">
                                                                    <h6 className="text-muted">{value.name}</h6>
                                                                    <span className='mx-2'>{value.off}</span>
                                                                    <h6 className="text-black mb-0">{ }</h6>
                                                                </div>
                                                                <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                                <span className="mx-2 fs-3" onClick={()=>{dispatch(decrementsmartwatches(value))}} style={{cursor: "pointer"}}>-</span>
                                                               <span className="mx-2 fs-3">{value.smartWatchesQuentity}</span>
                                                               <span className="mx-2 fs-3" onClick={()=>{dispatch(incrementsmartwatches(value))}} style={{cursor: "pointer"}}>+</span>

                                                                </div>
                                                                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                                    <h6 className="mb-0 d-flex">₹{value.price}</h6>

                                                                </div>

                                                                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                                    <a className="text-muted"><i className="fas fa-times" /></a>
                                                                    <input className="bg-danger py-2 px-2 rounded" type='button' value="Remove" onClick={() => { dispatch(removesmartWatch(value.id)) }} />
                                                                </div>

                                                            </div>
                                                        )
                                                    })
                                                }



                                                {
                                                    Headphones?.map((value, index) => {
                                                        return (
                                                            <div className="row mb-4 d-flex justify-content-between align-items-center">
                                                                <div className="col-md-2 col-lg-2 col-xl-2">
                                                                    <img src={value.headphones} className="img-fluid rounded-3" alt="Cotton T-shirt" />

                                                                </div>
                                                                <div className="col-md-3 col-lg-3 col-xl-2">
                                                                    <h6 className="text-muted">{value.headphones1}</h6>
                                                                    <span className='mx-2'>{value.off}</span>
                                                                    <h6 className="text-black mb-0">{ }</h6>
                                                                </div>
                                                                <div className="col-md-3 col-lg-3 col-xl-2 d-flex">

                                                                <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                                <span className="mx-2 fs-3" onClick={()=>{dispatch(decrementHeadphones(value))}} style={{cursor: "pointer"}}>-</span>
                                                               <span className="mx-2 fs-3">{value.HeadphonesQuentity}</span>
                                                               <span className="mx-2 fs-3" onClick={()=>{dispatch(incrementheadphones(value))}} style={{cursor: "pointer"}}>+</span>

                                                                </div>
                                                                    
                                                                </div>
                                                                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                                    <h6 className="mb-0 d-flex">₹{value.price}</h6>

                                                                </div>

                                                                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                                    <a className="text-muted"><i className="fas fa-times" /></a>
                                                                    <input className="bg-danger py-2 px-2 rounded" type='button' value="Remove" onClick={() => { dispatch(removeHeadphones(value.id)) }} />
                                                                </div>

                                                            </div>
                                                        )
                                                    })
                                                }


                                                {
                                                    neckband?.map((value, index) => {
                                                        return (
                                                            <div className="row mb-4 d-flex justify-content-between align-items-center">
                                                                <div className="col-md-2 col-lg-2 col-xl-2">
                                                                    <img src={value.image2} className="img-fluid rounded-3" alt="Cotton T-shirt" />

                                                                </div>
                                                                <div className="col-md-3 col-lg-3 col-xl-2">
                                                                    <h6 className="text-muted">{value.name2}</h6>
                                                                    <span className='mx-2'>{value.off2}</span>
                                                                    <h6 className="text-black mb-0">{ }</h6>
                                                                </div>
                                                                <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                                <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                                <span className="mx-2 fs-3" onClick={()=>{dispatch(decrementneckband(value))}} style={{cursor: "pointer"}}>-</span>
                                                               <span className="mx-2 fs-3">{value.neckbandQuentity}</span>
                                                               <span className="mx-2 fs-3" onClick={()=>{dispatch(incrementneckband(value))}} style={{cursor: "pointer"}}>+</span>

                                                                </div>
                                                                </div>
                                                                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                                    <h6 className="mb-0 d-flex">₹{value.price4}</h6>

                                                                </div>

                                                                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                                    <a className="text-muted"><i className="fas fa-times" /></a>
                                                                    <input className="bg-danger py-2 px-2 rounded" type='button' value="Remove" onClick={() => { dispatch(removeneckband(value.id)) }} />
                                                                </div>

                                                            </div>
                                                        )
                                                    })
                                                }


                                                <div className="pt-5">
                                                    <h6 className="mb-0" ><a href="#!" className="text-body" onClick={() => Navigate("/")}>Back to shop</a></h6>
                                                </div>
                                            </div>
                                        </div>

                                        {/*---------------------------------------------*/}
                                        <div className="col-lg-4 bg-grey">
                                            <div className="p-5">
                                                <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                                                <hr className="my-4" />
                                                <div className="d-flex justify-content-between mb-4">
                                                    <h5 className="text-uppercase">items {airpods.length + smartWatch.length + neckband.length + Headphones.length}</h5>
                                                    <h5>₹ {airpodsTotal+smartwatchestotal+neckbandTotal+Headphonestotal}</h5>
                                                </div>
                                                <h5 className="text-uppercase mb-3">Shipping</h5>
                                                <div className="mb-4 pb-2">
                                                    <select className="select">
                                                        <option value={1}>Standard-Delivery- €5.00</option>
                                                        <option value={2}>Two</option>
                                                        <option value={3}>Three</option>
                                                        <option value={4}>Four</option>
                                                    </select>
                                                </div>
                                                <h5 className="text-uppercase mb-3">Give code</h5>
                                                <div className="mb-5">
                                                    <div className="form-outline">
                                                        <input type="text" id="form3Examplea2" className="form-control form-control-lg" />
                                                        <label className="form-label" htmlFor="form3Examplea2">Enter your code</label>
                                                    </div>
                                                </div>
                                                <hr className="my-4" />
                                                <div className="d-flex justify-content-between mb-5">
                                                    <h5 className="text-uppercase">Total price</h5>
                                                    <h5>₹ {airpodsTotal+smartwatchestotal+neckbandTotal+Headphonestotal}</h5>
                                                </div>
                                                <button type="button" className="btn btn-dark btn-block btn-lg" data-mdb-ripple-color="dark" onClick={()=>Navigate("/OrderConfirm")}>Confirm Order</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )

}