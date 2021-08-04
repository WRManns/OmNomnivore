import React, { useEffect, useState } from "react";
import NavXample from "../components/Navbar/index";
import MenuCard from "../components/Card/MenuCard";
import Wrapper from "../components/Wrapper/index";

const Documenu = require('documenu')
Documenu.configure('55fb253bdfe336b05d390014b8d54a58')






function Menu(props) {
    const [menuItems, setMenuItems] = useState();

    const params = {
        "size":1,
        "page":1,
        "fullmenu": true
    };

    useEffect(() => {
        console.log(props.location.state)

        Documenu.Restaurants.getByZipCode(props.location.state, params)
            .then(res => {
                const menu_array = []
                console.log(res.data)
                for (let i = 0; i < 10; i++) {
                    menu_array.push(res.data[i].menus[0].menu_sections[0].menu_items)
                }
                setMenuItems(menu_array)
            })
    }, [])

    return (
        <div className="container">
            <NavXample />
            <Wrapper>
                <MenuCard menuItems={menuItems} />
            </Wrapper>

        </div>

    )
}
export default Menu