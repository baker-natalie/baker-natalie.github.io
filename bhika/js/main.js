//***HMTL HELPERS***//
var HTMLarticle = "<article id='%id%' class='col-xs-12 col-md-10 col-lg-8'></article>";
var HTMLheader = "<h1 class='text-center'>%text%</h1>";
var HTMLimg = "<img class='%class%' src='%img%' />";
var HTMLimgDiv = "<div class='%class%' id='%id%' style='background-image: url(./img/%img%);'></div>";
var HTMLtext = "<p class='%class%'>%text%</p>";
var HTMLserviceDiv = "<section class='serviceDiv col-xs-12 col-sm-3' style='background-image: url(./img/%img%);'></section>";
var HTMLserviceHeader = "<h2 class='text-center'>%text%</h2>";

//***MODELS AND DISPLAY METHODS***///
var home = {
  "id": "home",
  "portal": "#",
  "logo": "../img/logo.png",
  "class": "col-xs-3 col-sm-2 home-img",
  "bgImages": [
    "bg-1.jpg",
    "bg-2.jpg",
    "bg-3.jpg",
    "bg-4.jpg",
    "bg-5.jpg",
    "bg-6.jpg",
    "bg-7.jpg",
    "bg-8.jpg",
    "bg-9.jpg",
    "bg-10.jpg",
    "bg-11.jpg",
    "bg-12.jpg",
    "bg-1.jpg",
    "bg-2.jpg",
    "bg-3.jpg",
    "bg-4.jpg",
    "bg-5.jpg",
    "bg-6.jpg",
    "bg-7.jpg",
    "bg-8.jpg",
    "bg-9.jpg",
    "bg-10.jpg",
    "bg-11.jpg",
    "bg-12.jpg"
  ]
};
home.display = function() {
  for (var i = 0; i < home.bgImages.length; i++) {
    var id = (i + 1).toString();
    console.log(id);
    var formattedImgDiv = HTMLimgDiv.replace("%class%", home.class);
    var formattedImgDiv = formattedImgDiv.replace("%id%", id);
    $("#header").prepend(formattedImgDiv.replace("%img%", home.bgImages[i]));
  };
};
var about = {
  "id": "about",
  "header": "Who We Are",
  "text": [
    "Bhika Inc. is staffed by local and international experts drawing on decades of technical, programmatic and defense contracting experience to provide new thought, innovative solutions, and ability to accomplish set goals, in a manner unattainable by larger industry players.",
    "We offer a comprehensive suite of aviation solutions, focused on the Mi-17 and Mi-35 platforms, and can draw on existing field experience to maintain, overhaul, upgrade and procure the above. Our smaller size allows for customized solutions to our customers concerns, makes for faster response times and delivers results at a lower overhead.",
    "We can give you options, where others may only be able to provide a single solution. Our ties with US and overseas vendors, facilities and manufacturers and an insider's understanding of navigating the intricacies of this work makes Bhika Inc. the ideal partner for any scope of project that your organization may need accomplished."
  ]
};
about.display = function() {
  var addContent = function() {
    $("#about").append(HTMLheader.replace("%text%", about.header));
    $("#about").append("<div id='aboutText'></div>");
    var aboutPara = HTMLtext.replace("%class%", "aboutPara");
    for (var i = 0; i <about.text.length; i++) {
      $("#aboutText").append(aboutPara.replace("%text%", about.text[i]));
    };
  };
  var top = function() {
    var formattedArticle = HTMLarticle.replace("%id%", about.id);
    $("#main").append(formattedArticle);

    addContent();
  };
  top();
};
var capabilities = {
  "id": "capabilities",
  "header": "What We Offer",
  "description": [
    {
      "title": "Inspection",
      "description": "Offering a wide range of inspection services from GATP to facility assessments and document QC.",
      "img": "services1.jpg"
    }, {
      "title": "Training",
      "description": "Classroom and field training on maintenance, repair and flight.",
      "img": "services2.jpg"
    }, {
      "title": "Overhaul",
      "description": "Comprehensive overhaul and parts procurement services through partner vendors and facilities.",
      "img": "services3.jpg"
    }
  ]
};
capabilities.display = function() {
  /*var addContent = function() {
    $("#capabilities").append(HTMLheader.replace("%text%", capabilities.header));
    $("#capabilities").append("<div id='serviceContainer' class='col-xs-12 col-md-10 col-lg-8'></div>");
    for (var i = 0; i < capabilities.description.length; i++) {
      var serviceContent = function() {
        var formattedServiceText = HTMLtext.replace("%class%", "service-text text-justify");
        $(".serviceDiv:last").append(HTMLserviceHeader.replace("%text%", capabilities.description[i].title));
        $(".serviceDiv:last").append(formattedServiceText.replace("%text%", capabilities.description[i].description));
      }
      var initiate = function() {
        $("#serviceContainer").append(HTMLserviceDiv.replace("%img%", capabilities.description[i].img));
        serviceContent();
      }
      initiate();
    };
  };*/
  var top = function() {
    var formattedArticle = HTMLarticle.replace("%id%", capabilities.id);
    $("#main").append(formattedArticle);

    //addContent();
  };
  top();
}
var contact = {
  "id": "contact",
  "header": "Ready to Learn More?",
  "subHeader": "Contact Us!",
  "formLink": "<iframe id='formFrame' class='contact-form' src='http://www.123contactform.com/form-2890419/My-Form'></iframe>",
  "address": [
    "Bhika Inc.",
    "Huntsville, AL, USA",
    "256-929-3977"
  ],
  "email": "info@bhikainc.com"
};
contact.display = function() {
  var addContent = function() {
    $("#contact").append(HTMLheader.replace("%text%", contact.header));
    $("#contact").append(HTMLserviceHeader.replace("%text%", contact.subHeader));
    $("#contact").append(contact.formLink);
  };
  var top = function() {
    var formattedArticle = HTMLarticle.replace("%id%", contact.id);
    $("#main").append(formattedArticle);

    addContent();
  };
  top();
}

//home.display();
about.display();
capabilities.display();
contact.display();
