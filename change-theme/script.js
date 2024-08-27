let html = document.querySelector('html');
let select = document.querySelector('select');
function update(bgColor, txtColor){
    html.style.backgroundColor = bgColor;
    html.style.color = txtColor;
}

select.addEventListener('change', ()=>
    {
        select.value === "black" ? update('black', 'white') : update('white', 'black');
    }
)