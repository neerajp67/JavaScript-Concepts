// Example of ListNode definition (needed for the code to run)
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

//Dummy Data
const l1 = new ListNode(0);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

const l2 = new ListNode(0);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
    let head = new ListNode(0);
    let current = head;
    let carry = 0;

    while (l1 || l2 || carry) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = Math.floor(sum / 10);
        sum = sum % 10;

        current.next = new ListNode(sum);
        current = current.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;

    }
    return head.next;
}

console.log(addTwoNumbers(l1, l2))