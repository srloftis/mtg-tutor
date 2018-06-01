$(function() {
	
		var turn = 1; 
		var landForTurn = false;
		var mana = 0;
		var drawStep = true;
	
		var hand = document.getElementById("hand");		
		var deck = document.getElementById("deck");
		var battlefield = document.getElementById("battlefield");
		var pass = document.getElementById("pass");
		
		//initialize lands
		var forest = document.createElement("img");
		forest.src = "./img/forest.png"
		forest.className = "land";
		var mountain = document.createElement("img");
		mountain.src = "./img/mountain.png"
		mountain.className = "land";
		
		//initialize spells
		var elf = document.createElement("img");
		elf.src = "./img/elf.jpg"
		elf.className = 1;
		elf.classList.add("tap_mana");
		var bear = document.createElement("img");
		bear.src = "./img/bear.jpg"
		bear.className = 2;
		
		//draw starting hand
		deck.onclick = function(){
			if(drawStep){
				if(turn == 1){
					hand.appendChild(forest);
					hand.appendChild(forest.cloneNode(true));
					hand.appendChild(forest.cloneNode(true));
					hand.appendChild(elf);
					hand.appendChild(elf.cloneNode(true));
					hand.appendChild(bear);
					hand.appendChild(bear.cloneNode(true));
					document.getElementById("landDescr").style.display = "block";
				}if(turn == 2){
					hand.appendChild(bear.cloneNode(true));
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
		
		//play spell
		$('#hand').on('click', '*', function() {
			if($(this).hasClass("land") && landForTurn == false){
				landForTurn = true;
				document.getElementById("lands").appendChild(this);
				document.getElementById("costDescr").style.display = "block";
			}
			if($(this).hasClass(mana)){
				document.getElementById("creatures").appendChild(this);
				mana--;
				document.getElementById("summonDescr").style.display = "block";
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
			drawStep = true;
			turn2.style.display = "block";
			$('.land').attr('style', 'transform: rotate(0deg)');
			$('.land').removeClass("tapped");
		};
});