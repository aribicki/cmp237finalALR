load('myarray.js'); 
var myarray = JSON.parse(MYARRAY_File);       
print(JSON.stringify(myarray);
function filter(array, test) {
  var passed = []
  for (var i = 0; i < array.length; i++) {           //standard filter code
    if (test(array[i])) {                           
     passed.push(array[i]);
     }
     }
     }
     return passed;
     }
     
      print(JSON.stringify(filter(myarray, function(belowfive) {
       return number.randomnumber < 5;                     // returns any that are less then 5         
     })));
