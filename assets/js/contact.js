
$("#submit-form").submit((e)=>{
    e.preventDefault()
    const userNameInput = $("#name-field").val();
    if(userNameInput.length<2){
        alert("Name must contain atleast 2 characters");
        return;
    }
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbzANYRkGjSp0zmc9jocch65xLHA6XoZhxJdhuKRHCI_vt7H1QkP_yAH_8hcKNVMto3q/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})

// document.addEventListener('DOMContentLoaded',function(){
//     const form = document.getElementById("submit-form")
//     const userNameInput = document.getElementById("name-field")
//     const errorMessage=document.getElementById("error-message")
//     form.addEventListener('submit', function(event){
//         errorMessage.textContent=""
//         if(userNameInput.value.length < 2){
//             errorMessage.textContent=" "
//             event.preventDefault()
//         }
//     })
// })

