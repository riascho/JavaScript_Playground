// Click handler for search button
const captureSearchValue = () => {
    const searchValue = document.getElementById('search-bar').value;
    return searchValue;
};
// const searchButton = document.getElementById('search-btn');
// searchButton.addEventListener('click', () => {
//     searchValue ? console.log(searchValue) : console.log('empty');
// });

// Filter books based on search input
/*
The filterBooks() function takes in a search string and a list of books as parameters and returns all of the books that contain an exact match of the search input as an array of objects. Objects in this array should be formatted as books with title, author, and tags properties, similar to the original books array. It should use the flattenObjectValuesIntoArray() function to search all fields within a book object easily.
*/
const filterBooks = (searchString, library) => {
    // return resultArray; (array of objects!)
};
const listOfBooks = flattenObjectValuesIntoArray(library);

// returns array of arrays of search results (WORKS!)
flattenObjectValuesIntoArray(books).filter((element, index, array) => {
    return element.includes('fiction');
});

const matchingBooksIndexes = listOfBooks.filter((bookArray, index) => {
    bookArray.includes(searchString);
    return index; // returns list of indexes?
});
const resultArray = library.map((element, index, array) => {
    matchingBooksIndexes.includes(array[index]);
});
// Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js`
// The structureBooksAsHtml() function takes a list of books as a parameter, iterates over the list, formats them as HTML using the structureBookAsHtml() helper function, and returns an array of formatted book elements.
const structureBooksAsHtml = () => {};

// Handler triggered when a user clickers the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
// The searchBtnClickHandler() function is triggered when a user clicks the search button. It takes in a list of books as a parameter and integrates the individual functions that make up the app to render a list of books to the DOM that matches the search input when the search button is clicked.
const searchBtnClickHandler = () => {};

// Grab search button from the DOM

// Attach an event listener to the search button
searchBtn.addEventListener('click', () => {
    searchBtnClickHandler(books);
});
