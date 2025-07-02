

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