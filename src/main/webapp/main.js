function signUp() {
  const userData = {
    userName: document.getElementById("signUpName").value,
    userEmail: document.getElementById("signUpEmail").value,
    userPassword: document.getElementById("signUpPassword").value,
  };
  //console.log(userName);
  document.getElementById("signUpEmail").value = "";
  document.getElementById("signUpName").value = "";
  document.getElementById("signUpPassword").value = "";

  fetch("http://localhost:8080/postbook/webapi/twitter/users/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((resp) =>{
      if (resp.status === 200) {
        alert("User Register Successfully !");
        return resp.json();
      } else if (resp.status === 204) {
        // No content
        throw new Error("Wrong email or password");
      }
    })
    .then((data) => console.log(data));
}

function signIn() {
  const userEmailInput = document.getElementById("signInEmail");
  const userPasswordInput = document.getElementById("signInPassword");
  const userData = {
    userEmail: userEmailInput.value,
    userPassword: userPasswordInput.value,
  };
  document.getElementById("signInEmail").value = "";
  userPasswordInput.value = "";
  //console.log(userName);

  fetch("http://localhost:8080/postbook/webapi/twitter/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((resp) => {
      if (resp.status === 200) {
        // Successful login
        console.log("success");alert("Logged In Successfully!");
        document.getElementById("feed-tab").disabled=false;
        document.getElementById("profile-tab").disabled=false;
        document.getElementById("my-tweets-tab").disabled=false;
        document.getElementById("sign-in-tab").hidden=true;
        document.getElementById("sign-up-tab").hidden=true;
        document.getElementById("logout-tab").hidden=false;
        
        const feedTabButton = document.getElementById("feed-tab");
        feedTabButton.click();
        //document.getElementById("alert").className=document.getElementById("alert").className+" alert alert-success";
      //document.getElementById("alertTitle").innerText="Success";
      //document.getElementById("alertMsg").innerText="Sign In Successfully !";
      // document.getElementById("alertMsg").hidden=false;
      //alert("Please enter correct details ");
      //document.getElementById("alertClose").hidden=false;
        return resp.json();
      } else if (resp.status === 204) {
        // No content
        throw new Error("Wrong email or password");
      }
    })
    .then((data) => {   
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Email Id and Password is Wrong !");
     // document.getElementById("alert").className=document.getElementById("alert").className+" alert alert-danger";
      //document.getElementById("alertTitle").innerText="Danger";       
      //document.getElementById("alertMsg").innerText="Please enter correct details ";
       //document.getElementById("alertMsg").hidden=false;
      //alert("Please enter correct details ");
      //document.getElementById("alertClose").hidden=false;
    });
}

function logout()
{
	document.getElementById("feed-tab").disabled=true;
        document.getElementById("profile-tab").disabled=true;
        document.getElementById("my-tweets-tab").disabled=true;
        document.getElementById("sign-in-tab").hidden=false;
        document.getElementById("sign-up-tab").hidden=false;
        document.getElementById("logout-tab").hidden=true;
        
         const signInTabButton = document.getElementById("sign-in-tab");
        signInTabButton.click();  
	
}  

