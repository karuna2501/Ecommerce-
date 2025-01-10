import Header from "./Header";
import Content from "./Content";
import Myprofile from "./Myprofile";
import Order from "./Order";
import Wishlist from "./Wishlist";
import './App.css'
import  ProfileEdit  from "./ProfileEdit";

import { Routes,Route } from "react-router-dom";
import { useEffect, useState } from "react";
import SideBar from "./SideBar";
import toast,{Toaster} from "react-hot-toast";
import axios from "axios";


function App() {

  const [searchValue,setSearchValue] = useState('');
  const [showMenuBar,setShowMenuBar] = useState(false);
  /* const [fruitProducts,setFruitProduct] = useState(async()=>{
    let items = await axios.get('http://localhost:3001/fruits/botanical/berries');
    return items || '';
  }); */
  const [mobileNumber,setMobileNumber] = useState(async()=>{
    let response = await localStorage.getItem('userNumber');
    return Number(response) || '';
  });
  
  
  useEffect(()=>{
    localStorage.setItem('userNumber',mobileNumber);
  },[mobileNumber]);
  
  let searchValueVariable;

    const handleSubmit = (e) =>{
        e.preventDefault();
        searchValueVariable = searchValue.split(" ")
    }

    const handleBar = () => {
        (showMenuBar===false) ? setShowMenuBar(true) : setShowMenuBar(false);
        console.log(showMenuBar)

    }
    
  return (
    <div className="App">
      <Header 
        setSearchValue={setSearchValue}
        handleSubmit={handleSubmit}
        handleBar={handleBar}
      />
      {showMenuBar && <SideBar />}
      <main>
          <Toaster theme="dark" />
          <Routes>

              <Route 
                path="/" 
                element={<Content showMenuBar={showMenuBar}
                 />} 
              />
                
              <Route 
                path="/myprofile"
                element={
                <Myprofile
                mobileNumber={mobileNumber}
                setMobileNumber={setMobileNumber}
                />}
              />
              <Route path="/order" element={<Order />} />

              <Route path='/Wishlist' element={<Wishlist />} />

              <Route path='/myprofile/editprofile' element={<ProfileEdit />} />

          </Routes>
      </main>
    </div>
  );
}

export default App;
