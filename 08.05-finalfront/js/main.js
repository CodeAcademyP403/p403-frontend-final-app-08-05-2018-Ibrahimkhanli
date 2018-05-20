if(document.getElementById("demo")){
	var slider = document.getElementById("myRange");
	var output = document.getElementById("demo");
	output.innerHTML = slider.value;

	slider.oninput = function() {
		output.innerHTML = this.value;
	}
}



function closeTop(){
	document.getElementById("topHeader").style.display = "none";
	document.getElementById("mainNav").style.top = "0px";
	document.getElementById("mainContainer").style.paddingTop = "55px";
}


function widgetSales(selected, e){
	var openTables = document.getElementsByClassName("widgetSales");
	var i;
	for (i = 0; i < openTables.length; i++) {
		var openTable = openTables[i];
		if (openTable.classList.contains('active')){
			if(openTable.id!=e){
				openTable.classList.remove('active');
			}
		}
	}

	document.getElementById(e).classList.add("active");
	selected.parentElement.classList.add("active");
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myDropdown(e, direction) {	
	var dropdowns = document.getElementsByClassName("dropdown-content");
	var i;
	for (i = 0; i < dropdowns.length; i++) {
		var openDropdown = dropdowns[i];
		if (openDropdown.classList.contains('showRight')){
			if(openDropdown.id!=e){
				openDropdown.classList.remove('showRight');
			}
		}else if(openDropdown.classList.contains('showLeft')){
			if(openDropdown.id!=e){
				openDropdown.classList.remove('showLeft');
			}
		}else if(openDropdown.classList.contains('showTop')){
			if(openDropdown.id!=e){
				openDropdown.classList.remove('showTop');
			}
		}
	}
	if(direction=="right"){
		document.getElementById(e).classList.toggle("showLeft");
	}else if(direction=="left"){
		document.getElementById(e).classList.toggle("showRight");
	}else if(direction=="top"){
		document.getElementById(e).classList.toggle("showTop");
	}
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('showRight')) {
				openDropdown.classList.remove('showRight');
			}else if(openDropdown.classList.contains('showLeft')){
				openDropdown.classList.remove('showLeft');
			}else if(openDropdown.classList.contains('showTop')){
				openDropdown.classList.remove('showTop');
			}
		}
	}
}

// var drp = document.getElementById("createDropdown1");
// drp.addEventListener("click", function () {
// 	 myDropdown('createDropdown', 'right');
// })


function myCollapse(e){
	document.getElementById(e).classList.toggle("showCollapse");

	if(e == "uiElements"){
		document.getElementById(e).style.height = "200px";
		var items = document.getElementsByClassName("leftNavDropdownTogle");
		var openSpan = items[1];
		openSpan.classList.toggle("backColor");
	}else if(e == "components"){
		document.getElementById(e).style.height = "140px";
		var items = document.getElementsByClassName("leftNavDropdownTogle");
		var openSpan = items[2];
		openSpan.classList.toggle("backColor");
	}else if(e == "dashboard"){
		document.getElementById(e).style.height = "110px";
		var items = document.getElementsByClassName("leftNavDropdownTogle");
		var openSpan = items[0];
		openSpan.classList.toggle("backColor");
	}

	if(window.innerWidth > 768){

		var leftSpans = document.getElementsByClassName("leftNavSpans");
		var i;
		for (i = 0; i < leftSpans.length; i++) {
			var openSpan = leftSpans[i];
			openSpan.style.opacity = 1;
		}
		var leftIcons = document.getElementsByClassName("leftNavIcons");
		var i;
		for (i = 0; i < leftIcons.length; i++) {
			var openIcon = leftIcons[i];
			openIcon.style.left = "15px";
		}
		var leftIcons = document.getElementsByClassName("leftNavIconsAfter");
		var i;
		for (i = 0; i < leftIcons.length; i++) {
			var openIcon = leftIcons[i];
			openIcon.style.left = "200px";
			openIcon.style.fontSize = "13px";
		}
		var summaryValues = document.getElementsByClassName("leftNavSummaryValue");
		var i;
		for (i = 0; i < summaryValues.length; i++) {
			var summaryValue = summaryValues[i];
			summaryValue.style.display = "block";
		}
		document.getElementById("wgBoardSmall").style.opacity = .0;
		document.getElementById("wgBoardBig").style.opacity = 1;
		document.getElementById("leftNav").style.width = "250px";
		document.getElementById("topNav").style.paddingLeft = "250px";
		document.getElementById("wgBoard").style.width = "250px";
		document.getElementById("mainContainer").style.paddingLeft = "250px";
	}
}

function mainCollapse(e, height){
	document.getElementById(e).style.height = height;
	document.getElementById(e).classList.toggle("showCollapse");
	if (e == "fileCollapse") {
		var iClass = document.getElementById("down").className
		if (iClass == "fas fa-chevron-up") {
			document.getElementById("down").className = "fas fa-chevron-down";
		}else{
			document.getElementById("down").className = "fas fa-chevron-up";
		}
	}
}

function projectCreate(){
	document.getElementById("projectCr").classList.toggle("prCR");
}



function searchIc(){
	// document.getElementById("searchIcon").style.opacity = 1;
	// document.getElementById("searchIcon").style.width = "50px";
	// document.getElementById("searchIcon").style.marginLeft = "-50px";
}


function leftNavShow(){
	if(window.innerWidth > 768){
		if(document.getElementById("wgBoardSmall").style.opacity == .0){
			var leftSpans = document.getElementsByClassName("leftNavSpans");
			var i;
			for (i = 0; i < leftSpans.length; i++) {
				var openSpan = leftSpans[i];
				openSpan.style.opacity = .0;
			}
			var leftIcons = document.getElementsByClassName("leftNavIcons");
			var i;
			for (i = 0; i < leftIcons.length; i++) {
				var openIcon = leftIcons[i];
				openIcon.style.left = "25px";
			}
			var leftIcons = document.getElementsByClassName("leftNavIconsAfter");
			var i;
			for (i = 0; i < leftIcons.length; i++) {
				var openIcon = leftIcons[i];
				openIcon.style.left = "50px";
				openIcon.style.fontSize = "9px";			
			}
			var summaryValues = document.getElementsByClassName("leftNavSummaryValue");
			var i;
			for (i = 0; i < summaryValues.length; i++) {
				var summaryValue = summaryValues[i];
				summaryValue.style.display = "none";
			}
			var openCollapses = document.getElementsByClassName("myCollapse");
			var i;
			for (i = 0; i < openCollapses.length; i++) {
				var openCollapse = openCollapses[i];
				if (openCollapse.classList.contains('showCollapse')) {
					openCollapse.classList.remove('showCollapse');
				}
			// openCollapse.style.cssText = 'display:none'; 
			}
			var items = document.getElementsByClassName("leftNavDropdownTogle");
			var i;
			for (i = 0; i < items.length; i++) {
				var item = items[i];
				if (item.classList.contains('backColor')){
					item.classList.remove('backColor');
				}
			}
			document.getElementById("wgBoardSmall").style.opacity = 1;
			document.getElementById("wgBoardBig").style.opacity = .0;
			document.getElementById("wgBoard").style.width = "90px";
			document.getElementById("topNav").style.paddingLeft = "90px";
			document.getElementById("leftNav").style.width = "90px";
			document.getElementById("mainContainer").style.paddingLeft = "90px";
		}else{
			var leftSpans = document.getElementsByClassName("leftNavSpans");
			var i;
			for (i = 0; i < leftSpans.length; i++) {
				var openSpan = leftSpans[i];
				openSpan.style.opacity = 1;
			}
			var leftIcons = document.getElementsByClassName("leftNavIcons");
			var i;
			for (i = 0; i < leftIcons.length; i++) {
				var openIcon = leftIcons[i];
				openIcon.style.left = "15px";
			}
			var leftIcons = document.getElementsByClassName("leftNavIconsAfter");
			var i;
			for (i = 0; i < leftIcons.length; i++) {
				var openIcon = leftIcons[i];
				openIcon.style.left = "200px";
				openIcon.style.fontSize = "13px";
			}
			var summaryValues = document.getElementsByClassName("leftNavSummaryValue");
			var i;
			for (i = 0; i < summaryValues.length; i++) {
				var summaryValue = summaryValues[i];
				summaryValue.style.display = "block";
			}
			document.getElementById("wgBoardSmall").style.opacity = .0;
			document.getElementById("wgBoardBig").style.opacity = 1;
			document.getElementById("leftNav").style.width = "250px";
			document.getElementById("topNav").style.paddingLeft = "250px";
			document.getElementById("wgBoard").style.width = "250px";
			document.getElementById("mainContainer").style.paddingLeft = "250px";
		}
	}else{
		if(document.getElementById("leftNav").style.width == "0px"){
			$('div').removeAttr('style');
			$('main').removeAttr('style');
			var leftSpans = document.getElementsByClassName("leftNavSpans");
			var i;
			for (i = 0; i < leftSpans.length; i++) {
				var openSpan = leftSpans[i];
				openSpan.style.opacity = 1;
			}
			var leftIcons = document.getElementsByClassName("leftNavIcons");
			var i;
			for (i = 0; i < leftIcons.length; i++) {
				var openIcon = leftIcons[i];
				openIcon.style.left = "25px";
			}
			var leftIcons = document.getElementsByClassName("leftNavIconsAfter");
			var i;
			for (i = 0; i < leftIcons.length; i++) {
				var openIcon = leftIcons[i];
				openIcon.style.left = "530px";
				openIcon.style.fontSize = "13px";
			}
			var summaryValues = document.getElementsByClassName("leftNavSummaryValue");
			var i;
			for (i = 0; i < summaryValues.length; i++) {
				var summaryValue = summaryValues[i];
				summaryValue.style.display = "block";
			}
			document.getElementById("leftNav").style.width = "100%";
		}else{
			var leftSpans = document.getElementsByClassName("leftNavSpans");
			var i;
			for (i = 0; i < leftSpans.length; i++) {
				var openSpan = leftSpans[i];
				openSpan.style.opacity = .0;
			}
			var leftIcons = document.getElementsByClassName("leftNavIcons");
			var i;
			for (i = 0; i < leftIcons.length; i++) {
				var openIcon = leftIcons[i];
				openIcon.style.left = "0px";
			}
			var leftIcons = document.getElementsByClassName("leftNavIconsAfter");
			var i;
			for (i = 0; i < leftIcons.length; i++) {
				var openIcon = leftIcons[i];
				openIcon.style.left = "50px";
				openIcon.style.fontSize = "9px";
			}
			var summaryValues = document.getElementsByClassName("leftNavSummaryValue");
			var i;
			for (i = 0; i < summaryValues.length; i++) {
				var summaryValue = summaryValues[i];
				summaryValue.style.display = "none";
			}
			document.getElementById("leftNav").style.width = 0;

		}
	}
}

function checkbox(e, color){
	var x = "checkBoxSelector" + color;
	e.classList.toggle("checkboxSelector");
	e.classList.toggle(x);
}

function checkboxCircle(e, color){
	var x = "checkBoxSelectorCircle" + color;
	e.classList.toggle("checkBoxSelectorCircle");
	e.classList.toggle(x);	
}