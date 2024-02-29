const captureSearchValue = () => {
    const searchValue = document.getElementById('search-bar').value;
    return searchValue;
};

// 1st attempt using map and filter
// const filterBooks = (searchString, library) => {
//     const listOfBooks = flattenObjectValuesIntoArray(library);
//     const matchingBooksIndices = listOfBooks
//         .map((book, index) => {
//             if (book.includes(searchString)) {
//                 return index;
//             }
//         })
//         .filter((element) => element !== undefined);
//     return matchingBooksIndices.map((item) => library[item]);
// };

// better solution using reduce
const filterBooks = (searchString, library) => {
    const listOfBooks = flattenObjectValuesIntoArray(library);
    const matchingBooks = listOfBooks
        .reduce((matchedBooks, book, index) => {
            if (book.includes(searchString)) {
                matchedBooks.push(library[index]);
            }

            return matchedBooks
        },[])
    return matchingBooks;
};

const structureBooksAsHtml = (bookObjects) => bookObjects.map((bookObject) => structureBookAsHtml(bookObject));

const searchBtnClickHandler = (listOfBookObjects) => {
    renderBooksToDom(structureBooksAsHtml(filterBooks(captureSearchValue(), listOfBookObjects)));
};

const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', () => searchBtnClickHandler(books));
