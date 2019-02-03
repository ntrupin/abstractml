# Changelog

*Wondering why it says (thanks, @user) for some updates but only (@ntrupin) for others? I'm @ntrupin, the admin. I feel wrong thanking myself, but I do appreciate what everyone else has done.*

**Note:** Updates are descending from most recent.

## 0.2.7

### Miscellaneous Changes

- Started working on a new precompiler, written in C

### Bug Fixes

- Fixed a bug where charset was converted to an empty meta tag (thanks, @Snewkis)

### Documentation Changes

- Added stikethrough (s) tag to documentation (@ntrupin)
- Added section tag to documentation (@ntrupin)
- Added article tag to documentation (@ntrupin)
- Added time tag to documentation (@ntrupin)
- Added strong tag to documentation (@ntrupin)
- Made the documentation menu mobile-friendly (@ntrupin)

## 0.2.6
thanks, @Snewkis

### Compiler Changes

- Added strikethrough (s) tag
- Added strong tag
- Added section tag
- Added article tag
- Added time tag

## 0.2.5
all by @ntrupin

### Compiler Changes

- Added the pre tag
- Added the code tag
- Optimized script fetching time

### Miscellaneous Changes

- Made an AbstractML website

### Documentation Changes

- Created and finished to documentation (for now)
- Removed DOCS.md

### Bug Fixes

- Fixed a bug where free text nodes included their indentation on the page.

## 0.2.4
all by @ntrupin

### Compiler Changes

- **-breaking change-** Removed the style tag
- **-breaking change-** Consolidated headscript and script tags. Now all scripts are placed in the head. File an issue if you would like to revert this change
- Added the small tag
- Added the bold (b) tag
- Added the underline (u) tag

### Miscellaneous Changes

- Removed experimental syntax highlighters from the repository.

### Bug Fixes

- Fixed a bug where the script tag would be injected without the url
- Fixed a bug where the li tag would not be able to be left open. Now, a period (.) is the placeholder to do so

## 0.2.3
all by @ntrupin

### Compiler Changes

- **-breaking change-** Consolidated gate.js and compiler.js

### Miscellaneous Changes

- Added syntax highlighting support for GitHub's Atom editor
- Moved the syntax highlighters to a seperate repository

### Bug Fixes

- Fixed a bug where the highlighter's TextMate Scopes did not align with its color

## 0.2.2
all by @ntrupin

### Miscellaneous Changes

- Created a beta of a TextMate syntax highlighter
- Refactored the syntax highlighter for CoffeeScript, Python, Ruby, XML, and YAML

## 0.2.1
all by @ntrupin

### Documentation Changes

- Began working on new documentation

## 0.2.0

### Compiler Changes

- **-breaking change-** Completely revamped the compiler, making the contribution, development, and usage process much smoother and simpler (@ntrupin)
- **-breaking change-** Changed the method of splitting the commands (@ntrupin)
- **-breaking change-** Added the ability for almost any element to be nested, alone, self-closing, styled, or text-containing (@ntrupin)
- Added style tag (@ntrupin)
- Added ul tag (thanks, @nmacarthur)
- Added ol tag (thanks, @nmacarthur)
- Added li tag (thanks, @nmacarthur)
- Added headscript tag (@ntrupin)
- Added section tag (@ntrupin)
- Added nav tag (@ntrupin)
- Added main tag (@ntrupin)
- Added header tag (@ntrupin)
- Added hr tag (@ntrupin)
- Added the ability to write text outside of tags (@ntrupin)
- Added the ability to have empty elements (@ntrupin)
- Added comment tag (@ntrupin)
- Simplified end sequence (@ntrupin)

### Bug Fixes

- Fixed a bug where empty tags would print "undefined" on the screen (@ntrupin {LineScript})

## 0.1.2

### Compiler Changes

- **-breaking change-** Rerouted the compiler's parsing process and greatly reduced pageload speed (thanks, @Yamboy1)
- Made the compiler code prettier (@ntrupin)

## 0.1.1 
all by @ntrupin

### Bug Fixes

- Fixed a bug where the Meta Tag couldn't show viewport data
- Removed Output identifiers. Programmers don't like global variables used that way

## 0.1.0

### Compiler Changes

- **-breaking change-** Slashed over 100 lines of code from the compiler to make it more concise (blueprint: @Yamboy1 ; execution: @ntrupin)
- **-breaking change-** Converted the compiler from string pasting to template literals (blueprint: @Yamboy1 ; execution: @ntrupin)

## 0.0.4 
thanks, @Mofiqul

### Compiler Changes

- Added abbr Tag
- Added Button Tag
- Added Input Tag
- Added a Tag
- Added Textarea Tag

### Documentation Changes

- Added abbr Tag to documentation
- Added Button Tag to documentation
- Added Input Tag to documentation
- Added a tag to documentation
- Added Textarea Tag to Documentation

## 0.0.3

### Compiler Changes

- Added Nested and Positive capability to Span Tag (@ntrupin)
- Added img Tag (thanks, @Yamboy1)

### Bug Fixes

- Fixed fatal error in Paragraph Tag (@ntrupin)

### Documentation Changes

- Added Span Tag to documentation (@ntrupin)
- Added img Tag to documentation (thanks, @Yamboy1)

## 0.0.2 
thanks, @Yamboy1

### Compiler Changes

- Changed compiler and gate file paths from definitive to relative

### Documentation Changes

- Fixed documentation

## 0.0.1

### Bug Fixes

- Bug fixes (@ntrupin)

### Compiler Changes

- Added Span Tag (thanks, @jmona789)

## 0.0.0
all by @ntrupin

- Created Compiler
- Created gate
- Created base
- Created README
- Created DOCS
- Created ugly_yellow
- Created CHANGELOG
- Created templates
