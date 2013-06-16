$('document').ready(function() {

  $('#submit').on('click', function(e){
    e.preventDefault();
    $.ajax({
      url: '/notes/create',
      method: 'post',
      data: $('form#new_note').serialize()
    }).done(function(data){
      if (data[0] === 'r') {
        window.location.replace("/");
      }
      else
      {
        var errors = JSON.parse(data);
        var i=0, error;

        while(error = errors[i++]){
          if (error[0] === 'T') {
            $("#title").attr("placeholder", error);
          }
          else if (error[0] === 'C') {
            $("#content").attr("placeholder", error);
          }
        }
      }
    });
  });

  $('#new_note').on('click', function(e){
    e.preventDefault();
    $("#title").attr("placeholder", "Note Title");
    $("#content").attr("placeholder", "Note Content");
    $('#note_form').delay(200).slideDown(500);
  });

  $('#delete').on('click', function(e){
    var response = window.confirm("Delete this note?");
    if (response === false) {
      e.preventDefault();
    } 

  });



});
