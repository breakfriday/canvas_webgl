

// 维护 RenderLayer 对应的 canvas 元素的缓存
const _backingStores = [];

// 获取指定的缓存元素
function getBackingStore(id) {
  for (let i = 0, len = _backingStores.length; i < len; i++) {
    if (_backingStores[i].id === id) {
      return _backingStores[i].canvas;
    }
  }
  return null;
}


// 清除指定元素缓存
function invalidateBackingStore(id) {
  for (let i = 0, len = _backingStores.length; i < len; i++) {
    if (_backingStores[i].id === id) {
      _backingStores.splice(i, 1);
      break;
    }
  }
}


// 清除所有缓存
function invalidateAllBackingStores() {
  _backingStores = [];
}


export default {
     

};
