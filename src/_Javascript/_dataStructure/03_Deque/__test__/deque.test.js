import Deque from '../deque';

describe('deque', () => {
  it('should create empty deque', () => {
    const deque = new Deque();
    expect(deque).not.toBeNull();
    expect(deque.linkedList).not.toBeNull();
  });

  it('should push data to deque', () => {
    const deque = new Deque();

    deque.push(1);
    deque.push(2);

    expect(deque.list.toString()).toBe('1,2');
  });

  it('should peekback data from deque', () => {
    const deque = new Deque();

    expect(deque.peekBack()).toBeUndefined();

    deque.push(1);
    deque.push(2);

    expect(deque.peekBack()).toBe(2);
  });

  it('should peekfront data from deque', () => {
    const deque = new Deque();

    expect(deque.peekFront()).toBeUndefined();

    deque.unshift(1);
    deque.unshift(2);

    expect(deque.peekFront()).toBe(2);
  });

  it('should shift from deque in FIFO order', () => {
    const deque = new Deque();

    deque.push(1);
    deque.push(2);

    expect(deque.shift()).toBe(1);
    expect(deque.shift()).toBe(2);
    expect(deque.shift()).toBeUndefined();
  });
});
