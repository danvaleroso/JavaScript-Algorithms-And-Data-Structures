//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  let regex = /[&<>"'']/;
  let htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  }
   return str.split("").map(item => regex.test(item)? htmlEntities[item] : item).join("");
}

convertHTML("Dolce & Gabbana");
//return "Dolce &amp; Gabbana"
convertHTML('Stuff in "quotation marks"');
//return "Stuff in &quot;quotation marks&quot;"
convertHTML("Hamburgers < Pizza < Tacos");
//return "Hamburgers &lt; Pizza &lt; Tacos"