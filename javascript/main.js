$(document).ready(function() {
  $.ajax({
    url: "https://andreihelo-restful-api.herokuapp.com/students",
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      $.each(data, function(index, item) {
        $("table:first tbody").append(
          "<tr><td>" + item.id + "</td><td>" + item.registration_number +
          "</td><td>" + item.name + "</td><td>" + item.last_name +
          "</td><td>" + item.status + "</td></tr>"
        );
      });
    }
  });

  $('#buscar').click(function(){
    var id = $('#id').val();
    $.ajax({
      url: "https://andreihelo-restful-api.herokuapp.com/students/" + id,
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        $("table:last tbody").append(
          "<tr><td>" + data.id + "</td><td>" + data.registration_number +
          "</td><td>" + data.name + "</td><td>" + data.last_name +
          "</td><td>" + data.status + "</td></tr>"
        );
      }
    });
  });
  $('#agregar').click(function(){

    var reg_numb = $('#txtMat').val();
    var nomb = $('#txtNomb').val();
    var ape = $('#txtApe').val();
    var stts = $('#txtStatus').val();

    $.ajax({
      url: "https://andreihelo-restful-api.herokuapp.com/students/",
      type: 'POST',
      data: {registration_number: reg_numb, name: nomb, last_name: ape, status: stts},
      dataType: 'json',
    })
      .done(function(data) {
        alert("Alumno registrado con Exito!");
        $("table:first tbody").append(
          "<tr><td>" + data.id +"</td><td>"+ data.registration_number +
          "</td><td>" + data.name + "</td><td>" + data.last_name +
          "</td><td>" + data.status + "</td></tr>"
        );
      })
      .fail(function(data,status) {
        alert( "error");
      })

  });
});
