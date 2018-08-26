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

Congratulations! You finished making your first open source contribution to LineScript! We'd love if you starred the repository (to attract more contributors) or contributed again, to make it even better!
