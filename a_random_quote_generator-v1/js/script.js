/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

/***
These is my array of quote objects that will be used to pass the necessary information for displaying the properties of the object.
***/
var quotes = [
  {
    quote: 'Do you still believe in Santa Claus? I hear it is marginal at your age',
    source: 'Donald J. Trump',
    citation: 'Christmas Eve phone calls as NORAD monitors Santa Claus',
    year: '2018'

  },
  {
    quote: 'I\'m too drunk to taste <i>this</i> chicken',
    source: 'Will Ferrel as Ricky Bobby quoting Colonel Sanders',
    citation: 'Talledega Nights',
    year: '2006'

  },
  {
    quote: 'Lieutenant Dan, ice cream!',
    source: 'Tom Hanks as Forrest Gump',
    //citation: 'Forrest Gump',
    year: '1994'

  },
  {
    quote: 'It\'s a purse, <i>K!!</i>',
    source: 'Ken Jeong as Mr.Chow',
    citation: 'The Hangover, Part I',
    //year: '2009'

  },
  {
    quote: 'Peeing your pants is cool!',
    source: 'Adam Sandler as Billy Madison',
    citation: 'Billy Madison',
    year: '1995'

  },
  {
    quote: 'We have some bad hombres here',
    source: 'Donald J. Trump',
    citation: '3rd Presidential Debate',
    year: '2016'

  }

]

/***
  This function will generate a random number between 0-5 (the number of objects) and use that number to identify the index of the
  quote object we will display. The function then returns the array with the index.
***/

const getRandomQuote = quotes =>{
  var randomNumber = Math.ceil(Math.random() * 5);
  return quotes[randomNumber];


}
/***
  This function executes the RandomQuote Function and stores it in the quoteProperties variable. The quotePoperties variable
  is now storing one of the objects from the quotes array. Since the quote and source properties are required
  we can store those in the message variable as an HTML string right away. But with the citation and year properties being optional, we
  can run conditional statements to first check if citation and year are both properties that exist in the object, if so we will add the HTML string for these properties
  to the message variable and print it. If neither are there, we then check for each object individually and if present, add the content to the HTML string and print. Lastly, if neither of the optional properties
  are present we will add the closing </p> tag and print the message with only the two required properties.
  ***/

const printQuote = () => {
  var quoteProperties = getRandomQuote(quotes);
  var message = '<p class="quote">' + quoteProperties.quote +  '</p>';
  message += '<p class="source">'+ quoteProperties.source
  if(quoteProperties.hasOwnProperty('citation') && quoteProperties.hasOwnProperty('year')) {
    message += '<span class="citation">' + quoteProperties.citation
    message += '</span>' + '<span class="year">' + quoteProperties.year + '</span>' + '</p>';
    var outputDiv = document.getElementById('quote-box');
    outputDiv.innerHTML = message;

  } else if (quoteProperties.hasOwnProperty('citation')){
      message += '<span class="citation">' + quoteProperties.citation;
      var outputDiv = document.getElementById('quote-box');
      outputDiv.innerHTML = message;

  } else if (quoteProperties.hasOwnProperty('year')){
      message += '</span>' + '<span class="year">' + quoteProperties.year + '</span>' + '</p>';
      var outputDiv = document.getElementById('quote-box');
      outputDiv.innerHTML = message;


    } else{
      message += '</p>';
      var outputDiv = document.getElementById('quote-box')
      outputDiv.innerHTML = message;
    }
}

//To be used for storing the setInterval value
let timer;
/*to keep the page from geting stagnant, the page will cycle through quotes on an interval. This will be done using
a function that will be executed once and
basically create a constant loop via the setInterval method being called.
Only time the timer function gets recalled is on click of button
which will be explained below.
*/
  const setTimer  = () => timer = setInterval(printQuote, 5000);


/*going to add this function to the 'click' action. This will clear
the current interval and start it over again so the user always has enough time to read the quote
*/
const clearTimer = () => {
  clearInterval(timer);
  setTimer();
}

setTimer();









/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/


document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('loadQuote').addEventListener("click", clearTimer, false);





// Remember to delete the comments that came with this file, and replace them with your own code comments.
