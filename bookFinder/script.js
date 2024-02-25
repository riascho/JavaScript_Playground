const captureSearchValue = () => {
    const searchValue = document.getElementById('search-bar').value;
    return searchValue;
};

// Filter books based on search input
/*
The filterBooks() function takes in a search string and a list of books as parameters 
and returns all of the books that contain an exact match of the search input as an array of objects. 
Objects in this array should be formatted as books with title, author, and tags properties, 
similar to the original books array. It should use the flattenObjectValuesIntoArray() function 
to search all fields within a book object easily.
*/
const filterBooks = (searchString, library) => {
    const listOfBooks = flattenObjectValuesIntoArray(library);
    const matchingBooksIndexes = listOfBooks
        .map((book, index) => {
            if (book.includes(searchString)) {
                return index;
            }
        })
        .filter((element) => element !== undefined);
    return matchingBooksIndexes.map((item) => library[item]);
};

// TESTING:
// filterBooks('fiction',books);

// Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js`
// The structureBooksAsHtml() function takes a list of books as a parameter, iterates over the list, formats them as HTML using the structureBookAsHtml() helper function, and returns an array of formatted book elements.
const structureBooksAsHtml = (bookObjects) => bookObjects.map((bookObject) => structureBookAsHtml(bookObject));

// Handler triggered when a user clickers the "Search" button.
// Chains previously defined functions together to filter books
// based on the search value, formats the books as HTML and
// renders them to the DOM
// The searchBtnClickHandler() function is triggered when a
// user clicks the search button.
// It takes in a list of books as a parameter and integrates
// the individual functions that make up the app to render
// a list of books to the DOM that matches the search input
// when the search button is clicked.
const searchBtnClickHandler = (listOfBookObjects) => {
    renderBooksToDom(structureBooksAsHtml(filterBooks(captureSearchValue(), listOfBookObjects)));
};

// Grab search button from the DOM
const searchBtn = document.getElementById('search-btn');

// Attach an event listener to the search button
searchBtn.addEventListener('click', () => {
    searchBtnClickHandler(books);
});
