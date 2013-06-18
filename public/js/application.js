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
        // There has to be a cleaner way to do this....
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

  //  TBD: re-implement using event delegation and $(this).remove logic.
  $('.note_delete').on('click', function(e){
    var response = window.confirm("Delete this note?");
    if (response === false) {
      e.preventDefault();
    }

  });

  // TBD: re-implement using event delegation
  $('.note_update').on('click', function(e){
    e.preventDefault();
    // alert("Update not yet implemented.");
    var id = $(this).closest('div.notediv').attr('id');
    console.log(id);
    $.ajax({
      url: "/notes/"+id ,
      method: 'get'
    }).done(function(data){
      var note = JSON.parse(data);
      console.log(note);
      $("#up_title").val(note.note.title);
      $("#up_content").val(note.note.content);
      $('input#upd_id').attr('value', id);
      $('#update_form').delay(200).slideDown(500);
    });
  });

// this doesn't work because the $('#submit') is already bound.
// changing the name doesn't seem to change the binding.
  $('#update').on('click', function(e){
    console.log('update');
      e.preventDefault();
    $.ajax({
      url: '/notes',
      method: 'put',
      data: $('form#update_note').serialize()
    }).done(function(){
      window.location.replace("/");
    });
  });
  // Update pseudocode
  // fetch note from server using ajax
  // change button on New Note form to an update button using
  // $('#submit').attr({id: "update"}).text("Update")
  // Load note.title and note.content into text fields using
  // $("#title").val(note.title) and $("#content").val(note.content)
  // User edits and clicks "Update"
  // Call ajax logic similar to $('#submit') to update the
  // record



});
