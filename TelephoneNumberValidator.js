// Return true if the passed string looks like a valid US phone number.

// The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555

// If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

function telephoneCheck(str) {
  let telephoneChecker = /(^[1]* *\d{3}[- ]*\d{3}[- ]*\d{4}$)|(^[1]* *[(]\d{3}[)][ ]*\d{3}[- ]*\d{4}$)/;
  return telephoneChecker.test(str)? true: false;
}

telephoneCheck("1 (555) 555-5555");
//returns true
telephoneCheck("27576227382");
//returns false
telephoneCheck("2 (757) 622-7382");
//returns false
telephoneCheck("1 (555) 555-5555");
//returns true
telephoneCheck("5555555555");
//returns true