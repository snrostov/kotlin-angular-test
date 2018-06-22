if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'my-app'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'my-app'.");
}
this['my-app'] = function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  function TestComponent() {
    this.test = 'test123451';
  }
  TestComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TestComponent',
    interfaces: []
  };
  _.TestComponent = TestComponent;
  Kotlin.defineModule('my-app', _);
  return _;
}(typeof this['my-app'] === 'undefined' ? {} : this['my-app'], kotlin);

//# sourceMappingURL=my-app.js.map
