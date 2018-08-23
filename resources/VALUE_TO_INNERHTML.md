## value -> innerHTML | innerHTML -> value conversions

To support behind-the-scenes, hidden, predefined, and altogether nicer rendering, notmarkdown user .innerHTML to get the text to parse. If you are parsing data from a text input, this method is not ideal. When you create your own library, you are free to get the data however you please. However, for those using .innerHTML libraries, you can use the following code to convert value to .innerHTML:

```javascript
x = document.getElementById("my_element").value
document.getElementById("nmd-in").innerHTML = x // nmd-in is styled with display:none
parse()
```

and, also, .innerHTML to value:

```javascript
y = document.getElementById("nmd-out").innerHTML
document.getElementById("my_element").value = y
```

