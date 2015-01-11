'use strict';

describe('Directive: vlSpecEditor', function () {

  // load the directive's module
  beforeEach(module('vleApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = {
      vlSpec: "{}",
      shorthand: "point."
    };
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<vl-spec-editor></vl-spec-editor>');
    element = $compile(element)(scope);
    expect(scope.vlSpec).toBe('{}');
    expect(scope.shorthand).toBe('point.');
  }));
});
