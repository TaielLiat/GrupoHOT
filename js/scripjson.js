/------ Parámetros para API ------/
var data = new FormData();
data.append('parameter_1', 'value parameter 1');
data.append('parameter_2', 'value parameter 2');

/------ Parámetros para request ------/
var xmlhttp = new XMLHttpRequest(),
    method = 'GET',
    url    = 'https://developer.mozilla.org/';

/------ Llamada de la request ------/
xmlhttp.open(method, url, true);
xmlhttp.responseType = "json";

/------ Llamada de la request ------/
xmlhttp.onload = function () {
    console.log(this.responseText);
};
xmlhttp.send(data);