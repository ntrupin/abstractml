## Docs

### Usage (JavaScript)

It's easy to include any notmarkdown library in your project. Simply include the following script tag with your choice of url at *the bottom* of the document *before* your scripts.

You must have an element with the id:
- "nmd-in". This is where the parser takes text from.
- "nmd-out". This is where the parser will output your text.

``<script src="url"></script>``

And, here are links to all of our different libraries:

- https://raw.githubusercontent.com/ntrupin/notmarkdown/master/flavors/minty/mintynmd.js

- https://raw.githubusercontent.com/ntrupin/notmarkdown/master/flavors/easy/easynmd.js

- https://raw.githubusercontent.com/ntrupin/notmarkdown/master/flavors/CAPS/capsnmd.js

- https://raw.githubusercontent.com/ntrupin/notmarkdown/master/flavors/standard/nmd.js

### Syntax

#### Italics

- Standard: }/{text}/{ 

- Minty: italics/{text}/italics

- Easy: it/{text}/it

#### Bold

- Standard: ::/{text}/:: 

- Minty: bold/{text}/bold

- Easy: bo/{text}/bo

#### Underline

- Standard: _/{text}/_ 

- Minty: underline/{text}/underline

- Easy: ul/{text}/ul

#### Hypertext

- Standard: @/{url}-{text}/@

- Minty: hyperlink/{url}-{text}/hyperlink

- Easy: hl/{url}-{text}/hl

#### Colored

- Standard: ‘/{text}/‘

- Minty: colored/{text}/colored

- Easy: col/{text}/col

#### Linebreak

- Standard: /v/

- Minty: /linebreak/

- Easy: /v/

#### Partbreak

- Standard: /_/

- Minty: Unsupported

- Easy: Unsupported

#### RandomNum

- Standard: ;;

- Minty: /randomnumber/

- Easy : /rn/

#### Image

- Standard: •/{url}/w/{optional_width_px}/h/{optional_height_px}/•

- Minty: image/{url}/width/{optional_width_px}/height/{optional_height_px}/image

- Easy: img/{url}/w/{optional_width_px}/h/{optional_height_px}/img

#### Headings

- Standard: 1/{text}/1 ...(2,3,4,5)... 6/{text}/6

- Minty: header1/{text}/header1 ...(2)... header3/{text}/header3

- Easy: h1/{text}/h1 ...(2)... h3/{text}/h3

#### iframe

- Standard: |:/{url}/w/{optional_width_px}/h/{optional_height_px}/:|

- Minty: Unsupported

- Easy: Unsupported

#### Cursive

- Standard: ~/{text}/~

- Minty: cursive/{text}/cursive

- Easy: Unsupported
