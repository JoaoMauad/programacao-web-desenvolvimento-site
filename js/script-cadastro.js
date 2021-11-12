storage = window.localStorage;
var dadosStorageCarrinho = JSON.parse(storage.getItem("carrinho"))||"[]";
var carrinho = dadosStorageCarrinho;

storage = window.localStorage;
var dadosStorageProdutos = JSON.parse(storage.getItem("produtos"))||"[]";
var produto = dadosStorageProdutos;

if (produto == "[]"){
    produto = [[0, 'Tênis Verde Nike', 'R$800,00','41,42','2019','boot_verde.jpeg', false],[1, 'Tênis Branco Adidas', 'R$300,00','37,38','2020','boot_branco.jpeg', false],[2, 'Tênis Amarelo Puma', 'R$220,00','39,40','2020','boot_amarela.jpeg', false],[3, 'Tênis Preto Adidas', 'R$500,00','41,42','2019','boot_preto.jpeg', false],[4, 'Tênis Vermelho Nike', 'R$800,00','41,42','2019','boot_vermelho.jpeg', false]];
}


function cadastro_confirma() {
    bool = true;
    controle = [];

    var nome = document.getElementById("nome").value;
    controle.push(nome);
    var email = document.getElementById("email").value;
    controle.push(email);
    var c_email = document.getElementById("c_email").value;
    controle.push(c_email);
    var usuario = document.getElementById("usuario").value;
    controle.push(usuario);
    var senha = document.getElementById("senha").value;
    controle.push(senha);
    var c_senha = document.getElementById("c_senha").value;
    controle.push(c_senha);
    var cpf = document.getElementById("cpf").value;
    controle.push(cpf);
    var cep = document.getElementById("cep").value;
    controle.push(cep);

    for (var i=0; i<controle.length; i++) {
        if (controle[i] == '') {
            bool = false;
        }
    }

    if (bool == false) {
        alert("Erro - existem campos que não foram preenchidos");
    }
    else {
        alert("Cadadstro realizado com sucesso");
        console.log(controle);
    }
}