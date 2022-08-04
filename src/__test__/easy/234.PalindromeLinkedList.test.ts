import { isPalindrome, ListNode } from '../../easy/234.PalindromeLinkedList';

describe('Palindome Linked List', () => {
  test('head should be true', () => {
    const ln1 = new ListNode(1, null);
    const ln2 = new ListNode(2, ln1);
    const ln3 = new ListNode(2, ln2);
    const ln4 = new ListNode(1, ln3);
    const res = isPalindrome(ln4);
    expect(res).toBeTruthy();
  });
  test('head = [1, 2, 1] should be true', () => {
    const ln1 = new ListNode(1, null);
    const ln2 = new ListNode(2, ln1);
    const ln3 = new ListNode(1, ln2);
    const res = isPalindrome(ln3);
    expect(res).toBeTruthy();
  });
  test('head should be false', () => {
    const ln1 = new ListNode(2, null);
    const ln2 = new ListNode(1, ln1);
    const res = isPalindrome(ln2);
    expect(res).toBeFalsy();
  });
});
