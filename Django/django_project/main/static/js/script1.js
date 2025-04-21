fetch("static/js/entityes.json")
.then(function(response){
    return response.json();
})
.then(function(entityes){
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for(let entity of entityes){
        out += `
            <tr>
                <td style="background-color: #242323 !important; color: #ffffff">${entity.name}</td>
                <td style="background-color: #242323 !important; color: #ffffff">${entity.count}</td>
            </tr>
        `;
    }
    placeholder.innerHTML = out;
})

// var tableData = [
//     {
//         'name': 'bmat',
//         'count': '451',
//     },
// ]
// buildTable(tableData)

// function buildTable(data){
//     var table = document.getElementById('data-output')
//     for (var i in data){
        // var row =   `<tr>
        //                 <td style="background-color: #242323 !important; color: #ffffff">${data[i].name}</td>
        //                 <td style="background-color: #242323 !important; color: #ffffff">${data[i].count}</td>
        //             </tr>`
        // table.innerHTML +=row
    
//     }
    
// }



window.addEventListener("DOMContentLoaded", event => {
    console.log("DOM fully loaded and parsed")
    const addBtn = document.querySelector(".addBtn1")
  
    const handleClick = () => {
        var name = document.getElementById('name').value;
		console.log(name);
        var quantity = document.getElementById('quantity').value;
		console.log(quantity);
    }

    addBtn.addEventListener('click', () => {
        var name = document.getElementById('name').value;
		console.log(name);
        var quantity = document.getElementById('quantity').value;
		console.log(quantity);
        var table = document.getElementById('data-output')
        var row =   `<tr>
                        <td style="background-color: #242323 !important; color: #ffffff">${name}</td>
                        <td style="background-color: #242323 !important; color: #ffffff">${quantity}</td>
                    </tr>`
        table.innerHTML +=row

    })
});