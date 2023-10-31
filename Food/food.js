var randomNumber= Math.random();
randomNumber=Math.floor(randomNumber*4)+1;
var image= "IMG"+randomNumber+".GIF";
document.querySelector(".js_img").setAttribute("src", image);
if (image == "IMG1.GIF"){
  document.getElementById("js_comment").innerHTML = "Halawa a rich flour dessert that is made of coconut milk and groundnuts"
} else if (image == "IMG2.GIF"){
  document.getElementById("js_comment").innerHTML = "Kyout Kyaw an agar jelly layered with different flavor is a cheap and unique dessert of Burma"
} else if (image == "IMG3.GIF"){
  document.getElementById("js_comment").innerHTML = "Mohingar is the Burmese national dish made from fish stock with a mixture of the banana stem, onion, and nuts and eaten with rice noodles topped with eggs, fritters, and greens."
} else if (image == "IMG4.GIF"){
  document.getElementById("js_comment").innerHTML = " Mote Yay Kyaw is a unique fitter thats fried of sweet batter. Sold widely in night markets. It's signature during the Yay Kyaw night market festival."
}