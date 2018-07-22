document.getElementById('passenger_login').addEventListener('submit', login)

function login(e) {
    e.preventDefault();

    let username = document.getElementById('p_uname').value;
    let password = document.getElementById('p_psw').value;

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
            })

        }).then(res => {
            if (res.status == '200') {
                console.log(res.status)
                alert("You have successfully logged in. ");
                window.location.href = "passengers_dashboard.html";
            }
            
             else 
             {
                console.log(res.status)
                alert("Sorry please, invalid username or password.");

            }
            return res.json();
        })
        .then(res => {
            sessionStorage.setItem("token", res.token);
            console.log(sessionStorage.getItem("token"));
        })


}    