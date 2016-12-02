(function(){

  'use strict';
  angular.module('app').controller('HomeController',HomeController);

  HomeController.$inject = ['navigationService']

  function HomeController(navigationService){

    var vm = this;
    vm.greeting = {};
    vm.init = init;

    function init(){
      console.log('chamado init');
      navigationService.getResource()
      .then(getInitSuccess)
      .catch(getInitError);

      function getInitSuccess(data){
        console.log('init retorno');
        console.log(data);
        vm.greeting = data;
      }

      function getInitError(err){
        console.log('init retorno erro');
        console.log(err);
      }
    }
  }

})();
