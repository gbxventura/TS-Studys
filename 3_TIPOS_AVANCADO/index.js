/* =================>
 1 - Arrays
<================= */
var numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);
var nomes = ['Gabriel', 'João'];
nomes.push('Roberto');
/* =================>
 2 - Arrays sintaxe antiga
<================= */
var nums = [100, 200];
numbers.push(300);
console.log(nums);
/* =================>
 3 - any <- [evitar]
<================= */
var arr1 = [1, 'teste', true, [], { nome: 'gabriel' }];
console.log(arr1);
arr1.push([1, 2, 3]);
/* =================>
 4 - Parâmetros tipados
<================= */
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
/* =================>
 5 - Tipo de retorno de funções
<================= */
function greeting(name) {
    return "Ol\u00E1 ".concat(name);
}
console.log(greeting('Gabriel'));
/* =================>
 6 - Funções anônimas em TS
<================= */
setTimeout(function () {
    var sallary = 1000;
    //console.log(parseFloat(sallary));
    //console.log(sallary);
}, 2000);
/* =================>
 7 - Tipos de objetos
<================= */
function passCoodinates(coord) {
    console.log('x coordinates: ' + coord.x);
    console.log('y coordinates: ' + coord.y);
}
var objCoord = { x: 329, y: 84.2 };
passCoodinates(objCoord);
var pessoaObj = {
    nome: 'Matheus',
    surname: 'Battisti',
};
