delegate-dom.js
========

Allows delegated dom events

#### Delegated DOM events  ####

The aim of the project is to create a lightweight library to provide the equivalent of [JQuery's ```.on()```](http://api.jquery.com/on/), ```.delegate()``` or ```live()``` methods, but in a natural way that works with the dom and in vanilla js with no dependencies. 

The function ```addDelegatedEventListener``` is added to the ```Element```'s prototype:

```javascript
Element.prototype.addDelegatedEventListener( type, selector, listener [, useCapture] )
```

Which means you can use it on regular DOM Elements as you would ```addEventListener```:

```javascript
parentElement.addDelegatedEventListener( type, selector, listener [, useCapture] );
```

You attach an event listener to a parent object with ```element.addDelegatedEventListener``` and provide a child selector (same as css selectors) to trigger the ```listener``` function when the event is triggered for a matching element or any of its children.

### Size ###

623 bytes minified, 356 bytes minified+gzipped

### Usage ###

Download the ```delegate-dom.min.js``` and include it in your html.

```html
<script src="delegate-dom.min.js"></script>
```

This code attaches a delegated handler to the outer ```div``` that triggers when any of the child ```li``` are clicked and outputs their ```innerHTML``` to the console.

The click event will trigger for all ```li``` children that exist now, or are added in the future - or if any of their child elements are clicked (e.g. if they contained an ```img``` and that was clicked).

```html
<div id="lists">

	<ul>
		<li>List 1, Item 1</li>
		<li>List 1, Item 2</li>
		<li>List 1, Item 3</li>
		<li>List 1, Item 4</li>
		<li>List 1, Item 5</li>
	</ul>

	<ul>
		<li>List 2, Item 1</li>
		<li>List 2, Item 2</li>
		<li>List 2, Item 3</li>
		<li>List 2, Item 4</li>
		<li>List 2, Item 5</li>
	</ul>

</div>

<script>

	document.getElementById( "lists" ).addDelegatedEventListener( "click", "li", function( evt ) {
	
		console.log( 'Clicked: ' + this.innerHTML );
		
	}, false );

</script>
```

### Support ###

Included polyfill for matching: IE 8 (selector can only be css 2.1 selectors), Firefox 3, Safari 3.1+, iOS Safari 3.2+, Android Browser 2.1+, Opera Mini

Native matching: IE9+, Edge, Chrome 4+, Firefox 3.6+, Safari 5+, iOS Safari 4.1+, Android Browser 2.2+, Chrome for Android, Firefox for Android