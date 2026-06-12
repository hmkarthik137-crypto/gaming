// ================= REGISTER =================

const registerForm =
document.getElementById(
    "registerForm"
);

if(registerForm){

    registerForm.addEventListener(
        "submit",
        async(e)=>{

            e.preventDefault();

            const username =
            document.getElementById(
                "username"
            ).value;

            const email =
            document.getElementById(
                "email"
            ).value;

            const password =
            document.getElementById(
                "password"
            ).value;

            const res =
            await fetch(
                "/api/auth/register",
                {

                    method:"POST",

                    headers:{
                        "Content-Type":
                        "application/json"
                    },

                    body:JSON.stringify({

                        username,
                        email,
                        password

                    })

                }
            );

            const data =
            await res.json();

            alert(data.message);

        }
    );

}





document.getElementById("loginForm")
.addEventListener("submit", function(e){

e.preventDefault();

alert("Login Successful");

window.location.href = "index.html";

});





localStorage.setItem(
    "token",
    data.token
);

localStorage.setItem(
    "user",
    JSON.stringify(data.user)
);
