/*const items = document.querySelectorAll('.item');
		
		items.forEach(element => {
		
		   //const category = element.querySelector('ul');
		
		   const title = element.querySelector('h2').innerHTML;
		
		   const itemsLength = element.querySelectorAll('li').length;
		
		   console.log(`Number of categories: ${items.length}`)
		
		   console.log(`Category: ${title}`);
		
		   console.log(`Elements: ${itemsLength}`);
		
		});*/
	
						
		/*Number of categories: 3
						
		Category: Animals		
		Elements: 4
		
		Category: Products
		Elements: 3
						
		Category: Technologies
		Elements: 5*/
		
		
		
		const items = document.querySelectorAll('li.item');		
		console.log(`Number of categories: ${items.length}`);
		
		items.forEach(document => {		
		const category = document.querySelector('h2');		
		console.log(`Category: ${category.textContent}`);
						
		const elem = document.querySelectorAll('li');		
		console.log(`Elements: ${elem.length}`) 		
		});