// bio object- contact and basic info
var bio = {
    "name": "Natalie Baker",
    "role": "Front-End Developer",
    "contacts": {
        "mobile": "713-245-0099",
        "email": "bakernataliea@gmail.com",
        "github": "baker-natalie",
        "twitter": "ohcodinglady",
        "linkedin": "natalie-baker",
        "location": "Houston, TX"
    },
    "welcomeMessage": "Welcome to my resume page! This is my first javaScript project- an online resume that can be easily customized to display my unique skills and talents. Take a look around and contact me if you'd like to know more about my work!",
    "skills": ["Awesomeness", "HTML", "CSS", "JavaScript", "jQuery"],
    "biopic": "images/profile-pic.jpg"
};

// function that displays information from the bio object on the page
bio.display = function() {

// Basic header info- name, title, image
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var headerName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(headerName);
    var bioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(bioPic);


    $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    var email = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(email.replace("#", bio.contacts.email));

    $("#header").append(HTMLskillsStart);

    for (var i = 0; i < bio.skills.length; i++) {

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills:last").append(formattedSkill);
    }

    var welcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(welcomeMessage);

    $("#footerContacts").append(HTMLtwitter.replace("#", bio.contacts.twitter));
    $("#footerContacts").append(HTMLgitHub.replace("#", bio.contacts.github));
    $("#footerContacts").append(HTMLlinkedIn.replace("#", bio.contacts.linkedin));

};

bio.display();

// projects object- project information
var projects = {
    "projects": [{
        "title": "Website Performance Optimization",
        "url": "https://github.com/baker-natalie/optimization-project",
        "dates": "8/2016",
        "description": "A website that is optimized to render as quickly as possible.",
        "images": ["images/web-perf.jpg"]
    },  {
        "title": "Arcade Clone",
        "url": "https://github.com/baker-natalie/arcade-clone",
        "dates": "7/2016",
        "description": "A simple Frogger-style game built with Object Oriented JavaScript and HTML5 Canvas.",
        "images": ["images/arcade-clone.jpg"]
    },  {
        "title": "Portfolio Project",
        "url": "https://github.com/baker-natalie/udacity-coursework/tree/master/baker-natalie.github.io-master",
        "dates": "6/2016",
        "description": "An online portfolio to showcase my front-end design work. The final project for Intro to HTML and CSS in my Udacity nanodegree. This project required use of HTML, CSS, and a CSS framework- I used Bootstrap!",
        "images": ["images/portfolio-image.jpg"]
    }, {
        "title": "Animal Trading Card",
        "url": "https://github.com/baker-natalie/udacity-coursework/tree/master/ANIMAL-TRADING-CARDS-NATALIE-BAKER",
        "dates": "6/2016",
        "description": "My first CSS project. This project required the use of HTML and CSS to replicate and customize an animal trading card.",
        "images": ["images/animal-card-image.jpg"]
    }]
};


// function that displays info from the projects object on the page
projects.display = function() {

    for (var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);
        var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry:last").append(projectTitle.replace("#", projects.projects[i].url));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
        $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].images));
    }
};

projects.display();

// education object- school and course information
var education = {
    "schools": [{
        "name": "Auburn University",
        "location": "Auburn, AL",
        "degree": "N/A",
        "majors": ["Fine Arts", " Graphic Design"],
        "dates": "8/2004 - 5/2007",
        "url": "http://www.auburn.edu"
    }],
    "onlineCourses": [{
        "title": "Front-End Developer Nanodegree",
        "school": "Udacity",
        "dates": "6/2016 - 9/2016",
        "url": "http://www.udacity.com"
    }]
};

// function that displays college and online course info from education object on the page
education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (var i = 0; i < education.schools.length; i++) {

        var schoolNameDegree = HTMLschoolName.replace("%data%", education.schools[i].name) + HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        $(".education-entry").append(schoolNameDegree.replace("#", education.schools[i].url));
        $(".education-entry").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
        $(".education-entry").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors));
    }

    $("#onlineClasses").append(HTMLclassesStart);
    for (var i = 0; i < education.onlineCourses.length; i++) {
        var classTitleSchool = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        $(".class-entry").append(classTitleSchool.replace("#", education.onlineCourses[i].url));

        $(".class-entry").append(HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates));
    }
};

education.display();

// work object- job information
var work = {
    "jobs": [{
        "employer": "Self-Employed",
        "title": "Freelance Web Developer",
        "location": "Houston, TX",
        "dates": "05/2016 - present",
        "description": "I design, develop, and deploy beautiful, functional websites using HTML, CSS, and JavaScript."
    }, {
        "employer": "Taco Mama",
        "title": "Lead Server/Caterer",
        "location": "Huntsville, AL",
        "dates": "10/2014 - 6/2015",
        "description": "I worked with the service and kitchen teams to deliver a delightful and delicious experience for every guest."
    }]
};

// function that displays info from the work object on the page
work.display = function() {
    for (var i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

work.display();

// Interactive map and twitter feeds
$("#mapDiv").append(googleMap);
$("#twitterDiv").append(twitterFeed);
