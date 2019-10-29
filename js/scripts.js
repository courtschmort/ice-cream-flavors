$(document).ready(function() {
  var flavors = ['vanilla', 'chocolate', 'strawberry', 'banaba'];

  for (var i = 0; i < flavors.length; i += 1) {
    alert('I love ' + flavors[i] + '.')
  }
/*  flavors.forEach(function(flavor) {
    alert('I love ' + flavor + '.')
  }); */
});
