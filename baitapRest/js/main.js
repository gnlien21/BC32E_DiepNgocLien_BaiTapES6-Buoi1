document.querySelector('#btnKhoi1').onclick = function(){
    
    let diemTrungBinh = 0;

    let diemToan = Number(document.querySelector('#inpToan').value);
    let diemLy = Number(document.querySelector('#inpLy').value);
    let diemHoa = Number(document.querySelector('#inpHoa').value);


    diemTrungBinh = tinhDiemTrungBinh(diemToan, diemLy, diemHoa);
    
    document.querySelector('#tbKhoi1').innerHTML = diemTrungBinh;
}

document.querySelector('#btnKhoi2').onclick = function(){
    
    let diemTrungBinh = 0;

    let diemVan = Number(document.querySelector('#inpVan').value);
    let diemSu = Number(document.querySelector('#inpSu').value);
    let diemDia = Number(document.querySelector('#inpDia').value);
    let diemAnh = Number(document.querySelector('#inpEnglish').value);


    diemTrungBinh = tinhDiemTrungBinh(diemVan, diemSu, diemDia, diemAnh);
    
    document.querySelector('#tbKhoi2').innerHTML = diemTrungBinh;
}

function tinhDiemTrungBinh(...diem){
    let tongDiem = 0;
    let diemTB = 0;
    for (let value of diem){
        tongDiem += Number(value);
    }
    
    diemTB = tongDiem/diem.length;
    return diemTB;

}



