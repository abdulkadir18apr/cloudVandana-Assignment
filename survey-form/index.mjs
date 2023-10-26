import "./styles.css";
const modal=document.getElementById("modal");
const closeBtn
=document.getElementById("closeBtn");

document.getElementById("surveyForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the values from the form fields
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const dob = document.getElementById("dob").value;
  const country = document.getElementById("country").value;

  const genderInputs = document.getElementsByName("gender");
  const gender = Array.from(genderInputs).filter(input => input.checked).map(input => input.value);

  const profession = document.getElementById("profession").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;

  // You can now use these values for further processing (e.g., sending to a server)
  modal.style.display="block";

  modal.innerHTML+=`
      <p>FirstName:${firstName}</p>
      <p>lastName:${lastName}</p>
      <p>DOB:${dob}</p>
      <p>Country:${country}</p>
      <p>Gender:${gender[0]}</p>
      <p>Profession:${profession}</p>
      <p>Email:${email}</p>
      <p>Mobile Number:${mobile}</p> 
  `
})

closeBtn.addEventListener('click',()=>{
  modal.style.display="none";
})