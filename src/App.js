import { Route, Routes } from "react-router-dom";
import Authentication from "./pages/Authentication/Authentication";
import HomePage from "./pages/HomePage/HomePage";
import { Message } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfileAction } from "./Redux/Auth/auth.action";

function App() {
  const {auth} = useSelector(store=>store);
  const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt")
  useEffect(()=>{
    dispatch(getProfileAction(jwt))
  },[dispatch, jwt])
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={auth.user?<HomePage/>:<Authentication/>} />
        <Route path="/message" element={<Message />} />
      </Routes>
    </div>
  );
}

export default App;
