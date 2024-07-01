document.addEventListener('DOMContentLoaded', function() {
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
});
