/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
  // 容量
  this.capacity = capacity;
  // 哈希表Map
  this.map = new Map();
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  if (!this.map.has(key)) {
      return -1;
  }

  // 如果是有，则删除，在set map, 这样就放到了最后面了
  const v = this.map.get(key);
  this.map.delete(key);
  this.map.set(key, v);
  return v;
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  // 如果已经存在的，先删除
  if (this.map.has(key)) {
      this.map.delete(key);
  }

  // 新增到尾部
  this.map.set(key, value);

  // 在判断大小是否超出
  if (this.map.size > this.capacity) {
      // 如果大于，删除第一个元素
      this.map.delete(this.map.keys().next().value);
  }
};

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/