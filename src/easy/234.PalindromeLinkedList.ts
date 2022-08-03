export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

export function isPalindrome(head: ListNode | null): boolean {
  let nextHead: ListNode | undefined | null = head?.next;
  let actualValue: number | undefined | null = head?.val;
  const values = [actualValue];
  while(nextHead){
    actualValue = nextHead.val;
    nextHead = nextHead.next;
    values.push(actualValue);
  }

  const valueLength = values.length;
  const firstValues = values.slice(0, valueLength / 2).join('');
  const lastValues = values.slice(Math.ceil(valueLength/2), valueLength).reverse().join('');
  return firstValues === lastValues;
}