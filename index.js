class SortedList {
  constructor() {
    // 1) should have items and length properties
    this.items = []
    this.length = 0
  }

  // #add(x)
  // 2) should add a single value to SortedList
  // 3) should add a third value to SortedList
  // 4) should add a value while keeping the list sorted

  add(item) {
    this.items.push(item)
    console.log(`add new item in items array: ${this.items}`)

    this.items.sort((a, b) => a - b)
    console.log(` sort the items array in ascending order: ${this.items}`)

    this.length = this.items.length
    console.log(`update the length of array: ${this.items}`)
  }

  // #get(i)
  // 5) should return an OutOfBounds exception if there is no element in that position
  // 6) should return the element in that position
  get(pos) {
        if (pos < this.items.length)
      return this.items[parseInt(pos)]
    else {
      throw new Error('OutOfBounds exception')
    }
  }

  // #max()
  //     7) should return an EmptySortedList exception if there is no elements in the list
  //     8) should return the max (highest) value in the list

  max() {
      if (this.items.length > 0)
      return this.items[this.items.length - 1]
    else
      throw new Error('EmptySortedList')

  }

  // #min()
  // 9) should return an EmptySortedList exception if there are no elements in the list
  // 10) should return the min (lowest) value in the list

  min() {    
    if (this.items.length > 0)
      return this.items[0]
    else
      throw new Error('EmptySortedList')
      }

  // #sum()
  // 11) should return the sum of all elements in the list
  // 12) should return 0 for an empty sorted list

  sum() {
    // it will calculate the sum of all the numbers in array
    if (this.items.length > 0)
      return this.items.reduce((acc, item) => acc = acc + item, 0)
    else
      return 0
  }

  // #avg()
  // 13) should return an EmptySortedList exception if there are no elements
  // 14) should return the average of elements in the list

  avg() {
    if (this.items.length > 0)
      return this.sum() / this.items.length
    else
      throw new Error('EmptySortedList')

  }

};

module.exports = SortedList;
