$('document').ready(function() {

  $('#new_note').on('click', function(e){
    e.preventDefault();
    $('#note_form').delay(200).slideDown(500);
  });

  $('#eventsubmit').on('click', function(e){
    console.log("eventsubmit");
    e.preventDefault();
    $.ajax({
      url: '/events/create',
      method: 'post',
      dataType: 'json',
      data: $('form').serialize()
    }).done(function(data){
      console.log("eventsubmit-return");
      if (data[0] === 'r') {
        window.location.replace("/");
      }
      else
      {
        console.log(data[0]);
      }
    });
  });

});
