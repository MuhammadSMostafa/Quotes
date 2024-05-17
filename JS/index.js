var btn = document.getElementById(btn);
var qouteDisplay = document.getElementById("quote");
var currentQuote;

var authors = [
  {
    authorName: "― Oscar Wilde",
    authorImage: "Images/oscar_wide.jpg",
  },
  {
    authorName: "― Frank Zappa",
    authorImage: "Images/frank_zappa.jpg",
  },
  {
    authorName: "― Albert Einstein",
    authorImage: "Images/albert_einstein.jpg",
  },
  {
    authorName: "― Marcus Tullius Cicero",
    authorImage: "Images/marcus_tullius.jpg",
  },
  {
    authorName: "― Bernard M. Baruch",
    authorImage: "Images/bernard_m_baruch.jpg",
  },
  {
    authorName: "― William W. Purkey",
    authorImage: "Images/william_w_purkey.jpg",
  },
  {
    authorName: "― Dr. Seuss",
    authorImage: "Images/dr_seuss.jpg",
  },
  {
    authorName: "― Mae West",
    authorImage: "Images/mae_west.jpg",
  },
  {
    authorName: "― Mahatma Gandhi",
    authorImage: "Images/mahatma_gandhi.jpg",
  },
  {
    authorName: "― Robert Frost",
    authorImage: "Images/robert_frost.jpg",
  },
];
var quotes = [
  {
    quote: `Be yourself; everyone else is already taken`,
    author: authors[0],
  },
  {
    quote: `So many books, so little time.`,
    author: authors[1],
  },
  {
    quote: `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.`,
    author: authors[2],
  },
  {
    quote: `A room without books is like a body without a soul.`,
    author: authors[3],
  },
  {
    quote: `Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.`,
    author: authors[4],
  },
  {
    quote: `You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.`,
    author: authors[5],
  },
  {
    quote: `You know you're in love when you can't fall asleep because reality is finally better than your dreams.`,
    author: authors[6],
  },
  {
    quote: `You only live once, but if you do it right, once is enough.`,
    author: authors[7],
  },
  {
    quote: `Be the change that you wish to see in the world.`,
    author: authors[8],
  },
  {
    quote: `In three words I can sum up everything I've learned about life: it goes on.`,
    author: authors[9],
  },
  {
    quote: `To live is the rarest thing in the world. Most people exist, that is all.`,
    author: authors[0],
  },
  {
    quote: `Always forgive your enemies; nothing annoys them so much.`,
    author: authors[0],
  },
  {
    quote: `Live as if you were to die tomorrow. Learn as if you were to live forever.`,
    author: authors[8],
  },
  {
    quote: `I am so clever that sometimes I don't understand a single word of what I am saying.`,
    author: authors[0],
  },
  {
    quote: `There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.`,
    author: authors[2],
  },
  {
    quote: `We are all in the gutter, but some of us are looking at the stars.`,
    author: authors[0],
  },
];

randomQuote();

function randomQuote() {
  var quote = Math.floor(Math.random() * quotes.length);
  if (currentQuote !== quote || !currentQuote) {
    qouteDisplay.innerHTML = `      <div class="auther-img">
        <img src="${quotes[quote].author.authorImage}" alt="" />
      </div>
      <div class="text">
        <h3>“${quotes[quote].quote}”</h3>
        <h4>${quotes[quote].author.authorName}</h4>
      </div>`;
    currentQuote = quote;
  } else {
    randomQuote();
  }
}
