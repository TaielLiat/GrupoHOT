console. log ("HOLA MUNDO");

const url = 'juegos.json';
const request = new XMLHttpRequest ();
request.open ('GET', url); // setean el método, la url de api
request.responseType = 'json'; //definen el tipo de dato que les devuelve
request.send();//envían la solicitud
var juegos ='';

console.log(request.response);
request.onload = function (){ //esperan la respuesta
    console.log(request.response);
    juegos = request.response; // reciben la respuesta
    setDataGames();

}

function setDataGames(){
    

}
