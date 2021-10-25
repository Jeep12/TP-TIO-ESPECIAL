let btnFraseRandom = document.querySelector("#btn-generar");
let btnBuscar = document.querySelector("#btn-buscar");
let divFrase = document.querySelector("#frase");
let form = document.querySelector("#form");
var frases = ["Es una loca no asumida, que no hay nada peor",

"LANATA me critica la vestimenta a mi que el día de la tapa de gente parecía que se había morfado a sopapo y milanesa",

"Doñas berretas de peluquería de barrio, las grasas esas, me hice una hamburguesa mientras hablaban del aceite que caía",

"Yo no puedo contestar a una cloaca ni a un vomito, o sea, no se puede contestar",

"Como voy a hacerle juicio a una cloaca, a un vomito o un moco?",

"Yo a mi hija no le transmito ninguna huevada, ninguna ignorancia mental como este imbecil a sus hijos",

"YO NO SE QUIENES SON",

"Es muy ignorante y muy bruta! Es una burra se cae y come pasto",

"A mi me importa tres pitos esta mina, toda su familia, toda su empresa, me la recontra succionan",

"En el fondo todo esto es un acto de amor encubierto y de lesbianismo no resuelto",

"No me vengan a contar cuentos de que son las buenitas y que estan con el ohm y con la paz, no te lo cree nadie, sos más mala que una araña y la que empezaste todas las peleas siempre FUISTE VOS",

"JAMÁS, no se que existen, si no están trabajando no hacen nada, como puedo hablar de gente que para mi realmente esta en un ataud? no se quienes son",

"QUIENES SON? QUIENES SON?",

"Son las que triunfan en el fracaso estas",

"Estas muy bien en cobrar, y no tarifas tan baratas mi amor, sino son putitas de café con leche",

"A cobrar en serio a todos estos gatos muertos de hambre y sino tirenles bofe",

"Me impresiona mi fama CADA VEZ MÁS",

"No puedo creer el atrevimiento de esta mujer que no se quien es",

"Decime como se dice en ingles SOY UNA ATREVIDA CARA DURA QUE QUIERE FAMA? No podes decir ni good morning mentirosa atrevida",

"Son muy conchudas las minas, porque son muy cliché, muy quejosas y recurrentes y muy previsibles",

"Me aburre una mujer porque siempre \"ay que te vas a poner, ay que te vas a poner?\" una garcha adentro boluda",

"Es un eructo con apuro en vez de salir por la boca sale por el culo",

"Esta es otra desagradable que hay ahí con un pelo escoba, un aliento que me volteaba, halitosis que inmunda",

"Que se calle la boca la carola esta",

"Ay por favor mira, esta mujer no puede ser más MALA, esa onda de virgencita de lujan camuflada le queda FATAL, que se retire y que me deje de joder ella",

"Voy a vomitar, patética mentirosa se sigue colgando de MI",

"Que facturas de que? Facturas que se comió ella que así está",

"Es un tanque atmosférico este mamut, con su propia verga se va envolviendo",

"Asi que no me vengan a joder con hacerse las santas y dejate de joder VOS conmigo, colgate de patolandia que trabajas con ella no de mi"];

form.addEventListener("submit", asd);
btnFraseRandom.addEventListener("click", mostrarFraseRandom);

function asd (e){
    e.preventDefault();
    mostrarFraseBuscada();
}

function mostrarFraseRandom(e){
    console.log("a");
    divFrase.innerHTML = seleccionarFraseRandom();
}

function seleccionarFraseRandom(){ 
    return frases[Math.floor(Math.random()*frases.length)]
}

function mostrarFraseBuscada(){
    divFrase.innerHTML = buscarFrase();
}

function buscarFrase(){
    let numero = document.querySelector("#numFrase").value;
    console.log(numero);
    return frases [numero-1];
}