document.getElementById('getSingleRide_bt').addEventListener
    ('click', getSingleRide);

function getSingleRide() {
    let id = document.getElementById('promo_key').value;
    console.log("Value entered  : ",id)
    fetch('https://tuvuge-app.herokuapp.com/api/v1/rides/' + id,
        {
            method: 'GET',
            cache: 'no-cache',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'token': sessionStorage.getItem("token")
            }
        })
        .then((res) => {
            if (res.status == '401') {
                alert("Your session has expired. Try logging in again");
                window.location.href = "Passenger_accounts.html";
            }

            if (res.status == '200'){
                console.log("Working well.");
                return res.json();
            }
            console.log("output : ",res.json())
            
        })

        .then((data) => {
           
            var jdata = "" + data.ride_offer;
            var str = "" + jdata.replace(/'/g, "\"");
            obj_two = JSON.parse(str);
            console.log("my data : ",obj_two)

            let output = `
            <div class="container">
                <h4><b>Driver: ${obj_two.driver}</b></h4>
                <p>Estimated Price : ~ ${obj_two.price} <i>ugx</i> </p>
               
                <hr/>
                <button><i class="fa fa-edit"> Request</i></button>
            </div>

            `;

            document.getElementById('single_ride_req').innerHTML = output;

        })

}