const captureSearchValue = () => {
    const searchValue = document.getElementById('search-bar').value;
    return searchValue;
};

const filterBooks = (searchString, library) => {
    const listOfBooks = flattenObjectValuesIntoArray(library);
    const matchingBooksIndices = listOfBooks
        .map((book, index) => {
            if (book.includes(searchString)) {
                return index;
            }
        })
        .filter((element) => element !== undefined);
    return matchingBooksIndices.map((item) => library[item]);
};

const structureBooksAsHtml = (bookObjects) => bookObjects.map((bookObject) => structureBookAsHtml(bookObject));

const searchBtnClickHandler = (listOfBookObjects) => {
    renderBooksToDom(structureBooksAsHtml(filterBooks(captureSearchValue(), listOfBookObjects)));
};

const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', () => searchBtnClickHandler(books));
