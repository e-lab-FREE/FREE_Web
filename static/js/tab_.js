
/* To have a tab visible on page load, add the class active to both the initializing menu and the tab.
Please see semantic ui webpage*/

// tab
 $('.menu .item').tab();  


 // Initial displacement
 $('#range1').range({
    min: 2,
    max: 20,
    start: 5,
    input: '#DeltaX'
  });

  // Nnumber of samples
 $('#range2').range({
    min: 1,
    max: 400,
    start: 33,
    input: '#Samples'
  });



  $(document).ready(function(){
    $('.url.video .ui.embed').embed();

 });

    