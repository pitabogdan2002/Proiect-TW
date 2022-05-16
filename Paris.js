window.onload = init;
function init()
{
    document.addEventListener("keydown",()=>
    {
        setInterval(schimbare,3000);
    });
    let a = new Date();
    let text = a.toString().toLowerCase();
    document.getElementById("header").innerHTML = "Ati accesat site-ul la date de:" + text;
    document.getElementById("header").style.border = "2px solid black";
    document.getElementById("header").style.background= "aqua";
    document.getElementById("header").style.textAlign = "center";
    const c =  document.querySelectorAll(".pictures img");
    c.forEach(element => {
        element.addEventListener("click",function(event)
        {   
            if(element.id == "poza1")
                {event.preventDefault();}
            else
            {
                element.style.border = "10px dotted orange";
            }

        })
        
    });
}
function schimbare()
{
    const poza = document.getElementById('pozaaside');
    const rect = poza.getBoundingClientRect();
    let inaltime_poza = parseInt(rect.height);

    const element = document.getElementById('poza1');
    const cssObj = window.getComputedStyle(element,null);
    let latime =  parseInt(cssObj.getPropertyValue("width"));

    if(inaltime_poza == 180)
        {inaltime_poza = inaltime_poza /2;}
    else
        {inaltime_poza = inaltime_poza *2;}

    if(latime == 700)
        {latime = latime + 50;}
    else
        {latime = latime - 50;}
    document.getElementById("introduceti").innerHTML = "Imaginea are lățimea de " +latime.toString() + " px";
    document.getElementById("poza1").style.width = latime.toString()+"px";
    document.getElementById("pozaaside").style.height = inaltime_poza.toString()+"px";
}
