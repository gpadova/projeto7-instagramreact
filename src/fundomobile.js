export default function FundoMobile() {
    const icones = [{ iconeSelecionado: "home" },
                    { iconeSelecionado: "search-outline" },
                    { iconeSelecionado: "add-circle-outline" },
                    { iconeSelecionado: "heart-outline" },
                    { iconeSelecionado: "person-outline" },];

    return (
      <div class="fundo-mobile">
        {icones.map((i) => (<ion-icon name={i.iconeSelecionado}></ion-icon>))}
      </div>
    );
  };