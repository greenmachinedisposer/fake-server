var xhttp = new XMLHttpRequest();

var size=0;

xhttp.onreadystatechange=function() {
    if (this.readyState == 4 && this.status == 200) {
        size = JSON.parse(this.responseText).length;
    }
};

xhttp.open("GET", "http://localhost:3000/partners",true);
xhttp.send();

xhttp = new XMLHttpRequest();
xhttp.onreadystatechange=function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
    }
};

xhttp.open("DELETE", "http://localhost:3000/partners",true);
xhttp.setRequestHeader("Content-Type", "application/json");
xhttp.send(JSON.stringify(
    {
        partner_name:"John Rambo",
        id:"2"
    }))


