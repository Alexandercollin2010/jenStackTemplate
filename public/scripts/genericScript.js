console.log( 'genero sourced' );

$( document ).ready( function(){
  console.log( 'JQ' );


  // function getAthlete (){
  //   var athleteName = $('#athleteName').val() ;
  //   var eventName = $('#eventName').val();
  //   var award = $('#award').val();
  //
  //   var athleteObject = {
  //     athleteName: athleteName,
  //     eventName: eventName,
  //     award: award
  //   };
  //
  // }
var diffArray = [];

  // test get function
  var getData = function(){
    console.log( 'in getData' );
    $.ajax({
      type: 'GET',
      url: '/testGet',
      success: function( response ){
        console.log( 'back from get call:', response );
        $('#whateves').html(''); //empty html before appending
        for (var i = 0; i < response.length; i++) {
        $('#whateves').append('<p>' + '<strong>Awards: </strong>' + response[i].award + '</p>');

      }


      },
      error: function(){
        console.log( 'error with ajax call...');
      }

    });
  }; // end getData


  // test get function
  var postData = function(){
    console.log( 'in postData' );
    var athleteName = $('#athleteName').val() ;
    var eventName = $('#eventName').val();
    var award = $('#award').val();
    // assemble object to send
    var objectToSend={
      athleteName: athleteName,
      eventName: eventName,
      award: award
    }; // end object to send
    $.ajax({
      type: 'POST',
      url: '/testPost',
      data: objectToSend,
      success: function( response ){
        console.log( 'back from post call:', response );
      },
      error: function(){
        console.log( 'error with ajax call...');
      }
    });


  }; // end getData

  /// - buttons to test - ///
  $( '#testGetButton' ).on( 'click', function(){
    console.log( 'in testGetButton on click' );
    getData();

  }); // end testGetButton
  $( '#testPostButton' ).on( 'click', function(){
    console.log( 'in testPostButton on click' );
    postData();

  }); // end testGetButton

  $('#sort').on('click', function(){
    diffArray.sort();
  });


}); //end doc ready
