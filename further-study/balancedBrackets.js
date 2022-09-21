"use strict";

// base case: if out of order, return false
// progress: move inwards from both ends
/** balancedBrackets: find if brackets are balanced,
 *  returns true or false */

function balancedBrackets(str, i = 0, j = str.length - 1) {
  if (i >= j || str === "") return true;

  const brackets = {
    "[": "]",
    "{": "}",
    "(": ")"
  };

  if (!Object.keys(brackets).includes(str[i])) balancedBrackets(str, i + 1, j);

  if (!Object.values(brackets).includes(str[j])) balancedBrackets(str, i, j - 1);

  if (brackets[str[i]] !== str[j]) return false;

  return balancedBrackets(str, i + 1, j - 1);

}

module.exports = { balancedBrackets };
