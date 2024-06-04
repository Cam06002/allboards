import DesignBox from "../components/designBox";


export default function GetDesigns({designs, setSelectedDesign}:
  {designs:Array<any>, setSelectedDesign: any}
){
  let allDesigns = designs.map((design:any)=>{
    return (
      <button 
        onClick={()=>{setSelectedDesign(design)}}
        className="hover:bg-blue-400/25 focus:border-4 focus:rounded focus:border-blue-400"
      >
        <DesignBox
          image={design.image}
          alt={design.alt}
          title={design.title}
          height={design.height}
        />
      </button>
    )
  });

  return allDesigns
}