const search = () => {
    const searchBox = document.getElementById('search-item').value.toUpperCase()
    const product = document.getElementsByClassName('product')
    
    for (let i = 0; i < product.length; i++) {
        const pname = product[i].querySelector('h2')
        if (pname) {
            let textval = pname.textContent || pname.innerHTML
            if (textval.toUpperCase().indexOf(searchBox) > -1) {
                product[i].style.display = 'flex'
            }
            else {
                product[i].style.display = 'none'
            }
        }
    }
}