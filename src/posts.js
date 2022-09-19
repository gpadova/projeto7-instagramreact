import { useState } from "react"
import React from "react"

export default function Posts(){
    const postObject =[{ownerofPhoto:"assets/img/meowed.svg", postUserName: 'meowed', linkOfPhoto: "assets/img/gato-telefone.svg", 
                        likedBy: "respondeai", photoOfTheUserThatLiked : "assets/img/respondeai.svg", likesObj: 101523},
                        {ownerofPhoto:"assets/img/barked.svg", postUserName: 'barked', linkOfPhoto: "assets/img/dog.svg", 
                        likedBy: "adorable_animals", photoOfTheUserThatLiked : "assets/img/adorable_animals.svg", likesObj : 99159}]  
    
    



    function Post(props){
        const [likes, setLikes] = useState(props.totalLikes)
        const [likeAppereance, setlikeAppereance] = useState(false)
        const [clicked, setClicked] = useState(false)

        function redHeart(){
            setlikeAppereance(!likeAppereance)
            
            if (likeAppereance === false) {
                setLikes(likes + 1);
              } else {
                setLikes(likes - 1);
              } 
        }
        
        function savingPost() { 
            setClicked(!clicked)
          }
    
        
        return(
            <div class="post">
                <div class="topo">
                    <div class="usuario">
                    <img src={props.ownerofPhoto} alt = {props.ownerofPhoto}/>
                    {props.postUserName}
                    </div>
                    <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src={props.linkOfPhoto} alt={props.linkOfPhoto} />
                </div>

                <div class="fundo">
                    <div class="acoes">
                    <div>
                        <ion-icon name={likeAppereance? "heart" : "heart-outline"}  class={likeAppereance ? "red" : ""} onClick={redHeart}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={clicked ? "bookmark" : "bookmark-outline"} onClick={savingPost}></ion-icon>
                    </div>
                    </div>

                    <div class="curtidas">
                    <img src={props.photoOfTheUserThatLiked} alt ={props.photoOfTheUserThatLiked}/>
                    <div class="texto">
                        Curtido por <strong>{props.likedBy}</strong> e <strong>outras {likes} pessoas</strong>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
    return(
        <div className="posts">
            {postObject.map((obj) => <Post ownerofPhoto = {obj.ownerofPhoto} totalLikes ={obj.likesObj} postUserName ={obj.postUserName} linkOfPhoto ={obj.linkOfPhoto} photoOfTheUserThatLiked={obj.photoOfTheUserThatLiked} likedBy ={obj.likedBy} /> )}
        </div>
    )
}
