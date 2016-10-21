// Load call links
$(window).load(function(){
  call();
});

// Get SNEP URL dialer data
var call = function(){
  $.ajax({
    url: 'index.php?entryPoint=Snep',
    success: function(data){
      linked(data);
    },
    error: function(request, status, err){
      errorFeedback(request, status, err);
    }
  });
};

// FUNCTIONS

/**
  * Creates clickable link
  */
var linked = function(param) {
  $(".phone").each(function(){
    var phone = $(this).text().trim();
    var click2call = 'http://'+param.server+':3000/call?from='+param.ramal+'&to='+phone;
    $(this).html('<a href="#">'+phone+'</a>');
    $(this).click(function(e){
      e.preventDefault();
      callVoip(click2call);
    });
  });
};

/**
  * Call SNEP Voip service via AJAX
  */
var callVoip = function(dial) {
  $.ajax({
    url: dial,
    success: function(data){
      console.log('data:');
      console.log(data);
    },
    error: function(request, status, err){
      errorFeedback(request, status, err);
    }
  });

};
/**
  * Better AJAX error debug callback
  */
var errorFeedback = function(request, status, err){
  console.log('request:');
  console.log(request);
  console.log('status:');
  console.log(status);
  console.log('err:');
  console.log(err);
};
