import { products } from './products.js'

//Pintamos productos

const listProducts = (productList) => {
  const divProducts = document.querySelector('#div-products')
  console.log(divProducts)
  productList.forEach((product) => {
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
  })
}

listProducts(products)
