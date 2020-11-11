describe('sort', () => {
    it('should sort array [10, 4, 5] correctly', function () {
        let testArray = [10, 4, 5];
        expect(selectionSort(testArray)).toEqual([4, 5, 10]);
    });
    it('should sort array [10, 4, 7, 9, 2, 3, 5] correctly', function () {
        let testArray2 = [10, 4, 7, 9, 2, 3, 5];
        expect(selectionSort(testArray2)).toEqual([2, 3, 4, 5, 7, 9, 10]);
    });
    it('should sort array [45, 67, 4, 10, 12, 22]correctly', function () {
        let testArray3 = [45, 67, 4, 10, 12, 22];
        expect(selectionSort(testArray3)).toEqual([4, 10, 12, 22, 45, 67]);
    });
});