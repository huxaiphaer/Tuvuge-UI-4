function getPosts() {
    fetch('https://tuvuge-app.herokuapp.com/api/v1/users/rides',
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
            return res.json();
        })
        .then((res) => {
            var jdata = "" + res.ride_offers;
            var str = "" + jdata.replace(/'/g, "\"");
            obj = JSON.parse(str);

            let output = '';
            obj.forEach(function (post) {
                output += `
                <div class="container">
                        <h4>
                            <b class="names-of-users">${post.name}</b>
                        </h4>
                        <hr/>
                        <p>${post.details}</p>
                        <p>Price : ${post.price}</p>
                        <p>Offered by  <i>driver: ${post.driver}</i></p>
                        <hr/>
                        
                    </div>
                `;
            });
            document.getElementById('ride_offers_card').innerHTML = output;

        })
}