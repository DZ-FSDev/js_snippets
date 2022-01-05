/*  Original Licensing Copyright
 * 
 *  qze.js
 *  Copyright (C) 2021  DZ-FSDev
 *  
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

/**
 * Toggles the display of elements whose class matches the specified class.
 * Display of the first toggle is applied to subsequent class members of
 * the document.
 *
 * @param {String} clazz The specified class to find from the Document.
 * @author DZ-FSDev
 */
function toggleDisplayByClass(clazz) {
  var xx = document.getElementsByClassName(clazz);
  var invisible = xx[0].style.display === "none";
  for(let x of xx){
  	if (invisible) {
    	x.style.display = "block";
  	} else {
    	x.style.display = "none";
 	}
  }
}

/**
 * Enables display of elements whose class matches the specified class.
 *
 * @param {String} clazz The specified class to find from the Document.
 * @author DZ-FSDev
 */
function showDisplayByClass(clazz) {
  var xx = document.getElementsByClassName(clazz);
  for(let x of xx){
    x.style.display = "block";
  }
}

/**
 * Disables display of elements whose class matches the specified class.
 *
 * @param {String} clazz The specified class to find from the Document.
 * @author DZ-FSDev
 */
function hideDisplayByClass(clazz) {
  var xx = document.getElementsByClassName(clazz);
  for(let x of xx){
    x.style.display = "none";
  }
}

/**
 * Toggles the visibility of elements whose class matches the specified class.
 * Visibility of the first toggle is applied to subsequent class members of
 * the document.
 *
 * @param {String} clazz The specified class to find from the Document.
 * @author DZ-FSDev
 */
function toggleDisplayByClass(clazz) {
  var xx = document.getElementsByClassName(clazz);
  var invisible = xx[0].style.display === "none";
  for(let x of xx){
  	if (invisible) {
    	x.style.visible = "visible";
  	} else {
    	x.style.visible = "hidden";
 	}
  }
}
