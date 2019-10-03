/*
Inspirations from:
* https://github.com/reggi/fortune-cookie
* Literature: Bainks, Gibson,
* Science: Feynman
*/

var quotes = [
  "You will meet a strange person.",
  "Cookies go stale. Fortunes are forever.",
  "Luck is on your side today.",
  "When $a \\ne 0$, there are two solutions to $ax^2 + bx + c = 0$ and they are $x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$",
  "“The sky above the port was the color of television, tuned to a dead channel.” -- <i>Neuromancer</i>",
  "The equation of motion for a robot can be written as $\\label{tau=Hqdd+C}\\boldsymbol{\\tau} =  \\boldsymbol{H}(\\boldsymbol{q}) \\ddot{\\boldsymbol{q}} + \\boldsymbol{c}(\\boldsymbol{q},\\dot{\\boldsymbol{q}},\\boldsymbol{f}_{ext}).$",
  "”I am not an animal brain [...]. I am a Culture Mind. We are close to gods, and on the far side. We are quicker; we live faster and more completely than you do, with so many more senses, such a greater store of memories and at such a fine level of detail. We die more slowly, and we die more completely, too.” -- <i>Look to windward</i>",
  "Study hard what interests you the most in the most undisciplined, irreverent and original manner possible. -- <i>R. Feynman</i>"
];

function fortune(){
  /* calculate a random index */
  index = Math.floor(Math.random() * quotes.length);
  /* display the quotation */
  document.write("<p>" + quotes[index] + "</p>");
};
