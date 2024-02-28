import { products } from './products.js'

//Función para pintar los productos
const listProducts = (productList, seller, price) => {
  const divProducts = document.querySelector('#div-products')
  divProducts.innerHTML = ''
  productList.forEach((product) => {
    if (
      product.seller === seller ||
      seller === 'Any seller' ||
      product.price < price
    ) {
      let productHTML = `
    <div class="product">
        <h3>${product.name}</h3>
        <div>
          <img src="${product.image}"/>
        </div>
        <p>Precio: ${product.price}</p>
        <p>Valoración: ${product.stars}</p>
        <p>Número de comentarios: ${product.reviews}</p>
        <p>Vendedor: ${product.seller}</p>
    </div>
`
      divProducts.innerHTML += productHTML
    }
  })
}
listProducts(products, 'Any seller')

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

//Función para pintar el input de precio
let priceInput = document.createElement('input')
divFilter.appendChild(priceInput)
priceInput.addEventListener('change', (event) => {
  listProducts(products, null, priceInput.value)
  console.log(priceInput.value)
})

//Función para crear botón de limpiar filtros

const limpiarFiltros = () => {
  let filterClearButton = document.createElement('button')
  priceInput.classList.add('filter')
  filterClearButton.classList.add('filter')
  filterClearButton.textContent = 'Limpiar filtros'
  divFilter.appendChild(filterClearButton)
  //evento click limpiar filtros
  filterClearButton.addEventListener('click', (event) => {
    selectFilter.value = 'Any seller'
    priceInput.value = ''
    listProducts(products, 'Any seller')
  })
}

limpiarFiltros()
