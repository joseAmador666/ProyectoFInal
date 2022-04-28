var client_id1 = ObjectId()
var client_id2 = ObjectId()
var client_id3 = ObjectId()
var client_id4 = ObjectId()
var client_id5 = ObjectId()

var delivery_man_id1 = ObjectId()
var delivery_man_id2 = ObjectId()
var delivery_man_id3 = ObjectId()

var business_id1 = ObjectId()
var business_id2 = ObjectId()
var business_id3 = ObjectId()
var business_id4 = ObjectId()
var business_id5 = ObjectId()
var business_id6 = ObjectId()
var business_id7 = ObjectId()
var business_id8 = ObjectId()
var business_id9 = ObjectId()
var business_id10 = ObjectId()
var business_id11 = ObjectId()

var product_id1 = ObjectId()
var product_id2 = ObjectId()
var product_id3 = ObjectId()
var product_id4 = ObjectId()
var product_id5 = ObjectId()
var product_id6 = ObjectId()
var product_id7 = ObjectId()
var product_id8 = ObjectId()
var product_id9 = ObjectId()


db.clients.insertMany([{
        "_id": client_id1,
        "fullname": "Jose Perez",
        "email": "jose.perez@gmail.com",
        "password": "12345678",
        "cart": []
    },
    {
        "_id": client_id2,
        "fullname": "Juan Perez",
        "email": "juan.perez@gmail.com",
        "password": "12345678",
        "cart": []
    },
    {
        "_id": client_id3,
        "fullname": "Cristiano Ronaldo",
        "email": "cristiano.Ronaldo@gmail.com",
        "password": "12345678",
        "cart": []
    },
   
   
]);

db.delivery_men.insertMany([{
        "_id": delivery_man_id1,
        "admitted": false,
        "fullname": "Goku",
        "email": "Goku@gmail.com",
        "password": "12341234",
    },
    {
        "_id": delivery_man_id2,
        "admitted": true,
        "fullname": "Gohan",
        "email": "Gohan@gmail.com",
        "password": "12341234",
    },
    {
        "_id": delivery_man_id3,
        "admitted": true,
        "fullname": "Benzema",
        "email": "Benzema.lopez@gmail.com",
        "password": "12341234",
    },
]);

db.admins.insertMany([{
    "_id": ObjectId(),
    "email": "ENH.admin@gmail.com",
    "password": "12341234",
}, ]);

db.categories.insertMany(
    [{
            "_id": ObjectId(),
            "name": "Restaurante",
            "logo": "restaurant",
            "business_list": [{
                    "_id": business_id1,
                    "name": "Pizza Hut",
                    "logo": "https://d1ralsognjng37.cloudfront.net/ffb10c0e-0013-48c4-89af-48d9fe985962.jpeg",
                    "banner": "https://d1ralsognjng37.cloudfront.net/ffb10c0e-0013-48c4-89af-48d9fe985962.jpeg",
                    "description": "Pizza hut",
                    "rating":4 ,
                    "phone_number": "555Pizza",
                    "email": "pizzahut@gmail.com",
                    "products": [{
                            "_id": product_id1,
                            "name": "Pizza mia",
                            "price": 99.99,
                            "image": "https://d1ralsognjng37.cloudfront.net/ffb10c0e-0013-48c4-89af-48d9fe985962.jpeg",
                        },
                        {
                            "_id": product_id2,
                            "name": "combo supremo",
                            "price": 400.00,
                            "image": "https://d1ralsognjng37.cloudfront.net/ffb10c0e-0013-48c4-89af-48d9fe985962.jpeg",
                        },
                        {
                            "_id": product_id3,
                            "name": "4 Estaciones",
                            "price": 345.00,
                            "image": "https://d1ralsognjng37.cloudfront.net/ffb10c0e-0013-48c4-89af-48d9fe985962.jpeg",
                        },
                    ]
                },
                {
                    "_id": business_id2,
                    "name": "KFC",
                    "logo": "https://meetmeprograms.hu/wp-content/uploads/2017/06/kfc-head.jpg",
                    "banner": "https://meetmeprograms.hu/wp-content/uploads/2017/06/kfc-head.jpg",
                    "description": "Descripción de KFC",
                    "rating": 3,
                    "phone_number": "1111111",
                    "email": "kfc@gmail.com",
                    "products": [{
                            "_id": product_id4,
                            "name": "KFC PACK",
                            "price": 400.00,
                            "image": "https://meetmeprograms.hu/wp-content/uploads/2017/06/kfc-head.jpg",
                        },
                        {
                            "_id": product_id5,
                            "name": "pie de mora",
                            "price": 38.00,
                            "image": "https://meetmeprograms.hu/wp-content/uploads/2017/06/kfc-head.jpg",
                        },
                        {
                            "_id": product_id6,
                            "name": "Pollo picante",
                            "price": 99.00,
                            "image": "https://www.mundiario.com/media/mundiario/images/2017/06/25/2017062518045770637.jpg",
                        },
                    ]
                },
                {
                    "_id": business_id3,
                    "name": "POPEYES",
                    "logo": "https://th.bing.com/th/id/R.9551c00232e452431d67b39775a2c110?rik=pDmghqB581JJtg&pid=ImgRaw&r=0",
                    "banner": "https://th.bing.com/th/id/R.9551c00232e452431d67b39775a2c110?rik=pDmghqB581JJtg&pid=ImgRaw&r=0",
                    "description": "POPEYES",
                    "rating": 4,
                    "phone_number": "12345678",
                    "email": "popeyes@gmail.com",
                    "products": [{
                            "_id": product_id7,
                            "name": "elote",
                            "price": 43.00,
                            "image": "https://th.bing.com/th/id/OIP.lVHAAjLkUkMdZ7OXdaLBEAHaFj?pid=ImgDet&rs=1",
                        },
                        {
                            "_id": product_id8,
                            "name": "Pechu Sandwich",
                            "price": 129.00,
                            "image": "https://th.bing.com/th/id/OIP.lVHAAjLkUkMdZ7OXdaLBEAHaFj?pid=ImgDet&rs=1",
                        },
                        {
                            "_id": product_id9,
                            "name": "popeyes especial",
                            "price": 175.00,
                            "image": "https://th.bing.com/th/id/OIP.lVHAAjLkUkMdZ7OXdaLBEAHaFj?pid=ImgDet&rs=1",
                        },
                    ]
                },
            ]
        },
        {
            "_id": ObjectId(),
            "name": "Supermercado",
            "logo": "market",
            "business_list": [{
                "_id": business_id4,
                "name": "Maxi Despensa",
                "logo": "https://th.bing.com/th/id/R.2f3da01f1cfec7416fc411f8a6ec1ff6?rik=3uO5crU2tDlmBQ&riu=http%3a%2f%2fcrnnoticias.com%2fwp-content%2fuploads%2f2017%2f06%2f2017-06-02-PHOTO-00000004.jpg&ehk=xulS4fI%2bhyxlhMEU%2b0wliCn4nuRCvvFgkKq6Qt9R3B4%3d&risl=&pid=ImgRaw&r=0",
                "banner": "https://th.bing.com/th/id/R.2f3da01f1cfec7416fc411f8a6ec1ff6?rik=3uO5crU2tDlmBQ&riu=http%3a%2f%2fcrnnoticias.com%2fwp-content%2fuploads%2f2017%2f06%2f2017-06-02-PHOTO-00000004.jpg&ehk=xulS4fI%2bhyxlhMEU%2b0wliCn4nuRCvvFgkKq6Qt9R3B4%3d&risl=&pid=ImgRaw&r=0",
                "description": "Todo barato",
                "rating": 5,
                "phone_number": "32323235",
                "email": "MAxiDespensa@gmail.com",
                "products": []
            }, ]
        },
        {
            "_id": ObjectId(),
            "name": "Farmacia",
            "logo": "drugStore",
            "business_list": [{
                "_id": business_id5,
                "name": "Farmacias Siman",
                "logo": "https://th.bing.com/th/id/OIP.aagB6DzC0KyjLgvPjmuNTwHaCs?pid=ImgDet&rs=1",
                "banner": "https://th.bing.com/th/id/OIP.aagB6DzC0KyjLgvPjmuNTwHaCs?pid=ImgDet&rs=1",
                "description": "Descripción de Farmacias Siman",
                "rating": 4,
                "phone_number": "32323236",
                "email": "siman@gmail.com",
                "products": []
            }, ]
        },
        {
            "_id": ObjectId(),
            "name": "Fiesta",
            "logo": "party",
            "business_list": [{
                    "_id": business_id6,
                    "name": "Smirnoff ",
                    "logo": "https://jumboargentina.vteximg.com.br/arquivos/ids/580828-750-750/Vodka-Smirnoff-700-Ml-1-30335.jpg?v=637220856183930000",
                    "banner": "https://jumboargentina.vteximg.com.br/arquivos/ids/580828-750-750/Vodka-Smirnoff-700-Ml-1-30335.jpg?v=637220856183930000",
                    "description": "Descripción de Smirnoff ",
                    "rating": 4,
                    "phone_number": "32323237",
                    "email": "smirnoff@gmail.com",
                    "products": []
                }
            ]
        },
        {
            "_id": ObjectId(),
            "name": "Ferretería",
            "logo": "tool",
            "business_list": [{
                "_id": business_id8,
                "name": "La Mundial",
                "logo": "https://th.bing.com/th/id/OIP.JLMPpJpjtOzHixwFhsMDWwHaDQ?pid=ImgDet&rs=1",
                "banner": "https://th.bing.com/th/id/OIP.JLMPpJpjtOzHixwFhsMDWwHaDQ?pid=ImgDet&rs=1",
                "description": "Descripción de La Mundial",
                "rating": 5,
                "phone_number": "12345678",
                "email": "lamundial@gmail.com",
                "products": []
            }, ]
        },
        {
            "_id": ObjectId(),
            "name": "Joyería",
            "logo": "jewel",
            "business_list": [{
                "_id": business_id9,
                "name": "pandora",
                "logo": "https://i2.wp.com/fortuna.perfil.com/wp-content/uploads/2018/06/0627_pandora_joyas_00.jpg?fit=728%2C500&ssl=1",
                "banner": "https://i2.wp.com/fortuna.perfil.com/wp-content/uploads/2018/06/0627_pandora_joyas_00.jpg?fit=728%2C500&ssl=1",
                "description": "joyeria de pandora",
                "rating": 4,
                "phone_number": "32323240",
                "email": "pandora@gmail.com",
                "products": []
            }, ]
        },
        {
            "_id": ObjectId(),
            "name": "Café",
            "logo": "coffe",
            "business_list": [{
                "_id": business_id10,
                "name": "Dunkin Donuts",
                "logo": "https://unifiedcenters.com/wp-content/uploads/2016/05/dunkin-donuts-logo-1150x1031.jpg",
                "banner": "https://emilycontois.files.wordpress.com/2012/12/americanrunsondunkin.jpg?w=840",
                "description": "Descripción de Dunkin Donuts",
                "rating": 4,
                "phone_number": "32323241",
                "email": "dunkindonuts@gmail.com",
                "products": []
            }, ]
        },
        {
            "_id": ObjectId(),
            "name": "Fitness",
            "logo": "exercise",
            "business_list": [{
                "_id": business_id11,
                "name": "BUSHIDO",
                "logo": "https://4.bp.blogspot.com/-TJqCZmN4kTw/WTkbz8rZtiI/AAAAAAAADAg/_c9GuusXUqMOh0GosqdjRnWZaLh3HBTSwCK4B/s400/THE%2BNEW%2BYOU.png",
                "banner": "https://4.bp.blogspot.com/-TJqCZmN4kTw/WTkbz8rZtiI/AAAAAAAADAg/_c9GuusXUqMOh0GosqdjRnWZaLh3HBTSwCK4B/s400/THE%2BNEW%2BYOU.png",
                "description": "BUSHIDO",
                "rating": 4,
                "phone_number": "32323242",
                "email": "gymhero@gmail.com",
                "products": []
            }, ]
        },
    ]
);


db.orders.insertMany([{
        "_id": ObjectId(),
        "business_id": business_id3,
        "client_id": client_id4,
        "delivery_man_id": null,
        "delivery_state": '',
        "location": {
            "latitude": 14.08091304279178,
            "longitude": -87.18844413757326,
        },
        "payment_info": {
            "card_number": 1234123412341234,
            "cvv": 123,
            "expired_date": "24/12/24",
        },
        "order_products": [{
                "product_id": product_id7,
                "amount": 2
            },
            {
                "product_id": product_id8,
                "amount": 1
            },
        ],
    },
    {
        "_id": ObjectId(),
        "business_id": business_id1,
        "client_id": client_id2,
        "delivery_man_id": delivery_man_id2,
        "delivery_state": 'En destino',
        "location": {
            "latitude": 14.084133821922677,
            "longitude": -87.19985961914062,
        },
        "payment_info": {
            "card_number": 1234123412341234,
            "cvv": 123,
            "expired_date": "24/12/24",
        },
        "order_products": [{
                "product_id": product_id1,
                "amount": 2
            },
            {
                "product_id": product_id3,
                "amount": 1
            },
        ],
    },
    {
        "_id": ObjectId(),
        "business_id": business_id1,
        "client_id": client_id2,
        "delivery_man_id": delivery_man_id2,
        "delivery_state": 'Tomada',
        "location": {
            "latitude": 14.084133821922677,
            "longitude": -87.19985961914062,
        },
        "payment_info": {
            "card_number": 1234123412341234,
            "cvv": 123,
            "expired_date": "24/12/24",
        },
        "order_products": [{
                "product_id": product_id1,
                "amount": 2
            },
            {
                "product_id": product_id3,
                "amount": 1
            },
        ],
    },
    {
        "_id": ObjectId(),
        "business_id": business_id2,
        "client_id": client_id5,
        "delivery_man_id": delivery_man_id2,
        "delivery_state": 'Tomada',
        "location": {
            "latitude": 14.067176092157112,
            "longitude": -87.18342304229736,
        },
        "payment_info": {
            "card_number": 1234123412341234,
            "cvv": 123,
            "expired_date": "24/12/24",
        },
        "order_products": [{
                "product_id": product_id4,
                "amount": 2
            },
            {
                "product_id": product_id5,
                "amount": 1
            },
        ],
    },
]);