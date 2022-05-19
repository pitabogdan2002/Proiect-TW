window.onload = init;
function init()
{
    const paragrafe = document.getElementsByClassName("paragraf");
    paragrafe[0].addEventListener("click",parinte);
    paragrafe[1].addEventListener("click",copil);
    paragrafe[2].addEventListener("click",copil2);
}
function copil(event) 
{
    var element = event.currentTarget;
    element.style.color = "blue";
    event.stopPropagation();
}

function parinte(event) 
{
 
    var element = event.currentTarget;
    element.style.color = "aqua";
}
function copil2(event) 
{
    var element = event.currentTarget;
    element.style.color = "purple";
    event.stopPropagation();
}