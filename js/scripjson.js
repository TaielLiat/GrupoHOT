const requestURL = 'juegos.json';
const request = new XMLHttpRequest();
request.open('GET', url); // setean el método, la url de api
request.responseType = 'json'; //definen el tipo de dato que les devuelve
request.send();//envían la solicitud
var juegoS = '';

console.log(request.response);


request.onload = function (){ //esperan la respuesta
    juegoS.log(request.response);
    equipo = request.response; //reciben la respuesta
    setDataGames();
    setTableGammers();
}

function setDataGames(){
    let juego = document.getElementById("2");
    juego.innerHTML = juegos.juego;
  //  let titulo = document.getElementById("title");
  //  titulo.innerHTML = "<b>" + equipo["pais"] + "</b>";
  //  let grupo = document.getElementById("grupo");
  //  grupo.innerHTML = equipo.grupo;
}