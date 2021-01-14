
//Budget CONTROLLER
var budgetController = (function(){

    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
        this.procent = -1;
    };

    Expense.prototype.calcProcent = function(totalIncome){

        if(totalIncome > 0){
            this.procent =Math.round ((this.value/ totalIncome)*100);
        }else {
            this.procent = -1;
        }
        
    };

    Expense.prototype.getProcent= function(){

        return this.procent;
    };


    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var calculateTotal = function(type){

        var sum=0;
        data.allItems[type].forEach(function(cur){
            sum = sum + cur.value;
        });
        data.total[type]= sum;
    };
    

    var data = {
        allItems: {
            exp : [],
            inc: []
        },
        total: {
            exp : 0,
            inc: 0
        },
        budget: 0,
        procent: -1
    };

    return {
        addItem: function(type, des, val) {
            var newItem, ID;
            
            //[1 2 3 4 5], next ID = 6
            //[1 2 4 6 8], next ID = 9
            // ID = last ID + 1
           
                 
            
            // Create new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            
            // Create new item based on 'inc' or 'exp' type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }
            
            // Push it into our data structure
            data.allItems[type].push(newItem);
            
            // Return the new element
            return newItem;
            
        },

        deleteItem: function(type, id){
            var ids, index;

            // vr sa sterg din vector elem 6 de pe poz 3
            //id = 6
            // ids = [1, 2, 4 ,6 ,8]
            //index = 3
            ids = data.allItems[type].map(function(current){ // ca un for cu care parcurg vect.
                return current.id;
            });
            index = ids.indexOf(id); // returneaza pozitia id-ului , adica id=6 returneaza 3

            if(index !== -1){
                data.allItems[type].splice(index, 1);
            }
        },

        calculateBudget: function(){
            //calc toate income and exp

            calculateTotal('exp');
            calculateTotal('inc');

            //calc budget

            data.budget =data.total.inc - data.total.exp;

            //calc procente

            if(data.total.inc > 0){
                data.procent = Math.round((data.total.exp / data.total.inc)*100);
            }else {
                data.procent = -1;
            }
                
           

        },

        calculateProcent: function(){

            data.allItems.exp.forEach(function(cur){
                cur.calcProcent(data.total.inc);
            });

        },

        getProcent : function(){

            var allPerc = data.allItems.exp.map(function(cur){
                return cur.getProcent();
            });
            return allPerc;
        },

        getBudget: function(){
            return {
                budget: data.budget,
                totalInc: data.total.inc,
                totalExp: data.total.exp,
                procent: data.procent
            }
        }

    };
})();


// UI CONTROLLER
var uiController = (function(){

    var DOMstrings= {
        inputType : '.add__type',
        inputDescription : '.add__description',
        inputValue : '.add__value',
        inputBtn : '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        procentLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercLabel: '.item__percentage',
        dataLabel: '.budget__title--month'
    }
    var formatNumber = function(num, type) {
        var numSplit, int, dec, type;
        /*
            + or - before number
            exactly 2 decimal points
            comma separating the thousands
            2310.4567 -> + 2,310.46
            2000 -> + 2,000.00
            */

        num = Math.abs(num);
        num = num.toFixed(2);

        numSplit = num.split('.');

        int = numSplit[0];
        if (int.length > 3) {
            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3); //input 23510, output 23,510
        }

        dec = numSplit[1];

        return  int + '.' + dec;

    };

    return {
        getInput: function(){

            return {
                type: document.querySelector(DOMstrings.inputType).value,   // asa citesti valorile din casutele input(care le bagi tu)
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            };


        },

        addListItem: function(obj, type) {
            var html, newHtml, element;
            // Create HTML string with placeholder text
            
            if (type === 'inc') {
                element = DOMstrings.incomeContainer;
                
                html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                element = DOMstrings.expensesContainer;
                
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            
            // Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));
            
            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        deleteListItem: function(selectorID){

            var element = document.getElementById(selectorID);
            element.parentNode.removeChild(element);
        },

        clearFields: function(){

            var fields, fieldsArr;

            fields= document.querySelectorAll(DOMstrings.inputDescription+ ', ' + DOMstrings.inputValue);

            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(function(current,index,array){

                current.value= "";
            })
            fieldsArr[0].focus();
        },

        displayBudget: function(obj){
            var type;
            if(type>0){
                type= 'exp';
            }else{
                type = 'inc';
            }
            if(obj.budget > 0)
            {
                document.querySelector(DOMstrings.budgetLabel).textContent ="+" + formatNumber( obj.budget, type) ;
            }else{
                document.querySelector(DOMstrings.budgetLabel).textContent ="-"+ formatNumber( obj.budget, type) ;
            }
            
            document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
            document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');
            

            if(obj.procent > 0){
                document.querySelector(DOMstrings.procentLabel).textContent = obj.procent+ " %";
            }else{
                document.querySelector(DOMstrings.procentLabel).textContent = "-_-";
            }
        },

        displayProcent: function(procent){

            var fields = document.querySelectorAll(DOMstrings.expensesPercLabel);

            var nodeListForEach = function(list,callback){
                for(var i = 0; i < list.length; i++){
                    callback(list[i],i);
                }
            };

            nodeListForEach(fields,function(current,index){

                if(procent[index] > 0){
                    current.textContent = procent[index] + "%";
                }else {
                    current.textContent ="-_-";
                }
                

            });
        },

        displayDate: function(){

            var now, year;

            now= new Date();
            luna = now.getMonth();
            year = now.getFullYear();
            var month= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            document.querySelector(DOMstrings.dataLabel).textContent = year+ ' '+month[luna];
        },

        getDOMstrings: function(){
            return DOMstrings;
        }
    };

})();


// GLOBAL CONTROLLER
var controller = (function(budgetCtrl, uiCtrl){

    var setupEventListeners = function(){
        var DOM = uiCtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItems);
  

        document.addEventListener('keypress',function(event){
            
           // console.log(event);   //cand apas orice tasta imi apar prop ei
    
           if(event.keyCode === 13 || event.which === 13){  //exact aceasi chestie
               ctrlAddItems();
           }
        
        });

        document.querySelector(DOM.container).addEventListener('click',ctrlDeleteItems);
    
    }


    var updateBudget = function(){
        // calc budget

        budgetCtrl.calculateBudget();

        //return budget

        var budget = budgetCtrl.getBudget();

        //display in UI
        uiCtrl.displayBudget(budget);
    };

    var updateProcent = function(){

        // calc procente

        budgetCtrl.calculateProcent();
        //read procent from budget controller

        var procent=budgetCtrl.getProcent();
        //update the ui with new procent

        uiCtrl.displayProcent(procent);
    };

    function ctrlAddItems(){
        //o functie care va aduga in UI(user interface) ce am scris in celelalte input-uri, pt a nu ma repeta
        var input, newItem;

       
        input = uiCtrl.getInput();
        if(document.querySelector('.add__description').value!== "" && !isNaN(document.querySelector('.add__value').value) && document.querySelector('.add__value').value>0)
            {
                
            // 2. Add the item to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            // 3. Add the item to the UI
            uiCtrl.addListItem(newItem, input.type);

            //4.delete input fields

            uiCtrl.clearFields();
        
            updateBudget();

            updateProcent();
       
        }else{
            alert("Please add a correct value"); 
        }
    };

    var ctrlDeleteItems = function(event){

        //console.log(event.target.parentNode.parentNode.parentNode.parentNode.id); //am selectat cel mai adanc element din div, apoi am urcat cu inca 4 clase in plus pana am ajuns la prima
// .id iti da id ul din html

        var itemID, splitID, type, ID;
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        if(itemID){

        splitID = itemID.split('-'); //inparte un sir cand da de - ex: inc-0 il va face un vector [inc,0]
        type = splitID[0]; // asta va fi inc
        ID =parseInt(splitID[1]); // asta va fi 0. pasrtInt ne ajunta sa l facem nr


        //delete item
            budgetCtrl.deleteItem(type,ID);
        //delete from ui
            uiCtrl.deleteListItem(itemID);
        //update budget
            updateBudget();
            
            updateProcent();
    }
    };

    return {
        init: function(){
            uiCtrl.displayDate();
            setupEventListeners();
        }
    };

})(budgetController,uiController);

controller.init();