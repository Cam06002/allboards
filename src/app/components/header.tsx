import Image from "next/image"
import BoardsBg from '../../../public/boards-head.jpg'
import Waves from '../../../public/waves.png'

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
      <div className="bg-blue-200/80 h-full flex flex-row items-center">
        <Image
          src={Waves}
          quality={100}
          alt="wave logo"
          className="w-32 h-32 m-2 ml-4"
        />
        <h1 className="font-Knewave text-4xl text-white drop-shadow-[0_6px_8px_rgba(47,148,181,1.0)] mr-4">Welcome to AllBoards!</h1>
      </div>
    </nav>
  )
}