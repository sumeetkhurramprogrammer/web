function searchProducts() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const productCards = document.querySelectorAll('.product-card');
    const searchResultsDiv = document.getElementById('searchResults');
    const categories = ['Tech', 'Beauty', 'Clothing', 'Books', 'Home & Kitchen'];

    // Clear previous search results
    searchResultsDiv.innerHTML = '';

    // Display matching results
    let found = false;
    productCards.forEach(card => {
        const productName = card.querySelector('h3').textContent.toLowerCase();
        const productCategory = card.getAttribute('data-category').toLowerCase();
        if (productName.includes(searchQuery) || productCategory.includes(searchQuery)) {
            found = true;
            searchResultsDiv.innerHTML += `
                <div class="search-result">
                    <p>Category: ${productCategory}</p>
                    <p>Name: ${card.querySelector('h3').textContent}</p>
                </div>
            `;
        }
    });

    if (!found) {
        searchResultsDiv.innerHTML = `<p>No results found for "${searchQuery}"</p>`;
    }
}

function showRecommendations() {
    const query = document.getElementById('searchInput').value;
    if (query.length >= 3) {
        const suggestions = ["Wireless Earbuds", "Smartphone", "Laptop", "Shirt", "Books"];
        const recommendationsDiv = document.getElementById('recommendations');
        recommendationsDiv.innerHTML = '';
        suggestions.forEach(suggestion => {
            if (suggestion.toLowerCase().includes(query.toLowerCase())) {
                recommendationsDiv.innerHTML += `<p>${suggestion}</p>`;
            }
        });
    }
}

document.getElementById('searchInput').addEventListener('input', showRecommendations);
