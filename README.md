# notmarkdown ![](https://img.shields.io/github/stars/ntrupin/notmarkdown.svg) ![](https://img.shields.io/github/forks/ntrupin/notmarkdown.svg) ![](https://img.shields.io/github/license/ntrupin/notmarkdown.svg) 

<img src="https://cdn.rawgit.com/ntrupin/notmarkdown/66618e7c/636B43E8-179D-40FB-8FF6-09DE7EA1096E.jpeg" width="50%">

The multi-flavored markup language that isn't Markdown.

## What is it?

notmarkdown is self-explanatory in its name: it isn't Markdown.

But, besides that, what's so special about it?
notmarkdown isn't just a markup language, it is a *flavored* markup language. That means that you can choose from a ton of different syntaxes, and all get the job done while supplying a little something extra.

- want clear, defined statements? Try the CAPS library.

- want simplicity in its finest? Try the easy library.

- want syntax so defining it's like a breath of crisp air? Try the minty library.

Besides these, there are many more possibilities, and you'll have to explore and test to find what's best.

## Usage

It's easy to include any notmarkdown library in your project. Simple include the following script tag with your choice of url at *the bottom* of the document *before* your scripts.

You must have an element with the id "nmd-in". This is where the parser takes text from.

You must have an element with the id "nmd-out". This is where the parser will output your text.

``<script src="url"></script>``

And, here are links to all of our different libraries:

- https://raw.githubusercontent.com/ntrupin/notmarkdown/master/flavors/minty/mintynmd.js

- https://raw.githubusercontent.com/ntrupin/notmarkdown/master/flavors/easy/easynmd.js

- https://raw.githubusercontent.com/ntrupin/notmarkdown/master/flavors/CAPS/capsnmd.js

- https://raw.githubusercontent.com/ntrupin/notmarkdown/master/flavors/standard/nmd.js

## Contribute

Thanks to GitHub, making a contribution is easy, and we love all the help that we can get. notmarkdown is a fun, quirky project; perfect for beginners or experts who want to have a good time helping to write code. Read on to see how to contribute.

### Create Your Own Library

#### Familiarize

Before you start writing, it is best to familiarize yourself with the format and code style of the current libraries. Having libraries that are uniform helps developers that come along later, and are just nearer in general. 

The current flavors can be found in the "flavors" directory of the GitHub repository. The base libraries all use .replace and RegExp methods to procedurally parse text, and, though this is the recommended way, you are free to do whatever you want! Just make it as best (and as fun) as you can.

You'll notice that all the libraries have names styled the same way: {name}nmd.js. The name is the title your library will go by in the repo and in the documentation. The "nmd" indicates that it isn't Markdown. The .js is because the libraries are primarily JavaScript files, and that is their file extension. Though the developers at notmarkdown write it in JavaScript (for the web), you can write it in any language you wish. Building a fancy CLI or text editor in Python? Whip up a Python module! Writing a game in Unity and want to add rich text features that aren't Markdown? Feel free to create a C# module.

### Write

You may write you code anywhere you choose, and, though contrary to our recommendation, any way you choose. This is open source, not a dictatorship. We ask that you review the guidelines before you begin. 

When writing your code, you may develop in any language you wish; languages that don't have a module are encouraged the write for.

While writing your code, make sure that you detail each aspect through comments. When you submit a request to merge your files, the repository admins will use these. Besides the formality, it also will help future developers know what is going on!

If you have any problem during your time coding a library, don't be afraid to drop an issue on the repository! It isn't a sign of weakness, but a sign of willing to contribute. Who knows? Your issue may teach someone something!

#### Guidelines

- Code must only edit text, and not interact with the outside page.

- Code must be clearly described via commits.

- Code must be encased in a function titled "parse()".

- parse() May not be called from within the library, it is exclusively for the developer working with the module to call.

- Project may be an npm or cdnjs module. If they are, you **must** provide a link back to the repository. You wrote the module, so you don't need to provide credit to us in the code.

- For JavaScript projects, the input must come from an element with the id "nmd-in" and be outputted to "nmd-out".

### Submitting 

To submit your code, you must first create a fork from the repository. This is a you-(and anyone else you let contribute)-independent branch where you can make any changes you want, without it affecting the overall project. 

Once you open a fork, place your code inside a folder inside the flavors directory. ***DO NOT*** change any other files. We will wholeheartedly restrict you from contributing again.

While making your changes, make sure you comment in your code, and that you commit graciously. Your commits will be reviewed by notmarkdown admins when you request to merge your branch with master. If your commit messages are not detailed, your merge will be terminated, though you will be invited to try again.

Once you complete your changes, submit a pull request. The admins must approve it, and then you may merge with master. If you are rejected, feel free to keep trying!

For your convenience we have including a review cheat sheet to let you know what you should do to have your changes be approved

#### Review Cheatsheet

- Your code must be commented well enough to be understood be even the newest developer. 

- Your commits must be rich with information of your changes. 

- You must not have modified any code except your own.

- Your library name must be unique.

### Adding to a Current Library

#### Familiarize

It is important that you familiarize yourself with the module you will be contributing to, as you must keep a uniform code style throughout the document. That means if the library is enclosing text in parenthesis, you may not change it to brackets.

#### Edit and Add

When you are editing, it is totally okay to make changes to part of the module that was written before you started working on it. Your goal is to make the library work smoothly and have the most functionality, and that can't always be achieved just by adding on. Just make sure to detail what you changed in your pull request, along with what you added.

While writing, make sure you clearly comment in your code; someone may come and work on it after you, and they will have to know what is going on. Similarly, keep your commit messages clean and descriptive, so the admins know exactly what you did when approving the request. 

Remember to respect the wishes of whoever wrote the library before you. If there are comments telling you to not change something, please acknowledge, and find another way to accomplish what you were going to do.

#### Guidelines

- Code must only edit text, and not interact with the outside page.

- Code must be clearly described via commits.

- Code must be encased in a function titled "parse()".

- parse() May not be called from within the library, it is exclusively for the developer working with the module to call.

- Project may be an npm or cdnjs module. If they are, you **must** provide a link back to the repository. You wrote the module, so you don't need to provide credit to us in the code.

- For JavaScript projects, the input must come from an element with the id "nmd-in" and be outputted to "nmd-out".

#### Submitting 

To submit your code, you must first create a fork from the repository. This is a you-(and anyone else you let contribute)-independent branch where you can make any changes you want, without it affecting the overall project. 

Once you open a fork, place your code inside the library you are editing's file inside the flavors directory. ***DO NOT*** delete any other files. We will wholeheartedly restrict you from contributing again.

While making your changes, make sure you comment in your code, and that you commit graciously. Your commits will be reviewed by notmarkdown admins when you request to merge your branch with master. If your commit messages are not detailed, your merge will be terminated, though you will be invited to try again.

Once you complete your changes, submit a pull request. The admins must approve it, and then you may merge with master. If you are rejected, feel free to keep trying!

For your convenience we have including a review cheat sheet to let you know what you should do to have your changes be approved

#### Review Cheatsheet

- Your code must be commented well enough to be understood be even the newest developer. 

- Your commits must be rich with information of your changes. 

- You must not have modified any code except the library you are working on.

- Your library name must be kept the same.
