let pname = document.getElementById("name");
let pprice = document.getElementById("price");
let pqua = document.getElementById("qua");
let pdesc = document.getElementById("desc");
let mage = document.getElementById("image");
let sub = document.getElementById("sub");
let num = 1;

sub.addEventListener("click", function () {
    let imrl = URL.createObjectURL(mage.files[0]);
    let total = pprice.value * pqua.value;

    let row = document.createElement("tr");
    row.innerHTML = `
        <td>${num++}</td>
        <td><img src=${imrl} style="width:50px"></td>
        <td>${pname.value}</td>
        <td>${pprice.value}</td>
        <td>${pqua.value}</td>
        <td>${pdesc.value}</td>
        <td>${total}</td>
        <td>
            <button class="viewBtn">View</button>
            <button class="editBtn">Edit</button>
            <button class="deleteBtn">Delete</button>
        </td>
    `;

    document.getElementById('polist').appendChild(row);

    // Attach event listeners to buttons
    row.querySelector('.viewBtn').addEventListener('click', function () {
        viewProduct(row);
    });

    row.querySelector('.editBtn').addEventListener('click', function () {
        editProduct(row);
    });

    row.querySelector('.deleteBtn').addEventListener('click', function () {
        deleteProduct(row);
    });
    document.getElementById('name').value = '';
    document.getElementById('price').value = '';
    document.getElementById('qua').value = '';
    document.getElementById('desc').value = '';
});

function viewProduct(row) {
    
}

function editProduct(row) {
    pname.value = row.children[2].textContent;
    pprice.value = row.children[3].textContent;
    pqua.value = row.children[4].textContent;
    pdesc.value = row.children[5].textContent;

    row.remove(); // Remove the row so that the user can add it back after editing
}

function deleteProduct(row) {
    row.remove();
}
