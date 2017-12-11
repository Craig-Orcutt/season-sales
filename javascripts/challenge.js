"use strict";
let formatter = require('./formatter');
// TO DO:
//      Need html page with the following elements: list of products, select element, ;

// need json files of products and categories

// JS
//      format data
//      xhr: need something to interact with data
//      display data on html page
//      DOM Interactions (User input)
//      "control panel" that defines where things get started with JS files and their interact''

// categories XHR
let categoryData = null;

const categoryReq = new XMLHttpRequest();
const parseCatData = () => {
    const catData = JSON.parse(event.target.responseText).categories;
    categoryData = catData;
    prodsReq.send();
};

categoryReq.addEventListener('load', parseCatData);
categoryReq.open('GET', 'data/categories.json');
categoryReq.send();


//product XHR
const prodsReq = new XMLHttpRequest();
const parseProdData = () => {
    const prodData = JSON.parse(event.target.responseText). products;
    formatter.formatData(categoryData, prodData);
    
};

prodsReq.addEventListener('load', parseProdData);
prodsReq.open('GET', 'data/products.json');
