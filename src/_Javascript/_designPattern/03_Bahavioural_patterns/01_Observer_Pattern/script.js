'Use Strict';

/**
 * The Observer is a design pattern where an object (known as a subject) maintains a list
 * of objects depending on it (observers), automatically notifying them of any changes to state.
 * When a subject needs to notify observers about something interesting happening, it broadcasts
 * a notification to the observers (which can include specific data related to the topic of the
 * notification).
 */

/**
 * In AngularJS, if the $scope object updates, an event can be triggered to notify another component.
 * The observer pattern incorporates just that - if an object is modified it broadcasts to dependent
 * objects that a change has occurred.
 */

/**
 * It is important to note that although the observer pattern does offer many advantages, one of the
 * disadvantages is a significant drop in performance as the number of observers increased.
 * One of the most notorious observers is watchers. In AngularJS, we can watch variables, functions,
 * and objects. The $$digest cycle runs and notifies each of the watchers with the new values whenever
 * a scope object is modified.
 */

/**
 * Let's can create our own Subjects and Observers in JavaScript. Let's see how this is implemented.
 */
var Subject = function() {
  this.observers = [];

  return {
    subscribeObserver: function(observer) {
      this.observers.push(observer);
    },
    unsubscribeObserver: function(observer) {
      var index = this.observers.indexOf(observer);
      if (index > -1) {
        this.observers.splice(index, 1);
      }
    },
    notifyObserver: function(observer) {
      var index = this.observers.indexOf(observer);
      if (index > -1) {
        this.observers[index].notify(index);
      }
    },
    notifyAllObservers: function() {
      for (var i = 0; i < this.observers.length; i++) {
        this.observers[i].notify(i);
      }
    }
  };
};

var Observer = function() {
  return {
    notify: function(index) {
      console.log('Observer ' + index + ' is notified!');
    }
  };
};

var subject = new Subject();

var observer1 = new Observer();
var observer2 = new Observer();
var observer3 = new Observer();
var observer4 = new Observer();

subject.subscribeObserver(observer1);
subject.subscribeObserver(observer2);
subject.subscribeObserver(observer3);
subject.subscribeObserver(observer4);

subject.notifyObserver(observer2); // Observer 2 is notified!

subject.notifyAllObservers();
// Observer 1 is notified!
// Observer 2 is notified!
// Observer 3 is notified!
// Observer 4 is notified!
