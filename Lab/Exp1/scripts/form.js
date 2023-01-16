var form = document.getElementById('form1');

form.addEventListener('submit',function(event){
  event.preventDefault();
  let form_name = document.getElementById('name_in').value;
  console.log(form_name);
  let form_phone = document.getElementById('phone_in').value;
  console.log(form_phone);
  let form_email = document.getElementById('email_in').value;
  console.log(form_email);
  let form_salary = document.getElementById('salary_in').value;
  console.log(form_salary);
});

function details_display(){
  alert('You have submitted the form! Check details in the console of the inspector')
}
var submit = document.getElementById('form_submit')

submit.addEventListener('click', details_display);
