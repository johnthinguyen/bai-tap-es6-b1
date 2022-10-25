function tinhDiemTrungBinh(...paRam) {
    switch (paRam.length) {
        case 3: {
            let dtb = (paRam[0] + paRam[1] + paRam[2]) / 3;
            document.getElementById('tbKhoi1').innerHTML = dtb;
        }; break;
        case 4: {
            let dtb2 = (paRam[0] + paRam[1] + paRam[2] + paRam[3]) / 4
            document.getElementById('tbKhoi2').innerHTML = dtb2
        }; break;
    }
}
document.getElementById('btnKhoi1').onclick = function () {
    let toan = document.getElementById('inpToan').value * 1;
    let ly = document.getElementById('inpLy').value * 1;
    let hoa = document.getElementById('inpHoa').value * 1;
    tinhDiemTrungBinh(toan, ly, hoa);
}
document.getElementById('btnKhoi2').onclick = function () {
    let van = document.getElementById('inpVan').value * 1;
    let su = document.getElementById('inpSu').value * 1;
    let dia = document.getElementById('inpDia').value * 1;
    let tiengAnh = document.getElementById('inpEnglish').value * 1;
    tinhDiemTrungBinh(van, su, dia, tiengAnh);
}