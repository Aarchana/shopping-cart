app.controller('apphomeController', function($rootScope,$scope,$http) {
	$scope.myValue=0;
	$scope.value=0;
	$rootScope.items=[];
	$rootScope.item= {id:"", itemName:"",amount:""};
	$rootScope.add= function() {
		$scope.myValue=1;
		$rootScope.items.push(angular.copy($rootScope.item));
    };
    /////
    
    $rootScope.clear= function() {
	
		$rootScope.items=[];
    };
    
    /////
    $rootScope.confirmAdd= function() {
    	$scope.value=1;
    $http({method:'POST',
    	url:'http://localhost:8080/cart/additems',
    	data:$rootScope.items})
    	.success(function(response){
    		
    		$scope.responseData=response;
    		console.log($scope.responseData)
    		
    		
    	});
    };
    
});

app.controller('delitemController', function($scope,$http) {
	
	
	 $scope.cartList= function() {
	      
		    
			
		 $http({method:'GET',
			 url:'http://localhost:8080/cart/listitems'})
		 .success(function(response){
	 		$scope.cartInfo=response
	 		
	 		
	 	});
		 };
		 
	 $scope.deleteItem= function(id) {
	    
	    
	
	 $http({method:'GET',
		 url:'http://localhost:8080/cart/deleteitem',
		 params:{"id":id}})
	 .success(function(response){
 		$scope.cartInfo=response
 		
 		
 	});
	 };
});



app.controller('listitemController', function($scope,$http) {
	
	
	 $scope.listItem= function() {
	      
	    
	
	 $http({method:'GET',
		 url:'http://localhost:8080/cart/listitems'})
	 .success(function(response){
 		$scope.cartInfo=response
 		
 		
 	});
	 };
});




app.controller('billitemController', function($scope,$http) {
	
	$scope.myvalue = false;			 

	$scope.getBill= function() {
		
		
		$http({method:'GET',
			 url:'http://localhost:8080/cart/calbill'})
		 .success(function(response){
			 $scope.myvalue=true;
	 		$scope.billInfo=response
	 	
	 		
	 		
	 	});
    };
	 
});
