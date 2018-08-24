## Contributing

Thanks to GitHub, it is very easy to contribute to open source. To make your first contribution, just follow the guide below.

### Familiarize

Before you contribute, it is important that you Familiarize yourself with code syntax, structure, and style. The code you write must maintain uniform with already established code to make sure it functions properly and looks best for future contributors. 

The code for the compiler is in the /src/ directory. Since that is where you will be coding, this is where you should familiarize. 

The entire script uses cases and switched, to provide smooth flowing through different layers of the parsing process. Please, do not use if/else statements. They take up a lot more space and often do not work as planned. 

### Fork

This is where you start contributing. To fork the repository, click the button in the top right corner of the main page of the repository. This will create a clone of LineScript under your name, with you as the owner. 

A fork is a branch of a repository where you can edit whatever you want without it affecting the overall project. While this may be true, you are discouraged from doing so, as it will render you unable to submit a pull request to push your changes. 

Instead, take this opportunity to test bits of code to see what they do. When you feel you are ready to begin writing, you may move on. 

### Write

This is where your contribution takes place. You will be writing in the compiler, so you should open up that file. You now have the opportunity to add and edit the code, and that is exactly what you are going to do. 

#### Add

If you are adding to the code, navigate to the bottom of the document. Make sure you are still inside the parse() function. This is where you will make your entry. Copy and paste code from another section of the document and add it to the bottom. Once the formatting is set up how you feel is correct, you may edit the values in your copied function to encompass a new tag. For example, if you copied the "1" tag and are creating a "3" tag, you would change 

**This**

```javascript
  case "1":
   switch(v[1]) {
    case undefined:
    case null:
     output = "<h1>" + c[1] + "</h1>"
     return output;
     break;
    default:
     output = "<h1 " + v[1] + ">" + c[1] + "</h1>"
     return output;
     break;
   }
```

to **This**

```javascript
  case "3":
   switch(v[1]) {
    case undefined:
    case null:
     output = "<h3>" + c[1] + "</h3>"
     return output;
     break;
    default:
     output = "<h3 " + v[1] + ">" + c[1] + "</h3>"
     return output;
     break;
   }
```

Or, you may also write your own function from scratch, and include your own special functionality. It all depends on what you think you can do! Just make sure to comment and commit descriptively, so it is crystal-clear what you did. 

#### Edit

If you find a bug in a function, or just want to make it more practical or add on, you can edit nonexistent functions! This can be done by simply editing values in a function of adding more cases to it. The more cases in a function, the more powerful it is. For example, if you wanted to add styles to a "1" tag, you would change

**This**

```javascript
  case "1":
   switch(v[1]) {
    default:
     output = "<h1 " + v[1] + ">" + c[1] + "</h1>"
     return output;
     break;
   }
```

to **This**

```javascript
  case "1":
   switch(v[1]) {
    case undefined:
    case null:
     output = "<h1>" + c[1] + "</h1>"
     return output;
     break;
    default:
     output = "<h1 " + v[1] + ">" + c[1] + "</h1>"
     return output;
     break;
   }
```

### Pull Request

After you have completed your changes, it is time to create a pull request. In your fork, you can click the green "Pull Request" button. From here, it asks you to fill out a template, which you must do for the admins. After you have completed the steps, submit your request. This sends your fork to the admins for approval. If they approve it, it will automatically merge with master. 

### You're Done!

Congratulations! You finished making your first open source contribution. We'd love if you starred the repository (to attract more contributors) or contributed again, to make it even better!
