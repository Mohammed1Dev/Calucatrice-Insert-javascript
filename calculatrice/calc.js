
var input1 = document.getElementById('nb1');
var input2 = document.getElementById('nb2');

var res;

      document.getElementById('plus').addEventListener('click', function()
          {
               res = parseInt(input1.value) + parseInt(input2.value);
               document.getElementById('result').innerHTML = res;
          });
      document.getElementById('mult').addEventListener('click', function()
          {
               res = parseInt(input1.value) * parseInt(input2.value);
               document.getElementById('result').innerHTML = res;
          });
      document.getElementById('divi').addEventListener('click', function()
          {
               res = parseInt(input1.value) / parseInt(input2.value);
               document.getElementById('result').innerHTML = res;
          });
      document.getElementById('subt').addEventListener('click', function()
          {
               res = parseInt(input1.value) - parseInt(input2.value);
               document.getElementById('result').innerHTML = res;
          });
