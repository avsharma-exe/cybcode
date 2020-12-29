//--------------------Storage Function from here Assignment -----------------------//


//----------- To display the data on load of the body! ---------------------
function showStorage(){
    displayLocalStorage();
    displaySessionStorage();
}

//-----------To clear all the data from the storage and displaying the data in table ------
function clearAll(flag){
    if(flag){
        localStorage.clear();
        displayLocalStorage();
        return;
    }
    sessionStorage.clear();
    displaySessionStorage();
}


//---------Function to check if Storage is available or not (copied from MDN)
function storageAvailable(type) { 
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}


//----------------------Function to store data in storage--------Both storage at a time using id-----// 
function storageFunction(){   
    var lKey = document.querySelector("#lkey").value; //To get the value from "key" input element of form
    var lValue = document.querySelector("#lvalue").value; //To get the value from "value" input element of form
    //console.log(lKey+" "+lValue); 
    if (storageAvailable('localStorage')) {
        localStorage.setItem(lKey, lValue); //storing in local storage
      }
    else {
        alert("Too bad, no localStorage for us");
    }
    if (storageAvailable('sessionStorage')) {
        sessionStorage.setItem(lKey, lValue); //storing data in session storage
      }
    else {
        alert("Too bad, no sessionStorage for us");
    }
    //to update the display after every update!
    displayLocalStorage(); 
    displaySessionStorage();
}


//--------------- Display data function LOCAL STORAGE -----------------
function displayLocalStorage(){
    var localStorageData = localStorage; //complete local storage data as an object
    //console.log(localStorageData);
    var table = document.getElementById("localStorageData"); //Get table id to update the particular table
    table.innerHTML="<caption><h3>Local Storage</h3></caption><tr><th>Key</th><th>Value</th><th>Remove</th></tr>";
    var row;
    var cell1;
    var cell2;
    var cell3;
    var storageCount = 1; // to add data in table not from 0 as heading should be there 
    for(var key in localStorageData){
        if (storageCount> localStorageData.length){
            break;
        }
        row = table.insertRow(storageCount);
        cell1 = row.insertCell(0);
        cell2 = row.insertCell(1);
        cell3 = row.insertCell(2);
        cell1.innerHTML = key;
        cell2.innerHTML = localStorageData[key];
        cell3.innerHTML = '<button type=button id="'+key+'" onclick=removeSelectedRow("'+key+'",1)>Remove</button>';
        storageCount++;
    }
    //To add clear all button at the end of table 
    row = table.insertRow(storageCount);
    cell1 =  row.insertCell(0);
    cell2 = row.insertCell(1);
    cell3 = row.insertCell(2);
    cell3.innerHTML = '<button type=button id="clearAll" onclick=clearAll(1)>ClearAll</button>';
    storageCount = 0;
}


//-------------------Same function as above just to handle session storage ---------
function displaySessionStorage(){
    var sessionStorageData = sessionStorage;
    console.log(sessionStorageData);
    var table = document.getElementById("sessionStorageData");
    table.innerHTML="<caption><h3>Local Storage</h3></caption><tr><th>Key</th><th>Value</th><th>Remove</th></tr>";
    var row;
    var cell1;
    var cell2;
    var cell3;
    var storageCount = 1;
    for(var key in sessionStorageData){
        if (storageCount> sessionStorageData.length){
            break;
        }
        row = table.insertRow(storageCount);
        cell1 =  row.insertCell(0);
        cell2 = row.insertCell(1);
        cell3 = row.insertCell(2);
        cell1.innerHTML = key;
        cell2.innerHTML = sessionStorageData[key];
        cell3.innerHTML = '<button type=button id="'+key+'" onclick=removeSelectedRow("'+key+'",0)>Remove</button>';
        storageCount++;
    }
    row = table.insertRow(storageCount);
    cell1 =  row.insertCell(0);
    cell2 = row.insertCell(1);
    cell3 = row.insertCell(2);
    cell3.innerHTML = '<button type=button id="clearAll" onclick=clearAll(0)>ClearAll</button>';
    storageCount = 0;
}


//--------Function to remove selected row from the storage and display the updated table ------
function removeSelectedRow(id,flag){
    if(flag){  // flag for local storage is 1 and for session storage is 0
        localStorage.removeItem(id);
        displayLocalStorage();
        return;
    }
    sessionStorage.removeItem(id);
    displaySessionStorage();
}