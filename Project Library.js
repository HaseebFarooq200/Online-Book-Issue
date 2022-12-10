console.log("Welcome to Library Project");

// Functions used in this code 
// display.validname(book);
// display.add(book);
// display.clear();
// display.error();
// display.accept();

function Book(name, author, type) {    // Constructor 
    this.name = name;
    this.author = author;
    this.type = type;
}

function Display() {
    // Default Constructor 
}

Display.prototype.add = function (book) {
    let savebook = document.getElementById("savebooks")
    let html = `<ul>
                    <li>Serial No.</li>
                    <li>${book.name}</li>
                    <li>${book.author}</li>
                    <li>${book.type}</li>
                </ul>`
    savebook.innerHTML = savebook.innerHTML + html;

}

Display.prototype.clear = function () {
    let inputbox = document.getElementById("inputbox")
    inputbox.reset();
}

Display.prototype.error = function (msg) {

    let message = document.getElementById("message");
    message.innerHTML = `<p> ${msg} </p>`
    setTimeout(function () {
        message.innerHTML = " ";
    }, 2000);

}

Display.prototype.accept = function (msg) {

    let message = document.getElementById("message");
    message.innerHTML = `<p> ${msg} </p>`;
    setTimeout(function () {
        message.innerHTML = " ";
    }, 2000);

}

Display.prototype.validname = function (book) {
    if (book.name.length < 3 || book.author.length < 3) {
        display.error(" Failed! Your book is not added in your List");
    }
    else {
        display.add(book);
        display.clear();
        display.accept(" Success! Your Book has been successfully added in your List ")
    }
}

let addbookbtn = document.getElementById("addbookbtn");
addbookbtn.addEventListener('click', func1);
function func1(e) {

    // Manipulating DOM 

    let bookname = document.getElementById("bookname").value;
    let authorname = document.getElementById("authorname").value;
    let ficbook = document.getElementById("ficbook");
    let nonficbook = document.getElementById("non-ficbook");
    let comic = document.getElementById("comic");
    let type;

    if (ficbook.checked) {
        let var1 = document.getElementById("booktype1").innerText;
        type = var1;
    }
    else if (nonficbook.checked) {
        let var2 = document.getElementById("booktype2").innerText;
        type = var2;
    }
    else if (comic.checked) {
        let var3 = document.getElementById("booktype3").innerText;
        type = var3;
    }

    // Making an object 
    book = new Book(bookname, authorname, type);               //   books is an object 
    display = new Display();                                 //   display is an object                             
    display.validname(book);
    console.log(book);
    e.preventDefault();
}