// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap

//= require_tree .

function doTheFilter (id) {
	updateListTitle(id);
	removeActive();
	makeButtonActive(id);
	if (id == "all") {
		removeFilter();
	}
	else {
		var filter = "";
		
		switch(id) {
			case "portrait": 
				filter = ".g-format-portrait";
				break;
			case "landscape":
				filter = ".g-format-landscape";
				break;
			case "ios":
				filter = ".g-os-version-ios";
				break;
			case "android":
				filter = ".g-os-version-android";
				break;
			case "windows":
				filter = ".g-os-version-windows";
				break;
			case "available":
				filter = ".g-available-true";
				break;
			case "checkedout":
				filter = ".g-available-false";
				break;
			case "product":
				filter = ".g-location-product";
				break;
			case "platoon":
				filter = ".g-location-platoon";
				break;
			case "engineering":
				filter = ".g-location-engineering";
				break;
			case "podium":
				filter = ".g-location-podium";
				break;
			default:
				break;
		}
		hideThem();
		filterAll(filter);
	}
}

function filterAll(filter){
	$(filter).each(function() { 
		var gadget = $(this);
		gadget.show();
	});
}

// Shows all devices
function removeFilter(){
	$(".itempanel").each(function() { 
		var gadget = $(this);
		gadget.show();
	});
}

// Updates the list title based on the div id
function updateListTitle(id){
	$(".list-title").each(function() { 
		var title = $(this);
		if (id == "ios") { 
			id = "iOS"
		};
		title.text(id + " Devices");
	});
}

// Hides all devices before filtering 
function hideThem(){
	$(".itempanel").each(function() { 
		var gadget = $(this);
		gadget.hide();
	});
}

function makeButtonActive(id){
	var selectedButton = document.getElementById(id);
	    selectedButton.className = selectedButton.className + ' active';
}

function removeActive(){
	$(".btn").each(function() { 
		var button = $(this);
		button.removeClass('active');
	});
}


//attempting to create a search box that hides all and only shows divs that contain the search term
function searchAll(term){
	// updates the list title to say "All Devices"
	var id = "All";
	updateListTitle(id);
	// removes the 'active' class from the buttons
	removeActive();
	// hides all devices before filtering
	hideThem();
	// passes term to the searchThePanels function
	searchThePanels(term);
}

function searchThePanels(term){
	$( "div:contains(term)" ).show();
}	







