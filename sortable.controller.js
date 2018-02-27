/**=========================================================
 * Module: sortable.js
 * Sortable controller
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.elements')
        .controller('SortableController', SortableController);

    SortableController.$inject = ['$scope'];

    function SortableController($scope) {

        activate();

        ////////////////

        function activate() {
            // Single List
            $scope.data1 = [{
                id: 1,
                name: '1. Donald Hoffman'
            }, {
                id: 2,
                name: '2. Wallace Barrett'
            }, {
                id: 3,
                name: '3. Marsha Hicks'
            }, {
                id: 4,
                name: '4. Roland Brown'
            }];

            $scope.add = function() {
                $scope.data1.push({
                    id: $scope.data1.length + 1,
                    name: '5. Earl Knight'
                });
            };

            $scope.sortableOptions = {
                placeholder: 'box-placeholder m0',
                update: function (e, ui) {
                    var logEntry = $scope.data1.map(function (i) {
                        return i.name + '';
                    }).join(', ');
                    console.log('Update: ' + logEntry);
                },
                stop: function (e, ui) {
                    // this callback has the changed model
                    var logEntry = $scope.data1.map(function (i) {
                        return i.name + '';
                    }).join(', ');
                    console.log('Stop: ' + logEntry);
                }
            };
        }
    }

})();
