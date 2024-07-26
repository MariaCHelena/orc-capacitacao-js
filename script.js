function adicionarElemento(array, item){
  array.push(item);
}

function excluirElemento(array, item){
  const filteredArray = array.filter((element) => element != item)

  return filteredArray;
}
