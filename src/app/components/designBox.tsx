import Image from "next/image"

export default function DesignBox({image, alt, title, height}:{image:any, alt:string, title: string, height: number}){
  
  return (
    <div className="flex flex-col m-2 p-2">
      <Image
        src={image}
        alt={alt}
        height={height}
        width={200}
      />
      <p className="mt-2">{title}</p>
    </div>
  )
}