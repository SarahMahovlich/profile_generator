// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questionsArray = ["What's your name? Nicknames are also acceptable :)", "What's an activity you like doing?",
  "What do you listen to while doing that?", "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?", "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"];

let profileArray = [];

const getNextQuestion = (num) => {
  rl.question(questionsArray[num], (answer) => {
    profileArray.push(answer);
    if (num === questionsArray.length - 1) {
      console.log(profileArray[0] + " loves listening to " + profileArray[2] + " while " + profileArray[1] + ", devouring " + profileArray[4] + " for " + profileArray[3] +
        ", prefers " + profileArray[5] + " over any other sport, and is amazing at " + profileArray[6] + ".");
      rl.close();
    } else {
      getNextQuestion(num + 1);
    }
  });
};

getNextQuestion(0);