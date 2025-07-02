<<<<<<< HEAD


fetch("static/js/entityes.json")
.then(function(response){
    return response.json();
})
.then(function(entityes){
=======
window.addEventListener("DOMContentLoaded", function() {

>>>>>>> 305a8b92e414b17fab04b32ef5ae14de15f13c30
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

<<<<<<< HEAD

window.addEventListener("DOMContentLoaded", event => {
    console.log("DOM fully loaded and parsed")
    const addBtn = document.querySelector(".addBtn1")

    const input_quantity = document.getElementById('quantity')

    if (!input_quantity.checkValidity()){
        input_quantity.focus();
        return
    }
  
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

function editJson() {
    // Редактирование данных
    jsonData.newProperty = "new value";
    jsonData.existingProperty = "updated value";
    
    // Подготовка данных для отправки
    const dataToSend = JSON.stringify(jsonData);
    
    // Отправка на сервер
    fetch('/update-json/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken'), // Для защиты CSRF
        },
        body: dataToSend
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

// Функция для получения CSRF токена
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
=======
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





>>>>>>> 305a8b92e414b17fab04b32ef5ae14de15f13c30
