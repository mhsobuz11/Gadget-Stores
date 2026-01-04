function searchProducts() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let products = document.getElementsByClassName("product-card");

    for (let i = 0; i < products.length; i++) {
        let title = products[i].getElementsByTagName("h3")[0]
            .innerText.toLowerCase();

        products[i].style.display = title.includes(input)
            ? "block"
            : "none";
    }
}
