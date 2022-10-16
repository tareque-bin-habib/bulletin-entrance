const loadCategories = () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCategories(data.data.news_category))
}

const displayCategories = categories => {
    categories.forEach(categorie => {
        // console.log(categorie)
        const navContainer = document.getElementById('nav-container');
        const creatLi = document.createElement('li');
        creatLi.classList.add('nav-item');
        creatLi.innerHTML = `
        <a onclick="loadNews()" class="nav-link active pe-5" aria-current="page" href="#">${categorie.category_name}</a>
        `
        navContainer.appendChild(creatLi);
    })
}
const loadNews = () => {
    const url = `https://openapi.programming-hero.com/api/news/category/01`
    fetch(url)
        .then(res => res.json())
        .then(data => displayNews(data.data))
}
const displayNews = newses => {
    newses.forEach(news => {
        console.log(news);
        const newsContainer = document.getElementById('news-container');
        const creatDiv = document.createElement('div');
        creatDiv.classList.add('row', 'card-margin');
        creatDiv.innerHTML = `
        <div class="col-md-4">
            <img src="${news.image_url}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${news.title
            }</h5>
                <p class="card-text pera-details">${news.details}</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        
        `
        newsContainer.appendChild(creatDiv);
    })
}

loadNews();

loadCategories();