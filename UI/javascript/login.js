document.getElementById('loginform').addEventListener('submit', login)

//turn off the loader.
document.getElementById("loader").style.visibility = "hidden";
//function for logging in
function login(e) {
    e.preventDefault();
    document.getElementById("loader").style.visibility = "visible";
   

    let username = document.getElementById('uname').value;
    let password = document.getElementById('psw').value;

    fetch('https://tuvuge-app.herokuapp.com/api/v1/login',
        {
            method: 'POST',
            cache: 'no-cache',
            headers: {
                'Accept': 'application/json,text/plain,*/*',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            }),
           
            
        }).then(res => {
            
            if (res.status == '200') {
               
                console.log(res.status)
                document.getElementById("loader").style.visibility = "hidden"
                alert("You have successfully logged in. ");
                window.location.href = "Driver_dashboard.html";
            }
           
            else {
                document.getElementById("loader").style.visibility = "hidden"
                alert("Sorry please, invalid username or password.");
            }
            
           

            return res.json();
        })
        .then(res => {
            sessionStorage.setItem("token", res.token);
            console.log(sessionStorage.getItem("token"));
        })


}    