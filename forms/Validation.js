/**
 * Validates a field within a form for emptiness.
 * Returns true if predicate met, false otehrwise.
 *
 * @param {string} form - The form to perform the validation on.
 * @param {string} fieldName - The field in the form to perform the validation on.
 * @return {boolean} True if predicate met, false otehrwise.
 * @author DZ-FSDev
 */
function validateFormFieldNotEmpty(form, fieldName) {
  let x = document.forms[form][fieldName].value;
  if (x == "") {
    alert(fieldName + " must be filled out!");
    return false;
  }
  return true;
}
