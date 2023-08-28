const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`

async function fetchNews() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        displayNews(data.articles);
    } catch (error) {
        console.error('There was an error!', error);
    }
}

function displayNews(articles) {
    const newsdiv = document.querySelector("#news");

    for (const article of articles) {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('article-box');

        //create an append a headline to the articleDiv
        const articleTitle = document.createElement('h4');
        articleTitle.textContent = article.title;
        
        // Create a link element
        const linkElement = document.createElement('a');
        linkElement.href = article.url
        
        // Append the header to the link element
        linkElement.appendChild(articleTitle);
        
        // Append the link element to the articleDiv (assuming articleDiv is defined)
        articleDiv.appendChild(linkElement);

        const articleImg = document.createElement('img');
        articleImg.src = article.urlToImage;
        articleDiv.appendChild(articleImg);

        const articleDescription = document.createElement('p');
        articleDescription.textContent = article.description;
        articleDiv.appendChild(articleDescription)



        // TODO: Use document.createElement and appendChild to create and append more elements

        newsdiv.appendChild(articleDiv);
    }
}

fetchNews();