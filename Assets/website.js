$(document).ready(() => {

    //load files

    $('.is-file-embed').each(function() {
        var me = $(this);
        var src = me.attr('selected-src');
        src = window.location.origin + '/' + src;
        var html = [];
        html.push('HI');
        html.push('<iframe style="width: 900px; height: 900px;" src="https://docs.google.com/gview?url=' + src + '&embedded=true" frameborder="0"></iframe>');
        html.push('bye');

        me.html(html.join('\n'));
        console.log(src);
    });

});