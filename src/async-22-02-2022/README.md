# Exercício

- Criar função que que retorna uma Promise com um número aleatório após esperar x milisegundos (criar tempo de espera e número aleatório usando randomNumberBetween)
- Chamar essa função usando then/catch
- Chamar essa função usando async/await com IIFE (Immediately Invoked Function Expression) = (async () => {})()
- Criar um array de Promises chamando essa função 3x e resolver usando Promise.all e Promise.allSettled
- Transformar a função para receber callbacks!
- Criar um timeout fixo dentro da função que faz rejeitar a Promise em 4000 milisegundos

## Extra
- Criar 3 arquivos .txt e inserir algum conteúdo neles
- Ler os 3 ao mesmo tempo e imprimir o resultado quando todos retornarem
- Ler os 3 ao mesmo tempo e imprimir o resultado assim que a primeira Promise resolver
