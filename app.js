// var todoList = {
//     todos:[],

// displayTodos: function (){
//     if (this.todos.length === 0){
//         console.log('Your To Do list is empty!')
//     } else {
//         console.log('My To Dos: ');
//         for (var i=0; i<this.todos.length; i++){
//             if (this.todos[i].Completed === true){
//                 console.log('(X)' + this.todos[i].TodoLabel)
//             } else {
//                 console.log('( )' + this.todos[i].TodoLabel)
//             }
//         }
//     }
// },

// addTodo: function(todoText){
//     this.todos.push({
//     TodoLabel: todoText,
//     Completed: false
// });
// this.displayTodos();
// },

// deleteTodo: function(position){
//     if (confirm('delete ' + this.todos[position].TodoLabel + '?')){
//         this.todos.splice(position, 1);
//         this.displayTodos();
//     } else {
//         alert ('Nothing deleted')
//         this.displayTodos();
//     }  
// },

// deleteAllTodos: function(){
//     if (confirm('This will delete all your To Dos. Are you sure?')){
//         this.todos.length = 0;
//         this.displayTodos();
//     } else {
//         alert ('No To Dos were deleted.')
//         this.displayTodos();
//     }
// },

// changeTodo: function(position, todoText){
//     this.todos[position].TodoLabel = todoText;
//     this.displayTodos();
// },

// toggleCompleted: function(position){
//     this.todos[position].Completed = !this.todos[position].Completed;
//     this.displayTodos();
// },
// toggleAll: function(){
//     for (var i=0; i<this.todos.length; i++){
//         this.todos[i].Completed = !this.todos[i].Completed;
//     }
//     this.displayTodos();
// }

// }


// //sample data
// var myData = []

// //display data
// function displayData(){
//     console.log('My Data: ');
//     for (i=0; i<myData.length; i++) {
//         console.log(myData[i].dataLabel);
//     }
// }

// //add data
// function addData(dataText){
//     myData.push({
//         dataLabel: dataText,
//         completed: false
//     });
//     displayData();
// }

// //change data
// function changeData(position, changedData){
//     myData[position] = changedData;
//     displayData();
// }

// //delete data
// function deleteData(position){
//     myData.splice(position, 1);
//     displayData();
// }


//store data array in an object
var myData = {
    data: [],
    
    displayData:function(){
        if (this.data.length === 0){
            console.log('No Data!');
        } else {
            console.log('My Data:');
            for (i=0; i<this.data.length; i++){
                if (this.data[i].completed === true){
                    console.log('(x)', this.data[i].dataLabel)
                } else {
                    console.log('( )', this.data[i].dataLabel); //"this" is equal to "myData" object we are in
                }
            };
        }
    },

    addData:function(dataText){
        this.data.push({  //"this.data" is equal to "myData.data"
            dataLabel: dataText,
            completed: false
        });
        this.displayData();
    },

    changeData:function(position, dataText){
        this.data[position].dataLabel = dataText;
        this.displayData();
    },

    deleteData:function(position){
        this.data.splice(position, 1);
        this.displayData();
    },

    toggleCompleted: function(position){
        this.data[position].completed = !this.data[position].completed;
        this.displayData(); 
    },

    toggleAll: function(){
        var totalData = this.data.length;
        var completedData = 0;
        for (i=0; i<totalData; i++){
            if (this.data[i].completed === true){
                completedData++;
            }
        }
        if (totalData === completedData){
            for (i=0; i<totalData; i++){
                this.data[i].completed = false;
            }
        } else {
            for (i=0; i<totalData; i++){
                this.data[i].completed = true;
            }
        }
        this.displayData();
    }
};

//new object for methods to handle different events.
// in the HTML - either handlers.method() or myData.method() (example: myData.displayData()).  
var handlers = {
    displayData: function(){
        myData.displayData();
    },
    addData: function(){
        var addDataInput = document.getElementById('addDataInput');
        myData.addData(addDataInput.value); //above the function is defined in myData object. We are hooking into it here and passing the input value as the dataText variable.
        addDataInput.value = ""; //clears input after click
    },
    changeData: function(){
        var changePositionInput = document.getElementById('changePositionInput');
        var changeDataTextInput = document.getElementById('changeDataTextInput');
        myData.changeData(changePositionInput.valueAsNumber, changeDataTextInput.value);
        changePositionInput.value = "";
        changeDataTextInput.value = "";
    },
    deleteData: function(){
        var deletePositionInput = document.getElementById('deletePositionInput');
        myData.deleteData(deletePositionInput.valueAsNumber);
        deletePositionInput.value = "";
    },
    toggleCompleted: function(){
        var toggleCompletedInput = document.getElementById('toggleCompletedInput');
        myData.toggleCompleted(toggleCompletedInput.value);
        toggleCompletedInput.value = "";
    },
    toggleAll: function(){
        myData.toggleAll();
    }
};


