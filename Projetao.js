console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras      ')
console.log('             Olga Mahin               ')
console.log('--------------------------------------')

const db = require('./database')

const { produtos } = db

produtos.sort((a, b) => a.preco - b.preco)

const input = require('readline-sync')

const carrinho = []

//Listar no console uma tabela contendo os produtos em ordem crescente de preço (do menor ao maior). Utilize a lista contida no arquivo `database.js`
// buscando por categoria

const verProdutos = input.question('Voce deseja encontrar produtos por categoria? (S / N) :')
if (verProdutos.toUpperCase() === 'S') {
    console.log('--------------------------------------------')
    console.log('Essas são as nossas categorias:')
    console.log('alimento, bebida, casa, higiene, informática')
    console.log('--------------------------------------------')

    const qualCategoria = input.question('Selecione uma categoria: ')
    
    const categorias = produtos.filter(item => item.categoria === qualCategoria)
    
    console.table(categorias); 
} else { (verProdutos.toUpperCase() !== 'S') 
    console.log('Esses são nossos produtos disponiveis!')
    console.table(produtos)
}
console.log('--------------------------------------')

const array = new Array()

class Pedido {
    constructor(array){
        this.products = array
        this.subTotal = 0
        this.valorTotal = 0
        this.totalItens = 0
    }
}

const compras = () => {
    productId = parseInt(input.question('Qual o ID do produto desejado? '))

    for(i=0; i < 1000; i++){
        findId = produtos.find(item => item.id === productId)
        if(findId){
            break;
        }else{
            productId = parseInt(input.question('ID nao encontrado! Tente novamente! '))
        }
    }

quantidadeItem = parseInt(input.question('Qual a quantidade desejada dos produtos? '))
for(i=0; i < 1000; i++){
    if(quantidadeItem > 0){
        break;
    }else{
        quantidadeItem = parseInt(input.question('Digite uma quantidade valida'))
    }
}

const produtosCarrinho = {...findId, quantidade: quantidadeItem}
carrinho.push(produtosCarrinho)

const continueComprando = input.question('Deseja inserir mais produtos na sua sacola? (S/N)')
const continueComprandoFormato = continueComprando.toLowerCase()
if (continueComprandoFormato === 'n'){
  cupom = parseInt(input.question('Digite o valor do cupom: '))
}else{
    compras()
}
for (i=0; i < 1000; i++){
    if(cupom > 15 || cupom < 0){
        cupom = parseInt(input.question('Lamento, cupom invalido! Tente novamente!'))
    }else{
        break;
    }
}
}
compras()
class Order {
    constructor(carrinho){
        this.newProducts = carrinho
        this.subTotal = 0
    }
    calSubtotal(){
        this.subTotal = this.newProducts.reduce((acumulator,item) => acumulator + (item.preco * item.quantidade), 0)
    }
}
const order = new Order(carrinho)
console.table(order.newProducts)
order.calSubtotal()
console.log('------------------')
console.log(`subtotal $ ${order.subTotal.toFixed(2)}.`)
const desconto = order.subTotal * (cupom/100)
console.log(`cupom de desconto $ ${desconto.toFixed(2)}.`)
const total = order.subTotal - desconto
console.log(`total do pedido $ ${total.toFixed(2)}.`)
console.log('------------------')

const dataAtual = new Date();
const dia = dataAtual.getDate();
const mes = (dataAtual.getMonth() + 1);
const ano = dataAtual.getFullYear();
const horas = dataAtual.getHours();
const minutos = dataAtual.getMinutes();
console.log("Seu pedido foi gerado em: " + dia + "/" + mes + " de " + ano + " às " + horas + ":" + minutos + "h.")
console.log('--------------------------------------------')
console.log('Obrigada por comprar conosco!')