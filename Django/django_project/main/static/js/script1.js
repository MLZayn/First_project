window.addEventListener("DOMContentLoaded", function() {

    let placeholder = document.querySelector("#data-output");
    let tableMassiv = document.getElementById('tableMassiv');
    let tableBody = this.document.getElementById('data-output');

    document.getElementById('tableMassiv').addEventListener('dblclick', function(e) {
    // Проверяем, что кликнули по ячейке таблицы
    if (e.target.tagName === 'TD') {
        // Получаем родительскую строку
        const row = e.target.closest('tr');
        
        // Извлекаем данные из ячеек
        const cells = row.querySelectorAll('td');
        const data = {
        name: cells[0].textContent,
        quantity: cells[1].textContent,
        };
        
        const modal = new bootstrap.Modal(document.getElementById('change-modal'));

        // Заполняем модальное окно
        const nameField = document.getElementById('changeName');
        const quantityField = document.getElementById('changeQuantity');

        nameField.value = data.name;
        quantityField.value = data.quantity
        console.log(nameField.value);
        
        // Показываем модальное окно
        modal.show();
    }
    });

    function createTable(tableBody) {
        fetch('', {
            method: 'PATCH',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json: charset-utf-8',
                'X-CSRFToken': document.querySelector('[name="csrfmiddlewaretoken"]').value,
            }
        })
        .then(response => response.json())
        .then(data => {
            for(var row of data){
                const tr = document.createElement('tr')
                tr.insertCell().innerHTML = row[0];
                tr.insertCell().innerHTML = row[1];
                tableBody.appendChild(tr);
                }
                })
            }

        createTable(tableBody);
    

    // const response =  fetch('',
    //     {
    //         method: 'PATCH',
    //         cache: 'no-cache',
    //         credentials: 'same-origin',
    //         headers: {
    //             'Content-Type': 'application/json: charset-utf-8',
    //             'X-CSRFToken': document.querySelector('[name="csrfmiddlewaretoken"]').value,
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         for(var row of data){
    //             const tr = document.createElement('tr')
    //             tr.insertCell().innerHTML = row[0];
    //             tr.insertCell().innerHTML = row[1];
    //             tableBody.appendChild(tr);
    //             }
    //         })


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
                'X-CSRFToken': document.querySelector('[name="csrfmiddlewaretoken"]').value,
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

    let row = null;
    document.getElementById('tableMassiv').addEventListener('click', event => {
            let r = event.target.closest('tr');
            if (!r || r === row)
            return;
            
            if (row)
            delete row.dataset.selected;
            
            (row = r).dataset.selected = true;
        });

 });





