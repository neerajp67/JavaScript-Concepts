import data from './data.js'

// display important topics in a table
const tBody = document.getElementById("js-concept-body");
console.log(tBody);


let row = ''
for (let item of data) {
    row += `
    <tr>
    <td>${item.topic}</td>
    <td>${item.level}</td>
    <td>${item.description}</td>
    <td>${item.example}</td>
    </tr>
    `
}
tBody.innerHTML = row;