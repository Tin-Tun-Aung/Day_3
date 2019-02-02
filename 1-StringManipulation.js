
    /*
      *
    * Using string methods, convert "mypadcmyanmar" to "PADC Myanmar"
    * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
    */

    const text = "mypadcmyanmar";

    padcFormatter = function (str) {
      // Right now, the variable string === "mypadcmyanmar"
      // Manipulate string to make it equal to "PADC Myanmar"
      // Use Concat() and slice()
      // Do not use string.replace();
      new_string_header="PADC M";

      let new=str.slice(7,12);
      console.log(new_string_header.concat('',new));



      // Your code goes here!      
      return str.slice(0,7);
      // string.slice(8);

    };

    console.log(padcFormatter(text));