var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    title:  String,
    description: String,
    price:   {type: Number, required: true},
    date: { type: Date, default: Date.now },
    imagePath: {type: String, required:true}
});
module.exports = mongoose.model('Product', productSchema);