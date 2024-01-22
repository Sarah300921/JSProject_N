const headers = new Headers();
headers.append("apikey", "bBqHCt8yd906pgpr0kduhNIp0dK6cZCy");

const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers 
};

var response = await fetch(`https://api.apilayer.com/exchangerates_data/latest?base=USD`, requestOptions);
try {
    //console.log(response);
    var currencyData = await response.json();
    console.log(currencyData);
}
catch (err) {
    (error => console.log('error', error));
}
