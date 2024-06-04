import Image from "next/image"
import BoardsBg from '../../../public/boards-head.jpg'
import Waves from '../../../public/waves.png'
import { GiShoppingCart } from "react-icons/gi";

export default function Header({}){
  return (
    <nav className="relative top-0 flex flex-col w-full h-64 border-b-4 border-green-200">
      <div className="absolute -z-10 h-full w-full">
        <Image
          src={BoardsBg}
          quality={100}
          alt="tops of surfboards leaning against a wall in front of the ocean"
          className="object-center object-cover w-full h-full opacity-50"
        />
      </div>
      <div className="bg-blue-200/85 h-full flex flex-row items-center justify-between">
        <Image
          src={Waves}
          quality={100}
          alt="wave logo"
          className="w-10 h-10 m-2 mx-4"
        />
        <h1 className="font-Knewave text-3xl text-white drop-shadow-[0_6px_8px_rgba(47,148,181,1.0)]">Welcome to AllBoards!</h1>
        <button className="mr-4 text-white">
          <span className="absolute w-fit h-fit px-1 ml-2 text-xs  bg-red-500 z-10 rounded">5</span>
          <p className="z-0 text-3xl font-bold drop-shadow-[0_6px_6px_rgba(47,148,181,1.0)]"><GiShoppingCart /></p>
        </button>
      </div>
    </nav>
  )
}