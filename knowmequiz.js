var readlineSync = require('readline-sync')

var user = readlineSync.question('May i have your name ? ')

var score = 0

//var welcomeMsg = "welcome " + userName ;

console.log('Welcome ' + userName)

var knowMe = readlineSync.question('Do you know Suryansh ? ')
if (knowMe == 'yes') {
  console.log('you are definitely an asshole')
} else {
  console.log('you are not introduced to God!!')
}

console.log(" Anyway Let's start the messs ^^")

//var userAge = readlineSync.question('Is your age greater than 25 ? ');

function play(question, answer) {
  var userAnswer = readlineSync.question(question)
  if (userAnswer == answer) {
    console.log('cool!')
    score = score + 1
    //console.log(score);
  } else {
    console.log('play has negative marking......lol')
    score = score - 1
  }
  console.log('current Score = ' + score)
  console.log('____________')
}
console.log("note:dont be lazy as suryansh,write the full answers")

var questions = [
  { question: 'whats my pet name ? a.Shubham | b.banty |c.shivam | d. golu', answer: 'shubham' },
  { question: "who's my fav superhero ? a.ironman | b.batman |c.superman | d.thor ", answer: 'thor' },
  { question: 'whats my fav food ? a.indian | b.continental |c.chinese | d. italian ', answer: 'continental' },
  { question: 'whats my fav clothing brand ? a.adidas | b.puma |c.nike | d. max ', answer: 'max' },
  { question: 'name of my new phone ? a.Realme 7 | b.Iphone 12 |c.Mi A2 | d. oppo f21 ', answer: 'realme 7' },
  { question: 'whats my gaming name ? no guess,u should know it', answer: 'lucifer' },
  { question: 'whts my fav book ? a.RAM:Scion of Ikshvaku | b.Harry Potter |c.Eloquent JavaScript | d. dont even guess ', answer: 'dont even guess' },
]

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i]
  play(currentQuestion.question, currentQuestion.answer)
}

if (score >= 5) {
  console.log('u enter levelTwo')
} else {
  console.log(
    'try not know suryansh मेरे बारे में इतना मत सोचना, दिल में आता हूं, समझ में नहीं।'
  )
}

var queslevelTwo = [
  { question: 'What really makes you angry? a.Slow internet | b.bad food |c.annoying people | d. boring movies ', answer: 'slow internet' },
  { question: "What's the most useless talent you have?  a.texting | b.sleeping |c.annoying people | d. all of the above ", answer: 'texting' },
  { question: 'whos my fav comedian ?  a.bassi | b.Harsh gujral |c.Zakir khan | d. nota ', answer: 'bassi' },
  { question: 'fav sport ? u should directly tell the answer ', answer: 'basketball' },
  { question: 'fav team ?  a.rcb | b.csk |c.MI | d. KKR ', answer: 'rcb' },
  { question: 'fav drink ?  a.coke | b.redbull |c.maaza | d.water ', answer: 'water' },
  { question: 'short or long hair ? answer:short/long', answer: 'long' },
]

for (var i = 0; i < queslevelTwo.length; i++) {
  var currentQuestion = queslevelTwo[i]
  play(currentQuestion.question, currentQuestion.answer)
}

if (score >= 10) {
  console.log('ur score is' + score)
  console.log('u really mean to suryansh')
  console.log('u must also be crazy af to know u r the winner')
} else {
  console.log('u will never know God')
}