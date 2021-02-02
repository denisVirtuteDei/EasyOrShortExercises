class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

function stringify(list) {
    if(!list) return 'null'
    return `${list.data} -> ${stringify(list.next)}`
}