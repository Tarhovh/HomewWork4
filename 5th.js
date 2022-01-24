// 5. App consists of two parts: form and table. Table should present candidates and their data as it is presented in the picture. The order of the candidates should be based on the votes (highest to lowest). Form input should be required.With form users should be able to add a new candidate. When a new candidate is added, it automatically gets one vote (age and country should be autogenerated).
//If a user enters a name which is already in the list, the app should increment the votes of the current candidate.
//* Every time when candidates votes are changed, the app should arrange their position in the table based on the votes quantity.

// Կիսատ է ցավոք, բայց խոստանում եմ մոտ ապագայում ավարտել

const form = document.querySelector('form')
const input = document.querySelector('input')
const button = document.querySelector('input[type=submit]')
const nameInput = document.querySelector('input[type=text]');
const names = document.querySelectorAll('.name')
const age = document.querySelector('.age')
const country = document.querySelector('.country')
const voted = document.querySelectorAll('.voted')
let table = document.getElementById("myTable");


function addRow(tableID) {

        let tableRef = document.getElementById(tableID);
        let newRow = tableRef.insertRow(5);
    
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);
        let cell4 = newRow.insertCell(3);
    
        cell1.innerText = nameInput.value
        cell2.innerText = Math.floor(Math.random() * (91-18) ) + 18;
        cell3.innerText = 'USA'
        cell4.className += 'voted'
        cell4.innerText = 1 
}

function increase () {


    for (i=0; i<names.length; i++)
    for (i=0; i<voted.length; i++)

        if (nameInput.value === names[i].innerText === true) {
            {
            voted[i].innerText++}
           
        }

       addRow('myTable');
    }

    function sortTable() {
        var rows, switching, i, x, y, shouldSwitch;
        switching = true;

        while (switching) {
        
          switching = false;
          rows = table.rows;
          
          for (i = 1; i < (rows.length - 1); i++) {
           
            shouldSwitch = false;
            
            x = rows[i].getElementsByTagName("TD")[3];
           
            y = rows[i + 1].getElementsByTagName("TD")[3];
           
            if (Number(x.innerHTML) < Number(y.innerHTML)) {
            
              shouldSwitch = true;
              break;
            }
          }
          if (shouldSwitch) {
         
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
          }
          debugger
        }
      }

form.addEventListener('submit', (event)=> {

    event.preventDefault()

        increase ();
        sortTable()

})



