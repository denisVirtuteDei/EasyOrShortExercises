class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

function stringify(list) {
    return list ? `${list.data} -> ${stringify(list.next)}` : 'null'
}