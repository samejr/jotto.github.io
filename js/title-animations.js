$(document).ready(function() {

    // initialize the plugin, pass in the class selector for the sections of content (blocks)
    var scrollorama = $.scrollorama({ blocks:'.scrollblock' });

    // assign function to add behavior for onBlockChange event
    scrollorama.onBlockChange(function() {
        var i = scrollorama.blockIndex;
        $('#console')
            .css('display','block')
            .text('onBlockChange | blockIndex:'+i+' | current block: '+scrollorama.settings.blocks.eq(i).attr('id'));
    });

    // animate fade-in
    scrollorama.animate('#fade-in', {
        delay: 300,
        duration: 500,
        property: 'opacity',
        end: 0
    });

    // animate the parallax
    scrollorama.animate('.parallax', {
        delay: 1000,
        duration: 5000,
        property: 'top',
        start: 200,
        end: -500
    });

    $(function(){
        $('#fade-in').delay(1000);
        $('#fade-in').hide().fadeIn(3000);
    });

});