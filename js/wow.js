$(document).ready(function() {

	function Get(methode, url) 
{
var xhr = new XMLHttpRequest();
//Test pour savoir si l'objet XHR gère withCredentials, ce qui indique qu'il s'agit bien de la version 2 de XHR
if (withCredentials in xhr) 
{
xhr.open(method, url, true);

	//var apikey = "dphv5ptd7qhzpmhercyje6jamza64xe6";
	//var server = "chogall";
	//var guild = "Discorde";
	//var guild = JSON.parse(Get("https://eu.api.battle.net/wow/guild/" + server +"/" + guild + "?fields=members&locale=fr_FR&apikey=" + apikey ));

	console.log(guild);
	var guild = JSON.parse(Get("https://www.wowprogress.com/guild/eu/cho-gall/Discorde/json_rank"));

	console.log(guild);
	$("#content").append(guild.realm_rank);
	//$("#content").append(guild.name + " ("+guild.realm+")"+"<br><br>");
	//for(var i=1; i < guild.members.length;i++) {
	//	if(guild.members[i].character.level === 110 && guild.members[i].rank <=5) {
	//		$("#content").append(guild.members[i].character.name + "<br>");
	//		if (guildDat.members[i].character.class === 8)
				
	//	}
	//}
	
});
