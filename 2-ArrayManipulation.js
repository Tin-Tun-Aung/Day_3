    /*
      *
    * using array methods, increase the value of the last item of the array
    * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    */

    const my_first_array = [50,20,11];

    const increaseValueOfLastItem = function (array) {      
      // Get the value of the last item and increase one
      // Remove the last item of the array
      // Add in the newly increased number into array
      pop_value=array.pop()+1; //remove value
      array.push(pop_value);
      return array;
    };

    console.log(increaseValueOfLastItem(my_first_array));