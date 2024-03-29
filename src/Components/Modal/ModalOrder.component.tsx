import React,{useState} from 'react'
import Item from '../ItemCate/Item.component';
import { useHref } from 'react-router-dom';
import ModalAddToCart from './ModalAddToCart.component';
import Stepper from '../Stepper/Stepper.component';

type FillProps = {
    show: boolean;
    item: any;
    handleShowOffModal:any;
  };
  interface Amount {
    quantity:any;
  }

function ModalOrder(props:FillProps) {
    const[quantity,setQuantity]=useState('')
    const [show1,setShow1 ]=useState(false)
    const onModal =()=>{
      setShow1(true)
    }
    const offModal =()=>{
      setShow1(false)
    }
const changeStringToNumber:any=parseInt(quantity)
    const handleChangeQty:any =(e: React.ChangeEvent<HTMLInputElement>)=>{
   
      setQuantity(e.target.value)
    // setQuantity(e.target.name:e.target.value)

    }
const newSomme:any =  changeStringToNumber * props.item.price;
console.log(newSomme)

  return (
  <div>
    <ModalAddToCart show={show1} offModal={offModal}/>
    {props.show ?
      <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
  
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">



              <div className="">
            
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3
                    className="text-lg font-semibold leading-6 text-orange-600 mb-3"
                    id="modal-title"
                  >
                    Add to Cart
                  </h3>
                
                  <form 
                //   onSubmit={(e) => handleSubmit(e)}
                  >
                        <div className="mb-6">
                          <label
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                          >
                           Quantity
                          </label>
                          <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Enter the precise number of pieces that you want to Order
                    </p>
                  </div>
                          <input
                            type="number"
                            id="quantity"
                            value={quantity}
                            onChange={(e)=>handleChangeQty(e)}
                            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-300 dark:placeholder-gray-800 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="1 "
                            required
                          />
                        </div>
                     <div className='mb-6 flex justify-between'>
                      <label>
                        Price
                      </label>
                      <label  className='text-orange-700 text-xl'>
                        {Number.isNaN(newSomme)?props.item.price:newSomme } XAF
                      </label>
                     </div>
                       
                      </form>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={onModal}
                className="inline-flex w-full justify-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
              
                  {/* <svg
                    aria-hidden="true"
                    role="status"
                    className="inline mr-3 w-4 h-4 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    ></path>
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    ></path>
                  </svg> */}
                {/* ) : null} */}
                Next
              </button>
              <button
                type="button"
                onClick={() => props.handleShowOffModal(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
     : null}
  </div>
  )
}

export default ModalOrder