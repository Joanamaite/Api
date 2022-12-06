let botao = document.querySelector("#pesquisar");
let limpar = document.querySelector("#limpar");

        let adicionar = async() => {
            let url = `https://swapi.py4e.com/api/people/?search=`+document.querySelector("#nome").value;
          fetch(url).then(response => response.json()).then(result =>{
            console.log(result);
            document.querySelector("#nome").value =  `${result .results[0].name}`;
            document.querySelector("#altura").value =  `${result .results[0].height}`;
            document.querySelector("#nascimento").value =  `${result .results[0].birth_year}`;
            document.querySelector("#olhos").value =  `${result .results[0].eye_color}`;
            document.querySelector("#genero").value =  `${result .results[0].gender }`;
            document.querySelector("#cabelo").value =  `${result .results[0].hair_color}`;
            document.querySelector("#pele").value =  `${result .results[0].skin_color}`;
          }) 
}
        limpar.addEventListener("click", (e) => {
            nome.value =  "";
            altura.value = "";
            nascimento.value = "";
            olhos.value = "";
            genero.value =  "";
            cabelo.value =  "";
            pele.value =  "";
        })
        botao.addEventListener("click", adicionar)
     
       
         