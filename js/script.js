// Array Of Quotes
var quotesCollection = [
  {
    qoute: "The object of life is not to be on the side of the majority, but to escape finding oneself in the ranks of the insane.",
    qouteOwner: "Marcus Aurelius",
  },
  {
    qoute: "We're flawed, because we want so much more. We're ruined, because we get these things, and wish for what we had.",
    qouteOwner: "Don Draper",
  },
  {
    qoute: "It May Seem Difficult At First, But All Things Are Difficult At First.",
    qouteOwner: "Miyamoto Musashi",
  },
  {
    qoute: "All of humanity's problems stem from man's inability to sit quietly in a room alone.",
    qouteOwner: "Blaise Pascal",
  },
  {
    qoute: "It doesn't matter, because we can fix anything that can happen here, we don't concern ourselfs with mistakes we just have happy accidents.",
    qouteOwner: "Bob Ross",
  },
  {
    qoute: "The difference between genius and stupidity is: genius has its limits.",
    qouteOwner: "Alexandre Dumas-fils",
  },
  {
    qoute: "It is what you read when you don't have to that determines what you will be when you can't help it.",
    qouteOwner: "Oscar Wilde",
  },
  {
    qoute: "Reality continues to ruin my life.",
    qouteOwner: "Bill Watterson",
  },
  {
    qoute: "Knowing yourself is the beginning of all wisdom.",
    qouteOwner: "Aristotle",
  },
  {
    qoute: "It's the possibility of having a dream come true that makes life interesting.",
    qouteOwner: "Paulo Coelho",
  },
  {
    qoute: "Perhaps one did not want to be loved so much as to be understood.",
    qouteOwner: "George Orwell",
  }
]

// To check if previous quote is repeated
var previousQuote = null;

function generateQoute(quotesCollection) {
  // Generate Random Number
  var randomNumber = Math.trunc(Math.random() * quotesCollection.length);
  var pick = quotesCollection[randomNumber];

  // While ${previousQuote} is repeated : generate random number again
  while (pick === previousQuote) {
    randomNumber = Math.floor(Math.random() * quotesCollection.length);
    pick = quotesCollection[randomNumber];
  }

  // Update the previously selected number to check
  previousQuote = pick;

  document.getElementById("qoute").innerHTML = `"${pick.qoute}"`;
  document.getElementById("qouteAuthor").innerHTML = `<i class="bi bi-pen"></i> ${pick.qouteOwner}`;

  return pick;
}
