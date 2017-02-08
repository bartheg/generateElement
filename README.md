# generateElement
generateElement is a function for easy creating element nodes in pure JavaScript

## Syntax

```javascript
newElement = generateElement(tagName[, options])
```

- _tagname_ is for example "div" or "p".
- _options_ is optional object that contains optional atributes and values, for example `{class: "container container--red", id: "main_container"}`.
- `textNode` is a special option key that create child textNode for creating element with text given as a value.

## Example

`generateElement("p", {id:"container", class: "main", textNode: "hello there"})`

will create `<p id="container" class="main">hello there</p>`

## Test file

The repository contains an optional file with my silly tests.
