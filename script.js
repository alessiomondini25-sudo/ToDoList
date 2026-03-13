var addBtn = document.getElementById("addBtn"); //BOTTONE DI AGGIUNTA DODO
var todoSection = document.querySelector(".todoSection"); //DIV CHE CONTIENE I TODO
var inputText = document.getElementById("inputText"); //ELEMENTO DI INPUT TEXT

const LS_TODOLIST_KEY = "todolist";

const templatenewTodo = {
    label: "",
    status: false,
    order: 1,
    priorita: 1,
}
//creare un array di oggetti che rappresentano le todo
const savedTodoList = localStorage.getItem(LS_TODOLIST_KEY);
const todoList = savedTodoList ? JSON.parse(savedTodoList) : [];


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
function disegnaElenco() {
    todoSection.innerText = ''; //svuotare la lista prima di ridisegnarla


    //METODO NON TROPPO EFFICIENTE
    // todoList.sort(function(a,b){
    //     var ordinamentoOrder = a.order - b.order;
    //     if(ordinamentoOrder===0){
    //         var ordinamentoPriorita = a.priorita - b.priorita;
    //         return ordinamentoPriorita;
    //     }
    //     return ordinamentoOrder;

    // });

    //METODO EFFICIENTE E SCALABILE
    todoList.sort(function (a, b) {
        //return (a.priorita*100 + a.order ) - (b.priorita*100 + b.order );
        return (b.order ) - (a.order );
    });


    localStorage.setItem(LS_TODOLIST_KEY,JSON.stringify(todoList));

    todoList.forEach(function (item,index) {
        var testoInput = item.label;
        const isChecked = item.status ? "checked" : "";
        const classeExtra = item.status ? "todochecked" : "";
        
        //<div class="todo ${classeExtra}" data-todoorder="${item.order}" data-todoid="${index}">

        const nuovoTodoHTML = `
        <div class="todo ${classeExtra}" data-todoorder="${item.order}" data-todoid="${index}">
            <input class="checkbox" type="checkbox" ${isChecked}>
            <span class="label ">${testoInput}</span>
            <div class="arrows">
                <img class="arrowup" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABPElEQVR4nO3QPyiFURzG8S8iN5GSUopSFmUxGEwGk8XCYrJZjHeym4wWm8nCYjEZTAaDRVmUopSSEokIR2/9Tt3kz3vvff+cU8+nnvHt/X0PiIiIiIgEYNUWtRXA2apEagn4qAn5BJaJzDzwXhPhl4QtEok54O2HCL8kcIHAzQAvf0T4vQKzBGoKeEoR4fcMTBOYSeCxjgi/B/s2COPAXQMRfvfARNkRo8BNExF+t8BYWRFDwGUGEX7XwEjREYPARYYRflfAcFER/cBZDhF+58BA3hG9wEmOEc52CvTlFdEDHBcQ4WzJv7qzjqgAhwVGONsR0JVVRAewX0KEsx0Anc1GtAE7JUY42x7Q3mhEK7AdQISz7drD1qUF2AzgePdtW/bAqa0HcLT7ZRtpI9YCONb9s+RGEREREREhal+yf8xCb2TVZgAAAABJRU5ErkJggg==" alt="sort-up">
                <img class="arrowdown" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABHElEQVR4nO3SMSiFYRSA4QcRiZSUUpSyKIvBYDKYLBYWk81iNNnvZLTYTBYWi8lgMhgsyqIUpZSUSES4Ur+SIpf/3vvdnKfOeOq8fR8hhBBCCCGEEHJXQDHxKfw0ZimBY4tfzHIpr1KHlQSOLn6aVdSX+sXeFtYSOL6YzQYa/NLb4noCEZto9EdN2KpixDaa5aQFO1WI2EWrnLVjr4IRe2hTJh3Yr0DEATqVWRcOyxhxhG4V0oPjMkScok+F9eIkx4gz9KuSAZznEHGBQVU2hMs/RFxhWCJGcPOLiOtsNymjuC0h4g5jEjWO+x9EPGBC4ibx+E3EE6bViKns4M8Rz5hRY2azw98jXjCnRs1/CFlQ4xazCSGEEEL4b14BnfLMQvEtlakAAAAASUVORK5CYII=" alt="sort-down">
            </div>
        </div>
    `;
        

        todoSection.insertAdjacentHTML('beforeend', nuovoTodoHTML);
    }
    );

        //FUNZIONE SPOSTAMENTO

        var arrowdown = document.querySelectorAll(".arrowdown");
        var arrowup = document.querySelectorAll(".arrowup");

        //MOVE UP
        arrowup.forEach(function (item, index) {
        item.addEventListener("click", moveTodoUp);
        }
        );

        //MOVE DOWN
        arrowdown.forEach(function (item, index) {
        item.addEventListener("click", moveTodoDown);
        }
        );



    //CONTROLLA PER OGNI TODO LO STATO DELLA CHECKBOX PER VERIFICARE EVENTUALI CAMBIAMENTI
    const inputCheckBox = document.querySelectorAll(".checkbox");
    inputCheckBox.forEach(function (item, index) {
        item.addEventListener("change", function () {
            // AGGIORNIAMO IL DATO: cambiamo lo status nell'array originale
            todoList[index].status = item.checked;
            if (todoList[index].status == true) {
                todoList[index].priorita = 100;
            }
            else {
                todoList[index].priorita = 1;
            }

            // RIDISEGNIAMO: la funzione ricrea la lista leggendo il nuovo status
            disegnaElenco();
        });

    }
    );

   

}

function moveTodoUp(event) {
    const todoElement = event.target.closest('.todo');
    const prevTodoElement = todoElement.previousElementSibling;

    const currentOrderValue = parseInt(todoElement.dataset.todoorder);

    if(!prevTodoElement){
        return;
    }

    const prevOrderValue = parseInt(prevTodoElement.dataset.todoorder);

    const TodoItem = todoList.find(
        function(el)
        {
            return el.order === currentOrderValue;
        });


    const prevTodoItem = todoList.find(
        function(el)
        {
            return el.order === prevOrderValue;
        });

    //console.log("ATTUALE ",{currentOrderValue});
    //console.log("VECCHIO ",{prevOrderValue});
    const oldTodoItemOrder = TodoItem.order;
    //console.log("oldTodoItemOrder  ",{oldTodoItemOrder});
    TodoItem.order = prevTodoItem.order;
    //console.log("NUOVO ORDER  ",{prevOrderValue});
    prevTodoItem.order = oldTodoItemOrder;
    //console.log("NUOVO ORDER PREV ",{oldTodoItemOrder});
    disegnaElenco();

}


function moveTodoDown(event) {

    const todoElement = event.target.closest('.todo');
    const nextTodoElement = todoElement.nextElementSibling;

    const currentOrderValue = parseInt(todoElement.dataset.todoorder);

    if(!nextTodoElement){
        return;
    }

    const nextOrderValue = parseInt(nextTodoElement.dataset.todoorder);


    const TodoItem = todoList.find(
        function(el)
        {
            return el.order === currentOrderValue;
        });


    const nextTodoItem = todoList.find(
        function(el)
        {
            return el.order === nextOrderValue;
        });

    const oldTodoItemOrder = TodoItem.order;

    TodoItem.order = nextTodoItem.order;

    nextTodoItem.order = oldTodoItemOrder;

    disegnaElenco();


}

//***************APPUNTI DELLA LEZIONE************

//CODICE DEL PROF SEMPLICE SINGOLO ELEMENTO
//const elementoDiv = document.createElement("div");
//elementoDiv.innerText = item.label;
//elementoDiv.classList.add("todo")
//todoSection.append(elementoDiv);

//CONFIGURAZIONE DEL BOTTONE
addBtn.addEventListener("click", addItem);
function addItem() {

    var testoInput = inputText.value; //PRENDE IL VALORE DELL AREA DI TESTO

    if (testoInput === "") {  //CONTROLLA CHE IL CAMPO NON SIA VUOTO
        alert("Impossibile inserire una To Do vuota!");
        return;
    }

    
    const order = todoList.length;
    const newTodo = { ...templatenewTodo, label: testoInput, order: order }


    todoList.push(newTodo);
    disegnaElenco();

    inputText.value = "";  //svuota la casella di testo
    inputText.focus();  //riporta il focus direttamente sulla casella
    console.log(todoList)

}