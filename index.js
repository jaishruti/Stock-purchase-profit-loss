const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '969b0e1facmshe4bc224034c7ccfp10be3bjsn2ffbf8b035d5',
		'X-RapidAPI-Host': 'latest-stock-price.p.rapidapi.com'
	}
};


    
    async function getCurrentPrice(param) {
        // const element = document.getElementsByClassName(".current-price");
        const val= param.split(" ");
        param= val[0]+"%20"+val[1];

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '969b0e1facmshe4bc224034c7ccfp10be3bjsn2ffbf8b035d5',
                'X-RapidAPI-Host': 'latest-stock-price.p.rapidapi.com'
            }
        };
        const response = await fetch(`https://latest-stock-price.p.rapidapi.com/price?Indices=${param}`, options);
        //here converting response to json is mandatory
        const jsonData = await response.json();
        const value=jsonData[0].dayHigh;
        console.log(value);

        const element = document.getElementById("current-price");
        console.log(element);
        element.innerHTML="Current value is "+ value;
      }