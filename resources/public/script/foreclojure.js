$(document).ready(function() {

    $('#problem-table').dataTable( {
        "iDisplayLength": 25,
        "aaSorting": [[ 3, "desc" ]],
        "aoColumns": [
            null,
            null,
            null,
            null
        ]
    } );


    $('#user-table').dataTable( {
        "iDisplayLength":25,
        "aaSorting": [[ 0, "asc" ]],
        "aoColumns": [
	    null,
            null,
            null
        ]
    } );
});
