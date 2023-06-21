let listaTarefas = document.getElementById('lista-tarefas');
let botaoAdicionar = document.getElementById('botao-adicionar');
let campoTarefa = document.getElementById('campo-tarefa');

let itensSalvos = JSON.parse(localStorage.getItem('itens')) || [];
itensSalvos.forEach(adicionarItemNaLista);

botaoAdicionar.addEventListener('click', function() {
    let nomeItem = campoTarefa.value;
    adicionarItemNaLista(nomeItem);

    itensSalvos.push(nomeItem);
    localStorage.setItem('itens', JSON.stringify(itensSalvos));
    inputItem.value = '';
})

function adicionarItemNaLista(nomeItem) {
    let itemLista = document.createElement('li');
    itemLista.innerText = nomeItem;
    listaTarefas.appendChild(itemLista);
}

let botaoToggle = document.getElementById('toggle');

document.body.className = localStorage.getItem('modo') || 'modo-claro';

botaoToggle.addEventListener('click', function() {
    if(document.body.className === 'modo-claro') {
        document.body.className = 'modo-escuro'
    } else {
        document.body.className = 'modo-claro'
    }

    localStorage.setItem('modo', document.body.className);
})

let botaoExcluir = document.createElement("button");
botaoExcluir.innerText = "Remover";
campoTarefa.appendChild(botaoExcluir);
campoTarefa.value = "";
botaoExcluir.className = "botao-excluir";