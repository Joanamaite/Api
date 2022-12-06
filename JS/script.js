let botao = document.querySelector("#pesquisar");
let limpar = document.querySelector("#limpar");

        let adicionar = async() => {
            let url = `https://swapi.py4e.com/api/people/?search=`+document.querySelector("#nome").value;
          fetch(url).then(response => response.json()).then(a =>{
            console.log(a)
            nome.value =  `${a.results[0].name}`
            altura.value =  `${a.results[0].height}`
            nascimento.value =  `${a.results[0].birth_year}`
            olhos.value =  `${a.results[0].eye_color}`
            genero.value =  `${a.results[0].gender }`
            cabelo.value =  `${a.results[0].hair_color}`
            pele.value =  `${a.results[0].skin_color}`
            
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
       
         