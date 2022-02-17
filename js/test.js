var numPreg = 2;
var resps = 0;
function NextQ(n) {
    resps += n;
    console.log(resps);
    if(numPreg == 11){
        localStorage.setItem("resps",resps);
        window.location = ("./end.html");
        return
    }
    var words = ['enunciado', 'trabajador','estudioso','personaje', 'canto', 'pocillo','test bien hecho','lost time', 'torero','error 404 xD'];
    var word = words[numPreg-1];
    document.getElementById("cuandoHacenBuenosEnunciados").innerHTML = (numPreg++)+" <br> Este si es un  "+word;
} // Math.ceil(Math.random()*1000