import { createSignal } from "solid-js";
import { addToCart, removeFromCart } from "../App";


function Comp1(props) {
    
    const [count,setCount]= createSignal(0)



    const add =()=>{
        setCount(count()+1)
        document.dispatchEvent(addToCart)
        props.setPrice(+(props.price) + +(props.cprice))
    }
    
    const remove =()=>{
        if(count()===0){
            setCount(count()+1)
           
        }
        setCount(count()-1)
       document.dispatchEvent(removeFromCart)
       
      props.setPrice(props.count > 0 ? (-(props.price) - -(props.cprice)): 0)
      
       
        
    }

  
  return (

    

    <div class="w-[95%] h-28 bg-white  flex rounded-xl relative">
      <div class="h-full w-[60%]   ">
        
        <div class="w-fit h-[70%] flex ml-[20%] items-center text-xl font-bold ">{props.name}</div>
        <div class="w-fit h-1/4 flex ml-[20%]  items-center text-lg font-bold">₹{props.price}</div>
      </div>
      <div class="h-full w-[40%] flex justify-center ">
        <div class="h-full w-full">
          <img src={`${props.image}`}  class="object-cover mt-3 ml-5 rounded-md h-[80%] w-[70%]" />
        </div>
       
      </div>
      <div className="h-10 w-24 bg-black absolute left-[65%] mt-[20%] rounded-xl opacity-75 flex justify-center items-center ">

        <button onClick={remove} className="text-white w-[33.33%]">-
        </button>

        <div className="text-white w-[33.33%] flex justify-center">{count()}</div>

        <button onClick={add} 
           
            
     className="text-white w-[33.33%]">+</button>

      </div >

    
      
      
    </div>
  )
}

export default Comp1