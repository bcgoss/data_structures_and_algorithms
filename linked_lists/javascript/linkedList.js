function List () {
  this._length = 0;
  this.head = null;
};
List.prototype.push = function (data){
  if (this.head == null) {
    this.head = new ListNode(data)
  }
  else{
    var currentNode = this.head
    while (currentNode.nextNode != null) { currentNode = currentNode.nextNode }
    currentNode.nextNode = new ListNode(data);
  }
  this._length++;
};
List.prototype.pop = function (){
  if (this.head == null) {
    return null;
  } else if (this.head.nextNode == null) {
    var node = this.head;
    this.head = null;
    this._length --;
    return node;
  } else {
    this._length --;
    var currentNode = this.head
    var prevNode = null
    while (currentNode.nextNode != null) {
      prevNode = currentNode
      currentNode = currentNode.nextNode
    }
    prevNode.nextNode = null;
    return currentNode;
  }
}
