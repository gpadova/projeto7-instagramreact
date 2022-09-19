export default function Sugestoes(props){
    return (
        <div>
          <div class="sugestao">
            <div class="usuario">
              <img src={props.image} alt={props.image} />
              <div class="texto">
                <div class="nome">{props.username}</div>
                <div class="razao">{props.status}</div>
              </div>
            </div>
            <div class="seguir">Seguir</div>
          </div>
        </div>
    )
}