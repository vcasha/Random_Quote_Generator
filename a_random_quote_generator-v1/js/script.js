/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

/***
These is my array of quote objects that will be used to pass the necessary information for displaying the properties of the object.
***/
let quotes =
[
  {
    quote: 'Do you still believe in Santa Claus? I hear it is marginal at your age',
    source: 'Donald J. Trump',
    citation: 'Christmas Eve phone calls as NORAD monitors Santa Claus',
    year: '2018',

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

//random colors to be used for the background when it changes

let colors =
[
  '#009fc2',
  '#1DA1F2',
  '#36465D',
  '#F9524D',
  '#A68BFF',
  '#1B1B1C',
  'FFCE00'
];

//to generate a random color from the colors object and thus a random background color
let randomBackgroundColor = () =>
{
    let newColor = getRandomQuote(colors);
    document.body.style.backgroundColor = newColor;
    let button = document.getElementById('loadQuote');
    button.style.color = newColor;



}



/***
  This function will generate a random number between 0 and the length of the quotes object and use that number to identify the index of the
  quote object we will display. The function then returns the array with the index.
***/

const getRandomQuote = quotes =>
{
  var randomNumber = Math.floor(Math.random() * quotes.length);
  console.log(randomNumber);
  return quotes[randomNumber];

}


const printQuote = () =>
{
  //assign the single object from the quotes array to a variable
  let quoteProperties = getRandomQuote(quotes);
  //since the quote and source properties are always present we can go ahead and add those to our HTML string.
  let message = `<p class="quote"> ${quoteProperties.quote} </p>`;
  message += `<p class="source"> ${quoteProperties.source}`;
  //with the others being optional we can add a condition to add their HTML to the message variable if present
  if(quoteProperties.hasOwnProperty('citation'))
  {
    message += `<span class="citation"> ${quoteProperties.citation}`;
  }
  if (quoteProperties.hasOwnProperty('year'))
  {
    message += `</span><span class="year"> ${quoteProperties.year}</span></p>`;
  }
    else
    {
      message += `</p>`;
    }
  //print the final message to the 'quote-box' element.
  var outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = message;

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
const clearTimer = () =>
{
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
document.getElementById('loadQuote').addEventListener("click", randomBackgroundColor, false);






// Remember to delete the comments that came with this file, and replace them with your own code comments.
