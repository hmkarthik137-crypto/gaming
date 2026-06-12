async function loadDashboard(){

    const token =
    localStorage.getItem("token");

    // NO LOGIN

    if(!token){

        window.location.href =
        "dashboard.html";

        return;
    }

    // API

    const res =
    await fetch(
        "/api/user/dashboard",
        {

            headers:{
                authorization:token
            }

        }
    );

    const data =
    await res.json();

    // SHOW USER

    document.getElementById(
        "userInfo"
    ).innerText =

    "Welcome User ID: " +
    data.user.id;

}

loadDashboard();