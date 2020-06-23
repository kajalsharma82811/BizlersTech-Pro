function openNav() {
  document.getElementById("mySidebar").style.width = "80px";
  document.getElementById("main").style.marginLeft = "80px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

const name = document.querySelector('#validationCustomUsername');
const fname = document.querySelector('#validationCustom01');
const lname = document.querySelector('#validationCustom02');
const button = document.querySelector(".add_user");
const role_option = document.querySelector("#role");
const table = document.querySelector(".table_body");
const myform = document.querySelector(".needs-validation");
const form_pic = document.querySelector(".form_pic");
const email = document.querySelector("#validationCustomemail");
const forms = document.querySelector('.needs-validation');
const cancelButton = document.querySelector(".cancel");
const checkbox = document.querySelector(".form-check-input")
let listItem = [];


'use strict';
  window.addEventListener('load', function() {
    
    var forms = document.getElementsByClassName('needs-validation');
    var add_user = document.querySelector(".add_user")
   
    var validation = Array.prototype.filter.call(forms, function(form) {
      add_user.addEventListener('click', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);

var template =''
var template1=''


button.addEventListener("click",function(e){
	e.preventDefault()
   
    
    

            if(name.value==""||fname.value==""||lname.value==""||email.value==""||role_option.value=="Role"||checkbox.checked==false||inpFile.value==""){
            	alert('Enter valid Details')



        	
    }else{

    	// It will create json in console
    	
    
    	template +=`<tr>
        <td>${name.value}</td>
        <td>${role_option.value}</td>
        <td><i class="fas fa-pencil-alt"></i></td>
      </tr>`
        console.log(template)

        table.innerHTML = template
       
        form_pic.reset()
      
        preview_text.style.display = "block"
        preview.style.display = 'none'

       var showSubmissionScreen = setTimeout(function() {
       	    var submission = document.querySelector(".submission")
       	    var main1 = document.querySelector(".main1")
       	    var logo_sub = document.querySelector("#logo_sub")
       	    submission.style.display = 'flex'
       	    main1.style.display = 'none'
       	    logo_sub.style.display = 'flex'

       }, 1000);

       var showRealScreen = setTimeout(function() {
       	    var submission = document.querySelector(".submission")
       	    var main1 = document.querySelector(".main1")
       	    var logo_sub = document.querySelector("#logo_sub")
       	    submission.style.display = 'none'
       	    main1.style.display = 'block'
       	    logo_sub.style.display = 'none'
       	    

       }, 4000);

       
    }

})


cancelButton.addEventListener("click",function(){
	location.reload()
})

let http = new XMLHttpRequest();
let url = "http://localhost:3000/employees"
let method = "GET"
http.open(method,url)
http.onreadystatechange = function(){
if(http.readyState === XMLHttpRequest.DONE && http.status ===200){
    console.log(JSON.parse(http.response))
    for (var i = 0; i < 4; i++) {
      template1 +=`<tr>
        <td>${JSON.parse(http.response)[i].user_name}</td>
        <td>${JSON.parse(http.response)[i].employee_role}</td>
        <td><i class="fas fa-pencil-alt"></i></td>
      </tr>`
        console.log(template1)

        table.innerHTML = template1;
       
    
    
    
    }
    
    
    
        
  }else if(http.readyState === XMLHttpRequest.DONE && http.status!==200){
    console.log('something went wrong')
  }
    
}
http.send()


