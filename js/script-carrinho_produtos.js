storage = window.localStorage;
var dadosStorageCarrinho = JSON.parse(storage.getItem("carrinho"))||"[]";
var carrinho = dadosStorageCarrinho;

storage = window.localStorage;
var dadosStorageProdutos = JSON.parse(storage.getItem("produtos"))||"[]";
var produto = dadosStorageProdutos;

if (produto == "[]"){
    produto = [[0, 'Tênis Verde Nike', 'R$800,00','41,42','2019','boot_verde.jpeg', false],[1, 'Tênis Branco Adidas', 'R$300,00','37,38','2020','boot_branco.jpeg', false],[2, 'Tênis Amarelo Puma', 'R$220,00','39,40','2020','boot_amarela.jpeg', false],[3, 'Tênis Preto Adidas', 'R$500,00','41,42','2019','boot_preto.jpeg', false],[4, 'Tênis Vermelho Nike', 'R$800,00','41,42','2019','boot_vermelho.jpeg', false]];
}


window.onload = function(){
    tabelaCarrinho();
}

function tabelaCarrinho(){

    var conteudo = '';

    document.getElementById("carrinho_produtos").innerHTML = "";
    conteudo += '<table border="1">';
    conteudo += '<tr>';
    conteudo += '<td> <b> Produto </b> </td>';
    conteudo += '<td> <b> Preço </b> </td>';
    conteudo += '<td> <b> Tamanho </b> </td>';
    conteudo += '<td> <b> Ano </b> </td>';
    conteudo += '<td> <b> Imagem </b> </td>';
    conteudo += '<tr>';
    
    if (carrinho!="[]"){
        for(var i=0; i<carrinho.length; i++){

            conteudo += '<tr>';
            conteudo += '<td>' + carrinho[i][1] + '</td>';
            conteudo += '<td>' + carrinho[i][2] +  '</td>';
            conteudo += '<td>' + carrinho[i][3] +  '</td>';
            conteudo += '<td>' + carrinho[i][4] +  '</td>';
            conteudo += '<td> <img class="imagem-produtos" src="../img/' + carrinho[i][5] + '"> </td>';
            conteudo += '</tr>';
        }
    }
    
    conteudo += '</table>';

    document.getElementById("carrinho_produtos").innerHTML += conteudo;

}


function compraProdutos(){
    if (carrinho=="[]"){
        alert("Erro, sem itens no carrinho");
    }
    else{
        storage.removeItem("carrinho");
        storage.removeItem("produtos");
        alert("Compra realizada com sucesso");
    }
}
