import { products } from './products.js'

//Función para pintar los productos
const listProducts = (productList, seller, price) => {
  const divProducts = document.querySelector('#div-products')
  divProducts.innerHTML = ''
  productList.forEach((product) => {
    if (
      product.seller === seller ||
      seller === 'Any seller' ||
      seller == null
    ) {
      let productHTML = `
    <div class="product">
        <h3>${product.name}</h3>
        <div>
          <img src="${product.image}"/>
        </div>
        <p>${product.price}</p>
        <p>${product.stars}</p>
        <p>${product.reviews}</p>
        <p>${product.seller}</p>
    </div>
`
      divProducts.innerHTML += productHTML
    }
  })
}
listProducts(products)

//Función para pintar las opciones en el filtro select
let selectFilter = document.createElement('select')
selectFilter.classList.add('filter')
let divFilter = document.querySelector('#filters')

const sellerFilter = (productList) => {
  divFilter.appendChild(selectFilter)
  const sellerOption = document.createElement('option')
  sellerOption.value = 'Any seller'
  sellerOption.text = 'Any seller'
  selectFilter.appendChild(sellerOption)

  productList.forEach((product) => {
    const sellerOption = document.createElement('option')
    sellerOption.value = product.seller
    sellerOption.text = product.seller
    selectFilter.appendChild(sellerOption)
  })
}

sellerFilter(products)

//Evento de cambio de filtro seller
selectFilter.addEventListener('change', (event) => {
  const selectedSeller = event.target.value
  listProducts(products, selectedSeller)
})

//Función para pintar el input y botón de filtro de precio
let priceInput = document.createElement('input')
let priceFilterButton = document.createElement('button')
priceInput.classList.add('filter')
priceFilterButton.classList.add('filter')

divFilter.appendChild(priceInput)
divFilter.appendChild(priceFilterButton)
