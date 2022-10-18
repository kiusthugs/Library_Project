console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");

class Book {
    constructor(id, title, author, read) {
      this.title = title
      this.author = author
      this.read = read
      this.id = id
    }
}

class Library{
    constructor(bookCount, books) {
        this.books = [{title: 'Name of the Wind', author: 'Patrick Rothfuss', read: true, id: 0}]
        this.bookCount = this.books.length
    }

    markRead(checkbox, inputId){
        this.books.forEach((book) => {
            if (book.id == inputId){
                book.read = true;
                checkbox.checked = true;
                checkbox.disabled = true;
            }
        });
    }

    addBook() {
        

        let title = document.querySelector('#title')
        let author = document.querySelector('#author')
        let checkbox = document.querySelector('#read')
        let newBook = new Book(this.bookCount, title.value, author.value, checkbox.checked)
        this.books.push(newBook)

        let tr = document.createElement('tr')
        let tdTitle = document.createElement('td')
        let tdAuthor = document.createElement('td')
        let tdCheck = document.createElement('td')
        let checkInput = document.createElement('input')
        checkInput.type = 'checkbox'
        checkInput.checked = newBook.read

        if(checkInput.checked === true) {
            checkInput.disabled = true
        }
        
        tdCheck.appendChild(checkInput)

        tdTitle.textContent = newBook.title
        tdAuthor.textContent = newBook.author

        tr.appendChild(tdTitle)
        tr.appendChild(tdAuthor)
        tr.appendChild(tdCheck)

        let tbody = document.querySelector('tbody')
        tbody.appendChild(tr)
        this.bookCount++
    }
}


let submit = document.querySelector('#submit')
let kirtLibrary = new Library()
submit.addEventListener('click', (e) => {
        e.preventDefault()
        kirtLibrary.addBook()
})
  
