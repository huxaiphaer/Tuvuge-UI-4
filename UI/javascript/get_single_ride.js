document.getElementById('getSingleRide').addEventListener
    ('click', getSingleRide);

function getSingleRide() {
    
    let id = document.getElementById('promo_key').value;
    fetch('https://tuvuge-app.herokuapp.com/api/v1/rides/' + id,
        {
            method: 'GET',
            cache: 'no-cache',
            headers: {
                'Accept': 'application/json,text/plain,*/*',
                'Content-type': 'application/json',
                'token': sessionStorage.getItem("token")
            }
        })
        .then((res) => {
            if (res.status == '401') {
                alert("Your session has expired. Try logging in again");
                window.location.href = "Passenger_accounts.html";
            }
            console.log(res.json())
            return res.json();
        })

        .then((res) => {
            var jdata = "" + res.ride_offer;
            var str = "" + jdata.replace(/'/g, "\"");
            obj_two = JSON.parse(str);

            let output = `
        <div class="container">
            <h4><b>Driver: Serunjoji Abdallah</b></h4> 
            <p>Estimated Price : ~ (4000-5500)  <i>ugx</i> </p>
            <p>Car Plate : UAE 345T</p> 
            <hr/>
            <button><i class="fa fa-edit"> Request</i></button>
        </div>

        
        `;

            document.getElementById('single_ride_req').innerHTML = output;

        })

}