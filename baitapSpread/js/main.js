let showChars = () => {

  let str = "Hover Me!";
  let str2 = [...str];
  let content = "";
  str2.map((char) => {
    content += `
            <span>${char}</span>
        `;
  });
  document.querySelector(".heading").innerHTML = content;
};
showChars();
