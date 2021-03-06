const { bubble, select, insert, heapSort, mergeSort } = require('../sort')

describe('冒泡排序', () => {
  it('用例1', () => {
    expect(bubble([9, 5, 2, 8, 1, 7])).toEqual([1, 2, 5, 7, 8, 9])
  })

  it('用例2', () => {
    expect(bubble([1, 0, 9, 12, 4, 9, 6])).toEqual([0, 1, 4, 6, 9, 9, 12])
  })
})


describe('选择排序', () => {
  it('用例1', () => {
    expect(select([9, 5, 2, 8, 1, 7])).toEqual([1, 2, 5, 7, 8, 9])
  })

  it('用例2', () => {
    expect(select([1, 0, 9, 12, 4, 9, 6])).toEqual([0, 1, 4, 6, 9, 9, 12])
  })
})

describe('插入排序', () => {
  it('用例1', () => {
    expect(insert([9, 5, 2, 8, 1, 7])).toEqual([1, 2, 5, 7, 8, 9])
  })

  it('用例2', () => {
    expect(insert([1, 0, 9, 12, 4, 9, 6])).toEqual([0, 1, 4, 6, 9, 9, 12])
  })
})

describe('堆排序', () => {
  it('用例1', () => {
    expect(heapSort([9, 5, 2, 8, 1, 7])).toEqual([1, 2, 5, 7, 8, 9])
  })

  it('用例2', () => {
    expect(heapSort([1, 0, 9, 12, 4, 9, 6])).toEqual([0, 1, 4, 6, 9, 9, 12])
  })
})

describe('归并排序', () => {
  it('用例1', () => {
    expect(mergeSort([9, 5, 2, 8, 1, 7])).toEqual([1, 2, 5, 7, 8, 9])
  })

  it('用例2', () => {
    expect(mergeSort([1, 0, 9, 12, 4, 9, 6])).toEqual([0, 1, 4, 6, 9, 9, 12])
  })
})