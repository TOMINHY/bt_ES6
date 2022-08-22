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

let show = () => {
  let content = "";
  content += `
    <button class=" color-button pallet active"></button>
    <button class=" color-button viridian"></button>
    <button class=" color-button pewter"></button>
    <button class=" color-button cerulean"></button>
    <button class=" color-button vermillion"></button>
    <button class=" color-button lavender"></button>
    <button class=" color-button celadon"></button>
    <button class=" color-button saffron"></button>
    <button class=" color-button fuschia"></button>
    <button class=" color-button cinnabar"></button>
  `;
  document.getElementById("colorContainer").innerHTML = content;
};
show();

const pallet = document.querySelector(".pallet");
const viridian = document.querySelector(".viridian");
const pewter = document.querySelector(".pewter");
const cerulean = document.querySelector(".cerulean");
const vermillion = document.querySelector(".vermillion");
const lavender = document.querySelector(".lavender");
const celadon = document.querySelector(".celadon");
const saffron = document.querySelector(".saffron");
const fuschia = document.querySelector(".fuschia");
const cinnabar = document.querySelector(".cinnabar");

const house = document.querySelector(".house");

viridian.onclick = function(){
  house.classList.add("viridian");
  house.classList.remove("pallet");
  house.classList.remove("pewter");
  house.classList.remove("cerulean");
  house.classList.remove("vermillion");
  house.classList.remove("lavender");
  house.classList.remove("celadon");
  house.classList.remove("saffron");
  house.classList.remove("fuschia");
  house.classList.remove("cinnabar");



   pallet.classList.remove("active")
   viridian.classList.add("active");
   pewter.classList.remove("active") 
   cerulean.classList.remove("active")
  
   vermillion.classList.remove("active") 
   lavender.classList.remove("active") 
   celadon.classList.remove("active")
   saffron.classList.remove("active") 
  
   fuschia.classList.remove("active") 
   cinnabar.classList.remove("active") 

}
pewter.onclick = function(){
  house.classList.remove("viridian");
  house.classList.remove("pallet");
  house.classList.add("pewter");
  house.classList.remove("cerulean");
  house.classList.remove("vermillion");
  house.classList.remove("lavender");
  house.classList.remove("celadon");
  house.classList.remove("saffron");
  house.classList.remove("fuschia");
  house.classList.remove("cinnabar");

 
  pallet.classList.remove("active")
  viridian.classList.remove("active");
  pewter.classList.add("active") 
  cerulean.classList.remove("active")
 
  vermillion.classList.remove("active") 
  lavender.classList.remove("active") 
  celadon.classList.remove("active")
  saffron.classList.remove("active") 
 
  fuschia.classList.remove("active") 
  cinnabar.classList.remove("active") 

}
cerulean.onclick = function(){
  house.classList.remove("viridian");
  house.classList.remove("pallet");
  house.classList.remove("pewter");
  house.classList.add("cerulean");
  house.classList.remove("vermillion");
  house.classList.remove("lavender");
  house.classList.remove("celadon");
  house.classList.remove("saffron");
  house.classList.remove("fuschia");
  house.classList.remove("cinnabar");
 
  pallet.classList.remove("active")
  viridian.classList.remove("active");
  pewter.classList.remove("active") 
  cerulean.classList.add("active")
 
  vermillion.classList.remove("active") 
  lavender.classList.remove("active") 
  celadon.classList.remove("active")
  saffron.classList.remove("active") 
 
  fuschia.classList.remove("active") 
  cinnabar.classList.remove("active") 

}
vermillion.onclick = function(){
  house.classList.remove("viridian");
  house.classList.remove("pallet");
  house.classList.remove("pewter");
  house.classList.remove("cerulean");
  house.classList.add("vermillion");
  house.classList.remove("lavender");
  house.classList.remove("celadon");
  house.classList.remove("saffron");
  house.classList.remove("fuschia");
  house.classList.remove("cinnabar");
 
  pallet.classList.remove("active")
  viridian.classList.remove("active");
  pewter.classList.remove("active") 
  cerulean.classList.remove("active")
 
  vermillion.classList.add("active") 
  lavender.classList.remove("active") 
  celadon.classList.remove("active")
  saffron.classList.remove("active") 
 
  fuschia.classList.remove("active") 
  cinnabar.classList.remove("active") 
}
lavender.onclick = function(){
  house.classList.remove("viridian");
  house.classList.remove("pallet");
  house.classList.remove("pewter");
  house.classList.remove("cerulean");
  house.classList.remove("vermillion");
  house.classList.add("lavender");
  house.classList.remove("celadon");
  house.classList.remove("saffron");
  house.classList.remove("fuschia");
  house.classList.remove("cinnabar");
 
  pallet.classList.remove("active")
  viridian.classList.remove("active");
  pewter.classList.remove("active") 
  cerulean.classList.remove("active")
 
  vermillion.classList.remove("active") 
  lavender.classList.add("active") 
  celadon.classList.remove("active")
  saffron.classList.remove("active") 
 
  fuschia.classList.remove("active") 
  cinnabar.classList.remove("active") 
}
celadon.onclick = function() {
  house.classList.remove("viridian");
  house.classList.remove("pallet");
  house.classList.remove("pewter");
  house.classList.remove("cerulean");
  house.classList.remove("vermillion");
  house.classList.remove("lavender");
  house.classList.add("celadon");
  house.classList.remove("saffron");
  house.classList.remove("fuschia");
  house.classList.remove("cinnabar");
 
  pallet.classList.remove("active")
  viridian.classList.remove("active");
  pewter.classList.remove("active") 
  cerulean.classList.remove("active")
 
  vermillion.classList.remove("active") 
  lavender.classList.remove("active") 
  celadon.classList.add("active")
  saffron.classList.remove("active") 
 
  fuschia.classList.remove("active") 
  cinnabar.classList.remove("active") 
}
saffron.onclick = function(){
  house.classList.remove("viridian");
  house.classList.remove("pallet");
  house.classList.remove("pewter");
  house.classList.remove("cerulean");
  house.classList.remove("vermillion");
  house.classList.remove("lavender");
  house.classList.remove("celadon");
  house.classList.add("saffron");
  house.classList.remove("fuschia");
  house.classList.remove("cinnabar");
 
  pallet.classList.remove("active")
  viridian.classList.remove("active");
  pewter.classList.remove("active") 
  cerulean.classList.remove("active")
 
  vermillion.classList.remove("active") 
  lavender.classList.remove("active") 
  celadon.classList.remove("active")
  saffron.classList.add("active") 
 
  fuschia.classList.remove("active") 
  cinnabar.classList.remove("active") 
}
fuschia.onclick = function(){
  house.classList.remove("viridian");
  house.classList.remove("pallet");
  house.classList.remove("pewter");
  house.classList.remove("cerulean");
  house.classList.remove("vermillion");
  house.classList.remove("lavender");
  house.classList.remove("celadon");
  house.classList.remove("saffron");
  house.classList.add("fuschia");
  house.classList.remove("cinnabar");
 
  pallet.classList.remove("active")
  viridian.classList.remove("active");
  pewter.classList.remove("active") 
  cerulean.classList.remove("active")
 
  vermillion.classList.remove("active") 
  lavender.classList.remove("active") 
  celadon.classList.remove("active")
  saffron.classList.remove("active") 
 
  fuschia.classList.add("active") 
  cinnabar.classList.remove("active") 
}
cinnabar.onclick = function(){
  house.classList.remove("viridian");
  house.classList.remove("pallet");
  house.classList.remove("pewter");
  house.classList.remove("cerulean");
  house.classList.remove("vermillion");
  house.classList.remove("lavender");
  house.classList.remove("celadon");
  house.classList.remove("saffron");
  house.classList.remove("fuschia");
  house.classList.add("cinnabar");
 
  pallet.classList.remove("active")
  viridian.classList.remove("active");
  pewter.classList.remove("active") 
  cerulean.classList.remove("active")
 
  vermillion.classList.remove("active") 
  lavender.classList.remove("active") 
  celadon.classList.remove("active")
  saffron.classList.remove("active") 
 
  fuschia.classList.remove("active") 
  cinnabar.classList.add("active") 
}
pallet.onclick = function(){
  house.classList.remove("viridian");
  house.classList.add("pallet");
  house.classList.remove("pewter");
  house.classList.remove("cerulean");
  house.classList.remove("vermillion");
  house.classList.remove("lavender");
  house.classList.remove("celadon");
  house.classList.remove("saffron");
  house.classList.remove("fuschia");
  house.classList.remove("cinnabar");
 
  pallet.classList.add("active")
  viridian.classList.remove("active");
  pewter.classList.remove("active") 
  cerulean.classList.remove("active")
 
  vermillion.classList.remove("active") 
  lavender.classList.remove("active") 
  celadon.classList.remove("active")
  saffron.classList.remove("active") 
 
  fuschia.classList.remove("active") 
  cinnabar.classList.remove("active") 
}










