function getRideRequests() {
          
    // Nested another fetch to get a specific ID.
    fetch('https://tuvuge-app.herokuapp.com/api/v1/rides/' + 1,
        {
            method: 'GET',
            mode: "no-cors",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'token': sessionStorage.getItem("token")
            }
        })
        .then((res) => {
            console.log('my status',res.status);
            if (res.status == '401') {
                console.log('my status',res.status);
                alert("Your session has expired. Try logging in again");
                window.location.href = "Driver_accounts.html";
            }
            return res.json();
        })

        .then((res) => {
            console.log('my new status',res.ride_offer);
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

}