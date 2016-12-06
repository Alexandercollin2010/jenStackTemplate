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

  // test get function
  var getData = function(){
    console.log( 'in getData' );
    $.ajax({
      type: 'GET',
      url: '/testGet',
      success: function( response ){
        console.log( 'back from get call:', response );
        $('#whateves').append(response);
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
        $('#whateves').append(response.events[0]);
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

}); //end doc ready
