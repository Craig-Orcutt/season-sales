'use strict';

// take the data from XHR and fromat it so it can go in the DOM

// loop through products and add the category name to each product item

module.exports.formatData = (catArr, prodArr) => {
    console.log('hello', catArr, prodArr);  
    let prodsForDOM = prodArr.map( (prod) =>{
        prod.category = null;
        catArr.forEach((category) => {
            if(prod.category_id === category.id)
                prod.category = category.name;
        });
        return prod;
    });
    console.log('prodsForDOM', prodsForDOM);

};

