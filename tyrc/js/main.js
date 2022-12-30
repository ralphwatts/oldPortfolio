var app = angular.module('lists', ['ngAnimate']);

app.controller('PatientController', function ($scope, $timeout, alertService) {
    $scope.newPatient = new Object();

    $scope.patientList = [
        {
            name: "Laundry",
            //lastname: "Temple",
            birthdate: "Remember bed sheets"
        },
        {
            name: "Meal Prep",
            //lastname: "Stanwick",
            //birthdate: "16-07-1957"
        },
        {
            name: "Read",
            //lastname: "Stanwick",
            //birthdate: "16-07-1957"
        }
        ];

    $scope.patientSelected = undefined;
    $scope.addPatient = function () {
        if ($scope.newPatient.name != undefined) {
            $scope.patientList.push($scope.newPatient);
            $scope.newPatient = new Object();
            alertService.add("success", "Item Added");
            $timeout(alertService.clear, 1500);
        }
    }

    $scope.deletePatient = function (index) {
        if (JSON.stringify($scope.patientList[index]) === JSON.stringify($scope.patientSelected)) {
            $scope.patientSelected = undefined;
        }
        $scope.patientList.splice(index, 1);
    }

    $scope.deleteAllPatients = function (index) {
        if (JSON.stringify($scope.patientList[index]) === JSON.stringify($scope.patientSelected)) {
            $scope.patientSelected = undefined;
        }
        $scope.patientList.splice(index);
    }

    $scope.showPatientDetails = function (patient) {
        $scope.patientSelected = patient;
        $scope.patientDisplayed = patient;
    }
});

app.factory('alertService', ['$rootScope', function ($rootScope) {
    var alertService;
    $rootScope.alerts = [];
    return alertService = {
        add: function (type, msg) {
            return $rootScope.alerts.push({
                type: type,
                msg: msg,
                close: function () {
                    return alertService.closeAlert(this);
                }
            });
        },
        closeAlert: function () {
            return $rootScope.alerts.splice(0, 1)
        },
        clear: function () {
            $rootScope.alerts = [];
        }
    };
    }]);
var myAppModule = angular.module('MyApp', ['ui.sortable'])