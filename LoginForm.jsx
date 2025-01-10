import React, { useEffect, useState } from 'react'
import "./LoginForm.css"
import { FaMobile } from 'react-icons/fa'
import { FaRegCommentDots } from 'react-icons/fa6'
import toast,{ Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


const LoginForm = ({mobileNumber,setMobileNumber}) => {

  const navigate = useNavigate();

    const [otp,setOtp] = useState();
    const [generatedOTP,setGeneratedOTP] = useState('');
    let MobileNumAlert ='';
    let otpNumAlert = '';
  
    const handleLoginFormSubmit = (e) =>{
        e.preventDefault()
  
        if (mobileNumber.length >10 || mobileNumber.length <10 ){
          MobileNumAlert = 'Please Check  The Mobile Number'
          toast.error(MobileNumAlert)
          return;
        }  
        
        if(generatedOTP === ''){
          generateOtpNumber()
          return;
        }
        
        if (generatedOTP !== ''){
          setGeneratedOTP( Number( generatedOTP ) )
          setOtp( Number( otp ) )
        
            if (generatedOTP === otp){
              toast.success('Login Successfully')
              axios.post('http://localhost:3001/user',mobileNumber.value)    
              navigate('/myprofile')        
              return;
            }
            else {
              toast(generatedOTP)
              otpNumAlert = 'Enter Correct OTP'
              toast.error( otpNumAlert )
              return;
            }
        }
        if(generatedOTP){
          toast(generatedOTP)
        }
      }
      const generateOtpNumber = () =>{
        let randomValue = Math.floor( 1000+Math.random() *9000 )
        setGeneratedOTP(randomValue)
        toast(randomValue)
        return randomValue;
      }

  return (
    <>
        <Toaster />
        <center>
        <form 
            onSubmit={handleLoginFormSubmit}
            className='loginForm'>
            <h1>Login</h1>
                <p><FaMobile style={{marginRight:'5px'}}/> Mobile Number</p>
                <center>
                <input 
                    type='number'
                    placeholder='Enter Mobile Number'
                    required
                    onChange={(e)=>setMobileNumber(e.target.value)}
                />
                </center>
                <button 
                    onClick={handleLoginFormSubmit}
                    className='otpButton'
                    style={{display:'flex',color:'white'}}
                >Get OTP</button>

                <p><FaRegCommentDots style={{marginRight:'5px'}}/> OTP</p>
                <center>
                <input 
                    type='number'
                    placeholder='Enter OTP'
                    onChange={(e)=>setOtp( Number( e.target.value ) ) }
                    required
                />
                
                <button
                    onClick={handleLoginFormSubmit}
                    className='loginSubmit'
                >Submit</button>
                </center>
        </form>
        </center>
    </>
  )
}

export default LoginForm
