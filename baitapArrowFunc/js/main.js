const colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];
let renderButton = () => {
  let content = "";
  colorList.map((color, index) => {
    if (index == 0) {
      content += `
            <button class="color-button ${color} active" onclick="changColor('${color}')"></button>
        `;
    } else {
      content += `
            <button class="color-button ${color}" onclick="changColor('${color}')"></button>
        `;
    }
  });

  document.querySelector("#colorContainer").innerHTML = content;
};

renderButton();

let changColor = (color) => {
  
   //dom toi tat thẻ button
   //dung for duỵet tung the để remove active remove class js
   let btn =  document.querySelectorAll('.color-button');
   console.log(btn);
   for(let i = 0 ; i < btn.length;i++){
    btn[i].classList.remove("active");
    console.log(btn[i]);
   }
   //thêm active cho button hiện tại đang được click
  document.querySelector(`.${color}`).className = `color-button ${color} active`;

  document.getElementById("house").className = `house ${color}`;
};
