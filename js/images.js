docReady( function() {
  var container = document.querySelector('.packery');
  var pckry = new Packery( container, {
    itemSelector: '.item',
    columnWidth: 150,
    gutter: 20,
    // disable resize
    isResizeBound: false
  });

  var gutter = pckry.options.gutter || 0;
  var columnWidth = pckry.options.columnWidth + gutter;

  function onResize() {
    var outsideSize = getSize( container.parentNode ).innerWidth;
    var cols = Math.floor( outsideSize / ( columnWidth ) );
    // set container width to columns
    container.style.width = ( cols * columnWidth - gutter ) +'px';
    // manually trigger layout
    pckry.layout();
  }

  // debounce resize event
  var resizeTimeout;
  
  eventie.bind( window, 'resize', function() {
    if ( resizeTimeout ) {
      clearTimeout( resizeTimeout );
    }
    resizeTimeout = setTimeout( onResize, 100 );
  });
  // initial trigger 
  onResize();
  
});
