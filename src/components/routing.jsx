import { Route, Routes } from "react-router-dom"
import { ListCategory } from "./listCategory"
import { ListGame } from "./listGame"
import { AddCategory } from "./addCategory"
import { Login } from "./login"
import { Home } from "./home"
import { Information } from "./information"
import { Cart } from "./cart"
import { Addgame } from "./addgame"
import { Register } from "./register"
import { Endshop } from "./endshop"
import { Mycount } from "./mycount"
import { Detailshop } from "./detailshop"

export const Routing=()=>{
    return <Routes>
<Route path="myListC" element={<ListCategory></ListCategory>}></Route>
<Route path="myListG" element={<ListGame></ListGame>}></Route>
<Route path="myAddCategory" element={<AddCategory></AddCategory>}></Route>
<Route path="mylogin" element={<Login></Login>}></Route>
<Route path="myhome" element={<Home></Home>}></Route>
<Route path="myinformation/:id" element={<Information></Information>}></Route>
<Route path="mycart" element={<Cart></Cart>}></Route>
<Route path="myaddgame" element={<Addgame></Addgame>}></Route>
<Route path="myregister" element={<Register></Register>}></Route>
<Route path="myendshop" element={<Endshop></Endshop>}></Route>
<Route path="mymycount" element={<Mycount></Mycount>}></Route>
<Route path="mydetailshop/:_id" element={<Detailshop></Detailshop>}></Route>


<Route path="/" element={<Home></Home>}></Route>

    </Routes>
}