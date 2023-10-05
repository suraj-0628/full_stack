import { For, Show, createSignal } from "solid-js"
import Comp from "./compoents/Comp"
import { category } from "./data/category"
import { Cuisine } from "./data/cuisine"
import { A, Route, Routes } from "@solidjs/router";
import Cart from "./compoents/cart";


export const addToCart =new Event('addToCart');
export const removeFromCart =new Event('removeFromCart');

function Home(){

  const [bool,setBool]=createSignal(false);
  const [count,setCount]=createSignal(0);
  const [price,setPrice]=createSignal(0)

  document.addEventListener('addToCart',()=>{
    setCount(prev => prev +1)
    setBool(true)
   
  })

  document.addEventListener('removeFromCart',()=>{
    setCount(prev=> prev >0 ? prev-1 :prev)
    if(count()<=0){
      setBool(false)
    }

    
  })



  return(
    <div className="bg-[rgb(25,23,23)] h-screen w-screen flex-col overflow-y-scroll ">

      <div className=" h-[25%] w-screen   ">

        <div className="flex justify-center  pt-10 text-2xl font-bold text-white"><h1>
          YOINKK EATX</h1>
          </div>
     
          <div className="border-b-2 border-yellow-300 w-[50%] relative left-[25%]"></div>

          <div className="text-yellow-300 font-light mt-1 flex justify-center">
               <p className="text-lg">The Kutty Snack</p>
          </div>
        
       <div className="h-[20%] w-[95%] pl-[2.5%] mt-5 ">
       <input className="h-full w-full pl-5 rounded-md" type="text" placeholder="search for items..."  />
       </div>

      </div>

      {/* cusinine section  */}
      <div className="bg-yellow-300 h-[20%] w-screen flex items-center space-x-5 pl-3 overflow-x-scroll flex-row">

        <For each={Cuisine}>
             {(value,index)=> <div className=" bg-white h-[100px] aspect-square rounded-full">
              <img className="h-full rounded-full" src={value} alt="" />
             </div>
             }
        </For>

      </div>
      {/* cusine section end */}
      
      <div className="  w-screen pt-5 flex justify-center items-center flex-col space-y-5 flex-shrink-0 pb-[25%]">
          <For each={category}>
            {(mm)=>{
             
              return (
                
                <For each={mm}>
                    {(m)=>{
                      return(
                        <Comp name={m.name}
                          price={m.price}
                          image={m.image}
                          bool={bool()}
                          setBool={setBool}
                          cprice={price()}
                          setPrice={setPrice}
                          count={count()}
                          setCount={setCount}
                         />
                               
                      )
                    }}
                </For>
              )
            }}

          </For>
         
      </div>
      <Show when={bool()}>
      <div className="bg-yellow-300 h-[10%] w-screen fixed bottom-0 rounded-t-lg">
          <div className="text-lg font-bold pl-2 pt-2 ">Total Items: {count()}</div>
          <div className="pl-3 pt-1 font-bold">₹ {price()}</div>
         <div className="absolute left-[70%] bottom-[35%] font-bold">
         <A  href='/cart'>click to pay</A>
         </div>
      </div>
      </Show>
     
        
    </div>
  )
}

function App() {
  
  return (
    <>
    
    <Routes>
      <Route path={'/'} component={Home}/>
      <Route path={'/cart'} component={Cart}/>
     </Routes>
    
    </>
  )
}

export default App
