var formattedName = HTMLheaderName.replace("%data%","Pedro Paradella");
var formattedRole = HTMLheaderRole.replace("%data%","<br><span class = 'white-text'>Web Developer</span>");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//json dos locais estudados
var education = {
  "schools" : [
    {
    "name" : "Universidade Veiga de Almeida",
    "city" : "Rio de Janeiro",
    "degree" : "Undergraduate Computer Science",
    "dates" : 2017,
    "url" : "https://uva.br/"
    },
    {
    "name" : "Liceu de artes e oficios",
    "city" : "Rio de Janeiro",
    "degree" : "High School",
    "dates" : 2006,
    "url" : "http://www.liceudearteseoficios.com.br/"
    }
  ],
  "courses" : [
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
    },
    {
      "title" : "All about computer",
      "school" : "AIS – Advanced InfoTech School ",
      "dates" : 2005,
      "url" : ""
    }
  ]
}

//json dos locais trabalhados
var work = {
  "jobs" : [
    {
      "employer" : "Autonomouss",
      "title" : "Front-end Developer",
      "location" : "Rio de Janeiro",
      "dates" : "2007/2017",
      "description" : "Develop websites."
    },
    {
      "employer" : "Protomni Multimedia",
      "title" : "Game Developer",
      "location" : "Rio de Janeiro",
      "dates" : "2012/2017",
      "description" : "Implement everything a game requires, create Sprites(specialized in 8-bit generation) and 3D models."
    },
    {
      "employer" : "Golden Tulip Hotel",
      "title" : "IT Trainee",
      "location" : "Rio de Janeiro",
      "dates" : "2010",
      "description" : "Support for employees and employers, machine repair, private network repair and servers."
    },
    {
      "employer" : "Ocean Air Linhas Aéreas",
      "title" : "Airline Agent",
      "location" : "Rio de Janeiro",
      "dates" : "2009/2010",
      "description" : "Check-in of passengers, sell tickets, boarding/unboarding of airplanes and their supervision."
    }
  ]
}

//json dos projetos feitos
var projects = {
  "projects" :  [
    {
      "title" : "Bernie Needs Love",
      "dates" : "2015",
      "description" : "A retro platformer game about an old man who collects blue pills amidst urban dangers and bird poop in a desperate effort to reach his girlfriend before he is himself reached by the ever-approaching Grim Reaper.",
      "images" : ["http://www.protomnimultimedia.com/wpimages/28efd2808520.jpg","http://www.protomnimultimedia.com/wpimages/84e196cbb2a0.jpg","http://www.protomnimultimedia.com/wpimages/5e9c545159c.jpg","http://www.protomnimultimedia.com/wpimages/e06b3093de78.jpg"]
    },
    {
      "title" : "Meatballphobia",
      "dates" : "2013",
      "description" : "Meatballphobia is a 2D physics puzzle game about flesh and meat, about the enslavement of both the consumed and the consumer, about life and the systems built around it. It is also a game about making a meatball hit an unfortunate hysterical head.",
      "images" : ["http://www.protomnimultimedia.com/wpimages/b3d7e491aa9b.jpg","http://www.protomnimultimedia.com/wpimages/1dde9aeb8b2a.jpg","http://www.protomnimultimedia.com/wpimages/e053af9a794b.jpg","http://www.protomnimultimedia.com/wpimages/a3c2245ef508.jpg","http://www.protomnimultimedia.com/wpimages/88547cda4073.jpg"]
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
}

//json para biografia
var bio = {
  "name" : "Pedro Henrique Alvim Paradella",
  "role" : "Web Developer",
  "pic" : "./images/bioPic.jpg",
  "welcomeMessage" : "Welcome to my Resume.",
  "contacts" : {
    "mobile" : "+55 21 98132-5412",
    "email" : "pparadella@gmail.com",
    "github" : "pparadella",
    "twitter" : "https://twitter.com/pparadella",
    "location" : "Rio de Janeiro"
  },
  "skills" : ["Microsoft Office","Photoshop","Flash","Blender","GraphicsGale","Pyxel Edit","Game Maker Studio","Construct2","C","HTML5","CSS3","JavaScript","Bootstrap","Git & GitHub"]
}

//funçao para mostrar tudo da bio
bio.display = function(){
  if (bio.skills.length > 0){
    //Foto perfil
    $("#header").append(HTMLbioPic.replace("%data%",bio.pic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));
    //skills no header em skills
    $("#header").append(HTMLskillsStart);

    $("#skills").append(HTMLskills.replace("%data%",bio.skills[0]));
    $("#skills").append(HTMLskills.replace("%data%",bio.skills[1]));
    $("#skills").append(HTMLskills.replace("%data%",bio.skills[2]));
    $("#skills").append(HTMLskills.replace("%data%",bio.skills[3]));
    $("#skills").append(HTMLskills.replace("%data%",bio.skills[4]));
    $("#skills").append(HTMLskills.replace("%data%",bio.skills[5]));
    $("#skills").append(HTMLskills.replace("%data%",bio.skills[6]));
    $("#skills").append(HTMLskills.replace("%data%",bio.skills[7]));
    $("#skills").append(HTMLskills.replace("%data%",bio.skills[8]));
    $("#skills").append(HTMLskills.replace("%data%",bio.skills[9]));
    $("#skills").append(HTMLskills.replace("%data%",bio.skills[10]));
    $("#skills").append(HTMLskills.replace("%data%",bio.skills[11]));
    $("#skills").append(HTMLskills.replace("%data%",bio.skills[12]));
    $("#skills").append(HTMLskills.replace("%data%",bio.skills[13]));



    //contatos no footer
    $("#footerContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
    $("#footerContacts").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
    $("#footerContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
    $("#footerContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));


  }
}

//funçao para mostrar tudo de work
work.display = function(){
  for(job in work.jobs ){
    $("#workExperience").append(HTMLworkStart);

    var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
    var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
    var formattedWorkDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
    var formattedWorkDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

    $(".work-entry:last").append(formattedWorkEmployer+formattedWorkTitle+formattedWorkLocation+formattedWorkDates+formattedWorkDescription+"<br>");
  }
}


/*
$(document).click(function(loc) {
var x = loc.pageX;
var y = loc.pageY;

logClicks(x,y);
});
*/

/*$("#main").append(internationalizeButton);

function inName(name) {
  var nameArray = name.trim().split(" ");
  nameArray[1] = nameArray[1].toUpperCase();
  nameArray[0] = nameArray[0].slice(0,1).toUpperCase()+nameArray[0].slice(1).toLowerCase();
  name = nameArray.join(" ");
  return name;
}*/

//funcao para mostrar tudo de projects
projects.display = function(){
  $("#projects").append(HTMLprojectStart);
  for (project in projects.projects){
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
    var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
    var formattedProjectImages = [];
    for (image in projects.projects[project].images){

        formattedProjectImages[image] = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);

    }
    $(".project-entry:last").append(formattedProjectTitle+formattedProjectDates+formattedProjectDescription+formattedProjectImages+"<br><br>");

  }
}

//funcao para mostrar tudo de education
education.display = function(){
  $("#education").append(HTMLschoolStart);
  for(each in education.schools){
    var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[each].name);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[each].degree);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[each].dates);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[each].city);


    $(".education-entry:last").append(formattedSchoolName+formattedSchoolDegree+formattedSchoolDates+formattedSchoolLocation+"<br><br>");
  }



  for(each in education.courses){
    if (each === "0"){
      $(".education-entry:last").append(HTMLonlineNano);
    }else if (each === "1"){
      $(".education-entry:last").append(HTMLonlineClasses);
    }
    var formattedCoursesTitle = HTMLonlineTitle.replace("%data%",education.courses[each].title);
    var formattedCoursesSchool = HTMLonlineSchool.replace("%data%",education.courses[each].school);
    var formattedCoursesDates = HTMLonlineDates.replace("%data%",education.courses[each].dates);
    var formattedCoursesURL = HTMLonlineURL.replace("%data%",education.courses[each].url);

    $(".education-entry:last").append(formattedCoursesTitle+formattedCoursesSchool+formattedCoursesDates+formattedCoursesURL+"<br><br>");
    //console.log(each);
  }
}

bio.display();
work.display();
projects.display();
education.display();

//$("#mapDiv").append(googleMap);
