//json dos locais estudados
var education = {
  "schools" : [
    {
    "name" : "Universidade Veiga de Almeida",
    "location" : "Tijuca, Rio de Janeiro",
    "degree" : "Bachelor(in progress)",
    "majors" : ["Computer Science"],
    "dates" : 2017,
    "url" : "https://uva.br/"
    },
    {
    "name" : "Col. Est. Pedro Álvares Cabral ",
    "location" : "Copacabana, Rio de Janeiro",
    "degree" : "High School",
    "majors" : [""],
    "dates" : 2007,
    "url" : ""
    },
    {
    "name" : "Liceu de artes e oficios",
    "location" : "Centro, Rio de Janeiro",
    "degree" : "High School",
    "majors" : ["Computer Science"],
    "dates" : 2006,
    "url" : "http://www.liceudearteseoficios.com.br/"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Web Front-End Developer",
      "school" : "Udacity",
      "dates" : 2017,
      "url" : "https://br.udacity.com/"
    },
    {
      "title" : "Git & GitHub",
      "school" : "Udacity",
      "dates" : 2017,
      "url" : "https://br.udacity.com/"
    },
    {
      "title" : "Linha de Comando Linux Básico",
      "school" : "Udacity",
      "dates" : 2017,
      "url" : "https://br.udacity.com/"
    },
    {
      "title" : "Oracle 11g PL-SQL",
      "school" : "Interplan Soluções e Conectividade",
      "dates" : 2014,
      "url" : "http://www.interplan.com.br/"
    }
  ]
};

//json dos locais trabalhados
var work = {
  "jobs" : [
    {
      "employer" : "Autonomouss",
      "title" : "Front-end Developer",
      "location" : "Rio de Janeiro, RJ",
      "dates" : "2007-2017",
      "description" : "Develop websites."
    },
    {
      "employer" : "Protomni Multimedia",
      "title" : "Game Developer",
      "location" : "Rio de Janeiro, RJ",
      "dates" : "2012-2017",
      "description" : "Implement everything a game requires, create Sprites(specialized in 8-bit generation) and 3D models."
    },
    {
      "employer" : "Golden Tulip Hotel",
      "title" : "IT Trainee",
      "location" : "Copacabana, Rio de Janeiro, RJ",
      "dates" : "2010",
      "description" : "Support for employees and employers, machine repair, private network repair and servers."
    },
    {
      "employer" : "Ocean Air Linhas Aéreas",
      "title" : "Airline Agent",
      "location" : "Praça XV, Rio de Janeiro, RJ",
      "dates" : "2009-2010",
      "description" : "Check-in of passengers, sell tickets, boarding/unboarding airplanes and their supervision."
    }
  ]
};

//json dos projetos feitos
var projects = {
  "projects" :  [
    {
      "title" : "Bernie Needs Love",
      "dates" : "2015",
      "description" : "A retro platformer game about an old man who collects blue pills amidst urban dangers and bird poop in a desperate effort to reach his girlfriend before he is himself reached by the ever-approaching Grim Reaper.",
      "images" : ["./images/bernie1.jpg","./images/bernie2.jpg","./images/bernie3.jpg","./images/bernie4.jpg"]
    },
    {
      "title" : "Meatballphobia",
      "dates" : "2013",
      "description" : "Meatballphobia is a 2D physics puzzle game about flesh and meat, about the enslavement of both the consumed and the consumer, about life and the systems built around it. It is also a game about making a meatball hit an unfortunate hysterical head.",
      "images" : ["./images/meatball1.jpg","./images/meatball2.jpg","./images/meatball3.jpg","./images/meatball4.jpg","./images/meatball5.jpg"]
    },
    {
      "title" : "SindiBebRj",
      "dates" : "2017",
      "description" : "Website for a beverage transportation union.",
      "images" : [""]
    },
    {
      "title" : "Prime",
      "dates" : "2014",
      "description" : "Website for a company.",
      "images" : [""]
    },
    {
      "title" : "Villa Carpe Diem",
      "dates" : "2007",
      "description" : "Website for a hostel.",
      "images" : [""]
    }
  ]
};

//json para biografia
var bio = {
  "name" : "Pedro Henrique Alvim Paradella",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "+55 21 9999-8888",
    "email" : "pparadella@gmail.com",
    "github" : "pparadella",
    "twitter" : "@pparadella",
    "location" : "Rio de Janeiro"
  },
  "welcomeMessage" : "Welcome to my Resume.",
  "skills" : ["Assembly and maintenance of computers","Microsoft Office","Photoshop","Flash","Dreamweaver","Blender","GraphicsGale","Pyxel Edit","Game Maker Studio","Construct2","C","HTML5","CSS3","JavaScript","Bootstrap","Git & GitHub"],
  "biopic" : "./images/bioPic.jpg"
};

//funçao para mostrar tudo da bio
bio.display = function(){

  //Nome e role
  var formattedName = HTMLheaderName.replace("%data%",bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%","<br><span class = 'white-text'>"+bio.role+"</span>");
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);

  //Foto perfil
  $("#header").append(HTMLbioPic.replace("%data%",bio.biopic));
  $("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));

  if (bio.skills.length > 0) {
    //skills no header em skills
    $("#header").append(HTMLskillsStart);
    for (var each in bio.skills){
      $("#skills").append(HTMLskills.replace("%data%",bio.skills[each]));
    }

  }
  //contatos no header
  $("#topContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
  $("#topContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
  $("#topContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
  $("#topContacts").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
  $("#topContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));

  //contatos no footer
  $("#footerContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
  $("#footerContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
  $("#footerContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
  $("#footerContacts").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
  $("#footerContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));
};

//funçao para mostrar tudo de work
work.display = function(){
  for (var job in work.jobs ){
    $("#workExperience").append(HTMLworkStart);

    var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
    var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
    var formattedWorkDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
    var formattedWorkDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

    $(".work-entry:last").append(formattedWorkEmployer+formattedWorkTitle+formattedWorkLocation+formattedWorkDates+formattedWorkDescription+"<br>");
  }
};

//funcao para mostrar tudo de projects
projects.display = function(){
  $("#projects").append(HTMLprojectStart);
  for (var project in projects.projects){
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
    var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
    var formattedProjectImages = [];
    //iterando as imagens e colocando numa array
    for (var image in projects.projects[project].images){

        formattedProjectImages[image] = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);

    }
    //colocando o conteudo no html
    $(".project-entry:last").append(formattedProjectTitle+formattedProjectDates+formattedProjectDescription+"<br>");

    //colocando as imagens no html
    for (var image in projects.projects[project].images){

        $(".project-entry:last").append(formattedProjectImages[image]);

    }
  }
};

//funcao para mostrar tudo de education
education.display = function(){
  //colocando as escolas
  $("#education").append(HTMLschoolStart);
  for (var each in education.schools){
    var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[each].name);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[each].degree);
    var formattedSchoolMajors = HTMLschoolMajor.replace("%data%",education.schools[each].majors);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[each].dates);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[each].location);
    console.log(education.schools[each].majors);
    if (education.schools[each].majors != "") {
      $(".education-entry:last").append(formattedSchoolName+formattedSchoolDegree+formattedSchoolDates+formattedSchoolLocation+formattedSchoolMajors+"<br><br>");
    } else {
      $(".education-entry:last").append(formattedSchoolName+formattedSchoolDegree+formattedSchoolDates+formattedSchoolLocation+"<br><br>");
    }

  }

  //colocando os cursos
  $(".education-entry:last").append(HTMLonlineClasses);

  for (var each in education.onlineCourses){
    var formattedCoursesTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[each].title);
    var formattedCoursesSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[each].school);
    var formattedCoursesDates = HTMLonlineDates.replace("%data%",education.onlineCourses[each].dates);
    var formattedCoursesURL = HTMLonlineURL.replace("%data%",education.onlineCourses[each].url);

    $(".education-entry:last").append(formattedCoursesTitle+formattedCoursesSchool+formattedCoursesDates+formattedCoursesURL+"<br>");
  }
};

//chamando as funções para aparecer tudo no html
bio.display();
work.display();
projects.display();
education.display();

//chamando o mapa
$("#mapDiv").append(googleMap);
