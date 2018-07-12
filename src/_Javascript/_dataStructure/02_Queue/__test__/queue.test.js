import Queue from '../queue';

describe('Queue', () => {
  it('should create empty queue', () => {
    const queue = new Queue();
    expect(queue).not.toBeNull();
    expect(queue.linkedList).not.toBeNull();
  });

  it('should push data to queue', () => {
    const queue = new Queue();

    queue.push(1);
    queue.push(2);

    expect(queue.list.toString()).toBe('1,2');
  });

  it('should peek data from queue', () => {
    const queue = new Queue();

    expect(queue.peek()).toBeUndefined();

    queue.push(1);
    queue.push(2);

    expect(queue.peek()).toBe(1);
  });

  it('should shift from queue in FIFO order', () => {
    const queue = new Queue();

    queue.push(1);
    queue.push(2);

    expect(queue.shift()).toBe(1);
    expect(queue.shift()).toBe(2);
    expect(queue.shift()).toBeUndefined();
  });
});
