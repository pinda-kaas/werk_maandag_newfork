app.controller('OrdersCtrl', function ($scope, ngTableParams, $filter, $location) {
//app.controller('OrdersCtrl', function ($scope, $filter, $location) {

  console.log('ordersctrl started');

  $scope.tabs = [{
    slug: 'orders',
    title: "Orders",
    contentUrl: '../partials/ordersTab.html'
  }];

  $scope.settlementsMockData=[
    {
      "account": {
        "accountId": {
          "key": "S43566"
        },
        "accountName": "JEFFERY CHRISTOPHER R",
        "productName": "Macquarie Super Manager",
        "adviser": {
          "key": "BBB"
        },
        "accountServiceType": "SUPERANNUATION"
      },
      "tradeDate": "02/03/2015",
      "tradeType": "SELL",
      "investment":"CBA",
      "units":1000,
      "price":"$30.00",
      "fee":"$140.50",
      "settlementValue":"$29863.50",
      "adviser":"MARKW",
      "settlementDate":"05/03/2015"
    },
    {
      "account": {
        "accountId": {
          "key": "S43566"
        },
        "accountName": "JEFFERY CHRISTOPHER R",
        "productName": "Macquarie Super Manager",
        "adviser": {
          "key": "BBB"
        },
        "accountServiceType": "SUPERANNUATION"
      },
      "tradeDate": "02/03/2015",
      "tradeType": "BUY",
      "investment":"CBA",
      "units":1000,
      "price":"$30.00",
      "fee":"$140.50",
      "settlementValue":"$29863.50",
      "adviser":"MARKW",
      "settlementDate":"05/03/2015"
    }

  ];

  $scope.ordersMockData = [
    {
      "account": {
        "accountId": {
          "key": "S43566"
        },
        "accountName": "JEFFERY CHRISTOPHER R",
        "productName": "Macquarie Super Manager",
        "adviser": {
          "key": "BBB"
        },
        "accountServiceType": "SUPERANNUATION"
      },
      "minOpenOrderState": "REJECTED"
    },
    {
      "account": {
        "accountId": {
          "key": "V11233"
        },
        "accountName": "RISZKO SUPERANNUATION PLAN (ACCOUNT NO 1)",
        "productName": "Macquarie Investment Consolidator",
        "adviser": {
          "key": "AAA"
        },
        "accountServiceType": "INVESTMENT"
      },
      "minOpenOrderState": "IN PROGRESS"
    },
    {
      "account": {
        "accountId": {
          "key": "I67661"
        },
        "accountName": "SMALES SUPERANNUATION FUND",
        "productName": "Macquarie Investment Manager",
        "adviser": {
          "key": "AAA"
        },
        "accountServiceType": "INVESTMENT"
      },
      "minOpenOrderState": "IN PROGRESS"
    },
    {
      "account": {
        "accountId": {
          "key": "V57294"
        },
        "accountName": "PAKIRI SUPERANNUATION FUND",
        "productName": "Macquarie Investment Manager",
        "adviser": {
          "key": "AAA"
        },
        "accountServiceType": "INVESTMENT"
      },
      "minOpenOrderState": "IN PROGRESS"
    },
    {
      "account": {
        "accountId": {
          "key": "O08263"
        },
        "accountName": "HILL GREGORY JOHN",
        "productName": "Macquarie Pension Manager",
        "adviser": {
          "key": "BBB"
        },
        "accountServiceType": "PENSION"
      },
      "minOpenOrderState": "EXECUTION FAILED"
    },
    {
      "account": {
        "accountId": {
          "key": "U05631"
        },
        "accountName": "GROOM FIONA",
        "productName": "Macquarie Super Accumulator",
        "adviser": {
          "key": "AAA"
        },
        "accountServiceType": "SUPERANNUATION"
      },
      "minOpenOrderState": "IN PROGRESS"
    },
    {
      "account": {
        "accountId": {
          "key": "P85824"
        },
        "accountName": "READ PHILIP ALAN",
        "productName": "Macquarie Pension Manager",
        "adviser": {
          "key": "AAA"
        },
        "accountServiceType": "PENSION"
      },
      "minOpenOrderState": "IN PROGRESS"
    },
    {
      "account": {
        "accountId": {
          "key": "O22076"
        },
        "accountName": "WARD ELLEN",
        "productName": "Macquarie Pension Manager",
        "adviser": {
          "key": "AAA"
        },
        "accountServiceType": "PENSION"
      },
      "minOpenOrderState": "IN PROGRESS"
    },
    {
      "account": {
        "accountId": {
          "key": "O15073"
        },
        "accountName": "READ PHILIP ALAN",
        "productName": "Macquarie Pension Manager",
        "adviser": {
          "key": "AAA"
        },
        "accountServiceType": "PENSION"
      },
      "minOpenOrderState": "IN PROGRESS"
    },
    {
      "account": {
        "accountId": {
          "key": "U05824"
        },
        "accountName": "COLEMAN KAREN",
        "productName": "Macquarie Super Accumulator",
        "adviser": {
          "key": "AAA"
        },
        "accountServiceType": "SUPERANNUATION"
      },
      "minOpenOrderState": "IN PROGRESS"
    },
    {
      "account": {
        "accountId": {
          "key": "U12067"
        },
        "accountName": "CABARKAPA ALEKSANDRA",
        "productName": "Macquarie Super Accumulator",
        "adviser": {
          "key": "AAA"
        },
        "accountServiceType": "SUPERANNUATION"
      },
      "minOpenOrderState": "IN PROGRESS"
    },
    {
      "account": {
        "accountId": {
          "key": "U18380"
        },
        "accountName": "KITCHEN ALLICIA",
        "productName": "Macquarie Super Accumulator",
        "adviser": {
          "key": "AAA"
        },
        "accountServiceType": "SUPERANNUATION"
      },
      "minOpenOrderState": "IN PROGRESS"
    },
    {
      "account": {
        "accountId": {
          "key": "C04489"
        },
        "accountName": "CHAN WILLIAM",
        "productName": "Macquarie Super Consolidator",
        "adviser": {
          "key": "AAA"
        },
        "accountServiceType": "SUPERANNUATION"
      },
      "minOpenOrderState": "IN PROGRESS"
    },
    {
      "account": {
        "accountId": {
          "key": "U19543"
        },
        "accountName": "HARRINGTON AARON",
        "productName": "Macquarie Super Accumulator",
        "adviser": {
          "key": "AAA"
        },
        "accountServiceType": "SUPERANNUATION"
      },
      "minOpenOrderState": "IN PROGRESS"
    },
    {
      "account": {
        "accountId": {
          "key": "U21812"
        },
        "accountName": "LUKATELICH AARON NICHOLAS",
        "productName": "Macquarie Super Accumulator",
        "adviser": {
          "key": "AAA"
        },
        "accountServiceType": "SUPERANNUATION"
      },
      "minOpenOrderState": "IN PROGRESS"
    },
    {
      "account": {
        "accountId": {
          "key": "HS0873"
        },
        "accountName": "HUTHNANCE LOMAX STAFF SUPER FUND",
        "productName": "Macquarie Investment Manager",
        "adviser": {
          "key": "AAA"
        },
        "accountServiceType": "INVESTMENT"
      },
      "minOpenOrderState": "IN PROGRESS"
    },
    {
      "account": {
        "accountId": {
          "key": "O02791"
        },
        "accountName": "MACDERMOTT BRUCE WILLIAM",
        "productName": "Macquarie Pension Manager",
        "adviser": {
          "key": "AAA"
        },
        "accountServiceType": "PENSION"
      },
      "minOpenOrderState": "CANCELLED"
    },
    {
      "account": {
        "accountId": {
          "key": "S25508"
        },
        "accountName": "MORTON MARK RODNEY",
        "productName": "Macquarie Super Manager",
        "adviser": {
          "key": "AAA"
        },
        "accountServiceType": "SUPERANNUATION"
      },
      "minOpenOrderState": "IN PROGRESS"
    },
    {
      "account": {
        "accountId": {
          "key": "C05254"
        },
        "accountName": "HARVEY JOHN MARTIN",
        "productName": "Macquarie Super Consolidator",
        "adviser": {
          "key": "AAA"
        },
        "accountServiceType": "SUPERANNUATION"
      },
      "minOpenOrderState": "CANCELLED"
    },
    {
      "account": {
        "accountId": {
          "key": "M15508"
        },
        "accountName": "PECKHAM CRAIG ANDREW",
        "productName": "Macquarie Super Manager",
        "adviser": {
          "key": "AAA"
        },
        "accountServiceType": "SUPERANNUATION"
      },
      "minOpenOrderState": "CANCELLED"
    },
    {
      "account": {
        "accountId": {
          "key": "V15358"
        },
        "accountName": "GARVIN JULIANNE",
        "productName": "Macquarie Investment Manager",
        "adviser": {
          "key": "AAA"
        },
        "accountServiceType": "INVESTMENT"
      },
      "minOpenOrderState": "COMPLETE WITH FAILURES"
    },
    {
      "account": {
        "accountId": {
          "key": "R97628"
        },
        "accountName": "READ LYNN MAREE",
        "productName": "Macquarie Super Manager",
        "adviser": {
          "key": "AAA"
        },
        "accountServiceType": "SUPERANNUATION"
      },
      "minOpenOrderState": "IN PROGRESS"
    },
    {
      "account": {
        "accountId": {
          "key": "M29757"
        },
        "accountName": "PETERS NICHOLAS PHILLIP",
        "productName": "Macquarie Super Manager",
        "adviser": {
          "key": "AAA"
        },
        "accountServiceType": "SUPERANNUATION"
      },
      "minOpenOrderState": "IN PROGRESS"
    },
    {
      "account": {
        "accountId": {
          "key": "U47281"
        },
        "accountName": "WONG FLORANCE",
        "productName": "Macquarie Super Accumulator",
        "adviser": {
          "key": "AAA"
        },
        "accountServiceType": "SUPERANNUATION"
      },
      "minOpenOrderState": "IN PROGRESS"
    },
    {
      "account": {
        "accountId": {
          "key": "U03774"
        },
        "accountName": "BERRY SIMONE CHRISTINE",
        "productName": "Macquarie Super Accumulator",
        "adviser": {
          "key": "AAA"
        },
        "accountServiceType": "SUPERANNUATION"
      },
      "minOpenOrderState": "IN PROGRESS"
    },
    {
      "account": {
        "accountId": {
          "key": "V49332"
        },
        "accountName": "MOHTADI FAMILY SUPERANNUATION FUND",
        "productName": "Investment Consolidator",
        "adviser": {
          "key": "AAA"
        },
        "accountServiceType": "INVESTMENT"
      },
      "minOpenOrderState": "PENDING"
    },
    {
      "account": {
        "accountId": {
          "key": "I44138"
        },
        "accountName": "UTEL PTY LTD SUPER FUND",
        "productName": "Investment Consolidator",
        "adviser": {
          "key": "AAA"
        },
        "accountServiceType": "INVESTMENT"
      },
      "minOpenOrderState": "PENDING"
    }
  ];

  $scope.tableParams = new ngTableParams({
    page: 1,            // show first page
    count: 10,           // count per page
    sorting: {
      minOpenOrderState: 'asc'     // initial sorting
    }
  }, {
    total: $scope.ordersMockData.length, // length of data
    getData: function ($defer, params) {
      $scope.orderedData = params.sorting() ?
        $filter('orderBy')($scope.ordersMockData, params.orderBy()) :
        $scope.ordersMockData;
      console.log($scope.orderedData.length);
      console.log('getdata');
      var cnt = params.count();
      $defer.resolve($scope.orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
    }
  })

 //
 $scope.tableParamsSettlements= new ngTableParams({
      page: 1,            // show first page
      count: 10,           // count per page
      sorting: {
          minOpenOrderState: 'asc'     // initial sorting
      }
  }, {
      total: $scope.settlementsMockData.length, // length of data
      getData: function ($defer, params) {
          debugger;
          $scope.orderedData = params.sorting() ?
              $filter('orderBy')($scope.settlementsMockData, params.orderBy()) :
              $scope.settlementsMockData;
          console.log($scope.orderedData.length);
          var cnt = params.count();
          $defer.resolve($scope.orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
      }
  })
 //
 // $scope.tableParamsCompletedOrders= new ngTableParams({
 //     page: 1,            // show first page
 //     count: 10,           // count per page
 //     sorting: {
 //         minOpenOrderState: 'asc'     // initial sorting
 //     }
 // }, {
 //     total: $scope.completedOrdersMockData.length, // length of data
 //     getData: function ($defer, params) {
 //         debugger;
 //         $scope.orderedData = params.sorting() ?
 //             $filter('orderBy')($scope.completedOrdersMockData, params.orderBy()) :
 //             $scope.completedOrdersMockData;
 //         console.log($scope.orderedData.length);
 //         var cnt = params.count();
 //         $defer.resolve($scope.orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
 //     }
 // })

});
