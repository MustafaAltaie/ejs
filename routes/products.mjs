import express from "express";
const router = express.Router();

router.get('/blogs', (request, response) => {
    response.status(200).render("home", { productList: 'products' });
});

// router.get('/products/:cat', (request, response) => {
//     const newList = products.filter(p => p.category === request.params.cat);
//     response.status(200).render("home", { productList:newList });
// });

// router.get("/productDetails/:id", (request, response) => {
//     let id = parseInt(request.params.id);

//     let product = products.find(product => product.id === id);

//     response.status(200).render("productDetails", {
//         productId: product.id,
//         productName: product.name,
//         productImage: product.image,
//         productCategory: product.category,
//         productPrice: product.price,
//         productDesctiption: product.description
//     });
// });

// router.delete('/delete/:id', (request, response) => {
//     let id = parseInt(request.params.id);
//     products = products.filter(product => product.id !== id);
//     response.redirect('/products');
// });

// router.post('/addProduct', (request, response) => {
//     const newProduct = request.body;
//     newProduct.id = products.length !== 0 ? products[products.length - 1].id + 1 : 1;

//     products.push(newProduct);
//     response.redirect('/products');
//     console.log(newProduct)
// });

// router.patch('/products/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const details = req.body;
//     let productIndex = products.findIndex(product => product.id === id);

//     if (productIndex !== -1) {
//         products[productIndex] = { ...products[productIndex], ...details };
//         res.status(200).json(products[productIndex]);
//     } else {
//         res.status(404).json({ message: 'Product not found' });
//     }
// });

// router.put('/products/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const newProduct = req.body;
//     let productIndex = products.findIndex(product => product.id === id);

//     if (productIndex !== -1) {
//         products[productIndex] = { ...newProduct, id: id };
//         res.status(200).json(products[productIndex]);
//     } else {
//         res.status(404).json({ message: 'Product not found' });
//     }
// });

export default router;