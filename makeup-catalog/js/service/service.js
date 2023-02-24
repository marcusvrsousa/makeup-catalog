
//consumindo API através do axios
const request = () => {
    return axios.get('http://makeup-api.herokuapp.com/api/v1/products.json')
}

const filterBrand = (brand) =>{
    return axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`)
}

const filterType = (type) =>{
    return axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${type}`)
}

const filterPriceGreaterThan = () =>{
    return axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?price_greater_than=25`)
}

const filterPriceLessThan = () =>{
    return axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?price_less_than=25`)
}

const filterBestRating = () =>{
    return axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?rating_greater_than=3`)
}

export const Service = { 
    request,
    filterBrand,
    filterType,
    filterPriceGreaterThan,
    filterPriceLessThan,
    filterBestRating
}


