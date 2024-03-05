
let laliga = ["Almería", "Athletic Bilbao", "Atlético Madrid", "Barcelona", "Celta Vigo", "Cádiz", "Elche", "Espanyol", "Getafe", "Girona", "Mallorca", "Osasuna", "Real Betis", "Real Madrid", "Real Sociedad", "Sevilla", "Valencia", "Villarreal"]
let pl = ['Arsenal', 'Aston Villa', 'Bournemouth', 'Brentford', 'Brighton', 'Burnley', 'Chelsea', 'Crystal Palace', 'Everton', 'Fulham', 'Liverpool', 'Luton Town', 'Manchester City', 'Manchester United', 'Newcastle United', 'Nottingham Forest',' Sheffield United', 'Tottenham Hotspur', 'West Ham United', 'Wolves'];

//'


var league = document.getElementById('league');
var games = document.getElementById('games');




//POINTS
var pts = [0,1,2,3,4,5,6,3,2,1,7,4,6,3,2,2,2,1,0,0,0,0,2,]
var put= []
  while(pts.length > 0){
  let random = Math.floor(Math.random() * pts.length)
  let pusher = pts.splice(random, 1) [0];
  put.push(pusher);
}
for(let i = 0; i < pts.length; i++){
  console.log(pts[i])
}


//leagus function
function team(team){
   /* for(let i = 0; i< team.length; i++){
    league.innerHTML += "<ul>" +[i] +". "+ team[i] + "<li>" +"</li>" +"</ul>";
}
*/
//Games 
function gamesDraw(){
    var draw = [];
    while (team.length > 0) {
      var randomIndex = Math.floor(Math.random() * team.length);
      var removedElement = team.splice(randomIndex, 1)[0];
      draw.push(removedElement);
    }
    var allGames = "";
    for (let i = 0; i < draw.length; i++) {
      allGames += "<ul>" + draw[i] + "<li>" +put[i]+"</li>" +"</ul>";
    }
    games.innerHTML = allGames

    
let calcWin = document.getElementById("calc")
//score


function score(putA, drawA, putB, drawB){
    let win = 3;
    let drew = 1;
    let lose = 0;
    if(putA >putB){
        return  league.innerHTML += "<ul>" +[1] +". "+ drawA + "<li>"+ win+"</li>" +"</ul>"
        + "<ul>" +[1] +". "+ drawB + "<li>"+ lose+"</li>" +"</ul>";
    }
    else if(putA === putB){
        return  league.innerHTML += "<ul>" +[1] +". "+ drawA + "<li>"+ drew+"</li>" +"</ul>"
                            +      "<ul>" +[1] +". "+ drawB + "<li>"+ drew+"</li>" +"</ul>";

    }
else{
    return  league.innerHTML += "<ul>" +[1] +". "+ drawB + "<li>"+ win+"</li>" +"</ul>"
                                +"<ul>" +[1] +". "+ drawA + "<li>"+ lose+"</li>" +"</ul>";
} 
}

function scoreA(putA, drawA, putB, drawB){
    if(putA >putB){
        return  league.innerHTML += "<ul>" +[1] +". "+ drawB + "<li>"+ lose+"</li>" +"</ul>";
    }
else{
    return  league.innerHTML += "<ul style=color:red>" +[1] +". "+ drawA + "<li>"+ lose+"</li>" +"</ul>";
    }
}





score(put[0], draw[0],put[1], draw[1])
score(put[2], draw[2],put[3], draw[3])
score(put[4],draw[4],put[5], draw[5])
score(put[6],draw[6],put[7], draw[7])
score(put[8],draw[8],put[9], draw[9])
score(put[10],draw[10],put[11], draw[11])
score(put[12],draw[12],put[13], draw[13])
score(put[14],draw[14],put[15], draw[15])
score(put[16],draw[16],put[17], draw[17])
score(put[18],draw[18],put[19], draw[19])



}
gamesDraw()


}

team(pl)



