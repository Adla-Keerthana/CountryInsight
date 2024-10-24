let finalURL = `https://restcountries.com/v3.1/all`;
    console.log(finalURL);
    fetch(finalURL)
      .then((response) => response.json())
      .then((data) => {   
        console.log(data);
        
        const cnames=data.map(country=>country.name.common);
        console.log(cnames);
        const container=document.getElementById('displaypage');
        cnames.forEach(item => {
            const element=document.createElement('p');
            element.textContent=item;
        container.appendChild(element);
            
        });
    });