import Image from "next/image"

export default function DesignBox({image, alt, title}:{image:any, alt:string, title: string}){
  
  return (
    <div className="flex flex-col m-2 p-2">
      <Image
        src={image}
        alt={alt}
        height={200}
        width={200}
      />
      <p className="mt-2">{title}</p>
    </div>
  )
}