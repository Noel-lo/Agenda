document.getElementById('form-contato').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    if (nome && telefone) {
        adicionarContato(nome, telefone);
        document.getElementById('nome').value = '';
        document.getElementById('telefone').value = '';
    }
});

function adicionarContato(nome, telefone) {
    const tabela = document.getElementById('tabela-contatos').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();

    const celulaNome = novaLinha.insertCell(0);
    celulaNome.innerHTML = nome;

    const celulaTelefone = novaLinha.insertCell(1);
    celulaTelefone.innerHTML = telefone;
}
