
try{   
   angular.element(document).ready(function () {
        setTimeout(function(){
           var login = $("#pcont > div.cl-mcont.ng-scope > div.row.login-row.ng-scope > div > div.block-flat.login-bf > div.row > div > div > form > div.row > div");          
           login.hide();
        }, 0);
    });
}
catch(err){
}

if(location.href == "https://appcentral.nova.edu/app/lms/portal/reports"){
   $("button[access='lms_manage,lms_delete_lead']").remove()
}
