// input an array of number strings
// output is an array of numbers

// input, is an array of numbers in short range notation
// only significant part of next number written
// the numbers are always increasing
// some input numbers will have different separators to depict range
//  - ['-', ':', '.']
// range limits are inclusive

// test cases:
shortHand([1,3,7,1,8,1,4]); // [1,3,7,11,18,21,24]
shortHand([2:3, 2:4, 1:3]); // [2,3,12,14,21,22,23]
shortHand([1..3, 7..0, 1..6]); // [1,2,3,7,8,9,10,11,12,13,14,15,16]

//algorithm
