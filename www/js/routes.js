angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu.page1', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page1.html',
        controller: 'page1Ctrl'
      }
    }
  })

  .state('menu.page2', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page2.html',
        controller: 'page2Ctrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.getDirection', {
    url: '/maps',
    views: {
      'side-menu21': {
        templateUrl: 'templates/getDirection.html',
        controller: 'getDirectionCtrl'
      }
    }
  })

  .state('menu.page5', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page5.html',
        controller: 'page5Ctrl'
      }
    }
  })

  .state('menu.page6', {
    url: '/p2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page6.html',
        controller: 'page6Ctrl'
      }
    }
  })

  .state('menu.page11', {
    url: '/p3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page11.html',
        controller: 'page11Ctrl'
      }
    }
  })

  .state('menu.page12', {
    url: '/p4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page12.html',
        controller: 'page12Ctrl'
      }
    }
  })

  .state('menu.page13', {
    url: '/p5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page13.html',
        controller: 'page13Ctrl'
      }
    }
  })

  .state('menu.page10', {
    url: '/p6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page10.html',
        controller: 'page10Ctrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});