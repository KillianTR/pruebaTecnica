const apiUrl = 'http://localhost:8080/api/articles';

async function fetchArticles() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Error al obtener los artículos');
        }
        const articles = await response.json();
        console.log('Artículos obtenidos:', articles);
        return articles;
    } catch (error) {
        console.error('Error al obtener los artículos:', error);
        throw error;
    }
}

async function renderArticles() {
    try {
        const articles = await fetchArticles();
        const articleList = document.getElementById('articleList');

        articles.forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.classList.add('article');

            const titleElement = document.createElement('h2');
            titleElement.textContent = article.titular;

            const contentElement = document.createElement('p');
            contentElement.textContent = article.contenido;

            articleElement.appendChild(titleElement);
            articleElement.appendChild(contentElement);

            articleList.appendChild(articleElement);
        });
    } catch (error) {
        console.error('Error al renderizar los artículos:', error);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    renderArticles();
});
