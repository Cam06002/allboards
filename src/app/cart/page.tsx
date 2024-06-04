import DesignBox from "../components/designBox"

export default function Cart({cartItems}:{cartItems:any}) {

  let cartDiv = cartItems.map((item:any)=>{
    <div className="flex flex-row align-middle">
      <DesignBox 
        image={item.designImage}
        alt={item.designAlt}
        title={item.designTitle}
        height={item.designHeight}
      />
      <DesignBox 
        image={item.boardImage}
        alt={item.boardAlt}
        title={item.boardTitle}
        height={item.boardHeight}
      />
    </div>
  })

  return(
    <div className="flex flex-col">
      <h3 className="bg-yellow-100">Your Cart:</h3>
      {cartDiv}
    </div>
  )
}