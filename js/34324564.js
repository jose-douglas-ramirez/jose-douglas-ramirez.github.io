
try{   
   angular.element(document).ready(function () {
        setTimeout(function(){  
           debugger
           var login = $("#pcont > div.cl-mcont.ng-scope > div.row.login-row.ng-scope > div > div.block-flat.login-bf > div.row > div > div > form > div.row > div");          
           login.hide();
        }, 3000);
    });
}
catch(err){
}
