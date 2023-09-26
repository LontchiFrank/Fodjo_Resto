import React,{useState} from 'react';
import "./Stepper.css";
import { TiTick } from "react-icons/ti";

type FillProps = {
    show: boolean;
    item: any;
    handleShowOffModal:any;
  };
  interface Amount {
    quantity:any;
  }


function Stepper(props:FillProps) {
    const steps:any = ["Quantity", "Shipping Info", "Payment"];
    const [currentStep, setCurrentStep] = useState(1);
    const [complete, setComplete] = useState(false);
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

    }
const newSomme:any =  changeStringToNumber * props.item.price;
console.log(newSomme)

const renderStepper:any = () => {
  switch (currentStep) {
    case 1:
    return(
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
               Shipping Info
              </label>
              <div className="mt-2">
        <p className="text-sm text-gray-500">
          Enter the Precise Location
        </p>
      </div>
              <input
                type="text"
                id="location"
                // value={quantity}
                // onChange={(e)=>handleChangeQty(e)}
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
    )
      break;
      case 2:
       return(
        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
        <h3
          className="text-lg font-semibold leading-6 text-orange-600 mb-3"
          id="modal-title"
        >
         Shipping Info
        </h3>
      
        <form 
      //   onSubmit={(e) => handleSubmit(e)}
        >
              <div className="mb-6">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                Location
                </label>
                <div className="mt-2">
          <p className="text-sm text-gray-500">
            Enter the Precise Location
          </p>
        </div>
                <input
                  type="text"
                  id="location"
                  // value={quantity}
                  // onChange={(e)=>handleChangeQty(e)}
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-300 dark:placeholder-gray-800 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Mayor Street "
                  required
                />
              </div>
           
             
            </form>
      </div>
       )
        break;
        case 3:
       return(
        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
        <h3
          className="text-lg font-semibold leading-6 text-orange-600 mb-3"
          id="modal-title"
        >
         User Info
        </h3>
      
        <form 
      //   onSubmit={(e) => handleSubmit(e)}
        >
              <div className="mb-6">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                Phone Number
                </label>
                <div className="mt-2">
          <p className="text-sm text-gray-500">
            Enter the Phone Number
          </p>
        </div>
                <input
                  type="number"
                  id="number"
                  // value={quantity}
                  // onChange={(e)=>handleChangeQty(e)}
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-300 dark:placeholder-gray-800 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="+237682996677 "
                  required
                />
              </div>
           
             
            </form>
      </div>
       )
          break;
  
  
    default:
      break;
  }
}



  return (
    <>
    
   {
    props.show ? 
    
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

            <div className="flex justify-between pb-3">
        {steps?.map((step:any, i:any) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>

              <div className="px-4">
              {renderStepper()}
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
             
                 {!complete && (
        <button
        className="inline-flex w-full justify-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
          onClick={() => {
            currentStep === steps.length
              ? setComplete(true)
              : setCurrentStep((prev) => prev + 1);
          }}
        >
          {currentStep === steps.length ? "Finish" : "Next"}
        </button>
       
      )}
      {currentStep != 1 ?
        <button
        type="button"
        onClick={() => {
          currentStep === steps.length
            ? setComplete(true)
            : setCurrentStep((prev) => prev - 1);
        }}
        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
      >
        Previous
      </button>:
       <button
       type="button"
       onClick={() => props.handleShowOffModal(false)}
       className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
     >
       Cancel
     </button>

      }
            </div>
          </div>
        </div>
      </div>
    </div>:null
   }
  </>
  )
}

export default Stepper