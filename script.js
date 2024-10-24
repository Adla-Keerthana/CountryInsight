function myfunction(){
  console.log("hello world");
  var search=document.getElementById("searchInput");
  let btns=document.getElementById("btn");
    const countryName=search.value;
    let finalURL = `https://restcountries.com/v3.1/all`;
    console.log(finalURL);
    fetch(finalURL)
      .then((response) => response.json())
      .then((data) => {   
        // console.log(data);
         const myd=data.filter(item=>item.name.common==countryName);
        console.log(myd);
        const cnames=data.map(country=>country.name.common);
        console.log(cnames);
      //const caps=myd[0].capital[0];
      //console.log('Capital:',caps);
     // const area=myd[0].area;
      //console.log('Area:',area);
      //const continents=myd[0].continents[0];
      //console.log('Continent:',continents);
      //const region=myd[0].region;
     // const subregion=myd[0].subregion;
     // console.log('Subregion:',subregion);
      //console.log('Population:',myd[0].population);
     // console.log('Currency:',myd[0].currencies);
         const keyvals=Object.keys(myd[0].currencies);
        console.log(Object.values(Object.keys(myd[0].currencies)));
       
       
       //const cname=keys[0];
       
       //console.log(cname);
       // console.log('Currency:',Object.values(keyvals));
        //const langarray=Object.values(myd[0].languages);
      // console.log('Languages:',langarray);
      //const map=Object.values(myd[0].maps);
       //console.log('Maps:',map[0]);
       const flag=Object.values(myd[0].flags);
      //console.log('Flag:',flag[0]);
      // });
      //console.log(flag[0]);
      //console.log(myd[0].flags)
       resultpage=document.getElementById("result");
       resultpage.innerHTML = `
       <img src="${flag}" class="flag-img">
       <h2>${myd[0].name.common}</h2>
       <div class="wrapper">
           <div class="data-wrapper">
               <h4>Capital:</h4>
               <span>${myd[0].capital[0]}</span>
           </div>
       </div>
       <div class="wrapper">
           <div class="data-wrapper">
               <h4>Continent:</h4>
               <span>${myd[0].continents[0]}</span>
           </div>
       </div>
        <div class="wrapper">
           <div class="data-wrapper">
               <h4>Population:</h4>
               <span>${myd[0].population}</span>
           </div>
       </div>
       <div class="wrapper">
           <div class="data-wrapper">
               <h4>Currency:</h4>
               <span>${
                Object.values(keyvals)
               } </span>
           </div>
       </div>
       <div class="wrapper">
           <div class="data-wrapper">
               <h4>Area:</h4>
               <span>${
                myd[0].area
               } </span>
           </div>
       </div>
       <div class="wrapper">
           <div class="data-wrapper">
               <h4>Region:</h4>
               <span>${
                myd[0].region
               } </span>
           </div>
       </div>
       <div class="wrapper">
           <div class="data-wrapper">
               <h4>Subregion:</h4>
               <span>${
                myd[0].subregion
               } </span>
           </div>
       </div>
        <div class="wrapper">
           <div class="data-wrapper">
               <h4>Common Languages:</h4>
               <span>${Object.values(myd[0].languages)
                 .toString()
                 .split(",")
                 .join(", ")}</span>
           </div>
       </div>
     `;
   });
  }
   /*.catch(() => {
     if (countryName.length == 0) {
       result.innerHTML = `<h3>The input field cannot be empty</h3>`;
     } else {
       result.innerHTML = `<h3>Please enter a valid country name.</h3>`;
     }
   });
      }=
      */
     function btn1func(coname){
      const countryName=coname;
      let finalURL = `https://restcountries.com/v3.1/all`;
      console.log(finalURL);
      fetch(finalURL)
        .then((response) => response.json())
        .then((data) => {   
          // console.log(data);
           const myd=data.filter(item=>item.name.common==countryName);
          console.log(myd);
          const keyvals=Object.keys(myd[0].currencies);
          console.log(keyvals);
          const flag=Object.values(myd[0].flags);
          resultpage=document.getElementById("result");
       resultpage.innerHTML = `
       <img src="${flag}" class="flag-img">
       <h2>${myd[0].name.common}</h2>
       <div class="wrapper">
           <div class="data-wrapper">
               <h4>Capital:</h4>
               <span>${myd[0].capital[0]}</span>
           </div>
       </div>
       <div class="wrapper">
           <div class="data-wrapper">
               <h4>Continent:</h4>
               <span>${myd[0].continents[0]}</span>
           </div>
       </div>
        <div class="wrapper">
           <div class="data-wrapper">
               <h4>Population:</h4>
               <span>${myd[0].population}</span>
           </div>
       </div>
       <div class="wrapper">
           <div class="data-wrapper">
               <h4>Currency:</h4>
               <span>${
                Object.values(keyvals)
               } </span>
           </div>
       </div>
       <div class="wrapper">
           <div class="data-wrapper">
               <h4>Area:</h4>
               <span>${
                myd[0].area
               } </span>
           </div>
       </div>
       <div class="wrapper">
           <div class="data-wrapper">
               <h4>Region:</h4>
               <span>${
                myd[0].region
               } </span>
           </div>
       </div>
       <div class="wrapper">
           <div class="data-wrapper">
               <h4>Subregion:</h4>
               <span>${
                myd[0].subregion
               } </span>
           </div>
       </div>
        <div class="wrapper">
           <div class="data-wrapper">
               <h4>Common Languages:</h4>
               <span>${Object.values(myd[0].languages)
                 .toString()
                 .split(",")
                 .join(", ")}</span>
           </div>
       </div>
     `;
   });
        }
     