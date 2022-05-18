window.onload = init;
function init()
{
    document.getElementById("poza1").style.border = "10px dotted blue";
    //var submeniuri = document.getElementsByClassName(".lista").querySelectorAll("li");
    //submeniuri[0].style.background = "blue";
    document.getElementById('addImage').onclick = addImage;
    document.getElementById('removeImage').onclick = removeImage;
    const culori =["red","orange","yellow","aqua","pink"];
    indexCulori=0
    function schimbareCuloare()
    {
        document.getElementById("poza1").style.borderColor = culori[indexCulori];
        indexCulori++;
        indexCulori=(indexCulori)%culori.length;
    }
    setInterval(schimbareCuloare, 2000);
    document.getElementById('formularul').onsubmit = validare;
    document.getElementById('adaugare').onclick = loadDoc;
}
const poze = [
    {URL: "https://busolatravel.ro/wp-content/uploads/2021/01/travel-world.jpg",},
    {URL: "https://www.gomeltourist.com/wp-content/uploads/2021/11/Travel.jpg",},
    {URL: "https://wwwnc.cdc.gov/travel/images/hiker-ocean-extreme.jpg",},
    {URL: "https://visa-platinum.com/images/default/vte/travel-experience-1x.jpg",}
];
i=0;
function addImage()
{
    var img = document.createElement("img");
    img.src = poze[i].URL;
    document.querySelector(".poze").append(img);
    i++;
    i=i%4;

}
function removeImage()
{
    function stergere()
    {
        document.querySelector(".poze").lastChild?.remove();
    }
    setTimeout(stergere, 2000);
}
function validare()
{
    var nume = document.getElementById('nume').value;
    var prenume = document.getElementById('prenume').value;
    var varsta = document.getElementById('varsta').value;
    var mail = document.getElementById('mail').value;
    var numeRegex = /^[a-zA-Z]+$/;
    var varstaRegex = /^([1-9]+[0-9]* | [1-9])$/;
    var mailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    var numeRezultat = numeRegex.test(nume);
    var prenumeRezultat = numeRegex.test(prenume);
    var varstaRezultat = varstaRegex.test(varsta);
    var mailRezultat = mailRegex.test(mail);
    alert("nume:"+numeRezultat +", prenume:"+prenumeRezultat+ ", varsta:"+varstaRezultat + ", mail:"+mailRezultat);
    return false;

}
function loadDoc() {
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function() {
       var data = JSON.parse(this.responseText);
       console.log(data[0]);
    for(let i=0; i<data.length; i++)
    {
        var p = document.createElement("p");
        p.innerHTML= "Veți găsi informații despre orașul " + data[i].name +  ", care se află în următoarea țara: " + data[i].Country +".";
        document.querySelector("#demo").append(p);
    }
}
    xhttp.open("GET", "date.json");
    xhttp.send();
  }