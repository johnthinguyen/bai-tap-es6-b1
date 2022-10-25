let arrColor = ['red', 'green ', 'blue', 'orange', 'pink', 'black', 'yellow', 'silver'];
let renderButton = () => {
    for (let i = 0; i < arrColor.length; i++) {
        let color = arrColor[i];
        let btn = document.createElement('button');
        btn.innerHTML = color;
        btn.className = 'btn text-light mx-2';
        btn.style.backgroundColor = color;
        document.getElementById('colorContainer').appendChild(btn)
        btn.onclick = () => {
            document.getElementById('house').style.backgroundColor = color;
        }
    }
}
renderButton();