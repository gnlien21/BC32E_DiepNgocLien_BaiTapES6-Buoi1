let chuoiKyTu = [];
chuoiKyTu = tachChuoi('#text');

function tachChuoi (selector){
    let html = '';
    let string = document.querySelector(selector).innerHTML;
    console.log(string);
    let chars = [...string];
    
    for (let value of string){
        html += `<span>${value}</span>`;
    }

    document.querySelector(selector).innerHTML = html;
}


