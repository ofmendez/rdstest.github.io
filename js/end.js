window.onload = RespuestaFea();
function RespuestaFea() {
    var _resps = localStorage.getItem("resps");
    _resps *= 2;
    var youare = "";
    youare = _resps <= 30? "Basic Level user.":youare;
    youare = _resps >30 &&_resps <= 70? "Intermediate Level user.":youare;
    youare = _resps >70 &&_resps <= 100? "Advance Level user.":youare;
    document.getElementById("response").innerHTML = "Your score is "+_resps+"% <br> You are a  "+youare;
}
