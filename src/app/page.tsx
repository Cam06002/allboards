'use client'

import Waves from '../../public/waves.png'; //will be removed when db is hooked up

import React, {useState, useEffect} from "react";
import Image from "next/image";
import GetDesigns from './functions/getDesigns';
import testDesigns from './testData/testDesigns';
import testBoards from './testData/testBoards';

export default function Home() {
  const [designs, setDesigns] = useState<any>();
  const [selectedDesign, setSelectedDesign] = useState<any>();

  const [boardTypes, setBoardTypes] = useState<any>();
  const [selectedBoardType, setSelectedBoardType] = useState<any>();
  
  useEffect(()=>{
    if(selectedDesign){
      console.log(selectedDesign);
    }
  },[selectedDesign]);

  return (
    <main className="flex min-h-screen flex-col p-10">
      <div className="z-10 w-full max-w-5xl justify-center font-mono flex flex-col align-top">
        <h1 className="font-Knewave text-2xl mb-10 bg-yellow-100 flex w-full justify-self-center justify-center">Show Your Stylye With Custom-Wrapped Surfboards</h1>
        <div className="flex flex-col">
          <h3 className="font-Knewave text-lg">Step 1 - Choose Your Design</h3>
          <h3 className="font-Knewave text-lg">Step 2 - Choose Your Board Style</h3>
          <h3 className="font-Knewave text-lg">Step 3 - Align Your Design</h3>
          <h3 className="font-Knewave text-lg">Step 4 - Pay and Ship!</h3>
        </div>
      </div>
      <div>
        <h4 className="font-Knewave text-lg bg-yellow-100">Choose Your Design:</h4>
        <div className='flex flex-row flex-wrap'>
          <GetDesigns 
            designs={testDesigns}
            setSelectedDesign={setSelectedDesign}
          />
        </div>
      </div>
      <div>
        <h4 className="font-Knewave text-lg bg-yellow-100">Choose Your Board Style:</h4>
        <div className='flex flex-row flex-wrap'>
          <GetDesigns 
              designs={testBoards}
              setSelectedDesign={setSelectedBoardType}
          />
        </div>
      </div>
      <div>
        <h4 className="font-Knewave text-lg bg-yellow-100">Pay and Ship:</h4>
        <div>
          {/*designs here*/}
        </div>
      </div>
    </main>
  );
}
