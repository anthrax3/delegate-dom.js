/**
 * delegate-dom.js
 * @author benaadams / https://twitter.com/ben_a_adams
 */

/* polyfill for Element.prototype.matches */

if ( !Element.prototype.matches ) {

	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector;

	if ( !Element.prototype.matches ) {

		Element.prototype.matches = function matches( selector ) {

			var element = this;
			var matches = ( element.document || element.ownerDocument ).querySelectorAll( selector );
			var i = 0;

			while ( matches[i] && matches[i] !== element ) {

				i++;

			}

			return matches[i] ? true : false;
		}
	}
}

/* addDelegatedEventListener */

Element.prototype.addDelegatedEventListener = function addDelegatedEventListener( type, selector, listener, useCapture, wantsUntrusted ) {

	this.addEventListener( type, function ( evt ) {

		var element = evt.target;

		do {

			if ( !element.matches( selector ) ) continue;

			listener.apply( element, arguments );

			return;

		} while ( ( element = element.parentNode ) );

	}, useCapture, wantsUntrusted );

}