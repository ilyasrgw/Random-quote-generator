function MyComponent ()  {

    const [quotes, setQuotes ] = React.useState([])
    const [randomQuote, setRandomQuote] = React.useState("")
    const [color, setColor] = React.useState("#fff")
    React.useEffect(() => {
    async function fetchData() {
        const response = await fetch("https://type.fit/api/quotes")
        const data = await response.json();
        setQuotes(data);
        let randomIndex = Math.floor(Math.random() * data.length);
        setRandomQuote(data[randomIndex])
        }
        fetchData();
        
    }, [])
    
    const getNewQuote = () => {
    
    const colors = [
      '#16a085',
      '#27ae60',
      '#2c3e50',
      '#f39c12',
      '#e74c3c',
      '#9b59b6',
      '#FB6964',
      '#342224',
      '#472E32',
      '#BDBB99',
      '#77B1A9',
      '#73A857'
    ]
    
    
    
    
    
        let randomColorIndex = Math.floor(Math.random() * colors.length)
        let randomIndex = Math.floor(Math.random() * quotes.length);
        setRandomQuote(quotes[randomIndex])
        setColor(colors[randomColorIndex])
    }
    
    
    
    return ( 
      <div style={{backgroundColor: color, minHeight: "100vh", transition: "all 1s ease-in-out"}}>
        <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class=" col-md-9  col-lg-7  col-xl-5">
       <div id="quote-box" class="card">
        <div class="card-body">
        <blockquote class="blockquote blockquote-custom bg-white px-3 pt-4">
        <div class="blockquote-custom-icon bg-info shadow-1-strong">
                    <i class="fa fa-quote-left text-white"></i>
                  </div>
                  <p class="mb-0 mt-2 font-italic" id="text">
                    {randomQuote ? (
                    <>
                    <h5>&quot;{randomQuote.text}&quot;</h5>
                    </>
                    ) : (
                    <h2>Loading</h2>
                    )}
                    
                  </p>
                  <footer class="blockquote-footer pt-4 mt-4 border-top" id="author">
                    {randomQuote.author || "No Author"}
                    </footer>
                    <div class="row">
                        <button id="new-quote" class="btn btn-primary w-100" onClick={getNewQuote}>New Quote</button>
                            <a id="tweet-quote" href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + encodeURIComponent ( '"' + randomQuote.text + '"' + randomQuote.author ) } target="_blank" class="btn btn-light p-1 w-50" data-toggle="tooltip" data-placement="top" title="Tweet this quote!"> 
                            <i class="ri-twitter-fill"></i>
                            </a>
                            <a href={"https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" + encodeURIComponent(randomQuote.author) + "&content=" + encodeURIComponent(randomQuote.text) + "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"} class="btn btn-info p-1 w-50" data-toggle="tooltip" data-placement="top" title="Post this quote on tumblr!" >
                            <i class="ri-tumblr-fill"></i>
                            </a>
                        
                    </div>
                        
                </blockquote>
        </div>
      </div>
    </div>
    </div>
       </div>
       
       </div>
    )
       
          
          
        
        
    }
    ReactDOM.render(<MyComponent/>, document.getElementById('app'))