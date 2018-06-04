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
		
		$("#begin").on("click", function(){
			document.getElementById("draw").style.display = "block";
			document.getElementById("battlefield1").style.display = "block";
			document.getElementById("go_ncs").style.display = "inline-block";
		});
		
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
		
		$('#go_ncs').on('click', '*', function() {
			document.getElementById("non_creature_spells").style.display = "block";
		});
			
		//stack cards 
		var doomblade = document.createElement("img");
		doomblade.src = "./img/instant.jpg"

		//var blossoming = document.createElement("img");
		//blossoming.src = "./img/blossoming.jpg"
		//blossoming.className = 1;
		
		var arrow = document.createElement("img");
		arrow.src = "./img/arrow.ico";
		arrow.className = "arrow";
		
		var doomstack = document.getElementById("doomstack");
		
		//stack example
		var next = document.getElementById("next");
		next.onclick = function(){
			document.getElementById("creatures2").appendChild(arrow);
			document.getElementById("creatures2").appendChild(doomblade);
			//document.getElementById("stack").appendChild(doomstack);
			document.getElementById("doomstack").innerHTML = "Doom Blade";
		};
		
		var blossom = document.getElementById("blossom");
		blossom.onclick = function(){
			//document.getElementById("stack").appendChild(blossomstack);
			document.getElementById("blossomstack").innerHTML = "Blossoming Defense";
		};
		
		//skip to non creature spells section
		$("#go_ncs").on("click", function(){
			document.getElementById("ncsHeader").style.display = "block";
			document.getElementById("spells").style.display = "block";
			document.getElementById("stackfield").style.display = "inline-block";
			document.getElementById("stack").style.display = "inline-block";
			//document.getElementById("next").style.display = "block";
			document.getElementById("go_combat").style.display = "block";
		});
		
		//tap/untap land - non creature spells
		$('#lands2').on('click', '*', function() {
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
		
		//skip to non creature spells section
		$("#go_combat").on("click", function(){
			document.getElementById("combatHeader").style.display = "block";
			document.getElementById("combat1").style.display = "block";
			document.getElementById("combat2").style.display = "block";
		});
		
		//basic blocking
		$('#creatures3').on('click', '*', function() {
			document.getElementById("creatures3").removeChild(this);
			document.getElementById("creatures3").innerHTML = 
				"</br><p><span class='bear'>Runeclaw Bear</span> takes <strong>2</strong> damage from <span class='minotaur'>Pensive Minotaur</span>. <span class='bear'>Runeclaw Bear's</span> toughness is <strong>2</strong> so it dies and is sent to the graveyard.</p><p><span class='minotaur'>Pensive Minotaur</span> takes <strong>2</strong> damage from <span class='bear'>Runeclaw Bear</span>. <span class='minotaur'>Pensive Minotaur's</span> toughness is <strong>3</strong> so it survives with 1 toughness remaining.";
		});
		
		//reset basic blocks
		var reset1 = document.getElementById("reset1");
		var circle = document.getElementById("circle");
		reset1.onclick = function(){
			document.getElementById("creatures3").innerHTML = "";
			document.getElementById("creatures3").appendChild(bear);
			$("#circleText").text("20 life");
		};
		
		//update life by clicking on circle
		circle.onclick = function(){
			$("#circleText").text("18 life");
		};
		
		//or update life by clicking on circle text
		$("#circleText").on("click", function(){
			$("#circleText").text("18 life");
		});
		
		
		//flying blocking
		var spider = document.getElementById("spider");
		var dragon = document.getElementById("dragon");
		var specialbear = document.getElementById("bear");
		
		spider.onclick = function() {
			document.getElementById("creatures4").removeChild(this);
			document.getElementById("creatures4").innerHTML = 
				"</br><p><span class='bear'>Giant Spider</span> takes <strong>4</strong> damage from <span class='minotaur'>Thunderbreak Regent</span>. <span class='bear'>Giant Spider's</span> toughness is <strong>4</strong> so it dies and is sent to the graveyard.</p><p><span class='minotaur'>Thunderbreak Regent</span> takes <strong>2</strong> damage from <span class='bear'>Giant Spider</span>. <span class='minotaur'>Thunderbreak Regent's</span> toughness is <strong>4</strong> so it survives with 2 toughness remaining.";
			document.getElementById("creatures4").appendChild(specialbear);
		};
		
		//reset basic blocks
		var reset2 = document.getElementById("reset2");
		var circle2 = document.getElementById("circle2");
		reset2.onclick = function(){
			document.getElementById("creatures4").innerHTML = "";
			document.getElementById("creatures4").appendChild(specialbear);
			document.getElementById("creatures4").appendChild(spider);
			$("#circleText2").text("20 life");
		};
		
		//update life by clicking on circle
		circle2.onclick = function(){
			$("#circleText2").text("16 life");
		};
		
		//or update life by clicking on circle text
		$("#circleText2").on("click", function(){
			$("#circleText2").text("16 life");
		});	

		
});