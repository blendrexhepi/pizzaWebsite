import { MenuList } from "../helpers/MenuList"
import { MenuItem } from "../components/MenuItem"
import "../styles/menu.css"

export const Menu = () => {
    return (
        <div className="menu">
            <h1 className="menutitle">Our Menu</h1>
            <div className="menulist">
                {MenuList.map((menuItem , key) => {
                    return <MenuItem 
                    key={key}
                    image={menuItem.image} 
                    name={menuItem.name} 
                    price={menuItem.price}/>
                })}
            </div>
        </div>
    )
}