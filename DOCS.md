# Docs

This is the official LineScript documentation. 

See a bug in the docs? Submit a [Pull Request](https://github.com/ntrupin/LineScript/pulls).

## Getting Started

Getting started with LineScript is incredibly easy! All it requires is three files, two of which can be linked to using an external URL. Follow the guide below to learn how to start using LineScript, and feel free to browse the rest of the documentation to learn about the syntax.

1. Set up your HTML file.

The HTML file is what is called on by your browser when the webpage is requested, and is the page that is dynamically updated to include the parsed LineScript file. This is the one file that you must have downloaded to your computer or hosted on wherever you are hosting your webpage. You can get it [here](https://github.com/ntrupin/linescript/blob/master/src/base.html).

Once you have the file, there are a few things you must do:
 - Replace ```<body onload="build('MY_FILE')" id="line">``` with the path/name of your LineScript file. For example, if the name of your LineScript file is index.osls, you would change the HTML to ```<body onload="build('index')" id="line">```
 - Replace ```<script src="compiler.js"></script>``` and ```<script src="gate.js"></script>``` with the path/name of the compiler and gate files. The files can be hosted with the rest of your page to, or linked to using an external URL (explained below). In some cases, you may not even have to change these tags!
 
2. Retrieve the Compiler and Gate files.

The compiler and the gate are the two files that make LineScript work.

 - **compiler.js** is the file that *is* LineScript. It contains the switches and other code that takes your osls file and converts it to a valid HTML document. The majority of the updates we make to the language are done to this file, because all of the commands, arguments, and well... *everything* is calculated in this script. You can get it [here](https://ntrupin.github.io/linescript/src/compiler.js).
 - **gate.js** is the file that takes your osls file and splits it into bite-sized bits that can be read by the compiler. When you call the build argument in the HTML document, it is calling the function for this file, which fetches your LineScript file and makes small tweaks so that it complies to standards. You can get it [here](https://ntrupin.github.io/linescript/src/gate.js).
 
You don't have to do anything to these files - they work as-is.

3. Create your LineScript (osls) file.

osls stands for "Open-Source LineScript", and is the file extension for LineScript files. In order to use LineScript, you have to... use LineScript. This can be done by creating a file called "MY_FILE.osls", which can be, for example, "index.osls". Create the file in any text editor, and there, you can write LineScript! Here's a little sample code for you:

```javascript
title -> My First LineScript Page
h1 -> Hello, World!
p -> This is my first LineScript page! It is very, very simple, and is just an example.
```

4. Navigate to your HTML file.

Once you open this file, LineScript takes care of the rest! Congratulations, you just created your first LineScript page!

## Syntax Reference

### Text-Class Elements

These are LineScript elements that are primarily text-based, and all operate using roughly the same syntax.

#### Headings

```javascript
h1 (also applicable for h2, h3, h4, h5, and h6)
-> Full Usage: h1 -> ARGUMENTS -> TEXT
--> Example: h1 -> style="color:blue" -> Hello, world!
--> Result: <h1 style="color:blue">Hello, world!</h1>
-> Text-Only Usage: h1 -> TEXT
--> Example h1 -> Hello, world!
--> Result <h1>Hello, world!</h1>
-> Nestable Usage: h1 -> ARGUMENTS -> noend
--> Example: h1  -> style="background-color:blue" -> noend
--> Result: <h1 style="background-color:blue">
```

#### Paragraph

```javascript
p
-> Full Usage: p -> ARGUMENTS -> TEXT
--> Example: p -> style="color:blue" -> Hello, world!
--> Result: <p style="color:blue">Hello, world!</p>
-> Text-Only Usage: p -> TEXT
--> Example p -> Hello, world!
--> Result <p>Hello, world!</p>
-> Nestable Usage: p -> ARGUMENTS -> noend
--> Example: p  -> style="background-color:blue" -> noend
--> Result: <p style="background-color:blue">
```

#### Hyperlink


```javascript
a
-> Full Usage: a -> ARGUMENTS -> TEXT
--> Example: a -> style="color:blue" -> Hello, world!
--> Result: <a style="color:blue">Hello, world!</a>
-> Text-Only Usage: a -> TEXT
--> Example a -> Hello, world!
--> Result <a>Hello, world!</a>
-> Nestable Usage: a -> ARGUMENTS -> noend
--> Example: a  -> style="background-color:blue" -> noend
--> Result: <a style="background-color:blue">
```

#### Abbreviation

```javascript
abbr
-> Full Usage: abbr -> ARGUMENTS -> TEXT
--> Example: abbr -> title="Open-Source LineScript" -> OSLS
--> Result: <abbr title="Open-Source LineScript">OSLS</abbr>
-> Text-Only Usage: abbr -> TEXT
--> Example abbr -> OSLS
--> Result <abbr>OSLS</abbr>
-> Nestable Usage: abbr -> ARGUMENTS -> noend
--> Example: abbr  -> title="Open-Source LineScript" -> noend
--> Result: <abbr title="Open-Source LineScript">
```

#### Button

```javascript
button
-> Full Usage: button -> ARGUMENTS -> TEXT
--> Example: button -> style="color:blue" -> Hello, world!
--> Result: <button style="color:blue">Hello, world!</button>
-> Text-Only Usage: button -> TEXT
--> Example button -> Hello, world!
--> Result <button>Hello, world!</button>
-> Nestable Usage: button -> ARGUMENTS -> noend
--> Example: button  -> style="background-color:blue" -> noend
--> Result: <button style="background-color:blue">
```

#### List Element

```javascript
li
-> Full Usage: li -> ARGUMENTS -> TEXT
--> Example: li -> style="color:blue" -> Hello, world!
--> Result: <li style="color:blue">Hello, world!</li>
-> Text-Only Usage: li -> TEXT
--> Example li -> Hello, world!
--> Result <li>Hello, world!</li>
-> Nestable Usage: li -> ARGUMENTS -> noend
--> Example: li  -> style="background-color:blue" -> noend
--> Result: <li style="background-color:blue">
```

### Container-Class Elements

These are LineScript elements that are primarily used for holding other elements, and all operate using roughly the same syntax.

#### Division/Section

```javascript
div
-> Full Usage: div -> ARGUMENTS
--> Example: div -> style="color:blue"
--> Result: <div style="color:blue">
-> Self-CLosing Usage: div -> ARGUMENTS -> end
--> Example div -> style="color:blue" -> end
--> Result <div style="color:blue"></div>
-> Text-Included Usage: div -> ARGUMENTS -> TEXT
--> Example: div  -> style="color:blue" -> Hello, World!
--> Result: <div style="color:blue">Hello, World!
```

**The rest of the documentation will be added shortly**
