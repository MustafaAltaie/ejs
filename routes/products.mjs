import express from "express";
const router = express.Router();

let products = [
    {
        "id": 0,
        "name": "Lenovo",
        "category": "headset",
        "price": "9999",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente architecto officia, quos asperiores maxime distinctio nostrum consequatur aliquid repudiandae nam laudantium minus delectus quidem quibusdam! Nihil numquam perferendis accusantium!",
        "image": "/images/headset1.png"
    },
    {
        "id": 1,
        "name": "Acer",
        "category": "headset",
        "price": "5999",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente architecto officia, quos asperiores maxime distinctio nostrum consequatur aliquid repudiandae nam laudantium minus delectus quidem quibusdam! Nihil numquam perferendis accusantium!",
        "image": "/images/headset2.png"
    },
    {
        "id": 2,
        "name": "Acer",
        "category": "headset",
        "price": "5999",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente architecto officia, quos asperiores maxime distinctio nostrum consequatur aliquid repudiandae nam laudantium minus delectus quidem quibusdam! Nihil numquam perferendis accusantium!",
        "image": "/images/headset3.png"
    },
    {
        "id": 3,
        "name": "Acer",
        "category": "headset",
        "price": "5999",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente architecto officia, quos asperiores maxime distinctio nostrum consequatur aliquid repudiandae nam laudantium minus delectus quidem quibusdam! Nihil numquam perferendis accusantium!",
        "image": "/images/headset4.png"
    },
    {
        "id": 4,
        "name": "Acer",
        "category": "headset",
        "price": "5999",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente architecto officia, quos asperiores maxime distinctio nostrum consequatur aliquid repudiandae nam laudantium minus delectus quidem quibusdam! Nihil numquam perferendis accusantium!",
        "image": "/images/headset5.png"
    },
    {
        "id": 5,
        "name": "Acer",
        "category": "laptop",
        "price": "5999",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente architecto officia, quos asperiores maxime distinctio nostrum consequatur aliquid repudiandae nam laudantium minus delectus quidem quibusdam! Nihil numquam perferendis accusantium!",
        "image": "/images/laptop1.png"
    },
    {
        "id": 6,
        "name": "Acer",
        "category": "laptop",
        "price": "5999",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente architecto officia, quos asperiores maxime distinctio nostrum consequatur aliquid repudiandae nam laudantium minus delectus quidem quibusdam! Nihil numquam perferendis accusantium!",
        "image": "/images/laptop2.png"
    },
    {
        "id": 7,
        "name": "Acer",
        "category": "laptop",
        "price": "5999",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente architecto officia, quos asperiores maxime distinctio nostrum consequatur aliquid repudiandae nam laudantium minus delectus quidem quibusdam! Nihil numquam perferendis accusantium!",
        "image": "/images/laptop3.png"
    },
    {
        "id": 8,
        "name": "Acer",
        "category": "laptop",
        "price": "5999",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente architecto officia, quos asperiores maxime distinctio nostrum consequatur aliquid repudiandae nam laudantium minus delectus quidem quibusdam! Nihil numquam perferendis accusantium!",
        "image": "/images/laptop4.png"
    },
    {
        "id": 9,
        "name": "Acer",
        "category": "laptop",
        "price": "5999",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente architecto officia, quos asperiores maxime distinctio nostrum consequatur aliquid repudiandae nam laudantium minus delectus quidem quibusdam! Nihil numquam perferendis accusantium!",
        "image": "/images/laptop5.png"
    },
    {
        "id": 10,
        "name": "Acer",
        "category": "mobile",
        "price": "5999",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente architecto officia, quos asperiores maxime distinctio nostrum consequatur aliquid repudiandae nam laudantium minus delectus quidem quibusdam! Nihil numquam perferendis accusantium!",
        "image": "/images/mobile1.png"
    },
    {
        "id": 11,
        "name": "Acer",
        "category": "mobile",
        "price": "5999",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente architecto officia, quos asperiores maxime distinctio nostrum consequatur aliquid repudiandae nam laudantium minus delectus quidem quibusdam! Nihil numquam perferendis accusantium!",
        "image": "/images/mobile2.png"
    },
    {
        "id": 12,
        "name": "Acer",
        "category": "mobile",
        "price": "5999",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente architecto officia, quos asperiores maxime distinctio nostrum consequatur aliquid repudiandae nam laudantium minus delectus quidem quibusdam! Nihil numquam perferendis accusantium!",
        "image": "/images/mobile3.png"
    },
    {
        "id": 13,
        "name": "Acer",
        "category": "mobile",
        "price": "5999",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente architecto officia, quos asperiores maxime distinctio nostrum consequatur aliquid repudiandae nam laudantium minus delectus quidem quibusdam! Nihil numquam perferendis accusantium!",
        "image": "/images/mobile4.png"
    },
    {
        "id": 14,
        "name": "Acer",
        "category": "mobile",
        "price": "5999",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente architecto officia, quos asperiores maxime distinctio nostrum consequatur aliquid repudiandae nam laudantium minus delectus quidem quibusdam! Nihil numquam perferendis accusantium!",
        "image": "/images/mobile5.png"
    },
    {
        "id": 15,
        "name": "Acer",
        "category": "screen",
        "price": "5999",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente architecto officia, quos asperiores maxime distinctio nostrum consequatur aliquid repudiandae nam laudantium minus delectus quidem quibusdam! Nihil numquam perferendis accusantium!",
        "image": "/images/screen1.png"
    },
    {
        "id": 16,
        "name": "Acer",
        "category": "screen",
        "price": "5999",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente architecto officia, quos asperiores maxime distinctio nostrum consequatur aliquid repudiandae nam laudantium minus delectus quidem quibusdam! Nihil numquam perferendis accusantium!",
        "image": "/images/screen2.png"
    },
    {
        "id": 17,
        "name": "Acer",
        "category": "screen",
        "price": "5999",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente architecto officia, quos asperiores maxime distinctio nostrum consequatur aliquid repudiandae nam laudantium minus delectus quidem quibusdam! Nihil numquam perferendis accusantium!",
        "image": "/images/screen3.png"
    },
    {
        "id": 18,
        "name": "Acer",
        "category": "screen",
        "price": "5999",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente architecto officia, quos asperiores maxime distinctio nostrum consequatur aliquid repudiandae nam laudantium minus delectus quidem quibusdam! Nihil numquam perferendis accusantium!",
        "image": "/images/screen4.png"
    },
    {
        "id": 19,
        "name": "Acer",
        "category": "screen",
        "price": "5999",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente architecto officia, quos asperiores maxime distinctio nostrum consequatur aliquid repudiandae nam laudantium minus delectus quidem quibusdam! Nihil numquam perferendis accusantium!",
        "image": "/images/screen5.png"
    },
    {
        "id": 20,
        "name": "Acer",
        "category": "watch",
        "price": "5999",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente architecto officia, quos asperiores maxime distinctio nostrum consequatur aliquid repudiandae nam laudantium minus delectus quidem quibusdam! Nihil numquam perferendis accusantium!",
        "image": "/images/watch1.png"
    },
    {
        "id": 21,
        "name": "Acer",
        "category": "watch",
        "price": "5999",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente architecto officia, quos asperiores maxime distinctio nostrum consequatur aliquid repudiandae nam laudantium minus delectus quidem quibusdam! Nihil numquam perferendis accusantium!",
        "image": "/images/watch2.png"
    },
    {
        "id": 22,
        "name": "Acer",
        "category": "watch",
        "price": "5999",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente architecto officia, quos asperiores maxime distinctio nostrum consequatur aliquid repudiandae nam laudantium minus delectus quidem quibusdam! Nihil numquam perferendis accusantium!",
        "image": "/images/watch3.png"
    },
    {
        "id": 23,
        "name": "Acer",
        "category": "watch",
        "price": "5999",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente architecto officia, quos asperiores maxime distinctio nostrum consequatur aliquid repudiandae nam laudantium minus delectus quidem quibusdam! Nihil numquam perferendis accusantium!",
        "image": "/images/watch4.png"
    },
    {
        "id": 24,
        "name": "Acer",
        "category": "watch",
        "price": "5999",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente architecto officia, quos asperiores maxime distinctio nostrum consequatur aliquid repudiandae nam laudantium minus delectus quidem quibusdam! Nihil numquam perferendis accusantium!",
        "image": "/images/watch5.png"
    },
];


router.get('/products', (request, response) => {
    response.status(200).render("home", { productList: products });
});

router.get('/products/:cat', (request, response) => {
    const newList = products.filter(p => p.category === request.params.cat);
    response.status(200).render("home", { productList:newList });
});

router.get("/productDetails/:id", (request, response) => {
    let id = parseInt(request.params.id);

    let product = products.find(product => product.id === id);

    response.status(200).render("productDetails", {
        productId: product.id,
        productName: product.name,
        productImage: product.image,
        productCategory: product.category,
        productPrice: product.price,
        productDesctiption: product.description
    });
});

router.delete('/delete/:id', (request, response) => {
    let id = parseInt(request.params.id);
    products = products.filter(product => product.id !== id);
    response.redirect('/products');
});

router.post('/addProduct', (request, response) => {
    const newProduct = request.body;
    newProduct.id = products.length !== 0 ? products[products.length - 1].id + 1 : 1;

    products.push(newProduct);
    response.redirect('/products');
    console.log(newProduct)
});

router.patch('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const details = req.body;
    let productIndex = products.findIndex(product => product.id === id);

    if (productIndex !== -1) {
        products[productIndex] = { ...products[productIndex], ...details };
        res.status(200).json(products[productIndex]);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

router.put('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const newProduct = req.body;
    let productIndex = products.findIndex(product => product.id === id);

    if (productIndex !== -1) {
        products[productIndex] = { ...newProduct, id: id };
        res.status(200).json(products[productIndex]);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

export default router;