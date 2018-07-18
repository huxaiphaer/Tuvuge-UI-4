function getRideRequests() {
    fetch('https://tuvuge-app.herokuapp.com/api/v1/users/rides/2/requests',
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json,text/plain,*/*',
                'Content-type': 'application/json',
                'token': sessionStorage.getItem("token")
            }
        })
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            var jdata = "" + res.ride_offers;
            var str = "" + jdata.replace(/'/g, "\"");
            obj = JSON.parse(str);

            // Nested another fetch to get a specific ID.
            fetch('https://tuvuge-app.herokuapp.com/api/v1/rides/' + obj.id,
                {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json,text/plain,*/*',
                        'Content-type': 'application/json',
                        'token': sessionStorage.getItem("token")
                    }
                })
                .then((res) => {
                    if (res.status == '401') {
                        alert("Your session has expired. Try logging in again");
                        window.location.href = "Driver_accounts.html";
                    }
                    return res.json();
                })

                .then((res) => {
                    var jdata = "" + res.ride_offer;
                    var str = "" + jdata.replace(/'/g, "\"");
                    obj_two = JSON.parse(str);


                    let output = `
            <div class="container">
            <h4>
                <b>${obj.id}</b>
            </h4>
            <p>Passenger Name  : ${obj.passengername}</p>
            <p>Price: ~ <strong> ${obj_two.price} </strong> ugx</i> </p>
            <p>Ride Details:  <strong> ${obj_two.details} </strong></i> </p>
            <hr/>
            <button>
                <i class="fa fa-remove"> Cancel Request</i>
            </button>
            <button>
                <i class="fa fa-check-square-o"> Accept Request</i>
            </button>
            </div>
            `;
                    document.getElementById('requests_card').innerHTML = output;
                })

        })


}