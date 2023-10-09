import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "../features/inputSlice";
import outputDataSlice from "../features/outputDataSlice";
import  loggedSlice  from "../features/loggedSlice";

export default configureStore({
    reducer:{
     query : inputSlice,
     result: outputDataSlice,
     profile:loggedSlice,
    }
})