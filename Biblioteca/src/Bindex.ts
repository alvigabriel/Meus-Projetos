// 07: 59 - aula 3


interface livro {
    numero: number;
    titulo: string;
    autor: string;
    ano: number;
    emprestado: string;

}

(function() {

    function biblio(){
        function ler(){}

        function adicionar(livro: livro){
            const row = document.createElement('tr');

            row.innerHTML = `
            <td>${livro.numero}</td>
            <td>${livro.titulo}</td>
            <td>${livro.autor}</td>
            <td>${livro.ano}</td>
            <td>${livro.emprestado}</td>
            <td>
                <button class="delete" data-numero="${livro.numero}">"Devolver"</button>
            </td>
            `;
        }

        function remover(){}

        function salvar(){}

        function render(){}

        return{ ler, adicionar, remover, salvar, render };
    }

    const $ =(query: string): HTMLInputElement | null => document.querySelector(query);
    $('.add')?.addEventListener('click', () => {
        const numero = $('#numero')?.value;
        const titulo = $('#titulo')?.value;
        const autor = $('#autor')?.value;
        const ano = $('#ano')?.value;
        const emprestado = $('#emprestado')?.value;

        if(!numero || !titulo || !autor || !ano || !emprestado){
            alert('Os campos são obrigatórios');
            return
        }

        biblio().adicionar({ numero: Number(), titulo, autor, ano: Number(), emprestado})
    });

})();