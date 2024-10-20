//task 1
  // Create sections

    

  const fiction = new Section("Fiction");

    

  const science = new Section("Science");

    

  

    

  // Create books

    

  const book1 = new Book("1984", "George Orwell", "1234567890");

    

  const book2 = new Book("Brave New World", "Aldous Huxley", "0987654321");

    

  const book3 = new Book("The Selfish Gene", "Richard Dawkins", "1122334455");

    

  

    

  // Add books to sections

    

  fiction.addBook(book1);

    

  fiction.addBook(book2);

    

  science.addBook(book3);

    

  

    

  // Create patrons

    

  const regularPatron = new Patron("John Doe");

    

  const vipPatron = new VIPPatron("Jane Smith", true);

    

  

    

  // Regular patron tries to borrow a book

    

  regularPatron.borrowBook(book1);

    

  

    

  // VIP patron tries to borrow a book (has priority)

    

  vipPatron.borrowBook(book1);

    

  

    

  // Return the book

    

  regularPatron.returnBook(book1);

    

  

    

  // List books and availability

    

  fiction.listBooks();

    

  

    

  // Calculate total available books in each section

    

  console.log(`Total available books in Fiction: ${fiction.getAvailableBooks()}`);

    

  console.log(`Total available books in Science: ${science.getAvailableBooks()}`);

  //task 2
  class Section {
    constructor(name, books);
    this.books=[]; 

  }
  getAvailableBooks(){
    return books.filter(book=> book.getAvailableBooks);

  }

  