class PaginationHelper {
    /** The constructor takes in an array of items and a integer indicating how many
    items fit within a single page */
    constructor(collection, itemsPerPage) {
        this._collection = collection;
        this._itemsPerPage = itemsPerPage;
        this._pageCount = this._getPageCount();
        this._pages = this._getPages();
    }

    /** returns the number of items within the entire collection */
    _getItemCount() {
        return this._collection.length;
    }

    /** returns the number of pages */
    _getPageCount() {
        return Math.ceil(this._collection.length / this._itemsPerPage);
    }

    /** returns collection of pages (2D array) containing the specified number of items per page */
    _getPages() {
        const pages = [];
        for (let i = 0; i < this._pageCount; i++) {
            pages.push(this._collection.slice(this._itemsPerPage * i, this._itemsPerPage * (i + 1))); // startindex, startindex + itemsPerPage
        }
        return pages;
    }

    /** returns the number of items on the current page. page_index is zero based.
    this method should return -1 for pageIndex values that are out of range */
    _getPageItemCountFrom(pageIndex) {
        return this._pages[pageIndex] ? this._pages[pageIndex].length : -1;
    }

    /** determines what page an item is on. Zero based indexes
    this method should return -1 for itemIndex values that are out of range */
    _getPageIndexFrom(itemIndex) {
        return this._collection[itemIndex] ? Math.floor(itemIndex / this._itemsPerPage) : -1;
    }
}

const collection = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
];
const helper = new PaginationHelper(collection, 56);

console.log(helper._getPageIndexFrom(44));

/**
describe('Tests suite', () => {
    const { strictEqual } = require('chai').assert;

    function doTest(instance, methodName, expected, ...args) {
        const actual = instance[methodName](...args);
        strictEqual(actual, expected, `for ${methodName}(${args.join(', ')})`);
    }

    it('sample test : 24 items with 10 per page', () => {
        const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
        const helper = new PaginationHelper(collection, 10);

        doTest(helper, 'pageCount', 3);
        doTest(helper, 'itemCount', 24);

        doTest(helper, 'pageItemCount', 10, 1);
        doTest(helper, 'pageItemCount', 4, 2);
        doTest(helper, 'pageItemCount', -1, 3);
        doTest(helper, 'pageIndex', -1, 40);

        doTest(helper, 'pageIndex', 2, 22);
        doTest(helper, 'pageIndex', 0, 3);
        doTest(helper, 'pageIndex', 0, 0);
        doTest(helper, 'pageIndex', -1, -1);
        doTest(helper, 'pageIndex', -1, -23);
        doTest(helper, 'pageIndex', -1, -15);
    });

    it('empty collection', () => {
        const empty = new PaginationHelper([], 10);

        doTest(empty, 'pageCount', 0);
        doTest(empty, 'itemCount', 0);
        doTest(empty, 'pageIndex', -1, 0);
        doTest(empty, 'pageItemCount', -1, 0);
    });
});
*/
