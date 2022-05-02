function Service(){
    this.fetchData=()=>{
        return axios({
            url:"https://625569228646add390d66a44.mockapi.io/api/products",
            method:"GET",
        })
    }
}