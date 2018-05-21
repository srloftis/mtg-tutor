$(function() {
	
		var draw7 = true; 
		var landForTurn = false;
	
		var hand = document.getElementById("hand");		
		var deck = document.getElementById("deck");
		var battlefield = document.getElementById("battlefield");
		
		//lands
		var forest = document.createElement("img");
		forest.src = "./img/forest.png"
		forest.className = "land";
		var mountain = document.createElement("img");
		mountain.src = "./img/mountain.png"
		mountain.className = "land";
		
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
				land.style.display = "block";
			}
		};
		
		$('#hand').on('click', '*', function() {
			if(this.className == "land" && landForTurn == false){
				landForTurn = true;
				lands.appendChild(this);
			}
		});
		
		$('#lands').on('click', '*', function() {
			if($(this).hasClass("tapped")){
				this.style.transform = "rotate(0deg)";
				$(this).removeClass("tapped");
			}else{
				this.style.transform = "rotate(90deg)";
				$(this).addClass("tapped");
			}
		});
		
		
		

});