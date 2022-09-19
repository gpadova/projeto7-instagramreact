import Sugestoes from "./sugestoes"
import Usuario from "./usuario"
import React from "react"

export default function Sidebar(){

    const sugestaoObject =[{picture:"assets/img/bad.vibes.memes.svg", userName: "bad.vibes.memes", statusUser : "Segue você"},
                            {picture:"assets/img/chibirdart.svg", userName: "chibirdart", statusUser : "Segue você"},
                            {picture:"assets/img/razoesparaacreditar.svg", userName: "razoesparaacreditar", statusUser : "Novo no Instagram"},
                            {picture:"assets/img/adorable_animals.svg", userName: "adorable_animals", statusUser : "Segue você"},
                            {picture:"assets/img/smallcutecats.svg", userName: "smallcutecats", statusUser : "Segue você"}]

    
    return(
        <div className="sidebar">
                <Usuario />
            <div className="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {sugestaoObject.map(i => <Sugestoes image = {i.picture} username ={i.userName} status ={i.statusUser}/>)}    
                <div class="links">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                    Hashtags • Idioma
                </div>
            </div>

            <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>

    )
}
