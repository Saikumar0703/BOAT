import { combineReducers } from "@reduxjs/toolkit";
import Airpodssystem from "./Slice"
import watchSystem from "./Slice2"
import neckbandSystem from "./Slice3"
import HeadphonesSystem from "./Slice4"
const rootReducer = combineReducers({


        Airpods:Airpodssystem,
        smartWatch: watchSystem,
        neckband:neckbandSystem,
        Headphones:HeadphonesSystem,


})

export default rootReducer