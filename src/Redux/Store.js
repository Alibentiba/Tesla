import { configureStore } from '@reduxjs/toolkit'
// import Counters from "./test/Reducer1"
import Slice from "./Slice"
export default configureStore({
  reducer: {counterstore: Slice}
})