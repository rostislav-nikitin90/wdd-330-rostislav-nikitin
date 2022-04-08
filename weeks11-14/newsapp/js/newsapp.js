const searchFrom = document.querySelector('.search');
const input = document.querySelector('.input');
const newsList = document.querySelector('.news-list');

console.log(newsList);

searchFrom.addEventListener('submit', retrieve);
function retrieve(e){
    newsList.innerHTML = '';

    // Prevent form from submitting
    e.preventDefault();

    const apiKey = 'LSbbkRu8GJvpcGqHRFwBTWSSI425QzG5qH1Vlgk7';
    let topic = input.value;

    let url = `https://api.thenewsapi.com/v1/news/all?api_token=${apiKey}&search=${topic}`;


    fetch(url).then((res)=>{
        return res.json();
    }).then((data)=>{
        console.log(data);
        data.data.forEach(data =>{
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
            a.setAttribute('href', data.url);
            a.setAttribute('target', '_blank');
            a.textContent = data.title;
            newsDiv1.appendChild(a);

            const imgLink = document.createElement('a');
            imgLink.setAttribute('href', data.url);
            imgLink.setAttribute('target', '_blank');
            imgLink.textContent = '';
            newsDiv2.appendChild(imgLink);

            const img = document.createElement('img');
            img.classList.add('newsArticleImg');
            img.setAttribute('src', data.image_url);
            imgLink.appendChild(img);

            newsList.appendChild(li);
        });

    });   
    console.log(topic);
}
   
    
