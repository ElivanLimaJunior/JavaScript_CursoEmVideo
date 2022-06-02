let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

// Verificar se o valor de n é um valor entre 1 e 100
function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) { //se o Number de n for maior igual a 1 e Number de 100 o nosso RETURN irá receber verdadeiro.
    return true
    } else {
    return false 
    }
}

// Verificar se o valor está dentro da lista
function inlista(n, l) { 
    if(l.indexOf(Number(n)) != -1) { //Se na lista o número de n for diferente de -1 indica que o valor de Number(n) Não está dentro do vetor. 
        return true
    } else {
        return false
    }
}

function adicionar() {
    // o primeiro valor já entra no valor de n para a função acima. (Isto foi visto na aula 16 sobre vetores e array com JS)
    // o segundo já entra para o segundo parametro da função inLista.
    
    if (isNumero(num.value) && !inlista(num.value, valores)) { // num.value é o valor dentro da variave. separado com a virgua e um espaço coloquei o nosso vetor "valores". Então o inlista irá passar o valor e os valores dentro do vetor. 
        valores.push(Number(num.value)) // .push para adicionar o Numero presente em num no nosso vetor valores.

        // criando tag para dentro do nosso select.
        let item = document.createElement('option') // Estamos criando uma tag option (Só criando, ainda não decidimos aqui para onde ela vai).
        item.text = `Valor ${num.value} adicionado.` // aqui estamos setando qual o texto que essa tag irá receber.
        lista.appendChild(item) // Aqui estamos adicionando a variavel item na nossa lista. (Dessa maneira temos o retorno visual no nosso site.).          AppendChild = Adicionar filho

    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    // A condição ser execultada:
    num.value = '' // Nosso num vai ser limpo recebendo um valor vazio
    num.focus() // .focus é o foco do nosso mouse, ou seja. . . ele irá voltar para dentro da caixa para digitarmos outro valor
}