
//consumindo API através do axios
const request = () => {
    return axios.get('http://makeup-api.herokuapp.com/api/v1/products.json')
}

const filterBrand = (brand) =>{
    return axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`)
}

export const Service = { 
    request,
    filterBrand    
}


