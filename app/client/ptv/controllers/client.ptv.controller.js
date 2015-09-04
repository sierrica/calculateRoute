app.controller ('PtvController', function ($rootScope, $scope, $location, $auth, $http, User, $translate, Ptv) {

    console.log ("DENTRO PTV CONTROLLER");

    var that = $scope;




    $scope.toolTipster = function (id) {
        var id_escaped = id.replace(/(:|\.|\[|\])/g, "\\$1");
        $("#" + id_escaped).closest("div.row").find('.tooltip').tooltipster ({
            position: 'top',
            animation: 'fade',
            delay: 100,
            theme: 'tooltipster-default',
            //theme: 'tooltipster-shadow',
            touchDevices: true,
            trigger: 'hover',
            hideOnClick: false,     // Importante, sino en movil, CRASH
            contentAsHTML: true,
            maxWidth: 250,
            offsetX: 0,
            offsetY: -5
        });
    };

        console.log ("OPCIONES AL COMIENZO");
        console.log (options)

        if ( ! _.isEmpty(options)) {
            $scope.height = parseInt (options.vehicle.height);
            $scope.width = parseInt (options.vehicle.width);
            $scope.length = parseInt (options.vehicle.length);
            $scope.weight = parseInt (options.vehicle.weight);
            $scope.fueltype = options.vehicle.fueltype;
            $scope.fuelconsumption = parseInt (options.vehicle.fuelconsumption);

            $scope.optimization = options.trayect.optimization;
            $('#optimization').val($scope.optimization).change();
            $scope.dinamic_route = options.trayect.dinamic_route;

            $scope.motorway = parseInt (options.trayect.motorway);
            $('input[for=motorway]').val($scope.motorway).change();
            $scope.highway = parseInt (options.trayect.highway);
            $('input[for=highway]').val($scope.highway).change();
            $scope.national = parseInt (options.trayect.national);
            $('input[for=national]').val($scope.national).change();
            $scope.provincial = parseInt (options.trayect.provincial);
            $('input[for=provincial]').val($scope.provincial).change();
            $scope.county = parseInt (options.trayect.county);
            $('input[for=county]').val($scope.county).change();
            $scope.residential = parseInt (options.trayect.residential);
            $('input[for=residential]').val($scope.residential).change();
            $scope.urban = parseInt (options.trayect.urban);
            $('input[for=urban]').val($scope.urban).change();

            $scope.tollroad = parseInt (options.trayect.tollroad);
            $('input[for=tollroad]').val($scope.tollroad).change();
            $scope.ramps = parseInt (options.trayect.ramps);
            $('input[for=ramps]').val($scope.ramps).change();
            $scope.ferry = parseInt (options.trayect.ferry);
            $('input[for=ferry]').val($scope.ferry).change();



            $scope.manoeuvres = options.details.manoeuvres;
        }

        $rootScope.$on ('myoptions', function (event) {
            var options = Ptv.getOptions ();

            $scope.height = parseInt (options.vehicle.height);
            $scope.width = parseInt (options.vehicle.width);
            $scope.length = parseInt (options.vehicle.length);
            $scope.weight = parseInt (options.vehicle.weight);
            $scope.fueltype = options.vehicle.fueltype;
            $scope.fuelconsumption = parseInt (options.vehicle.fuelconsumption);


            $scope.optimization = options.trayect.optimization;
            $('#optimization').val($scope.optimization).change();
            $scope.dinamic_route = options.trayect.dinamic_route;

            $scope.motorway = parseInt (options.trayect.motorway);
            $('input[for=motorway]').val($scope.motorway).change();
            $scope.highway = parseInt (options.trayect.highway);
            $('input[for=highway]').val($scope.highway).change();
            $scope.national = parseInt (options.trayect.national);
            $('input[for=national]').val($scope.national).change();
            $scope.provincial = parseInt (options.trayect.provincial);
            $('input[for=provincial]').val($scope.provincial).change();
            $scope.county = parseInt (options.trayect.county);
            $('input[for=county]').val($scope.county).change();
            $scope.residential = parseInt (options.trayect.residential);
            $('input[for=residential]').val($scope.residential).change();
            $scope.urban = parseInt (options.trayect.urban);
            $('input[for=urban]').val($scope.urban).change();

            $scope.tollroad = parseInt (options.trayect.tollroad);
            $('input[for=tollroad]').val($scope.tollroad).change();
            $scope.ramps = parseInt (options.trayect.ramps);
            $('input[for=ramps]').val($scope.ramps).change();
            $scope.ferry = parseInt (options.trayect.ferry);
            $('input[for=ferry]').val($scope.ferry).change();


            $scope.manoeuvres = options.details.manoeuvres;
        });


    var format_extremes = function (identifier, value) {
        if (value == -99) $("#" + identifier + ' .rangeslider__handle').css ("background-image", "url('images/obligation.png')");
        else if (value == 2501) $("#" + identifier + ' .rangeslider__handle').css ("background-image", "url('images/prohibited.png')");
        else $("#" + identifier + ' .rangeslider__handle').css ("background-image", "url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjAuMCIgeDI9IjAuNSIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjEzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZmZmZmZmIiBzdG9wLW9wYWNpdHk9IjAuMCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==')");

    };
    var format_background = function (identifier, value) {
        if (value < 0) $("#" + identifier).css ("background", "rgba(0, 255, 0, " + Math.abs(value) / 100 + ")");
        else if (value > 0) $("#" + identifier).css ("background", "rgba(255, 0, 0, " + (value / 25 / 100) + ")");
        else $("#" + identifier).css ("background", "#D2D3CB");
    };

    var format_optimization = function (identifier, value) {
        if (value <= 30) $("#" + identifier).parent().prev().text($translate.instant('shortest')).css('opacity', '1');
        else if (value > 30 && value < 50) $("#" + identifier).parent().prev().text($translate.instant('short')).css('opacity', '0.5');
        else if (value == 50) $("#" + identifier).parent().prev().css('opacity', '0');
        else if (value > 50 && value <90) $("#" + identifier).parent().prev().text($translate.instant('fast')).css('opacity', '0.5');
        else $("#" + identifier).parent().prev().text($translate.instant('fastest')).css('opacity', '1');

    };

    $scope.rangeSliderOptimization = function(id) {
        var range_slider = $('#' + id).rangeslider ({
            polyfill: false,
            update: true,
            onInit: function() {
                format_optimization (this.identifier, this.value);
            },
            onSlide: function (position, value) {
                format_optimization (this.identifier, this.value);
            },
            onSlideEnd: function (position, value) { }
        });
    };


    $scope.rangeSliderBonus = function(id) {
        var range_slider = $('input[for="' + id + '"]').rangeslider ({
            polyfill: false,
            update: true,
            onInit: function() {
                format_background (this.identifier, this.value);
                format_extremes (this.identifier, this.value);
                var slider = this;
                $('#' + id).on ('input', function(ev) {
                    var value = $(ev.currentTarget).val();
                    slider.value = value;
                    slider.update();
                    format_background (slider.identifier, slider.value);
                    format_extremes (slider.identifier, slider.value);
                });
            },
            onSlide: function (position, value) {
                format_background (this.identifier, this.value);
                format_extremes (this.identifier, this.value);
            },
            onSlideEnd: function (position, value) { }
        });
    };
});
