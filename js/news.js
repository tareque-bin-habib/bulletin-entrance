const loadCategories = () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCategories(data.data.news_category))
}

const displayCategories = categories => {
    categories.forEach(categorie => {
        console.log(categorie)
        const navContainer = document.getElementById('nav-container');
        const creatLi = document.createElement('li');
        creatLi.classList.add('nav-item');
        creatLi.innerHTML = `
        <a class="nav-link active pe-5" aria-current="page" href="#">${categorie.category_name}</a>
        `
        navContainer.appendChild(creatLi);
    })
}

loadCategories();