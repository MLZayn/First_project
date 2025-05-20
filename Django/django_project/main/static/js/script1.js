window.addEventListener("DOMContentLoaded", function() {

    let placeholder = document.querySelector("#data-output");
    let tableMassiv = document.getElementById('tableMassiv');
    let tableBody = this.document.getElementById('data-output');
    // massiv = tableMassiv.dataset['stuff']
    // if (massiv){
    //     const massivClear = JSON.parse(massiv.replaceAll("'",'"'));
    //     for (var row of massivClear){
    //         const tr = document.createElement('tr')
    //         tr.insertCell().innerHTML = row[0];
    //         tr.insertCell().innerHTML = row[1];
    //         tableBody.appendChild(tr);
    //     }
    // }

    const response =  fetch('',
        {
            method: 'PATCH',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json: charset-utf-8',
                'X-CSRFToken': document.querySelector('[name-"csrfmiddlewaretoken"]').value,
            }
        })
        .then(response => response.json())
        .then(data => {
            for(var row of data){
                const tr = document.createElement('tr')
                tr.insertCell.innerHTML = row[0];
                tr.insertCell.innerHTML = row[1];
                tableBody.appendChild(tr);
                }
            })


   const addBtn = document.querySelector(".addBtn1")
    
    addBtn.addEventListener('click', async function(){

        const name = document.getElementById('name').value;
        const quantity = document.getElementById('quantity').value;

        json = {"name": name, "quantity": quantity}

        const response = await fetch('',
        {
            method: 'PATCH',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json: charset-utf-8',
                'X-CSRFToken': document.querySelector('[name-"csrfmiddlewaretoken"]').value,
            }
        })
        .then(response => response.json())
        .then(data => {
            for(var row of data){
                const tr = document.createElement('tr')
                tr.insertCell.innerHTML = row[0];
                tr.insertCell.innerHTML = row[1];
                tableBody.appendChild(tr);
                }
            })
        });

    })





