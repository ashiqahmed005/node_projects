var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopping');
var products = [
    new Product({
    title:  'Sparrow',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
    price:   10,
    imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Tree_Sparrow_August_2007_Osaka_Japan.jpg/1200px-Tree_Sparrow_August_2007_Osaka_Japan.jpg'
}),
    new Product({
        title:  'Barn Swallow',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        price:   10,
        imagePath: 'https://vignette.wikia.nocookie.net/the-phijkchu-cult/images/8/84/IMG_1302_Barn_swallow_female_7_5_DxO_80.jpg/revision/latest?cb=20140112163235'
    }),
    new Product({
        title:  'Robin red brest',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        price:   10,
        imagePath: 'https://www.rspb.org.uk/globalassets/images/birds-and-wildlife/bird-species-illustrations/robin_adult_1200x675.jpg?preset=landscape_mobile'
    }),
    new Product({
        title:  'Blue Tit',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        price:   15,
        imagePath: 'https://www.rspb.org.uk/globalassets/images/birds-and-wildlife/bird-species-illustrations/blue-tit_adult_1200x675.jpg?preset=landscape_mobile'
    }),
    new Product({
        title:  'Sparrow',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        price:   10,
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Tree_Sparrow_August_2007_Osaka_Japan.jpg/1200px-Tree_Sparrow_August_2007_Osaka_Japan.jpg'
    }),
    new Product({
        title:  'Delfi',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        price:   10,
        imagePath: 'http://linnud.loodus.ee/pildid/4697_100120aa380.jpg'
    }),
    new Product({
        title:  'Hoopie',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        price:   10,
        imagePath: 'http://www.barakapres.com/styles/uploads/2016/06/197252_0.jpg'
    })
];

var done =0;
for(let i=0; i<products.length;i++){
    products[i].save(function (err,result) {
        done++;
        if(done === products.length){
            exit();
        }

    });
}
function exit() {
    mongoose.disconnect();
}
