import Stories from "./stories"
import Posts from "./posts"
import Sidebar from "./sidebar"
import FundoMobile from "./fundomobile"
import React from "react"

export default function Corpo(){
    return(
        <div className="corpo">
            <div className="esquerda">
                <Stories />
                <Posts />
            </div>
            <Sidebar />
            <FundoMobile />
        </div>
    )
}

      