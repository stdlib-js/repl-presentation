/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var escapeCode = require( './ansi_escape_code.js' );
var STYLES = require( './styles.js' );


// MAIN //

/**
* Returns the ANSI escape code corresponding to a provided style.
*
* @private
* @param {string} style - style
* @returns {(string|null)} escape code
*/
function style2ansi( style ) {
	if ( hasOwnProp( STYLES, style ) ) {
		return escapeCode( STYLES[ style ] );
	}
	return null;
}


// EXPORTS //

module.exports = style2ansi;
