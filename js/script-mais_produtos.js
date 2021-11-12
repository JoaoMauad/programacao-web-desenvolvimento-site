storage = window.localStorage;
var dadosStorageCarrinho = JSON.parse(storage.getItem("carrinho"))||"[]";
var carrinho = dadosStorageCarrinho;

storage = window.localStorage;
var dadosStorageProdutos = JSON.parse(storage.getItem("produtos"))||"[]";
var produto = dadosStorageProdutos;

if (produto == "[]"){
    produto = [[0, 'Tênis Verde Nike', 'R$800,00','41,42','2019','boot_verde.jpeg', false],[1, 'Tênis Branco Adidas', 'R$300,00','37,38','2020','boot_branco.jpeg', false],[2, 'Tênis Amarelo Puma', 'R$220,00','39,40','2020','boot_amarela.jpeg', false],[3, 'Tênis Preto Adidas', 'R$500,00','41,42','2019','boot_preto.jpeg', false],[4, 'Tênis Vermelho Nike', 'R$800,00','41,42','2019','boot_vermelho.jpeg', false]];
}


var aux_carrinho = [];


window.onload = function(){
    montarCardProdutos();
}
    
function montarCardProdutos(){

    document.getElementById("div-produto").innerHTML = "";

    for(var i = 0; i < produto.length; i++)
    {
        var conteudo = "";
       
        conteudo += '<div class="div-card">'
        conteudo += '<div class="div-card-img">'
        conteudo += '<img src="../img/'+ produto[i][5] +'">'
        conteudo += '</div>'
        conteudo += '<div class="div-card-descricao">'
        conteudo += produto[i][1]
        conteudo += '</div>'

        if(produto[i][6] == false){
            conteudo += '<div class="div-card-comprar" onclick="adicionarCarrinho(' + produto[i][0] +')">'
            conteudo += '<button> Adicionar ao carrinho </button>'
            conteudo += '</div>'
        }
        else
        {
            conteudo += '<div class="produto-carrinho">'
            conteudo += '<button> Adicionado ao carrinho </button>'
            conteudo += '</div>'
        }
        
        conteudo += '</div>'
        

        document.getElementById("div-produto").innerHTML += conteudo;
    }

}


function adicionarCarrinho(id){

    produto[id][6] = true;

    
    if (carrinho == "[]"){
        aux_carrinho.push(produto[id])
    }
    else {
        if(aux_carrinho.length==0)
        {
            for(var i = 0; i < carrinho.length; i++)
            {
                aux_carrinho.push(carrinho[i])
            }
            aux_carrinho.push(produto[id]);
        }
        else{
            aux_carrinho.push(produto[id])
        }
    }
    
    storage.setItem("carrinho", JSON.stringify(aux_carrinho))
    storage.setItem("produtos", JSON.stringify(produto))

    montarCardProdutos();
}