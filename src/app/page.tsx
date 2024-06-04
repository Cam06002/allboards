'use client'

import React, {useState, useEffect} from "react";
import GetDesigns from './functions/getDesigns';
import testDesigns from './testData/testDesigns';
import testBoards from './testData/testBoards';

export default function Home() {
  //const [designs, setDesigns] = useState<any>();
  const [selectedDesign, setSelectedDesign] = useState<any>();

  //const [boardTypes, setBoardTypes] = useState<any>();
  const [selectedBoardType, setSelectedBoardType] = useState<any>();
  const [cart, setCart] = useState<Array<any>>([]);
  
  useEffect(()=>{
    if(selectedDesign){
      console.log(selectedDesign);
    }
  },[selectedDesign]);

  const addToCart = () => {
    let cartAddition = {
      designImage: selectedDesign.image,
      designTitle: selectedDesign.title,
      designAlt: selectedDesign.alt,
      designHeight: selectedDesign.height,

      boardImage: selectedBoardType.image,
      boardTitle: selectedBoardType.title,
      boardAlt: selectedBoardType.alt,
      boardHeight: selectedBoardType.height
    };
    setCart([...cart, cartAddition]);
    setSelectedDesign(undefined);
    setSelectedBoardType(undefined);
  }

  return (
    <main className="flex min-h-screen flex-col p-10">
      <div className="z-10 w-full max-w-5xl justify-center font-mono flex flex-col align-top mb-10">
        <div className='w-full flex justify-center'>
          <h1 className="font-Knewave text-2xl mb-10 bg-yellow-100 flex w-fit justify-self-center">Show Your Stylye With Custom-Wrapped Surfboards</h1>
        </div>
        <div className="flex flex-col align-middle items-center justify-center">
          <h3 className="font-Knewave text-lg">Step 1 - Choose Your Design</h3>
          <h3 className="font-Knewave text-lg">Step 2 - Choose Your Board Style</h3>
          <h3 className="font-Knewave text-lg">Step 3 - Pay and Ship!</h3>
        </div>
      </div>

      <div className='my-10 flex flex-col justify-center'>
        <h4 className="font-Knewave text-lg bg-yellow-100 w-full mb-8">Choose Your Design:</h4>
        <div className='flex flex-row flex-wrap justify-center'>
          <GetDesigns 
            designs={testDesigns}
            setSelectedDesign={setSelectedDesign}
          />
        </div>
      </div>

      <div className='my-10 flex flex-col justify-center'>
        <h4 className="font-Knewave text-lg bg-yellow-100 w-full mb-8">Choose Your Board Style:</h4>
        <div className='flex flex-row flex-wrap justify-center'>
          <GetDesigns 
              designs={testBoards}
              setSelectedDesign={setSelectedBoardType}
          />
        </div>
      </div>
      <div className='my-10 flex flex-col justify-center'>
        <h4 className="font-Knewave text-lg bg-yellow-100 w-full mb-8">Pay and Ship:</h4>
        <div className='flex flex-row flex-wrap justify-center'>
          <button>Add Board to Cart</button>
          <button>Review Order</button>
        </div>
      </div>
    </main>
  );
}
