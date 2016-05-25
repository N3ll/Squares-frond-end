(function ($) {
    "use strict";
    var app = angular.module('squares', ['ngRoute', 'ngDragDrop']);
    var sets = [
        {
            id: 1,
            name: "MERILIN",
            author: "Worhol J",
            description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
            rating: 89,
            thumbnail: "./images/square.png"
            }, {
            id: 2,
            name: "FREAKS",
            author: "Camila",
            description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
            rating: 49,
            thumbnail: "./images/square-2.png",
            }, {
            id: 3,
            name: "CLOWN",
            author: "Neo",
            description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
            rating: 100,
            thumbnail: "./images/square-3.png",
            comments: [{
                user: "Bob",
                img: "./images/bob.jpg",
                text: "Those colors are amazing!"
            }, {
                user: "Agnes",
                img: "./images/agnes.jpg",
                text: "I would like to buy a unicorn with this pattern! "
            }],
            squares: [{
                    img: "./images/square-3/1.jpg",
                    x: 1,
                    y: 1
                }
                   , {
                    img: "./images/square-3/2.jpg",
                    x: 1,
                    y: 2
                }, {
                    img: "./images/square-3/3.jpg",
                    x: 1,
                    y: 3
                }
                , {
                    img: "./images/square-3/4.jpg",
                    x: 1,
                    y: 4
                }
                , {
                    img: "./images/square-3/5.jpg",
                    x: 1,
                    y: 5
                }
               , {
                    img: "./images/square-3/6.jpg",
                    x: 2,
                    y: 1
                }
                , {
                    img: "./images/square-3/7.jpg",
                    x: 2,
                    y: 2
                }
                , {
                    img: "./images/square-3/8.jpg",
                    x: 2,
                    y: 3
                }
                , {
                    img: "./images/square-3/9.jpg",
                    x: 2,
                    y: 4
                }
                , {
                    img: "./images/square-3/10.jpg",
                    x: 2,
                    y: 5
                },
                {
                    img: "./images/square-3/11.jpg",
                    x: 3,
                    y: 1
                },
                {
                    img: "./images/square-3/12.jpg",
                    x: 3,
                    y: 2
                        },
                {
                    img: "./images/square-3/13.png",
                    x: 3,
                    y: 3
                        },
                {
                    img: "./images/square-3/14.jpg",
                    x: 3,
                    y: 4
                        },
                {
                    img: "./images/square-3/15.jpg",
                    x: 3,
                    y: 5
                        },
                {
                    img: "./images/square-3/16.jpg",
                    x: 4,
                    y: 1
                        },
                {
                    img: "./images/square-3/17.jpg",
                    x: 4,
                    y: 2
                        },
                {
                    img: "./images/square-3/18.jpg",
                    x: 4,
                    y: 3
                        },
                {
                    img: "./images/square-3/19.jpg",
                    x: 4,
                    y: 4
                        },
                {
                    img: "./images/square-3/20.jpg",
                    x: 4,
                    y: 5
                        },
                {
                    img: "./images/square-3/21.jpg",
                    x: 5,
                    y: 1
                        },
                {
                    img: "./images/square-3/22.jpg",
                    x: 5,
                    y: 2
                        },
                {
                    img: "./images/square-3/23.jpg",
                    x: 5,
                    y: 3
                        },
                {
                    img: "./images/square-3/24.jpg",
                    x: 5,
                    y: 4
                        },
                {
                    img: "./images/square-3/25.jpg",
                    x: 5,
                    y: 5
                        }
                        ]
                },
        {
            id: 4,
            name: "FREAKS2",
            author: "Camila",
            description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
            rating: 21,
            thumbnail: "./images/square-4.png",
                },
        {
            id: 5,
            name: "Puzzel",
            author: "Joe",
            description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
            rating: 124,
            thumbnail: "./images/square-5.jpg",
                },
        {
            id: 6,
            name: "GRANNY",
            author: "Tweetie",
            description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
            rating: 124,
            thumbnail: "./images/square-6.jpg",
                }
                ];

    var sets2 = [
        {
            id: 1,
            name: "MERILIN",
            author: "Worhol J",
            description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
            rating: 89,
            thumbnail: "./images/square.png"
            }, {
            id: 2,
            name: "FREAKS",
            author: "Camila",
            description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
            rating: 49,
            thumbnail: "./images/square-2.png",
            }, {
            id: 3,
            name: "CLOWN",
            author: "Neo",
            description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
            rating: 100,
            thumbnail: "./images/square-3.png",
            comments: [{
                user: "Bob",
                img: "./images/bob.jpg",
                text: "Those colors are amazing!"
            }, {
                user: "Agnes",
                img: "./images/agnes.jpg",
                text: "I would like to buy a unicorn with this pattern! "
            }],
            squares: [{
                    img: "./images/square-3/1.jpg",
                    x: 1,
                    y: 1
                }
                   , {
                    img: "./images/square-3/2.jpg",
                    x: 1,
                    y: 2
                }, {
                    img: "./images/square-3/3.jpg",
                    x: 1,
                    y: 3
                }
                , {
                    img: "./images/square-3/4.jpg",
                    x: 1,
                    y: 4
                }
                , {
                    img: "./images/square-3/5.jpg",
                    x: 1,
                    y: 5
                }
               , {
                    img: "./images/square-3/6.jpg",
                    x: 2,
                    y: 1
                }
                , {
                    img: "./images/square-3/7.jpg",
                    x: 2,
                    y: 2
                }
                , {
                    img: "./images/square-3/8.jpg",
                    x: 2,
                    y: 3
                }
                , {
                    img: "./images/square-3/9.jpg",
                    x: 2,
                    y: 4
                }
                , {
                    img: "./images/square-3/10.jpg",
                    x: 2,
                    y: 5
                },
                {
                    img: "./images/square-3/11.jpg",
                    x: 3,
                    y: 1
                },
                {
                    img: "./images/square-3/12.jpg",
                    x: 3,
                    y: 2
                        },
                {
                    img: "./images/square-3/13.png",
                    x: 3,
                    y: 3
                        },
                {
                    img: "./images/square-3/14.jpg",
                    x: 3,
                    y: 4
                        },
                {
                    img: "./images/square-3/15.jpg",
                    x: 3,
                    y: 5
                        },
                {
                    img: "./images/square-3/16.jpg",
                    x: 4,
                    y: 1
                        },
                {
                    img: "./images/square-3/17.jpg",
                    x: 4,
                    y: 2
                        },
                {
                    img: "./images/square-3/18.jpg",
                    x: 4,
                    y: 3
                        },
                {
                    img: "./images/square-3/19.jpg",
                    x: 4,
                    y: 4
                        },
                {
                    img: "./images/square-3/20.jpg",
                    x: 4,
                    y: 5
                        },
                {
                    img: "./images/square-3/21.jpg",
                    x: 5,
                    y: 1
                        },
                {
                    img: "./images/square-3/22.jpg",
                    x: 5,
                    y: 2
                        },
                {
                    img: "./images/square-3/23.jpg",
                    x: 5,
                    y: 3
                        },
                {
                    img: "./images/square-3/24.jpg",
                    x: 5,
                    y: 4
                        },
                {
                    img: "./images/square-3/25.jpg",
                    x: 5,
                    y: 5
                        }
                        ]
                },
        {
            id: 4,
            name: "FREAKS2",
            author: "Camila",
            description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
            rating: 21,
            thumbnail: "./images/square-4.png",
                },
        {
            id: 5,
            name: "Puzzel",
            author: "Joe",
            description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
            rating: 124,
            thumbnail: "./images/square-5.jpg",
                },
        {
            id: 6,
            name: "GRANNY",
            author: "Tweetie",
            description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
            rating: 124,
            thumbnail: "./images/square-6.jpg",
                }
                ];

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
        // Home
            .when("/", {
                templateUrl: "partials/home.html",
                controller: "SquaresController",
                controllerAs: "squaresCtrl"
            })
            // Pages
            .when("/about", {
                templateUrl: "partials/about.html"
            })
            .when("/login", {
                templateUrl: "partials/login.html",
                controller: "LoginController",
                controllerAs: "loginCtrl"
            })
            .when("/register", {
                templateUrl: "partials/register.html",
                controller: "RegisterController",
                controllerAs: "regCtrl"
            })
            .when("/squares-set/:param", {
                templateUrl: "partials/squares-set.html",
                controller: "SquaresController",
                controllerAs: "squaresCtrl"
            })
            .when("/customize/:param", {
                templateUrl: "partials/customize.html",
                controller: "CustomizeController",
                controllerAs: "customizeCtrl"
            })
            .when("/profile", {
                templateUrl: "partials/profile.html",
                controller: "UserController",
                controllerAs: "userCtrl"
            });;
}]);


    app.controller("SquaresController", function ($routeParams) {
        var self = this;
        self.products = sets.slice();

        self.clickedSet = (function () {
            var temp;
            self.products.forEach(function (product) {
       
                if (product.id == $routeParams.param) {
                    temp = product;
                }
            });
            console.log(temp);
            return temp;
        })();

        self.getGridSize = function () {
            var num = Math.floor(Math.sqrt(self.clickedSet.squares.length));
            var arr = [];
            for (var i = 1; i <= num; i += 1) {
                arr.push(i);
            }
            return arr;
        };

        self.getSquare = function (row, col) {
            var temp = "";
            self.clickedSet.squares.forEach(function (sq) {
                if (sq.x === row && sq.y === col) {
                    console.log("x:" + row);
                    console.log("y:" + col);
                    console.log(sq.img);
                    temp = sq.img;
                }
            });
            return temp;
        };

    });

    app.controller("CustomizeController", function ($routeParams) {
        var self = this;
        self.allSets = sets2.slice();
        self.sq1, self.sq2, self.sq3, self.sq4, self.sq5, self.sq6, self.sq7, self.sq8, self.sq9, self.sq10, self.sq11, self.sq12, self.sq13, self.sq14, self.sq15, self.sq16, self.sq17, self.sq18, self.sq19, self.sq20, self.sq21, self.sq22, self.sq23, self.sq24, self.sq25 = {};

        self.customizableSet = (function () {
            var temp;
            self.allSets.forEach(function (product) {
                if (product.id == $routeParams.param) {
                    temp = product;
                }
            });
            return temp;
        })();
    });

    app.controller("RegisterController", function () {
        var self = this;
        self.registerForm = {
            userName: '',
            emailAddress: '',
            password: '',
            confirmPassword: ''
        };

        self.register = function () {
            //todo
        };
    });

    app.controller("LoginController", function () {
        var self = this;
        self.loginForm = {
            emailAddress: '',
            password: ''
        };

        self.login = function () {
            //todo
        };
    });

    var userInfo = {
        name: "Bradley Cooper",
        description: "Cooper garnered consecutive Oscar nominations from 2013 to 2015 for his roles in the romantic comedy Silver Linings Playbook.",
        address: "New York, USA",
        email: "cooper@mail.com",
        web: "www.bradleycooper.com",
        img: "./images/profile.jpg",
        sets: [
            {
                id: 1,
                name: "MERILIN",
                description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
                rating: 89,
                thumbnail: "./images/square.png"
            }, {
                id: 2,
                name: "FREAKS",
                description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
                rating: 49,
                thumbnail: "./images/square-2.png",
            }, {
                id: 3,
                name: "CLOWN",
                description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
                rating: 100,
                thumbnail: "./images/square-3.png",
                comments: [{
                    user: "Bob",
                    img: "./images/bob.jpg",
                    text: "Those colors are amazing!"
            }, {
                    user: "Agnes",
                    img: "./images/agnes.jpg",
                    text: "I would like to buy a unicorn with this pattern! "
            }],
                squares: [{
                        img: "./images/square-3/1.jpg",
                        x: 1,
                        y: 1
                }
                   , {
                        img: "./images/square-3/2.jpg",
                        x: 1,
                        y: 2
                }, {
                        img: "./images/square-3/3.jpg",
                        x: 1,
                        y: 3
                }
                , {
                        img: "./images/square-3/4.jpg",
                        x: 1,
                        y: 4
                }
                , {
                        img: "./images/square-3/5.jpg",
                        x: 1,
                        y: 5
                }
               , {
                        img: "./images/square-3/6.jpg",
                        x: 2,
                        y: 1
                }
                , {
                        img: "./images/square-3/7.jpg",
                        x: 2,
                        y: 2
                }
                , {
                        img: "./images/square-3/8.jpg",
                        x: 2,
                        y: 3
                }
                , {
                        img: "./images/square-3/9.jpg",
                        x: 2,
                        y: 4
                }
                , {
                        img: "./images/square-3/10.jpg",
                        x: 2,
                        y: 5
                },
                    {
                        img: "./images/square-3/11.jpg",
                        x: 3,
                        y: 1
                },
                    {
                        img: "./images/square-3/12.jpg",
                        x: 3,
                        y: 2
                        },
                    {
                        img: "./images/square-3/13.png",
                        x: 3,
                        y: 3
                        },
                    {
                        img: "./images/square-3/14.jpg",
                        x: 3,
                        y: 4
                        },
                    {
                        img: "./images/square-3/15.jpg",
                        x: 3,
                        y: 5
                        },
                    {
                        img: "./images/square-3/16.jpg",
                        x: 4,
                        y: 1
                        },
                    {
                        img: "./images/square-3/17.jpg",
                        x: 4,
                        y: 2
                        },
                    {
                        img: "./images/square-3/18.jpg",
                        x: 4,
                        y: 3
                        },
                    {
                        img: "./images/square-3/19.jpg",
                        x: 4,
                        y: 4
                        },
                    {
                        img: "./images/square-3/20.jpg",
                        x: 4,
                        y: 5
                        },
                    {
                        img: "./images/square-3/21.jpg",
                        x: 5,
                        y: 1
                        },
                    {
                        img: "./images/square-3/22.jpg",
                        x: 5,
                        y: 2
                        },
                    {
                        img: "./images/square-3/23.jpg",
                        x: 5,
                        y: 3
                        },
                    {
                        img: "./images/square-3/24.jpg",
                        x: 5,
                        y: 4
                        },
                    {
                        img: "./images/square-3/25.jpg",
                        x: 5,
                        y: 5
                        }
                        ]
                },
            {
                id: 4,
                name: "FREAKS2",
                description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
                rating: 21,
                thumbnail: "./images/square-4.png",
                },
            {
                id: 5,
                name: "Puzzel",
                description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
                rating: 124,
                thumbnail: "./images/square-5.jpg",
                },
            {
                id: 6,
                name: "GRANNY",
                description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
                rating: 124,
                thumbnail: "./images/square-6.jpg",
                }
                ]

    }

    app.controller("UserController", function () {
        var self = this;
        self.user = userInfo;
        console.log(self.user);

    });

    app.controller("ReviewController", function () {
        this.review = {};

    });


})(jQuery);