import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../Components/Title';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import TrackingModal from '../Components/TrackingModal';
import { toast } from 'react-toastify';

const Orders = () => {

  const {backendURL,token,currency}=useContext(ShopContext);

  const [orderData,setOrderData]=useState([]);
  const [isTrackingModalOpen, setIsTrackingModalOpen] = useState(false);
  const [currentTracking, setCurrentTracking] = useState(null);
  const [loadingTracking, setLoadingTracking] = useState(false);

  const loadOrderData=async()=>{
        try{
          if(!token)return null;

          const response=await axios.post(backendURL+'/api/order/userorders',{},{headers:{token}})
          if(response.data.success){
            let allOrdersItems=[];
            response.data.orders.map((order)=>{
              order.items.map((item)=>{
                item['status']=order.status;
                 item['payment']=order.payment;
                 item['paymentMethod']=order.paymentMethod;
                 item['date']=order.date;
                 item['orderId']=order._id; // Store order ID for tracking
                 allOrdersItems.push(item);
              })

            });
           
            setOrderData(allOrdersItems.reverse());
          }
         

        }catch(err){
            console.log(err);
        }
  }

  const handleTrackOrder = async (orderId) => {
    try {
      setLoadingTracking(true);
      const response = await axios.get(`${backendURL}/api/order/tracking/${orderId}`, {
        headers: { token }
      });
      
      if(response.data.success) {
        setCurrentTracking(response.data.tracking);
        setIsTrackingModalOpen(true);
      } else {
        toast.error('Tracking information not available');
      }
    } catch(err) {
      console.log(err);
      toast.error('Failed to fetch tracking details');
    } finally {
      setLoadingTracking(false);
    }
  }

  useEffect(()=>{
      loadOrderData();
  },[token]);


  return (
    <div
     className='border-t pt-16 pb-16'
    >
   < div className='text-2xl'>
       <Title text1={'MY'} text2={'ORDERS'}/>
   </div>


   <div>
    {
      orderData.map((item,index)=>(
             
        <div key={index } className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between  '>
          <div className='flex items-start gap-6 text-sm'>
             <img className='w-16 sm:w-20 ' src={item.image[0]} alt="" />

             <div>
              <p className='sm:text-base font-medium '>{item.name}</p>
              <div className='flex items-center gap-3 mt-1 text-base text-gray-600'>
                  <p >{currency}{item.price}</p>
                  <p className=''>Quantity: {item.quantity}</p>
                  <p>Size: {item.size}</p> 


              </div>
              <p className='mt-1'>Date : <span className='text-gray-400'> {new Date(item.date).toDateString()}</span></p>
              <p className='mt-1'>Payment : <span className='text-gray-400'> {item.paymentMethod}</span></p>
             </div>
          </div>
          
        <div className='md:w-1/2 flex justify-between'>
               <div className='flex items-center gap-2 '>
               <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
               <p className='text-sm md:text-base'>{item.status}</p>
               </div>
                      <button 
                        onClick={() => handleTrackOrder(item.orderId)} 
                        disabled={loadingTracking}
                        className='border px-4 py-2 text-sm font-medium rounded-sm hover:bg-black hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed'
                      >
                        {loadingTracking ? 'Loading...' : 'Track Order'}
                      </button>
        </div>

          </div>


      ))
    }
   </div>

   {/* Tracking Modal */}
   <TrackingModal 
     isOpen={isTrackingModalOpen}
     onClose={() => setIsTrackingModalOpen(false)}
     trackingData={currentTracking}
   />

    </div>
  )
}

export default Orders