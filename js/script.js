fetch("/First_project/js/entityes.json")
.then(function(response){
    return response.json();
})
.then(function(entityes){
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for(let entity of entityes){
        out += `
            <tr>
                <td>${entity.name}</td>
                <td>${entity.count}</td>
            </tr>
        `;
    }
    placeholder.innerHTML = out;
})