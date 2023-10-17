const users = [] ;
 if(!localStorage.getItem('users')){
    localStorage.setItem('users', JSON.stringify(users))
    
 }

$('.place').on('input',function(){
    $('.place').each(function(){
        if($('.place').val().length >= 2 && $('#check').is(':checked')){
            $('.btn').attr('disabled',false)
        } else{
            $('.btn').attr('disabled',true)
        }
    })
});
$('.btn').click(function(event){
event.preventDefault();
let newUser = {
    name:$('.#name').val(),
    password:('#password').val(),
    items: []
}

users.push(newUser)
localStorage.setItem('users', JSON.stringify(users))

});









