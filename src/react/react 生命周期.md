# 生命周期

---

## 新版生命周期

```javascript
// Mounting
constructor(props) {}
static getDerivedStateFromProps(props, state) {}
render() {}
componentDidMount() {}

// Updating
static getDerivedStateFromProps(props, state) {}
shouldComponentUpdate(nextProps, nextState) {}
render() {}
getSnapshotBeforeUpdate(prevProps, prevState) {}
componentDidUpdate(prevProps, prevState, snapshot) {}
```

![lifecycle-new](https://cdn-images-1.medium.com/max/2000/1*cEWErpe-oY-_S1dOaT1NtA.jpeg)

---

## 旧版生命周期

![lifecycle](https://upload-images.jianshu.io/upload_images/1814354-4bf62e54553a32b7.png)
