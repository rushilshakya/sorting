describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it('sorts random array to small to big', function() {
    expect(bubbleSort([5, 9, 0, 2, 8])).toEqual([0, 2, 5, 8, 9]);
  });
});
