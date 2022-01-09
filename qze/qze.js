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
	for (let x of xx) {
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
	for (let x of xx) {
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
	for (let x of xx) {
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
function toggleVisibilityByClass(clazz) {
	var xx = document.getElementsByClassName(clazz);
	var invisible = xx[0].style.visibility === "hidden";
	for (let x of xx) {
		if (invisible) {
			x.style.visibility = "visible";
		} else {
			x.style.visibility = "hidden";
		}
	}
}

/**
 * Increments all elements' text matching the specified class by a specified
 * amount. If the element contains a non-number, it will be set to the
 * specified increment.
 *
 * @param {String} clazz The specified class to find from the Document.
 * @author DZ-FSDev
 */
function incrementTextByClass(clazz, amount) {
	var xx = document.getElementsByClassName(clazz);
	for (let x of xx) {
		x.textContent = (parseInt(x.textContent) || 0) + amount;
	}
}

/**
 * Replaces a specified class for another class provided the element is a
 * member of a specified class.
 * 
 * @param {String} clazz The specified class that elements must be a part of.
 * @param {String} klazz The specified class to switch to.
 * @param {String} klass The specified class to switch out.
 * @author DZ-FSDev
 */
function swapClassIfMemberOf(clazz, klazz, klass){
	var xx = document.getElementsByClassName(clazz);
	for(let x of xx){
		x.classList.replace(klass, klazz);
	}
}

/**
 * Adds class membership to elements which belong to a specified class.
 * 
 * @param {String} clazz The specified class that elements must be a part of.
 * @param {String} klazz The specified class to append.
 * @author DZ-FSDev
 */
function addClassIfMemberOf(clazz, klazz){
	var xx = document.getElementsByClassName(clazz);
	for(let x of xx){
		x.classList.add(klazz);
	}
}

/**
 * Places the count of elements belonging to a specified class into any element
 * who is a member of a specified class.
 *
 * @param {String} clazz The specified class members to display the count.
 * @param {String} klazz The specified class members to be counted.
 * @author DZ-FSDev
 */
function placeClassCountIn(clazz, klazz){
	var xx = document.getElementsByClassName(clazz);
	var yy = document.getElementsByClassName(klazz);
	for(let x of xx){
		x.textContent = yy.length;
	}
}
