"use strict";
//****MAKE A MAP****//
var map;
var mapError = ko.observable(false);


function initMap() {
		
	map = new google.maps.Map(document.getElementById("mapDiv"), {
		zoom: 15,
		center: {lat: 29.728759, lng: -95.387390},
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		styles: [{featureType: 'all', elementType: 'all', stylers: [{ saturation: -100 }]}, {featureType: 'road.highway', elementType: 'geometry.stroke', stylers: [{ color: '#000000'}]}, {featureType: 'administrative.neighborhoods', elementType: 'labels.text.fill', stylers: [{color: '#000000'}]}]
	});

	// After map loads, apply knockout bindings
	ko.applyBindings(new ViewModel());

	//error message
	function googleError() {
		mapError(true);
	}
}

//****MAKE AN OBSERVABLE MUSEUM OBJECT****//
var Museum = function(data) {

	var self = this;
	self.address = ko.observable('');
	self.contentString = ko.observable('');
	self.lat = ko.observable(data.lat);
	self.lng = ko.observable(data.lng);
	self.marker = ko.observable();
	self.title = ko.observable(data.title);
	self.url = ko.observable('');
	self.id = ko.observable('');
};

//****MODEL****//
var locations = [
    {title: 'Asia Society Texas Center', lat: 29.726287, lng: -95.384678, tags: [ 'culture', 'art', 'history', 'education' ]},
    {title: 'Buffalo Soldiers\' Museum', lat: 29.735910, lng: -95.378058, tags: [ 'military', 'history', 'culture', 'education' ]},
    {title: 'Children\'s Museum of Houston', lat: 29.722793, lng: -95.385225, tags: [ 'family', 'science', 'education' ]},
    {title: 'Contemporary Arts Museum Houston', lat: 29.726333, lng: -95.391465, tags: [ 'art' ]},
    {title: 'Czech Center Museum Houston', lat: 29.728954, lng: -95.384915, tags: [ 'culture', 'history', 'education' ]},
    {title: 'DiverseWorks', lat: 29.740289, lng: -95.378852, tags: [ 'art', 'education' ]},
    {title: 'Holocaust Museum Houston', lat: 29.725153, lng: -95.385660, tags: [ 'history', 'education' ]},
    {title: 'Houston Center for Contemporary Craft', lat: 29.730541, lng: -95.386025, tags: [ 'art', 'education' ]},
    {title: 'Houston Center for Photography', lat: 29.738381, lng: -95.397273, tags: [ 'art' ]},
    {title: 'Houston Museum of African American Culture', lat: 29.729538, lng: -95.382399, tags: [ 'history', 'education', 'culture' ]},
    {title: 'Houston Museum of Natural Science', lat: 29.721802, lng: -95.389942, tags: [ 'history', 'education', 'culture' ]},
    {title: 'Houston Zoo', lat: 29.716094, lng: -95.390114, tags: [ 'nature', 'science', 'family' ]},
    {title: 'Lawndale Art Center', lat: 29.729880, lng: -95.386574, tags: [ 'art', 'education' ]},
    {title: 'Rice Gallery', lat: 29.718329, lng: -95.397927, tags: [ 'art', 'education' ]},
    {title: 'Rothko Chapel', lat: 29.737624, lng: -95.396166, tags: [ 'art', 'culture' ]},
    {title: 'The Health Museum', lat: 29.721698, lng: -95.386011, tags: [ 'science', 'family' ]},
    {title: 'The Jung Center', lat: 29.726789, lng: -95.391392, tags: [ 'art', 'culture', 'science', 'education' ]},
    {title: 'The Menil Collection', lat: 29.737368, lng: -95.398521, tags: [ 'art', 'culture' ]},
    {title: 'The Museum of Fine Arts Houston', lat: 29.725798, lng: -95.390424, tags: [ 'art', 'culture', 'history', 'education' ]}
];

//****VIEW MODEL****//

var ViewModel = function () {

	var self = this;
	var	infowindow = new google.maps.InfoWindow({maxWidth:250});
	var bounds = new google.maps.LatLngBounds();
	var	venue;
	var	location;
	var	marker;
	var	UserInput;
	var	url;
	var id;
	var	image = 'museum-icon.png';

	// an observable array that stores converted data from the model
	self.museums = ko.observableArray([]);

	// set foursqError to false until the api call has run and we know if it has succeeded
	self.foursqError = ko.observable(false);

	// loop over the model data and convert each item to an object of ko.observables. store the objects in the observable array
	locations.forEach(function(museumData) {
		self.museums.push(new Museum(museumData));
	});

	// set up the map's interactivity
	self.museums().forEach(function (museumData) {
		
		// create markers
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(museumData.lat(), museumData.lng()),
			map: map,
			icon: image,
			animation: google.maps.Animation.DROP
		});
		bounds.extend(marker.position);
		museumData.marker = marker;

		// make an ajax api call to FourSquare and collect data to display in the infoWindows
		$.ajax({
			url:'https://api.foursquare.com/v2/venues/search',
			dataType: 'json',
			data: 'limit=1' + '&ll=29.728759,-95.387390' + '&query=' + museumData.title() +
			'&client_id=RUPSQ1M0LNZPFTN52BH52BBTCZYKWTJ1HEY41W1JPXKY5KI3' +
			'&client_secret=2AQTFD2TO0FY5AFFNAAASI1RQTHZUF3LKJEXLJPLXD4PACNM&v=20130815',
			async: true,

			// if the call is completed successfully, the success function will pull the information we want to display and format it for HTML.
			success: function (data) {
				// Set the received venues object as the value of venue
				venue = data.response.hasOwnProperty("venues") ? data.response.venues[0] : '';

				// check for the 'location' property and set it as a variable
				location = venue.hasOwnProperty('location') ? venue.location : '';
					// check location for an address and set as current location's address
					if (location.hasOwnProperty('address')) {
						museumData.address(location.address || '');
					}
				// check for  url property, set as current location's url
				url = venue.hasOwnProperty('url') ? venue.url : '';
					museumData.url(url || '');

				// check for id property, set as current location's id
				id = venue.hasOwnProperty('id') ? venue.id : '';
					museumData.id(id || '');

				// visualize that data with html!
				museumData.contentString = '<div><h2>' + museumData.title() + '</h2><p>' +
				museumData.address() + '</p><p><a target="_blank" href=https://www.google.com/maps/dir/Current+Location/' +
				museumData.lat() + ',' + museumData.lng() + '>directions</a></p></div><p><a href="' +
				museumData.url() + '">website</a></p><hr><h5>location data delivered by <a href="http://foursquare.com/v/' + 
				museumData.id() + '?ref=RUPSQ1M0LNZPFTN52BH52BBTCZYKWTJ1HEY41W1JPXKY5KI3">FourSquare</a></h5>';	
			},

			// populate an error message in the infowindow if the foursquare data doesn't load
			error: function (e) {
				infowindow.setContent('<p>We couldn\'t find the FourSquare data! Please try again later!</p>');
				self.foursqError(true);
		}
		});
		// make some infoWindows!
		google.maps.event.addListener(museumData.marker, 'click', function () {
			infowindow.open(map, this);
			museumData.marker.setAnimation(google.maps.Animation.BOUNCE);
			setTimeout(function () {
				museumData.marker.setAnimation(null);
			}, 1200);
			infowindow.setContent(museumData.contentString);
		});
	});

	map.fitBounds(bounds);

	// connect the list items to the correct marker on click
	self.popInfoWindow = function (museumData) {
		google.maps.event.trigger(museumData.marker, 'click');
		$(".menu").slideToggle("slow", function() {
    		$(".close").hide();
    		$(".hamburger").show();
  		});
	};

	// empty observable array to contain search results
	self.visible = ko.observableArray();

	// initially, all markers are visible
	self.museums().forEach(function (place) {
		self.visible.push(place);
	});

	// make the input from the search box available as a ko.observable
	self.userInput = ko.observable('');
	
	// show markers for locations in search results
	self.filterMarkers = function () {
		// when a search is initiated, reset the map to blank
		// use .toLowerCase() so that user input will be matched whether they capitalize or not!
		UserInput = self.userInput().toLowerCase();
		infowindow.close();
		self.visible.removeAll();
		
		self.museums().forEach(function (place) {
			place.marker.setVisible(false);
				// for items not in an array, indexOf returns a value of -1. Zero or greater indicates that the value is present in the array
				if (place.title().toLowerCase().indexOf(UserInput) !== -1) {
				// if the input is present, the place will be added to the visible array
				self.visible.push(place);
			}
		});
		// loop over items in the visible array and set their visibility to true in the view
		self.visible().forEach(function (place) {
			place.marker.setVisible(true);
		});
	};
	
};
$(".close").hide();
$(".menu").hide();
$(".hamburger").click(function() {
  $(".menu").slideToggle("slow", function() {
    $(".hamburger").hide();
    $(".close").show();
  });
});

$(".close").click(function() {
  $(".menu").slideToggle("slow", function() {
    $(".close").hide();
    $(".hamburger").show();
  });
});