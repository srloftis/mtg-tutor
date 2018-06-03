$(function() {
	
		var turn = 1; 
		var landForTurn = false;
		var mana = 0;
		var drawStep = true;
	
		var hand = document.getElementById("hand");		
		var deck = document.getElementById("deck");
		var pass = document.getElementById("pass");
		
		//initialize lands
		var forest = document.createElement("img");
		forest.src = "./img/forest.png"
		forest.className = "land";
		var mountain = document.createElement("img");
		mountain.src = "./img/mountain.png"
		mountain.className = "land";
		
		//initialize spells
		var badger = document.createElement("img");
		badger.src = "./img/badger.jpg"
		badger.className = 1;
		var bear = document.createElement("img");
		bear.src = "./img/bear.jpg"
		bear.className = 2;
		var beast = document.createElement("img");
		beast.src = "./img/beast.jpg"
		beast.className = 5;
		
		//draw starting hand
		deck.onclick = function(){
			if(drawStep){
				if(turn == 1){
					hand.appendChild(forest);
					hand.appendChild(forest.cloneNode(true));
					hand.appendChild(forest.cloneNode(true));
					hand.appendChild(badger);
					hand.appendChild(badger.cloneNode(true));
					hand.appendChild(bear);
					hand.appendChild(bear.cloneNode(true));
					document.getElementById("landDescr").style.display = "block";
				}if(turn == 2){
					hand.appendChild(beast);
					landForTurn = false;
					mana = 0;
				}
				turn++;
				drawStep = false;
			}
		};
		
		//tap/untap land
		$('#lands').on('click', '*', function() {
			if($(this).hasClass("tapped")){ //untap
				this.style.transform = "rotate(0deg)";
				$(this).removeClass("tapped");
				mana--;
			}else{ //tap
				this.style.transform = "rotate(90deg)";
				$(this).addClass("tapped");
				mana++;
			}
		});
		
		//play land or spell
		$('#hand').on('click', '*', function() {
			if($(this).hasClass("land") && landForTurn == false){
				landForTurn = true;
				document.getElementById("lands").appendChild(this);
				document.getElementById("costDescr").style.display = "block";
				document.getElementById("landDescr").style.color = "grey";
			}
			if($(this).hasClass(mana)){
				document.getElementById("creatures").appendChild(this);
				mana = 0;
				document.getElementById("summonDescr").style.display = "block";
				document.getElementById("costDescr").style.color = "grey";
			}
			this.style.border='0px';
		});
		
		//hand hover
		$('#hand').on("mouseenter", "*", function() {
			if(($(this).hasClass(mana)) || ($(this).hasClass("land") && !landForTurn)){
				this.style.border='4px solid #00FF1A';
			}
		});
				
		//hand hover
		$('#hand').on("mouseleave", "*", function() {
			this.style.border='0px';
		});
		
		//end turn
		pass.onclick = function(){
			if(turn == 2) {
				drawStep = true;
				turn2.style.display = "block";
				$('.land').attr('style', 'transform: rotate(0deg)');
				$('.land').removeClass("tapped");
				document.getElementById("summonDescr").style.color = "grey";
				this.style.color = "grey";
				this.style.cursor = "default";
			}
		};
		
		//stack cards 
		var doomblade = document.createElement("img");
		doomblade.src = "./img/instant.jpg"

		var blossoming = document.createElement("img");
		blossoming.src = "./img/blossoming.jpg"
		blossoming.className = 1;
		
		var arrow = document.createElement("img");
		arrow.src = "./img/arrow.ico";
		arrow.className = "arrow";
		
		//stack example
		var next = document.getElementById("next");
		next.onclick = function(){
			document.getElementById("creatures2").appendChild(arrow);
			document.getElementById("creatures2").appendChild(doomblade);
			document.getElementById("stack").appendChild(doomstack);
			document.getElementById("doomstack").innerHTML = "Doom Blade";

		};
});