window.addEventListener("DOMContentLoaded", function() {

    let placeholder = document.querySelector("#data-output");
    let tableMassiv = document.getElementById('tableMassiv');
    let tableBody = this.document.getElementById('data-output');
    massiv = tableMassiv.dataset['stuff']
    if (massiv){
        const massivClear = JSON.parse(massiv.replaceAll("'",'"'));
        for (var row of massivClear){
            const tr = document.createElement('tr')
            tr.insertCell().innerHTML = row[0];
            tr.insertCell().innerHTML = row[1];
            tableBody.appendChild(tr);
        }
    }
    
});





// fetch("static/js/entityes.json")
// .then(function(response){
//     return response.json();
// })
// .then(function(entityes){
//     let placeholder = document.querySelector("#data-output");
//     let out = "";
//     for(let entity of entityes){
//         out += `
//             <tr>
//                 <td style="background-color: #242323 !important; color: #ffffff">${entity.name}</td>
//                 <td style="background-color: #242323 !important; color: #ffffff">${entity.count}</td>
//             </tr>
//         `;
//     }
//     placeholder.innerHTML = out;
// })




// window.addEventListener("DOMContentLoaded", event => {
//     console.log("DOM fully loaded and parsed")
//     const addBtn = document.querySelector(".addBtn1")
  
//     const handleClick = () => {
//         var name = document.getElementById('name').value;
// 		console.log(name);
//         var quantity = document.getElementById('quantity').value;
// 		console.log(quantity);
//     }

//     addBtn.addEventListener('click', () => {
//         var name = document.getElementById('name').value;
// 		console.log(name);
//         var quantity = document.getElementById('quantity').value;
// 		console.log(quantity);
//         var table = document.getElementById('data-output')
//         var row =   `<tr>
//                         <td style="background-color: #242323 !important; color: #ffffff">${name}</td>
//                         <td style="background-color: #242323 !important; color: #ffffff">${quantity}</td>
//                     </tr>`
//         table.innerHTML +=row

//     })
// });