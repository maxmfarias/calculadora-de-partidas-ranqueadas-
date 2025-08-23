let operacao = parseInt(gets());
let quantidade = parseInt(gets());

let estoque = 5;
// 1 - Adicionar uma quantidade ao estoque
// 2 - Retirar uma quantidade do estoque

if (operacao === 1) {
    estoque += quantidade;
    print(estoque);
} else if (operacao === 2) {
    if (quantidade <= estoque) {
        estoque -= quantidade;
        print(estoque);
    } else {
        print("Estoque insuficiente");
    }
} else {
    print("erro");
}
