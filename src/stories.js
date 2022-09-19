
export default function Stories(){
    const storiesObject =  [{imageLink:"assets/img/9gag.svg",userStory: "9gag"},
                            {imageLink:"assets/img/meowed.svg",userStory: "meowed"},
                            {imageLink:"assets/img/barked.svg",userStory: "barked"},
                            {imageLink:"assets/img/nathanwpylestrangeplanet.svg",userStory: "nathanwpylestrangeplanet"},
                            {imageLink:"assets/img/wawawicomics.svg",userStory: "wawawicomics"},
                            {imageLink:"assets/img/respondeai.svg",userStory: "respondeai"},
                            {imageLink:"assets/img/filomoderna.svg",userStory: "filomoderna"},
                            {imageLink:"assets/img/memeriagourmet.svg",userStory: "memeriagourmet"}]

    function Story(props){
        return(
            <div class="story">
            <div class="imagem">
              <img src={props.image} alt = {props.image} />
            </div>
            <div class="usuario">
              {props.username}
            </div>
          </div>
        )

    }
    return(
        <div className="stories">
            {storiesObject.map(i => <Story image={i.imageLink} username = {i.userStory}/>)}
        </div>
    )
}
