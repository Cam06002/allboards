import DesignBox from "../components/designBox";


export default function GetDesigns({designs}:{designs:Array<any>}){
  let allDesigns = designs.map((design:any)=>{
    return (
      <DesignBox
        image={design.image}
        alt={design.alt}
        title={design.title}
      />
    )
  });

  return allDesigns
}