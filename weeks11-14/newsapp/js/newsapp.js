const searchFrom = document.querySelector('.search');
const input = document.querySelector('.input');
const newsList = document.querySelector('.news-list');

console.log(newsList);

searchFrom.addEventListener('submit', retrieve);
function retrieve(e){
    newsList.innerHTML = '';

    // Prevent form from submitting
    e.preventDefault();

    const apiKey = '65144933375e42b38368cc23312e723a';
    let topic = input.value;

    let url = `http://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`;


    fetch(url).then((res)=>{
        return res.json();
    }).then((data)=>{
        console.log(data);
        data.articles.forEach(article =>{
            // Create li
            const li = document.createElement('li');
            li.classList.add('newsListItem');

            // Create news div boxes
            const newsDiv1 = document.createElement('div');
            newsDiv1.classList.add('newsBox1');
            li.appendChild(newsDiv1);

            const newsDiv2 = document.createElement('div');
            newsDiv2.classList.add('newsBox2');
            li.appendChild(newsDiv2);
            
            // Create news article link
            const a = document.createElement('a');
            a.classList.add('newsArticleLink');
            a.setAttribute('href', article.url);
            a.setAttribute('target', '_blank');
            a.textContent = article.title;
            newsDiv1.appendChild(a);

            const imgLink = document.createElement('a');
            imgLink.setAttribute('href', article.url);
            imgLink.setAttribute('target', '_blank');
            imgLink.textContent = '';
            newsDiv2.appendChild(imgLink);

            const img = document.createElement('img');
            img.classList.add('newsArticleImg');
            img.setAttribute('src', article.urlToImage);
            imgLink.appendChild(img);

            newsList.appendChild(li);
        });

    });   
    console.log(topic);
}
   
    
