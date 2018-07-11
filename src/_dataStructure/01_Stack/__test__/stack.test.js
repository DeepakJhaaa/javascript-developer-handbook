import Stack from '../Stack';

describe(__filename, () => {
  it('should create empty stack', () => {
    const stack = new Stack();

    expect(stack).not.toBeNull();
  });

  it('should stack data to stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);

    expect(stack.list.toString()).toBe('1,2');
  });

  it('should peek data from stack', () => {
    const stack = new Stack();
    expect(stack.peek()).toBeNull();

    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
  });

  it('should pop data from stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);

    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBeNull();
  });

  it('should be possible to convert stack to array', () => {
    const stack = new Stack();
    expect(stack.peek()).toBeNull();

    stack.push(1);
    stack.push(2);
    stack.push(3);
    // expect(stack.list.toArray()).toEqual([3, 2, 1]);
  });
});
