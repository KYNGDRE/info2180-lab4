document.addEventListener("DOMContentLoaded", function() {
    var button1 = document.getElementById('a')
    // var button1 = document.querySelector(".btn");

//     function doSomething() {
//         if (httpRequest.readyState === XMLHttpRequest.DONE) {
//             if (httpRequest.status === 200) {
//                 let response = httpRequest.responseText;
//                 alert(response);
//                 return superheroes.php
//             } else {
//                 alert('There was a problem with the request.');
//                 }
//             }
//         }
// //  button1 = document.querySelector("button");
//     button1.addEventListener("click", function() {
//         const httpRequest = new XMLHttpRequest();
//         let url = "http://localhost/Info2180-Lab/Lab%204/info2180-ajax-superheroes-master/superheroes.php";
//         // let url = "";
//         httpRequest.onreadystatechange = doSomething;
//         httpRequest.open('GET', url);
//         httpRequest.send();
        
//         });


button1.addEventListener("click", function () {
    fetch('superheroes.php')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            try {
                document.getElementById('superheroes-list').innerHTML = data;

                let btn = document.createElement("button");
                btn.innerHTML = "Ok";
                btn.type = "ok";
                btn.name = "formBtn";
                document.body.appendChild(btn);

            } catch (err) {
                console.error('Error updating list:', err);
            }
        })
        .catch(error => console.error('Error fetching superheroes:', error));
});

        // button1.addEventListener("click", function() {
        //     fetch('superheroes.php')
        //     .then(response => response.text())
        //     .then(data => {
        //         // Inject the returned HTML into the unordered list
        //         document.getElementById('superheroes-list').innerHTML = data;
        //     })
        //     .catch(error => console.error('Error fetching superheroes:', error));  
        //     });

});
