let users = [
    {
        "id" : "1",
        "name" : "Vetrivel",
        "email" : "Vetrivel01@gmail.com",
        "phone" : "4179385901"
    },
    {
        "id" : "2",
        "name" : "Paneerselvam",
        "email" : "Paneerselvam02@gmail.com",
        "phone" : "5327763967"
    },
    {
        "id" : "3",
        "name" : "Barath",
        "email" : "Barath03@gmai.com",
        "phone" : "9527320806"
    },
    {
        "id" : "4",
        "name" : "Tamil",
        "email" : "Tamil04@gmail.com",
        "phone" : "2730934754"
    },
    {
        "id" : "5",
        "name" : "Lokesh",
        "email" : "Lokesh05@gmail.com",
        "phone" : "1949955364"
    },
    {
        "id" : "6",
        "name" : "Karthik",
        "email" : "Karthik06@gmail.com",
        "phone" : "9012314228"
    },
    {
        "id" : "7",
        "name" : "Shivaram",
        "email" : "Shivaram07@gmail.com",
        "phone" : "4686918596"
    },
    {
        "id" : "8",
        "name" : "Gowtham",
        "email" : "Gowtham08@gmail.com",
        "phone" : "7871149697"
    },
    {
        "id" : "9",
        "name" : "Divyakumar",
        "email" : "Divyakumar09@gmail.com",
        "phone" : "7631483572"
    },
    {
        "id" : "10",
        "name" : "Kishore",
        "email" : "Kishore10@gmail.com",
        "phone" : "9551333570"
    }
];

const tableBox = document.getElementById("myTable");
function check(){
    console.log("Check function called. Users length:", users.length);
    if(users.length == 0){
        tableBox.style.display = "none";
    }
}

function handclick(){
    let num = document.getElementById('rollno').value;
    let person = document.getElementById('avatar').value;
    let mail = document.getElementById('inbox').value;
    let phn = document.getElementById('mobile').value;

    let newObject = {
        id : num,
        name : person,
        email : mail,
        phone : phn
    };
    users.push(newObject);
    console.log(users);
    
    let table = document.getElementById('user_t');
    let row = document.createElement('tr');
    let id = document.createElement('td');
    let name = document.createElement('td');
    let email = document.createElement('td');
    let phone = document.createElement('td');
    let btnn = document.createElement('td');
    
    id.innerHTML = newObject.id;
    name.innerHTML = newObject.name;
    email.innerHTML = newObject.email;
    phone.innerHTML = newObject.phone;
    
    let btn = document.createElement("button");
    btn.innerHTML = 'Delete';
    btn.addEventListener('click', function(){
        row.remove();
        users = users.filter(user => user.id !== newObject.id);
        check();
    });

    btnn.appendChild(btn);

    row.appendChild(id);
    row.appendChild(name);
    row.appendChild(email);
    row.appendChild(phone);
    row.appendChild(btnn);

    if (document.getElementById('rollno').value != "" ){
        table.append(row)
    }

    document.getElementById('rollno').value = "";
    document.getElementById('avatar').value = "";
    document.getElementById('inbox').value = "";
    document.getElementById('mobile').value = "";
};


    let ulen = users.length;
    const para = document.getElementById("demo");
    const table = document.getElementById("user_t");
    for(let i = 0; i < ulen; i++ ){
        let row = document.createElement('tr');
        let id = document.createElement("td");
        let name = document.createElement("td");
        let email = document.createElement("td");
        let phone = document.createElement("td");
        let btnn = document.createElement("td");

        id.innerHTML = users[i].id = i + 1;
        name.innerHTML = users[i].name;
        email.innerHTML = users[i].email;
        phone.innerHTML = users[i].phone;

        let btn = document.createElement("button");
        btn.innerHTML = 'Delete';
        btn.addEventListener('click',function(){
            row.remove();
            // users = users.filter(user => user.id !== users[i].id);
            check();
        });

        btnn.appendChild(btn);
        
        row.appendChild(id);
        row.appendChild(name);
        row.appendChild(email);
        row.appendChild(phone);
        row.appendChild(btnn);

        table.append(row)

    }
check();