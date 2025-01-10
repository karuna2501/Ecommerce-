import React, { useState } from 'react'
import "./Order.css"
import { FaRupeeSign } from 'react-icons/fa'
import toast, { Toaster } from 'react-hot-toast';


const Order = (/* setQuantity,setCandidateName,setCandidateDoorNo,setCandidateStreetName,setCandidateCityName,setCandidateDistrictName,setCandidatePinCode */) => {
  
  const [quantity,setQuantity] = useState(1);
  const [candidateName,setCandidateName] = useState('');
  const [condidateDoorNo,setCandidateDoorNo] = useState(0);
  const [candidateStreetName,setCandidateStreetName] = useState('');
  const [candidateCityName,setCandidateCityName] = useState('');
  const [candidateDistrictName,setCandidateDistrictName] = useState('');
  const [candidatePinCode,setCandidatePinCode] = useState(0);
  const [extraNumber,setExtraNumber] = useState(true);

  const [showOrderDetail,setShowOrderDetail] = useState(1);

  function showNextButton(e){
    setShowOrderDetail(showOrderDetail+1);
  }

  return (
    <>
      <form className='orderForm' onSubmit={(e)=>{e.preventDefault()}}>
        <h3>Place Order</h3>

        {showOrderDetail>=1 && 
        <div className='getCandidateInfo'>
            <table>

            <tr>
            <td/><p>Number Of Quantity</p>
            <td/><input required type='number' min={1} defaultValue={1} onChange={(e)=>setQuantity(e.target.value)} style={{
              fontWeight:'bold',width:'50%'
            }}/><br/>
            </tr>

            <tr>
            <td/><p>Name Of Candidate</p>
            <td/><input required type='text' onChange={(e)=>setCandidateName(e.target.value)} />
            </tr>

            </table>
            
            {showOrderDetail == 1 &&
            <button className='nextButton' onClick={showNextButton}>Next</button>
            }
          </div> 
        }

        {showOrderDetail >=2 && 
        <div className='gerCandidateAddress'>

          <h4>Address of Candidate</h4>
          <table>

            <tr>

            <td><p>Door No</p></td> <td><input required type='text' onChange={(e)=>setCandidateDoorNo(e.target.value)} /></td>

            <td><p>Street</p></td> <td><input required type='text' onChange={(e)=>setCandidateStreetName(e.target.value)} /></td>

            </tr>

          <tr>

            <td><p>City / Village</p></td> <td><input required type='text' onChange={(e)=>setCandidateCityName(e.target.value)} /></td>

            <td><p>District</p></td> <td><input required type='text' onChange={(e)=>setCandidateDistrictName(e.target.value)} /></td>

          </tr>

          <tr>

            <td><p>Pin Code</p></td> <td><input required type='number' onChange={(e)=>setCandidatePinCode(e.target.value)} /></td>

          </tr>
          <tr>

            <td><input onClick={(e)=>{
              if(extraNumber == true){
                setExtraNumber(false)
              }
              else{
                setExtraNumber(true)
              }
            }} type='checkbox' style={{position:'absolute',marginLeft:'-10px',marginBottom:'-20px'}}/><p >Additional Number</p></td> <td><input disabled={extraNumber} type='number' onChange={''} /></td>
          
          </tr>
          </table>
          
          {showOrderDetail == 2 && 
          <button className='nextButton' onClick={showNextButton}>Next</button> }

        </div> }

        {showOrderDetail >=3 && 
        <div className='getPaymentInfo'>
          <h4>Payment Details</h4>

          <table>
            <tr>

              <td/><p>Product Fee</p><td/><p><FaRupeeSign/>.0</p>
            
            </tr>
            <tr>

              <td/><p>Platform Charge</p><td/><p><FaRupeeSign/>.5</p>

            </tr>
            <tr>

              <td/><p>Delivery Charge</p><td/><p><FaRupeeSign/>.0</p>

            </tr>
            <tr>

              <td/><p> <input type='checkbox' defaultChecked={false} style={{
                margin:5,
              }}/> Open Box Delivery</p><td/><p><FaRupeeSign/>.30</p>

            </tr>
              <tr/>
              <hr style={{width:'20%',position:'absolute'}}/>
              <tr>

                <td/><td><p>Total Amount</p></td> <td/><td><p><FaRupeeSign />.0</p></td>

              </tr>
          </table>
          
          {showOrderDetail == 3 && 
          <button className='nextButton' onClick={showNextButton}>Next</button> }
        </div> }

        {showOrderDetail >=4 && 
        <div className='paymentMethod'>

          <h4>Payment Method</h4>

            <label><input type='radio' name='payMethod' value='Opt1'/>Online Payment</label><br/>

            <label><input type='radio' name='payMethod' value='Opt2'/>Net Banking</label><br/>

            <label><input defaultValue={true} type='radio' name='payMethod' value='Opt3'/>Cash On Delivery</label><br/>
        </div>
        }

        <center>
        
        {showOrderDetail == 4 && 
          <button className='orderFormSubmit'> Submit </button>
        }
        </center>
        <Toaster />
      </form>
    </>
  )
}

export default Order
