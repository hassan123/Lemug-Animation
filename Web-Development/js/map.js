var map;
var london = new google.maps.LatLng(51.52672693787365, -0.0460338034668073);

function initialize() {
	var stylez = [
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000",
                "visibility": "simplified"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    }
];
	var mapOptions = {
		zoom: 14,
		center: london,
		mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP, "hiphop"]
		},
		mapTypeControl: false,
		mapTypeControlOptions: {
		    style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
		    position: google.maps.ControlPosition.BOTTOM_CENTER
		},
		panControl: false,
		panControlOptions: {
		    position: google.maps.ControlPosition.TOP_RIGHT
		},
		zoomControl: false,
		zoomControlOptions: {
		    style: google.maps.ZoomControlStyle.LARGE,
		    position: google.maps.ControlPosition.LEFT_CENTER
		},
		scaleControl: false,
		scaleControlOptions: {
		    position: google.maps.ControlPosition.TOP_LEFT
		},
		streetViewControl: false,
		streetViewControlOptions: {
		    position: google.maps.ControlPosition.LEFT_CENTER
		}
	};
	map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
	var styledMapOptions = { name: "La Moulade" };
	var jayzMapType = new google.maps.StyledMapType(stylez, styledMapOptions);
	map.mapTypes.set("hiphop", jayzMapType);
	map.setMapTypeId("hiphop");
	var image = new google.maps.MarkerImage("images/studio-icon-map.png", null, null, null, new google.maps.Size(25,35));
	var myLatLng = new google.maps.LatLng(51.526454, -0.079133);
	var beachMarker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		icon: image
	})
};