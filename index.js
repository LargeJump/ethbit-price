
init();
function init(){	

	getDat();	
	updateDisplay('eth');

	//update data every 20 sec
	setInterval( () => {
		getDat();
	}, 20000);

}

async function getDat(){
	const coins = [ 'ethereum', 'bitcoin' ];

	let res, bod, price, p;

	for (const c of coins) {
		try{
			res = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${c}&vs_currencies=cad`);
			bod = await res.json();
			

			if(c == coins[0])
				price = bod.ethereum.cad;
			else if(c==coins[1])
				price = bod.bitcoin.cad; 

				
				p = document.getElementById(`price_${c}`);
				p.innerText = `${price}`;
			} catch (e) {
				console.log(price);
				console.log(c);
				console.log(bod);
			}
		
	}

}

function updateDisplay(coin){

	const eth = document.getElementById('eth');
	const btc = document.getElementById('btc');

	if(coin == 'btc'){
		eth.classList.add("hide");
		btc.classList.remove("hide");

	}
	else{
		btc.classList.add("hide");
		eth.classList.remove("hide");
	}


}