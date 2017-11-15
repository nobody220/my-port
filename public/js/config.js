app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
    function ($stateProvider, $urlRouterProvider, $httpProvider) {
        var landing 	= 	'/portfolio';
    		var tpl 		  = 	'/index/portfolio';
    		var newState 	= 	'/portfolio';
    		var newTitle 	= 	'/portfolio';

        $urlRouterProvider.otherwise(landing);
        $stateProvider
            .state(newState,{
                url:    landing,
                templateUrl: function(){ return baseUrl + tpl;},
                title: newTitle,
                resolve: {
                    loadPlugin: function ($ocLazyLoad, $rootScope, $state) {
                      return $ocLazyLoad.load ([
                          {
                              name: 'vendors',
                              files: [
                                  baseUrl + '/js/controllers/portfolio.js'
                              ]
                          }
                      ])
                    }
                }
            })

            .state('portfolio',{
                url:    '/portfolio',
                templateUrl: '/index/portfolio',
                title: 'My Portfolio'
            })

    }

]);
