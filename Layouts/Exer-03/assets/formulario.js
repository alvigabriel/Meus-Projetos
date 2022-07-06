
const btn = document.querySelector("#add");

           
btn?.addEventListener("click", (event) => {
    event.preventDefault();

    
        
    
    
    
    
    var data = document.querySelector("#data")

    const row = document.createElement('tr')

    var branco = document.createElement('td')
    var nome = document.createElement('td')
    var semestre1 = document.createElement('td')
    var semestre2 = document.createElement('td')
    var final = document.createElement('td')
    var freq = document.createElement('td')
    
    branco.textContent = "";
    nome.textContent = data.nome.value
    semestre1.textContent = data.semestre1.value
    semestre2.textContent = data.semestre2.value
    final.textContent = "0"
    freq.textContent = data.freq.value


function addLinha(){

    row.appendChild(branco)
    row.appendChild(nome)
    row.appendChild(semestre1)
    row.appendChild(semestre2)
    row.appendChild(final)
    row.appendChild(freq)

    var table = document.querySelector("#table")
    table?.appendChild(row)

}
 

    var escolha = confirm("Deseja continuar informando dados?")
    if (escolha === false){
        return
    } if (escolha === true){
        
     addLinha()
}
    
    
}) 




