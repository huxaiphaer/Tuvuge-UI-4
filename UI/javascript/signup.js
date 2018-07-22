document.getElementById('formsignup').addEventListener('submit',signUp)

            function signUp(e) {
                e.preventDefault();
    
                let username = document.getElementById('email').value;
                let email = document.getElementById('email').value;
                let password = document.getElementById('psw').value;
    
                fetch('https://tuvuge-app.herokuapp.com/api/v1/signup',
                    {
                        method: 'POST',
                        cache: 'no-cache',
                        headers: {
                            'Accept': 'application/json,text/plain,*/*',
                            'Content-type': 'application/json'
                        },
                        body: JSON.stringify({
                            username: username,
                            email: email,
                            password: password,
                            isDriver: "False"
    
                        })
    
                    }).then((res) =>{
                        if(res.status=='409'){
                            console.log(res.status)
                            alert("Sorry, this username already exists, try another one");
                        }
                        else if (res.status='200'){
                            console.log(res.status)
                            alert("You have successfully registered.");
                        }
                    })
          
    
            }    