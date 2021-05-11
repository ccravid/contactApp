// Js code
//Variables
var userId = 1;

// Add Contact

function AddContact() {
  // Values from input
  let userName = document.getElementById("name").value;
  let userNumber = document.getElementById("mobile").value;
  let userEmail = document.getElementById("email").value;
  // Adding new contact to the 
  if(userName !='' || userNumber!='' || userEmail!=''){
    contactsList.push({
    name: userName,
    mobile: userNumber,
    email: userEmail,
  });
   // Adding  new contact to the contact Summary
  const tBodyId = document.querySelector("tbody");
  tBodyId.innerHTML += `  <tr>
   <td>${contactsList[userId].name}</td>
   <td>${contactsList[userId].mobile}</td> 
   <td>${contactsList[userId].email}</td>
 </tr>`;

  userId += 1;

  // Clear input
  document.getElementById("name").value = "";
  document.getElementById("mobile").value = "";
  document.getElementById("email").value = "";

  data = contactsList
  } else{
    alert('INSERT VALUE!');
  }
}
//Sort Contact
var numberOfClicks = 0;
function sortContacts() {
  numberOfClicks += 1;
  if (numberOfClicks === 1) {
    contactsList.sort((a, b) => {
      let nameA = a.name.toLowerCase();
      let nameB = b.name.toLowerCase();
      if (nameA > nameB) {
        return 1;
      }
      if (nameA < nameB) {
        return -1;
      } else {
        return 0;
      }
    });
  }
  if (numberOfClicks === 2) {
    contactsList.reverse((a, b) => {
      let nameA = a.name.toLowerCase();
      let nameB = b.name.toLowerCase();
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      } else {
        return 0;
      }
    });
  }
  if (numberOfClicks > 2) {
    return (numberOfClicks = 1);
  }

  const tBodyId = document.querySelector("tbody");
  tBodyId.innerText = "";
  contactsList.map((contact) => {
    return (tBodyId.innerHTML += `<tr>
        <td>${contact.name}</td>
        <td>${contact.mobile}</td>
        <td>${contact.email}</td>
      </tr>`);
  });
}

//Filter Contact

function findContact(e) {
  const userMobile = e.value;

  document.getElementById("noResult").style.display = "none";
  const tBodyId = document.querySelector("tbody");

  //  when user insert a number
  if (userMobile != "") {
    const filteredContact = contactsList.filter((contact) =>
      contact.mobile.includes(userMobile)
    );

    if (filteredContact.length > 0) {
      tBodyId.innerHTML = "";
      filteredContact.map((contact) => {
        return (tBodyId.innerHTML += `<tr>
        <td>${contact.name}</td>
        <td>${contact.mobile}</td>
        <td>${contact.email}</td>
      </tr>`);
      });
    }
    if (filteredContact.length === 0) {
      const tBodyId = document.querySelector("tbody");
      tBodyId.innerText = "";
      document.getElementById("noResult").style.display = "block";
    }
  }

  //When user delete the number
  if (userMobile == "") {
    tBodyId.innerHTML = "";
    contactsList.map((contact) => {
      return (tBodyId.innerHTML += `<tr>
        <td>${contact.name}</td>
        <td>${contact.mobile}</td>
        <td>${contact.email}</td>
      </tr>`);
    });
  }
}
