import { useState } from "react"
import React from 'react'


export default function Usuario(){
  const [photo, setPhoto] = React.useState("assets/img/catanacomics.svg")
  const [nameuser, setNameuser] = React.useState("Catana")

  const profileObject = [{picture: photo, userNameOwnUser : "catanacomics", nameOfUser :  nameuser}] 

  function IndividualComponent(props){
    return(
      <div class="usuario">
        <img src={props.profilePhoto} alt={photo} onClick ={() => setPhoto(prompt('Qual foto de peril você deseja colocar?'))}/>
        <div class="texto">
          <strong>{props.username}</strong>
          <span>
          <div className="icon-inner">{props.name}
            <ion-icon name="pencil" onClick ={() => setNameuser(prompt('Qual o seu nome?'))}></ion-icon></div>
          </span>
        </div>
      </div>
    )
  }

  return(
    <div>
    {profileObject.map((i) => <IndividualComponent profilePhoto ={i.picture} username={i.userNameOwnUser} name={i.nameOfUser}/>)}
    </div>
    )
}

