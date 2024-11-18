document.addEventListener("DOMContentLoaded", function() {
    var button1 = document.getElementById('a')
    // var data = document.getElementById('superheroes-list')

button1.addEventListener("click", function () {
    var input = document. getElementById("name").value.trim()
    fetch('superheroes.php')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            try {
                // alert(input);
                if (input === ""){
                    document.getElementById('superheroes-list').innerHTML = data;
                    // alert(data);
                    // Ensuring both outputs are not on the screen simultaniously.
                    button1.addEventListener("click", function () {
                        document.getElementById('superheroes-list').innerHTML= null;
                    });
                } else {
                    const httpRequest = new XMLHttpRequest();
                    let url = `superheroes.php?query=${encodeURIComponent(input)}`;;
                    httpRequest.onreadystatechange = doSomething;
                    httpRequest.open('GET', url);
                    httpRequest.send();

                    function doSomething() {
                        if (httpRequest.readyState === XMLHttpRequest.DONE) {
                            if (httpRequest.status === 200) {
                                var response = JSON.parse(httpRequest.responseText);
                                document.getElementById("1").innerHTML = response[0]["biography"];
                                document.getElementById("3").innerHTML =  response[0]["alias"];
                                document.getElementById("2").innerHTML =  response[0]["name"];
                                // Ensuring both outputs are not on the screen simultaniously.
                                button1.addEventListener("click", function () { 
                                    document.getElementById("1").innerHTML = null;
                                    document.getElementById("3").innerHTML =  null;
                                    document.getElementById("2").innerHTML =  null;
                                });
                        } else {
                            alert('There was a problem with the request.');
                            }
                        }
                    }
                }
            } catch (err) {
                console.error('Error updating list:', err);
            }
        })
        .catch(error => console.error('Error fetching superheroes:', error));
    });
});


