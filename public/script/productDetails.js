function deleteItem(productId) {
    fetch(`/delete/${productId}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.redirected) {
            window.location.href = response.url;
        }
    })
    .catch(error => console.error('Error:', error));
}