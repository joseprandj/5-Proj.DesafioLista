function loaded() {

    let mainList = document.getElementById("list");

    mainList.innerHTML="";

    let arrayList = JSON.parse(localStorage.getItem("listJSON"));

    for(let elements in arrayList){

        let n = parseInt(elements) + 1;

        let item1 = document.createElement("li");
        let item2 = document.createElement("input");

        item2.setAttribute("type", "checkbox");
        item2.setAttribute("name", "items");
        item2.setAttribute("value", arrayList[elements]);

        let textItem = document.createTextNode(" " + n + " - " + arrayList[elements]);

        item1.appendChild(item2);
        item1.appendChild(textItem);

        mainList.appendChild(item1);
    }
}

function saveItem(){

    let item = document.getElementById("addItem").value;
    let list = JSON.parse(localStorage.getItem("listJSON"));

    let arrayList = [];

    if(list != null){
        arrayList = list;
    }

    if(item != ""){
        arrayList.push(item);
        localStorage.setItem("listJSON", JSON.stringify(arrayList))
        loaded();
        document.getElementById("addItem").value = "";
    }
    
}

function deleteItem(){

    let items = document.getElementsByName("items");

    let delList = [];

    for(let elements in items){

        if(items[elements].checked == false){
            delList.push(items[elements].value);
        }
    }

    localStorage.setItem("listJSON", JSON.stringify(delList));
    loaded();
}

function clearList(){

    let check = document.getElementsByName("checkDel");

    if(check[0].checked == true){

        localStorage.clear();

        let mainList = document.getElementById("list");
        mainList.innerHTML = "";
        
        check[0].checked = false;
    }
    
}

