import "../styles/menu.css"


export const MenuItem = ({image,name,price}) =>{
    return(
    <div className="menuitem">
        <div style={{backgroundImage: `url(${image})`}}></div>
        <h1>{name}</h1>
        <p>{price}&euro;</p>
    </div>
  )
}