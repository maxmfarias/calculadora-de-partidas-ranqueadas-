let heroi = {
  nome: "max", 
  idade: "21", 
  tipo: ["guerreiro", "mago", "monge", "ninja"],
  ataque:["espada", "magia", "artes marciais", "shuriken"],

  
  atacarPorIndice(indice){
    let tipo = this.tipo[indice];
    let ataque = this.ataque[indice];
    console.log(`O ${tipo} atacou usando ${ataque}`);
}
}

heroi.atacarPorIndice([1])
heroi.atacarPorIndice([0])