//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
let lista = '';

/*
Capturar o valor do campo de entrada: Utilize document.getElementById ou document.querySelector para obter o texto inserido pelo usuário.
Validar a entrada: Implemente uma validação para garantir que o campo não esteja vazio.
Se estiver vazio, exiba um alerta com a mensagem de erro: "Por favor, insira um nome."
Atualizar o array de amigos: Se o valor for válido, adicione-o ao array que armazena os nomes dos amigos usando o método .push().
Limpar o campo de entrada: Após adicionar o nome, redefina o campo de texto para uma string vazia.
*/
function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value;
    if (nomeAmigo !== '') {
        amigos.push(nomeAmigo);
        listarAmigos();
    } else {
       alert('Por favor, preencha o campo com o nome do amigo.');
   }
    tirarNomeSorteado();
}

/*
Crie uma função que percorra o array amigos e adicione cada nome como um elemento <li> dentro de uma lista HTML. Use innerHTML para limpar a lista antes de adicionar novos elementos.
Tarefas específicas:
Obter o elemento da lista: Utilize document.getElementById() ou document.querySelector() para selecionar a lista onde os amigos serão exibidos.
Limpar a lista existente: Defina lista.innerHTML = "" para garantir que não haja duplicados ao atualizar.
Percorrer o array: Use um loop for para percorrer o array amigos e criar elementos de lista (<li>) para cada nome.
Adicionar elementos à lista: Para cada amigo, crie um novo elemento de lista.
*/
function listarAmigos() {
    lista = '';
    amigos.forEach(nomeAmigo => {      
       lista += nomeAmigo + '<br>'});  
    document.getElementById('listaAmigos').innerHTML = lista;
}


/*
Escreva uma função que selecione aleatoriamente um dos nomes armazenados no array amigos.
Use Math.random() e Math.floor() para obter um índice aleatório.
Tarefas específicas:
Validar que há amigos disponíveis: Antes de sortear, verificar se o array amigos não está vazio.
Gerar um índice aleatório: Usar Math.random() e Math.floor() para selecionar um índice aleatório do array.
Obter o nome sorteado: Utilizar o índice aleatório para acessar o nome correspondente no array.
Mostrar o resultado: Atualizar o conteúdo do elemento de resultado usando document.getElementById() e innerHTML para exibir o amigo sorteado. */
function sortearAmigo(){
    if (amigos.length > 0) {
        let amigoSorteado = Math.floor(Math.random() * amigos.length);
        alert('Você sorteou: '+ amigos[amigoSorteado]);
        amigos.splice(amigoSorteado, 1);
        listarAmigos();
    } else {
        alert('Não há amigos para sortear.');
    } 
}

//cadastrar novo amigo
function tirarNomeSorteado() {
    nomeAmigo = document.getElementById(['amigo']);
    nomeAmigo.value = [''];
}