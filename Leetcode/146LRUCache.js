function ListNode(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    this.head = new ListNode(-1, -1);
    this.tail = new ListNode(-1, -1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.cache.has(key)) {
        const node = this.cache.get(key);
        this.removeNode(node);
        this.insertNodeAtHead(node);
        return node.value;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) {
        const node = this.cache.get(key);
        node.value = value;
        this.removeNode(node);
        this.insertNodeAtHead(node);
    } else {
        if (this.cache.size >= this.capacity) {
            const nodeToEvict = this.tail.prev;
            this.cache.delete(nodeToEvict.key);
            this.removeNode(nodeToEvict);
        }
        const newNode = new ListNode(key, value);
        this.cache.set(key, newNode);
        this.insertNodeAtHead(newNode);
    }
};

LRUCache.prototype.removeNode = function(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
};

LRUCache.prototype.insertNodeAtHead = function(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */