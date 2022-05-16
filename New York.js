window.onload = init 
function init()
{
    const images = document.querySelector(".container").querySelectorAll('img');
    images.forEach(Image => {
        Image.addEventListener("click",e => {
            if (localStorage.clickcount) {
                localStorage.clickcount = Number(localStorage.clickcount)+1;
              } else {
                localStorage.clickcount = 1;
              }
            document.getElementById("contor").innerHTML = "Numarul de schimbare de culori: " + localStorage.clickcount;
            const culoare = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
            e.target.style.borderColor = culoare;
        })
    });
}
function random(number)
{
    return Math.floor(Math.random() * (number+1));
}
window.addEventListener("beforeunload", () => localStorage.clear());

