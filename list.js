class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;

    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        } else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null)
        }
    }

    find(item) {
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }

    remove(item) {
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }

    insertBefore(reference, data) {
        let curr = this.head;

        while (curr.next != null) {
            if (curr.next.value == reference) {
                let newNode = new _Node(data)
                newNode.next = curr.next;
                curr.next = newNode;
                return;
            }

            curr = curr.next;
        }
    }

    insertAfter(reference, data) {
        let curr = this.head;

        while (curr.next != null) {
            if (curr.value == reference) {
                let newNode = new _Node(data)
                newNode.next = curr.next;
                curr.next = newNode;
                return;
            }

            curr = curr.next;
        }
    }
    insertAt(reference, position) {
        let curr = this.head;
        let count = 0;
        while (count !== position - 1) {
            count++;
            curr = curr.next;
        }

        let newNode = new _Node(reference, null);
        newNode.next = curr.next.next;
        curr.next = newNode;
    }

}

function display(list) {
    let curr = list.head
    while (curr !== null) {

        process.stdout.write(`${curr.value},`)
        curr = curr.next
    }
    console.log('\n')
}

function size(list) {
    let curr = list.head
    let count = 1
    while (curr.next !== null) {
        curr = curr.next
        count++
    }
    console.log(count)
    return count;
}

function isEmpty(list) {
    let curr = list.head
    if (curr) {
        console.log('list is not empty')
        return true
    } else {
        console.log('list is empty!')
        return false
    }
}

function findPrevious(list, value) {
    let curr = list.head;
    while (curr.next !== null) {
        if (curr.next.value === value)
            console.log(curr.value);

        curr = curr.next;
    }
    return
}

function findLast(list) {
    let curr = list.head;
    while (curr.next !== null) {
        curr = curr.next;
    }

    console.log(curr.value)
}

function reverseList(list) {
    let curr = list.head
    let prev = null;
    if (!list.head)
        return null
    if (!list.head.next)
        return list.head;

    // let rev = reverseList(list.head.next)
    // list.head.next.next = list.head;
    // list.head.next = null;
    // return rev

    while (curr !== null) {
        curr.next = prev;
        prev = curr;
        curr = curr.next;
    }
    console.log(list)
}

function thirdToLast(list) {
    let curr = list.head
    let sz = size(list)
    let count = 1;
    while (count !== sz - 2) {
        curr = curr.next
        count++
    }
    display(list)
    console.log(curr)
    return curr
}

function middleOfList(list) {
    let curr = list.head;
    let middleIndex = null;
    let count = 0;
    if (size(list) % 2 === 0)
        middleIndex = (size(list) / 2);
    else
        middleIndex = (size(list) / 2) - 0.5;


    while (count !== middleIndex && curr.next) {
        curr = curr.next;
        count++;
    }

    console.log(curr.value)
}

function findCycleList(list) {
    let currentValues = [];
    let curr = list.head;
    while (curr !== null) {
        if (currentValues.includes(curr.value)) {
            return true
        }
        currentValues.push(curr.value);
        curr = curr.next;
    }
    return false;
}

function findCycleByLoops(list) {
    let loop1;
    let loop2;
    let current = list.head
    let curr = list.head.next;
    while (current.next && curr.next.next) {
        loop1 = current.value;
        loop2 = curr.value;
        current = current.next;
        curr = curr.next.next;
        if (loop1 === loop2 && loop2 !== null) {
            console.log(loop1)
            console.log(loop2)
            return true;
        }
    }
    return false

}

function main() {

    let SLL = new LinkedList();
    let emptyList = new LinkedList()

    SLL.insertFirst('Apollo')
    SLL.insertLast('Boomer')
    SLL.insertLast('Helo')
    SLL.insertLast('Husker')
    SLL.insertLast('Starbuck')
    SLL.insertLast('Tauhida')
    SLL.insertLast('test')

    let cycle = new LinkedList();
    cycle.insertFirst('Apollo')
    cycle.insertLast('Boomer')
    cycle.insertLast('Helo')
    cycle.head.next.next.next = cycle.head;

    // SLL.remove('Helo')
    // SLL.insertBefore('Boomer', 'Malik')
    // SLL.insertAfter('Malik', 'Will')
    // SLL.insertAt('Josh', 1)

    // size(SLL);  
    // isEmpty(emptyList)
    // findPrevious(SLL, 'Starbuck')
    // findLast(SLL)
    // // display(SLL);
    // reverseList(SLL)
    display(SLL);
    //thirdToLast(SLL)
    //middleOfList(SLL)
    //console.log(findCycleList(cycle));
    console.log(findCycleByLoops(SLL));
}

main()

