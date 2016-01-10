$(function(){
console.log("Is this broken??");
var quoteSource=[
{
	quote:"Sometimes your best investments are the ones you don\'t make.",
	name:"Donald Trump"
},
{
	quote:"Sometimes by losing a battle you find a new way to win the war.",
	name:"Donald Trump"
},
{
	quote:"I try to learn from the past, but I plan for the future by focusing exclusively on the present. That\'s were the fun is.",
	name:"Donald Trump"
},
{
	quote:"Money was never a big motivation for me, except as a way to keep score. The real excitement is playing the game.",
	name:"Donald Trump"
},
{
	quote:"What separates the winners from the losers is how a person reacts to each new twist of fate.",
	name:"Donald Trump"
},
{
	quote:"You have to think anyway, so why not think big?",
	name:"Donald Trump"
},
{
	quote:"What separates the winners from the losers is how a person reacts to each new twist of fate.",
	name:"Donald Trump"
},
{
	quote:"Laziness is a trait in blacks.",
	name:"Donald Trump"
},
{
	quote:"Black guys counting my money! I hate it. The only kind of people I want counting my money are little short guys that wear yarmulkes every day.",
	name:"Donald Trump"
},
{
	quote:"In life you have to rely on the past, and that’s called history.",
	name:"Donald Trump"
},
{
	quote:"Partnerships must have loyalty and integrity at their core.",
	name:"Donald Trump"
},
{
	quote:"There is an old German proverb to the effect that fear makes the wolf bigger than he is, and that is true.",
	name:"Donald Trump"
},
{
	quote:"He alone, who owns the youth, gains the future.",
	name:"Adolf Hitler"
},
{
	quote:"Make the lie big, make it simple, keep saying it, and eventually they will believe it.",
	name:"Adolf Hitler"
},
{
	quote:"Those who want to live, let them fight, and those who do not want to fight in this world of eternal struggle do not deserve to live.",
	name:"Adolf Hitler"
},
{
	quote:"The victor will never be asked if he told the truth.",
	name:"Adolf Hitler"
},
{
	quote:"I do not see why man should not be just as cruel as nature.",
	name:"Adolf Hitler"
},
{
	quote:"If you tell a big enough lie and tell it frequently enough, it will be believed.",
	name:"Adolf Hitler"
},
{
	quote:"It is not truth that matters, but victory.",
	name:"Adolf Hitler"
},
{
	quote:"Words build bridges into unexplored regions.",
	name:"Adolf Hitler"
},
{
	quote:"Money glitters, beauty sparkles, and intelligence shines.",
	name:"Adolf Hitler"
},
{
	quote:"The only thing lazy people do fast is get tired.",
	name:"Adolf Hitler"
},
{
	quote:"Never trust a person who isn\'t having at least one crisis.",
	name:"Adolf Hitler"
},
{
	quote:"If we don't control our money, it will control us.",
	name:"Adolf Hitler"
}

];
$("button").click(function(){
	console.log("click");
	var $this = $(this);
if ($this.data('file') == 'quote'){
	getNewQuote();
}
else {
	console.log($this.data('file'));
	guess = $this.data('file');
	checkGuess();
}

});

var answered = false;
var guess, newQuoteName  = ' ';
var sourceLength = quoteSource.length;

function getNewQuote(){

	var $quoteDisplay= $('#quoteDisplay');
	$('p').remove();
	var randomNumber = Math.floor(Math.random()*sourceLength);
	var newQuoteText = quoteSource[randomNumber].quote;
	newQuoteName = quoteSource[randomNumber].name;
	console.log(newQuoteText);
	$quoteDisplay.append('<p>'+ newQuoteText + '</p>');
	answered = false;

	//document.getElementById("quoteDisplay").innerHTML = newQuoteText;

};

function checkGuess(){
	if (answered != true){
		if (guess == newQuoteName){
			console.log(guess + ' = ' + newQuoteName);
			$('#quoteDisplay').append('<p>'+' Correct! '+'</p>');
			answered = true;
			//document.getElementById("quoteDisplay").innerHTML ="Correct!" ;
		}
		else{
			console.log(guess + ' != ' + newQuoteName);
			$('#quoteDisplay').append('<p>'+"Sorry he didn't say that." +'</p>');
			answered = true;
			//document.getElementById("quoteDisplay").innerHTML = "Sorry he didn't say that.";
		}
	}
};


});
