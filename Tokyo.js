window.onload = init;
function init()
{
    const paragrafe= document.getElementsByClassName("paragraf");
    paragrafe.forEach(element => {
        element.addEventListener("click",function(event)
        {
            
            if(element.id == "copil")
                event.stopPropagation();
        })
    });
}