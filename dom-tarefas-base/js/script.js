let listaTarefas = document.getElementById('lista-tarefas');
let botaoAdicionar = document.getElementById('botao-adicionar');
let campoTarefa = document.getElementById('campo-tarefa');

let itensSalvos = JSON.parse(localStorage.getItem('itens')) || [];
itensSalvos.forEach(adicionarItemNaLista);

botaoAdicionar.addEventListener('click', function() {
    let nomeItem = campoTarefa.value;

    if (nomeItem == "") {
        nomeItem = "Vazio";
    }
    adicionarItemNaLista(nomeItem);
    itensSalvos.push(nomeItem);
    localStorage.setItem('itens', JSON.stringify(itensSalvos));
    inputItem.value = '';
})

campoTarefa.addEventListener('keyup', function(enter) {
    if(enter.key === "Enter") {
    let nomeItem = campoTarefa.value;

    if (nomeItem == "") {
        nomeItem = "Vazio";
    }
    adicionarItemNaLista(nomeItem);
    itensSalvos.push(nomeItem);
    localStorage.setItem('itens', JSON.stringify(itensSalvos));
    inputItem.value = '';
    }
})

function adicionarItemNaLista(nomeItem) {
    let novaTarefa = document.createElement('li');
    novaTarefa.innerText = nomeItem;
    listaTarefas.appendChild(novaTarefa);

    let botaoExcluir = document.createElement("button");
    botaoExcluir.innerText = "Remover";
    novaTarefa.appendChild(botaoExcluir);
    campoTarefa.value = "";
    botaoExcluir.className = "botao-excluir";
    botaoExcluir.addEventListener('click', function() {
            listaTarefas.removeChild(novaTarefa);
            itensSalvos.splice(itensSalvos.indexOf(nomeItem), 1);
            localStorage.setItem('itens', JSON.stringify(itensSalvos));
        })
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