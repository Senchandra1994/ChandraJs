

function insert(num)
{
   document.getElementById('output_value').innerText += num;

}

function equal()
{
    var calculation = document.getElementById('output_value').innerText;
    var result = eval(calculation);
    document.getElementById('output_value').innerText = result;
}
function clearAll()
{
    document.getElementById('output_value').innerText = " ";
}
function backspace()
{
    var back = document.getElementById('output_value').innerText;
    document.getElementById('output_value').innerText = back.substring(0,back.length-1);
}