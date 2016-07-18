angular.module('miniRouting')
  .controller('productsCtrl',function($stateParams,$scope, productsService){

$scope.productData = '';

    if($stateParams.id === 'shoes'){
      $scope.productData = productsService.shoeData;
    }
    if($stateParams.id === 'socks'){
      $scope.productData = productsService.sockData;
    }

});
