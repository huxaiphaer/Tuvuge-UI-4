document.getElementById('c_ride_offer_form').addEventListener('submit',create_ride_offer)

            function create_ride_offer(e) {
                e.preventDefault();
    
                let name = document.getElementById('offername').value;
                let price = document.getElementById('price').value;
                let details = document.getElementById('details').value;
    
                fetch('https://tuvuge-app.herokuapp.com/api/v1/users/rides',
                    {
                        method: 'POST',
                        cache: 'no-cache',
                        headers: {
                            'Accept': 'application/json,text/plain,*/*',
                            'Content-type': 'application/json',
                            'token':sessionStorage.getItem("token")
                        },
                        body: JSON.stringify({
                            name: name,
                            details: details,
                            price: price
                        })
    
                    }).then((res) =>{
                        if(res.status=='401'){
                            console.log(res.status)
                            alert("Your session has expired. Try logging in again");
                            window.location.href = "Driver_accounts.html";
                        }
                        else if (res.status='201'){
                            console.log(res.status)
                            alert("Ride offer created successfully.");
                        }

                        else if (res.status='400'){
                            alert("You have already created this ride offer. Please enter a new one");
                        }
                    })
               
            }    