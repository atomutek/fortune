# Fortune

**Fortune** aims to be a minimalist fortune script. Quotes / fortunes with equations in MathJax are supported.

## How it works

### Generate a quote
The `fortune` function gets a random fortune from the `quotes` array and writes it in the HTML document.

```js
function fortune(){
  /* calculate a random index */
  index = Math.floor(Math.random() * quotes.length);
  /* display the quotation */
  document.write("<p>" + quotes[index] + "</p>");
};
```

To do so in the html just add:

```js
<script type="text/javascript" src="js/fortune.js" type="text/javascript"></script>
<script type="text/javascript">fortune();</script>
```

### Add a new quote or modify a quote
Open the `fortune.js` file and modify the `quotes` array.

### Add MathJax support

Add the following code to support MathJax quotes:

```js
<script>
    MathJax = {
        tex: {
            inlineMath: [
                ['$', '$'],
                ['\\(', '\\)']
            ]
        }
    };
</script>
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
```

## Example

To see what `fortune.js` can do for you, check the `index.html` file in the `example` folder.


## Acknowledgments
* Got some fortunes from [reggi](https://github.com/reggi/fortune-cookie/blob/master/fortune-cookie.md)
* JS base code from [Joe Struss](https://www.itlearningpods.com/Networking/JS1/js12.html)
