var addBtn = document.getElementById("addBtn"); //BOTTONE DI AGGIUNTA DODO
var todoSection = document.querySelector(".todoSection"); //DIV CHE CONTIENE I TODO

const todoList = [
    {
        label: "cose da fare 1",
        status: false,
        date: new Date(),
        order: 2,
    },
    {
        label: "cose da fare 2",
        status: false,
        date: new Date(),
        order: 3,
    },
    {
        label: "cose da fare 3",
        status: true,
        date: new Date(),
        order: 1,
    }
    ]

// addBtn.addEventListener("click",addTodo);

// function addTodo(){
//     var inputText = document.getElementById("inputText"); //ELEMENTO DI INPUT TEXT
//     testoInput = inputText.value; //PRENDE IL VALORE DELL AREA DI TESTO
//     if(testoInput===""){  //CONTROLLA CHE IL CAMPO NON SIA VUOTO
//         alert("Impossibile inserire una To Do vuota!");
//         return;
//     }
//     const nuovoTodoHTML = `
//         <div class="todo">
//             <input type="checkbox">
//             <span class="label">${testoInput}</span>
//             <div class="arrows">
//                 <img class="arrowup" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABPElEQVR4nO3QPyiFURzG8S8iN5GSUopSFmUxGEwGk8XCYrJZjHeym4wWm8nCYjEZTAaDRVmUopSSEokIR2/9Tt3kz3vvff+cU8+nnvHt/X0PiIiIiIgEYNUWtRXA2apEagn4qAn5BJaJzDzwXhPhl4QtEok54O2HCL8kcIHAzQAvf0T4vQKzBGoKeEoR4fcMTBOYSeCxjgi/B/s2COPAXQMRfvfARNkRo8BNExF+t8BYWRFDwGUGEX7XwEjREYPARYYRflfAcFER/cBZDhF+58BA3hG9wEmOEc52CvTlFdEDHBcQ4WzJv7qzjqgAhwVGONsR0JVVRAewX0KEsx0Anc1GtAE7JUY42x7Q3mhEK7AdQISz7drD1qUF2AzgePdtW/bAqa0HcLT7ZRtpI9YCONb9s+RGEREREREhal+yf8xCb2TVZgAAAABJRU5ErkJggg==" alt="sort-up">
//                 <img class="arrowdown" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABHElEQVR4nO3SMSiFYRSA4QcRiZSUUpSyKIvBYDKYLBYWk81iNNnvZLTYTBYWi8lgMhgsyqIUpZSUSES4Ur+SIpf/3vvdnKfOeOq8fR8hhBBCCCGEEHJXQDHxKfw0ZimBY4tfzHIpr1KHlQSOLn6aVdSX+sXeFtYSOL6YzQYa/NLb4noCEZto9EdN2KpixDaa5aQFO1WI2EWrnLVjr4IRe2hTJh3Yr0DEATqVWRcOyxhxhG4V0oPjMkScok+F9eIkx4gz9KuSAZznEHGBQVU2hMs/RFxhWCJGcPOLiOtsNymjuC0h4g5jEjWO+x9EPGBC4ibx+E3EE6bViKns4M8Rz5hRY2azw98jXjCnRs1/CFlQ4xazCSGEEEL4b14BnfLMQvEtlakAAAAASUVORK5CYII=" alt="sort-down">
//             </div>
//         </div>
//     `;

//     todoSection.insertAdjacentHTML('beforeend', nuovoTodoHTML);
//     inputText.value = "";  //svuota la casella di testo
//     inputText.focus();  //riporta il focus direttamente sulla casella


// }

//prendo tutti gli elementi della lista ToDo Json
//GIUSTO PER INDICARE I TO DO INSERITI DALL JSON
// const elementoDiv = document.createElement("div");
//     elementoDiv.innerText ="To Do inserite dal JSON";
//     elementoDiv.classList.add("todo")
//     todoSection.append(elementoDiv);

//ESEGUE LA FUNZIONE
disegnaElenco();

//CREA LE TODO IN BASE AL JSON
function disegnaElenco(){
    todoSection.innerText = '';

    todoList.forEach(function(item)
    {
    var testoInput= item.label;
    const nuovoTodoHTML = `
        <div class="todo">
            <input type="checkbox">
            <span class="label">${testoInput}</span>
            <div class="arrows">
                <img class="arrowup" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABPElEQVR4nO3QPyiFURzG8S8iN5GSUopSFmUxGEwGk8XCYrJZjHeym4wWm8nCYjEZTAaDRVmUopSSEokIR2/9Tt3kz3vvff+cU8+nnvHt/X0PiIiIiIgEYNUWtRXA2apEagn4qAn5BJaJzDzwXhPhl4QtEok54O2HCL8kcIHAzQAvf0T4vQKzBGoKeEoR4fcMTBOYSeCxjgi/B/s2COPAXQMRfvfARNkRo8BNExF+t8BYWRFDwGUGEX7XwEjREYPARYYRflfAcFER/cBZDhF+58BA3hG9wEmOEc52CvTlFdEDHBcQ4WzJv7qzjqgAhwVGONsR0JVVRAewX0KEsx0Anc1GtAE7JUY42x7Q3mhEK7AdQISz7drD1qUF2AzgePdtW/bAqa0HcLT7ZRtpI9YCONb9s+RGEREREREhal+yf8xCb2TVZgAAAABJRU5ErkJggg==" alt="sort-up">
                <img class="arrowdown" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABHElEQVR4nO3SMSiFYRSA4QcRiZSUUpSyKIvBYDKYLBYWk81iNNnvZLTYTBYWi8lgMhgsyqIUpZSUSES4Ur+SIpf/3vvdnKfOeOq8fR8hhBBCCCGEEHJXQDHxKfw0ZimBY4tfzHIpr1KHlQSOLn6aVdSX+sXeFtYSOL6YzQYa/NLb4noCEZto9EdN2KpixDaa5aQFO1WI2EWrnLVjr4IRe2hTJh3Yr0DEATqVWRcOyxhxhG4V0oPjMkScok+F9eIkx4gz9KuSAZznEHGBQVU2hMs/RFxhWCJGcPOLiOtsNymjuC0h4g5jEjWO+x9EPGBC4ibx+E3EE6bViKns4M8Rz5hRY2azw98jXjCnRs1/CFlQ4xazCSGEEEL4b14BnfLMQvEtlakAAAAASUVORK5CYII=" alt="sort-down">
            </div>
        </div>
    `;
    todoSection.insertAdjacentHTML('beforeend', nuovoTodoHTML);
    }

    );
    }

    //***************APPUNTI DELLA LEZIONE************

    //CODICE DEL PROF SEMPLICE SINGOLO ELEMENTO
    //const elementoDiv = document.createElement("div");
    //elementoDiv.innerText = item.label;
    //elementoDiv.classList.add("todo")
    //todoSection.append(elementoDiv);

    //CONFIGURAZIONE DEL BOTTONE
    addBtn.addEventListener("click",addItem);
    function addItem(){

        var inputText = document.getElementById("inputText"); //ELEMENTO DI INPUT TEXT
        var testoInput = inputText.value; //PRENDE IL VALORE DELL AREA DI TESTO
        const newTodo = {
            label: testoInput,
            status: false,
            order: 1,
        }
        if(testoInput===""){  //CONTROLLA CHE IL CAMPO NON SIA VUOTO
        alert("Impossibile inserire una To Do vuota!");
        return;
        }
        todoList.push(newTodo);
        disegnaElenco();
        inputText.value = "";  //svuota la casella di testo
        inputText.focus();  //riporta il focus direttamente sulla casella
        console.log(todoList)
  
    }