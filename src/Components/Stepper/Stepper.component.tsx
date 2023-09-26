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
    const steps = ["Quantity", "Shipping Info", "Payment", "Step 4"];
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


  return (
    <>
  
  </>
  )
}

export default Stepper