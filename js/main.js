function load(){
    alert("Página Carregada");
}

function change(element){
    console.log(element.value);
}

function afterClick(){
    document.getElementById("after-click").innerHTML = "<strong>PARABÉNS!</strong><br> O PDF já está no seu e-mail."; 
}

function redirect(){
    window.open("http://github.com/raphaelmendonnca");
}

function cupomShow(element){
    //document.getElementById("mousemove").innerHTML = "MKD30OFF"
    element.innerHTML = "MKD30OFF";
}

function cupomHidden(element){
    //document.getElementById("mousemove").innerHTML = "Cupom 30% OFF"
    element.innerHTML = "Cupom 30% OFF";
}
/*
function validaIdade(idade){
    var validar;
    if (idade > 17){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Quantos anos você tem?");
console.log(validaIdade(idade));
*/

/*
function soma(n1, n2){
    return n1 + n2;
}
alert(soma(2, 3));
*/

/*
function setReplace(frase, retira, insere){
    return frase.replace(retira, insere);
}
alert(setReplace("Maria tem 34 anos.", "34", "18"));
*/

//var day = new Date;
//alert(day.getMonth()+1);
//alert(day.getMinutes());

/*
var count;
for(count=1; count <=5; count++){
    alert("Contagem: " + count);
}
*/

/*
var mult = prompt("Qual tabuada você quer calcular?")
var count = 0;
while (count <= 10){
    result = mult * count;
    console.log(mult + " x " + count + " = " + result);
    count++ ;
};
*/

/*
var age = prompt("Quantos anos você tem?");
if (age >= 18){
    alert("Acesso liberado... Uso excessivo causa impotência sexual.");
}else{
    alert("Acesso negado: Vou contar pra sua mãe...")
};
*/

/*
var fruits = [{nome:"Banana", Cor:"Amarela"}, {nome:"Laranja", Cor:"Laranja"}]
console.log(fruits);
console.log(fruits[1].nome);
*/

/*
var fruit = {nome:"Banana", Cor:"Amarela"};
console.log(fruit);
console.log(fruit.nome);
*/

/*
var fruitList = ["Pêra", "Uva", "Maçã", "Laranja"];
console.log(fruitList[0]);
alert(fruitList[1]);
fruitList.push("Banana");
console.log(fruitList);
fruitList.pop();
console.log(fruitList);
console.log(fruitList.length);
console.log(fruitList.toString());
console.log(fruitList.join(' - '));

/*
var nome = 'Raphael';
var idade = 24;
var idade2 = 10
var frase = 'Japão é o melhor time do mundo!'
alert(nome + ' tem ' + idade + ' anos.');
console.log(nome + ', hoje você tem ' + idade + '.');
console.log('Em 2031 você terá ' + (idade + idade2));
console.log(frase.replace('Japão', 'Brasil'))
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
*/