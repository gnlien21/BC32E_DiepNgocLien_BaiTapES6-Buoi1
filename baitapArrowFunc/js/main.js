const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];



let danhSachMau = (array, selector) => {
    let html = '';
    for (let value of array){
        html += `<button class="color-button ${value}"></button>`;
    }

    document.querySelector(selector).innerHTML = html;
    return html;
}

danhSachMau(colorList, '#colorContainer');

const arrayButton = document.getElementsByTagName('button');

let doiMau = (array, selector)=>{
    let newClassName = '';
    let ele = document.querySelector(selector);
    for (let index in array){
        array[index].onclick = function(){
            // console.log(array[index].classList[1]);
            newClassName = array[index].classList[1];
            ele.classList.remove(ele.classList[1]);
            ele.classList.add(newClassName);
        }

    }
}

doiMau(arrayButton, '#house');



// document.querySelector('#house').classList.add('pallet');

