// Attach a button listener to the button
$('.btn').click(function() {
  callAjax();
});

$('img').click(function() {
  window.open($('img').attr('src'), _blank);
});

// Functions
var updatePage = function( resp ) {
  var children = resp.data.children;  
  $('.output').text('');
  
  for (var i = 0; i < children.length; i++) {
    var thumbString = children[i].data.thumbnail;
    var thumbCheck = thumbString.slice(0,4);
    var urlString = children[i].data.url;    
    
    if (thumbCheck == 'http') { 
    var tempDiv = $('<div class="post">' + '<a href="' + urlString + '">' + '<img src="' + thumbString + '"/>' + '</a>').hide();         
      $('.output').append(tempDiv);
    tempDiv.fadeIn();   
    }
  }
};

var logError = function(req, status, err) {
  console.log('req: ' + req + '  status: ' + status + '  err: ' + err);
  $('.output').text('Error.');
};

var callAjax = function() { 
  var queryURL = 'https://crossorigin.me/https://www.reddit.com/r/' + $('.name-input').val() + '.json?limit=150';
  
  $.ajax({
  type: 'GET',
    beforeSend: function() { 
      $('.output').fadeOut().text('Loading . . . ').fadeIn();
       },
    url: queryURL,
  success: updatePage,
    error: logError
  });
};