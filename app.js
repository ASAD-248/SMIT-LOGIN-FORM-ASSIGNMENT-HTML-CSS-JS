






var country_select = document.getElementById("select_country");
var city_select = document.getElementById("select_city");

var course_select = document.getElementById("course");
var skills_select = document.getElementById("computer_skill");

var full_Name = document.getElementById("fullName");
var father_Name = document.getElementById("fatherName");

var email_inp = document.getElementById("email");
var phone_inp = document.getElementById("phon_nmbr");

var DateOfBirth_select = document.getElementById("date");
var gender_select = document.getElementById("gender");

var address_inp = document.getElementById("address");
var last_qualif = document.getElementById("qualification");
var laptope_select = document.getElementById("laptope");



function submit_btn(){

var country = country_select.value ;
document.write(`<br> <b>Country name : </b> ${country}<br>`)

var city = city_select.value ;
document.write(`<b>City name : </b> ${city}<br>`)

var course = course_select.value ;
document.write(`<b> Course name : </b> ${course}<br>`);

var computer = skills_select.value ;
document.write(`<b>Computer proficiency name : </b> ${computer}<br>`)

var fullName = full_Name.value
document.write( `<b> Full name : </b>${fullName}<br>`)

var fatherName = father_Name.value
document.write(`<b>Father name : </b> ${fatherName}<br>`)

var user_email = email_inp.value;
document.write(`<b>User Email : </b>${user_email}<br>`)

var user_number = phone_inp.value;
document.write(`<b>User Contact : </b> ${user_number}<br> `)

var dob = DateOfBirth_select.value;
document.write(`<b>Date Of Birth : </b> ${dob}<br> `)

var gender= gender_select.value;
document.write(`<b>Gender : </b> ${gender}<br> `)

var address = address_inp.value;
document.write(`<b>User address : </b> ${address}<br> `)

var last_quali = last_qualif.value;
document.write(`<b>User last qualification : </b> ${last_quali}<br> `)

var laptop = laptope_select.value;
document.write(`<b>You hav a laptope : </b> ${laptop}<br> `)

}

