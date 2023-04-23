$(document).ready(function() {
    $('#call-button').click(function() {
        // Get phone number and query from input fields
        var phoneNumber = $('#phone-number').val();
        var query = $('#query').val();
        
        // Send AJAX request to Flask app
        $.ajax({
            type: 'POST',
            url: '/answer',
            contentType: 'application/json',
            data: JSON.stringify({phone_number: phoneNumber, query: query}),
            success: function(response) {
                // Update UI with answer
                $('#answer').text(response.answer);
            },
            error: function(xhr, status, error) {
                // Handle error
                console.log('Error:', error);
            }
        });
    });
});
