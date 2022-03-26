let interval = setInterval(callback, 1000, 'Parameter 1', 'Parameter 2');

function callback(a, b)
{
 // Your code here
 // Parameters are purely optional.
 alert(a);
 alert(b);
}