// o número de produtos a ser adicionado
let numeroDeProdutos = parseInt(gets());

// cria um array para armazenar os produtos
let produtos = [];

// lê os produtos e os adiciona no carrinho
for (let i = 0; i < numeroDeProdutos; i++) {
    let nomeDoProduto = gets();
    produtos.push(nomeDoProduto);
}

// exibe o resultado final no formato esperado
print("Carrinho final: " + produtos.join(", "));
