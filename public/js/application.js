$('document').ready(function() {

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
