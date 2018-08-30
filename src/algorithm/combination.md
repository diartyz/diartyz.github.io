# 组合

## 求数组的组合

```javascript
const nums = Array(10)
  .fill()
  .map((val, i) => i + 1)

function combination() {
  const result = []

  // function combine(sourceArr = [], index = 0) {
  //   for (let i = index; i < nums.length; i++) {
  //     const tempArr = sourceArr.slice()
  //     tempArr.push(nums[i])
  //     if (tempArr.length === 4) {
  //       result.push(tempArr)
  //     } else {
  //       combine(tempArr, i + 1)
  //     }
  //   }
  // }

  function combine(tempArr = [], index = 0) {
    if (tempArr.length === 4) {
      result.push(tempArr)
    } else {
      for (let i = index; i < nums.length; i++) {
        combine(tempArr.concat(nums[i]), i + 1)
      }
    }
  }

  combine()
  return result
}

combination()
```
