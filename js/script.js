// Code goes here

function TestCase(testdata) {
  for (var i in testdata) {
    if (testdata.hasOwnProperty(i)) {
      this[i] = testdata[i];
    }
  }
}

function DashboardCtrl($http) {
  this.tests = [];
  $http.get('data.json').success(
    this.populateTestData.bind(this));
}

DashboardCtrl.prototype.populateTestData = function(data) {
  for (var test in data) {
    this.tests.push(new TestCase(data[test]));
  }
};

var app = angular.module('myApp', []);
