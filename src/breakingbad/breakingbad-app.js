
/**
 * @returns {Object} quote information
 */
const fetchQuote = async() =>{
    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const data = await res.json();
    console.log(data[0]);
    return data[0];
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingBadApp = async (element) =>{
    const carga = 'Loading bitch...'

    document.querySelector('#app-title').innerHTML = 'BrakingBad App'
    element.innerHTML = carga;

    //const quote = await fetchQuote();
    //element.innerHTML = 'Ya we...';
    const quoteLabel = document.createElement('blockquote');
    const autorLabel = document.createElement('h3');
    const nextQuotenButton = document.createElement('button');
    nextQuotenButton.innerText = 'Next'
   
    const renderQuote = (data)=>{
        quoteLabel.innerHTML = data.quote;
        autorLabel.innerHTML = data.author;
        element.replaceChildren(quoteLabel, autorLabel, nextQuotenButton);
    }


    nextQuotenButton.addEventListener('click',async()=>{
        element.replaceChildren(carga);
        
        //Opcion 1: 
        //fetchQuote()
        //.then(renderQuote)  
        

        //Opcion 2: Mejor optimizada
        renderQuote( await fetchQuote());

    })

    /*
    fetchQuote()
            .then(renderQuote)
    */
   
    renderQuote( await fetchQuote());
    
    

}