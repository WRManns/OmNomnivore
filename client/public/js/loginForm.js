async function loginForm(event) {


    event.preventDefault();

   const username = document.querySelector("#username-login")
       .value.trim();
   const password = document.querySelector("#password-login")
       .value.trim();
   console.log("Logged in!");
   if (username && password) {
       console.log("check pw");
       const response = await fetch("/api/users/login", {
           method: "post",
           body: JSON.stringify({
               username,
               password
           }),
           headers: {
               "Content-Type": "application/json",
               "Access-Control-Allow-Origin": "no-cors"
           },
       });
       console.log(response)
       
       if (response.ok) {
           document.location.replace("/");
       }
       else {
           alert(response.statusText);
       }
   }
}

document.querySelector("#login-form")
   .addEventListener("submit", loginForm);