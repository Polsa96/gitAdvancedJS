// 1.1 Use querySelector to show by console the button with the class .showme
// 1.2 Use querySelector to show by console the h1 with id #pillado
// 1.3 Use querySelector to show by console all the p
// 1.4 Use querySelector to show by console all the elements with the class .pokemon
// 1.5 Use querySelector to show by console all the elements with attribute data-function="testMe" attribute.
// 1.6 Use querySelector to show by console the 3 character with the attribute data-function="testMe" attribute.


// 1.1 Use querySelector to show by console the button with the class .showme
let showButton$$ = document.querySelector(`.showme`);
console.log(showButton$$);

// 1.2 Use querySelector to show by console the h1 with id #pillado
let showH1$$ = document.querySelector(`#pillado`);
console.log(showH1$$);

// 1.3 Use querySelector to show by console all the p
let showAllP$$ = document.querySelectorAll(`p`);
console.log(showAllP$$);

// 1.4 Use querySelector to show by console all the elements with the class .pokemon
let showPokemonAll$$ = document.querySelectorAll(`.pokemon`);
console.log(showPokemonAll$$);

// 1.5 Use querySelector to show by console all the elements with attribute data-function="testMe" attribute.
let showDataFunctionAll$$ = document.querySelectorAll(`[data-function="testMe"]`);
console.log(showDataFunctionAll$$);

// 1.6 Use querySelector to show by console the 3 character with the attribute data-function="testMe" attribute.
let showDataFunction3$$ = document.querySelectorAll(`[data-function="testMe"]`);
console.log(showDataFunction3$$[2]);    //Agafem el 3r personatge