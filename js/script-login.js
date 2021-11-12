storage = window.localStorage;
var dadosStorageCarrinho = JSON.parse(storage.getItem("carrinho"))||"[]";
var carrinho = dadosStorageCarrinho;

storage = window.localStorage;
var dadosStorageProdutos = JSON.parse(storage.getItem("produtos"))||"[]";
var produto = dadosStorageProdutos;

if (produto == "[]"){
    produto = [[0, 'Tênis Verde Nike', 'R$800,00','41,42','2019','boot_verde.jpeg', false],[1, 'Tênis Branco Adidas', 'R$300,00','37,38','2020','boot_branco.jpeg', false],[2, 'Tênis Amarelo Puma', 'R$220,00','39,40','2020','boot_amarela.jpeg', false],[3, 'Tênis Preto Adidas', 'R$500,00','41,42','2019','boot_preto.jpeg', false],[4, 'Tênis Vermelho Nike', 'R$800,00','41,42','2019','boot_vermelho.jpeg', false]];
}

function confirma_login() {

    bool = true;
    controle = [];

    var usuario = document.getElementById("usuario").value;
    controle.push(usuario);
    var senha = document.getElementById("senha").value;
    controle.push(senha);

    for (var i = 0; i<controle.length; i++) {
        if (controle[i] == '') {
            bool = false;
        }
    }

    if (bool == false) {
        alert("Campos não preenchidos");
    }
    else {
        alert("Função ainda não implementada");
    }
}

function cadastro() {
    location.href = "../pags/cadastro.html";
    document.getElementById("login-cadastro").innerHTML = location.href;
}