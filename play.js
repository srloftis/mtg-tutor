$(function() {
	
		var draw7 = true; 
	
		var hand = document.getElementById("hand");		
		var deck = document.getElementById("deck");
		
		//lands
		var forest = document.createElement("img");
		forest.src = "./img/forest.png"
		var mountain = document.createElement("img");
		mountain.src = "./img/mountain.png"
		
		//spells
		var elf = document.createElement("img");
		elf.src = "./img/elf.jpg"
		var bear = document.createElement("img");
		bear.src = "./img/bear.jpg"
		
		deck.onclick = function(){
			if(draw7){
				draw7 = false;
				hand.appendChild(forest);
				hand.appendChild(forest.cloneNode(true));
				hand.appendChild(forest.cloneNode(true));
				hand.appendChild(elf);
				hand.appendChild(elf.cloneNode(true));
				hand.appendChild(bear);
				hand.appendChild(bear.cloneNode(true));
			}else{
				hand.appendChild(bear.cloneNode(true));
			}
		};
		
});