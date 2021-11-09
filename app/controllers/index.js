var service = new ProductService();

function getEle(id){
    return document.getElementById(id);
}

function getListProduct(){
    service.getListProductApi()
    .then(function(result){
        renderData(result.data);
    })
    .catch(function(error) {
        console.log(error);
    });
}
getListProduct();

function renderData(data){
    var content = "";
    data.forEach(function(item, index){
        content += `
        <tr>
            <td>${index+1}</td>
            <td>${item.tenSP}</td>
            <td>${item.gia}</td>
            <td>
                <img src="../../img/${item.hinhAnh}">
            </td>
            <td>${item.moTa}</td>
        </tr>
        `;
    })
    getEle("tblDanhSachSP").innerHTML = content;
}