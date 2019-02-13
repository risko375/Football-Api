const getTeamScore = async teamName => {
  // array of teams in the league

  const teamNames = [
    "Arsenal",
    "Aston Villa",
    "Burnley",
    "Chelsea",
    "Crystal Palace",
    "Everton",
    "Hull City",
    "Leicester",
    "Liverpool",
    "Manchester City",
    "Manchester United",
    "Newcastle United",
    "Queens Park Rangers",
    "Southampton",
    "Stoke City",
    "Sunderland",
    "Swansea City",
    "Totenham Hotspur",
    "West Bromwich Albion"
  ];

  // check prior to making network request if entered team exists. If not return error message in console
  if (!teamNames.find(team => team === teamName)) {
    return console.log(
      "Team does not exist in the league please check your spelling"
    );
  }

  const response = await fetch(
    "https://raw.githubusercontent.com/openfootball/football.json/master/2014-15/en.1.json"
  );
  const json = await response.json();

  // set score variable to 0, which will be incremented in for loop below
  let score = 0;

  for (round of json.rounds) {
    for (match of round.matches) {
      if (match.team1.name === teamName) {
        score += match.score1;
      } else if (match.team2.name === teamName) {
        score += match.score2;
      } else {
        score = score;
      }
    }
  }
  // Output goals scored by the team
  console.log(
    "Total goals scored for the season by " + teamName + " were: " + score
  );
};

// call the function with a given team
getTeamScore("Liverpool");
