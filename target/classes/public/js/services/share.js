app.service('share', function () {
    emp = {};

    return {
        get: function () {
            return emp;
        },
        set: function(value) {
            angular.copy(value,emp);
        }
    }
});
