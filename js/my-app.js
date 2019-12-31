var myApp = {};
var mainView = {};
var rightView = {};
var $$ = Dom7;

var f7=angular.module("AngularApp", []);

f7.run(function() {

    myApp = new Framework7({
        modalTitle: 'Framework7',
        swipePanel: 'left',
        material: true,
        pushState: true,
        angular: true
    });
    mainView = myApp.addView('.view-main', {});
});

//controller halaman index
f7.controller("RootCtrl", ["$scope", function($scope) {

   

}]);

f7.controller("calc",["$scope", function($scope){
    //membuat fungsi operasi perhitungan
    $scope.operasi=function(aksi) {
        //memasukan data form ke dalam variable
        var angka1=+$scope.angka1;
        var angka2=+$scope.angka2;      
        if(aksi=='tambah') { //untuk tambah
            $scope.hasil=angka1+angka2; //memasukan hasil
        } else if(aksi=='kurang') { //untuk kurang
            $scope.hasil=angka1-angka2; //memasukan hasil
        } else if(aksi=='kali'){ //untuk kali
            $scope.hasil=angka1*angka2; //memasukan hasil
        } else if(aksi=='bagi') { //untuk bagi
            $scope.hasil=angka1/angka2; //memasukan hasil
        }
    };
}]);

f7.controller("localData", ["$scope", function($scope) {
    // tampilkan searchbar
    $scope.isVisible=false;
    $scope.showSearch = function() {
        $scope.isVisible=true;
    }


    $scope.isiData=[ //data dalam format JSON yang akan ditampilkan
        {"id":1,"first_name":"Susannah","profile":"https://robohash.org/doloresvoluptatenihil.bmp?size=50x50&set=set1","email":"spedri0@nymag.com","gender":"Female"},
        {"id":2,"first_name":"Luella","profile":"https://robohash.org/velvoluptatemquia.jpg?size=50x50&set=set1","email":"lllewellin1@facebook.com","gender":"Female"},
        {"id":3,"first_name":"Rhodie","profile":"https://robohash.org/impeditetperferendis.jpg?size=50x50&set=set1","email":"rroylance2@java.com","gender":"Female"},
        {"id":4,"first_name":"Cassy","profile":"https://robohash.org/velitrepellatut.jpg?size=50x50&set=set1","email":"cstapleton3@ameblo.jp","gender":"Female"},
        {"id":5,"first_name":"Amata","profile":"https://robohash.org/providentetet.bmp?size=50x50&set=set1","email":"akenson4@vistaprint.com","gender":"Female"},
        {"id":6,"first_name":"Quinta","profile":"https://robohash.org/animiuttotam.jpg?size=50x50&set=set1","email":"qvaleri5@constantcontact.com","gender":"Female"},
        {"id":7,"first_name":"Erich","profile":"https://robohash.org/enimveritatisquo.bmp?size=50x50&set=set1","email":"evuitton6@wikimedia.org","gender":"Male"},
        {"id":8,"first_name":"Emmi","profile":"https://robohash.org/cumquequisquamnon.jpg?size=50x50&set=set1","email":"erichen7@economist.com","gender":"Female"},
        {"id":9,"first_name":"Ron","profile":"https://robohash.org/explicabolaboriosamex.png?size=50x50&set=set1","email":"rgreet8@marketwatch.com","gender":"Male"},
        {"id":10,"first_name":"Marcelo","profile":"https://robohash.org/deseruntdebitistempora.jpg?size=50x50&set=set1","email":"mveal9@google.co.uk","gender":"Male"}];

}]);

//controller halaman index
f7.controller("externalData", ["$scope","$http", function($scope,$http) {
    // tampilkan searchbar
    $scope.isVisible=false;
    $scope.showSearch = function() {
        $scope.isVisible=true;
    }

    // ambil data dari API news.org
    $http.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=51dfd39984fe476f90f625457f70c96a').then(function(response){ //mengambil data dari berita terbaru news API
        // console.log(response.data.articles);
        $scope.isiData=response.data.articles; //memasukan respons ke variable isiData
    });


}]);