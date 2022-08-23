
let getELE = (id) => {
    return document.getElementById(id);
}
let averageScore = (...menuNum) => {
  let average = 0;
  let sum = 0;
  let count = 0;
  console.log(menuNum);
  menuNum.map((num) => {
    sum += num;
    count++;
    average = sum / count;
  });
  return average.toFixed(2);
};
averageScore();
let khoi1 = () => {
  let toan = Number(getELE("inpToan").value);
  let ly = Number(getELE("inpLy").value);
  let hoa = Number(getELE("inpHoa").value);
  let dtb = averageScore(toan,ly,hoa);
 document.getElementById("tbKhoi1").innerHTML = dtb;
};
document.getElementById("btnKhoi1").onclick = khoi1;

let khoi2 = () =>{
    let van = Number(getELE("inpVan").value);
    let su = Number(getELE("inpSu").value); 
    let dia = Number(getELE("inpDia").value); 
    let enlish = Number(getELE("inpEnglish").value);
    let dtb = averageScore(van,su,dia,enlish);
    document.getElementById("tbKhoi2").innerHTML = dtb;
}
document.getElementById("btnKhoi2").onclick = khoi2;

