document.getElementById('c_ride_offer_form').addEventListener('submit',create_ride_offer)
document.getElementById("loader").style.visibility = "hidden";
            function create_ride_offer(e) {
                e.preventDefault();
                //turn on the loader.
                document.getElementById("loader").style.visibility = "visible";

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
                            //turn off the loader 
                            document.getElementById("loader").style.visibility = "hidden";

                            alert("Your session has expired. Try logging in again");
                            window.location.href = "Driver_accounts.html";
                        }
                        else if (res.status =='201'){
                            //turn off the loader 
                            document.getElementById("loader").style.visibility = "hidden";
                            console.log(res.status)
                            alert("Ride offer created successfully.");
                        }

                        else if (res.status == '400'){
                            //turn off the loader 
                            document.getElementById("loader").style.visibility = "hidden";
                            alert("You have already created this ride offer. Please enter a new one");
                        }
                    })
               
            }    