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
        <a onclick="loadNews(${categorie.category_id
            })" class="nav-link active pe-5" aria-current="page" href="#">${categorie.category_name}</a>
        `
        navContainer.appendChild(creatLi);
    })
}
const loadNews = (id) => {
    toggleSpinner(true);
    const url = `https://openapi.programming-hero.com/api/news/category/0${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayNews(data.data))
}
const displayNews = newses => {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';
    const foundContainer = document.getElementById('found-container');
    foundContainer.innerText = `${newses.length} Items Found`;
    if (newses.length === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No data Found!',
        })
        toggleSpinner(false);
        newsContainer.innerHTML = '';
        return
    }
    newses.forEach(news => {
        console.log(news);

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
            <div class="row row-cols-lg-3 row-cols-md-3 row-cols-sm-3">
                <div>
                    <img src="${news.author.img}" class="rounded-circle author-image mt-3" alt="..."><span class="ms-1 fs-5">${news.author.name}</span>
                </div>
                <div class="mt-4">
                    <i class="fa-regular fa-eye"></i><span>1.5 M</span>
                </div>
                <div class="mt-4">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal"        data-bs-target="#exampleModal">
                    Show News
                    </button>
                </div>
            </div>

        </div>
        
        `
        newsContainer.appendChild(creatDiv);
        toggleSpinner(false);
    })
}

const toggleSpinner = isLoading => {
    const loader = document.getElementById('loader');
    if (isLoading === true) {
        loader.classList.remove('d-none')
    }
    else {
        loader.classList.add('d-none');
    }
}

loadNews(01);

loadCategories();