$('.place').on('input',function(){
    if (
        $('name').val().length >= 2 &&
        $('#password').val().length >= 2&&
        $('#check').is(':checked') 
    ) {
        $('.btn').attr('disabled',false);
    } else {
        ('btn').attr('disabled',true)
    }
    });

    $('#check').click(function(){
        
        if (
            $('name').val().length >= 2 &&
            $('#password').val().length >= 2&&
            $('#check').is(':checked') 
        ) {
            $('.btn').attr('disabled',false);
        } else {
            ('btn').attr('disabled',true)
        }
        });




