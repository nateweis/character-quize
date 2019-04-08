const app = angular.module('GameApp',[]);
app.controller('GameController',['$http', function ($http) {
  const game = this;

  this.getCharacterInfo = function () {
    const num = Math.floor(Math.random() * 44360) + 1
    $http({
      method:"GET",
      url:"https://api.jikan.moe/v3/character/" + num
    }).then(function (res) {
      console.log(res.data);
      console.log(num);
      game.character = res.data
    },function (err) {
      console.log(err);
    })
  }
}])
