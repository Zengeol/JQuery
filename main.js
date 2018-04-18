$('form').submit(function (event) {
    event.preventDefault();
    var params = $(this).serialize();
    console.log(params);
  });