var formattedName = HTMLheaderName.replace("%data%","Pedro Paradella");
var formattedRole = HTMLheaderRole.replace("%data%","Web Developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
