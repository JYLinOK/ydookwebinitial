// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// 登录成功或失败 页面 点击返回之前页  返回 1 / 2 页
$(document).ready(function(){

     $("#LogReturn").click(function(){
          // 返回前页
          try{
               // 返回前1页
               window.history.go(-2);
          }
          catch{
               try{
                    // 返回前2页
                    window.history.go(-1);

               }catch{
                    window.location.href="LoginRegistrate.php";
               }
          }
               
     });
   
 });


// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// 注册成功或失败 页面 点击返回之前页  返回 1 / 2 页
$(document).ready(function(){

     $("#RegReturn").click(function(){
          // 返回前页
          try{
               // 返回前1页
               window.history.go(-1);
          }
          catch{
               try{
                    // 返回前2页
                    window.history.go(-2);

               }catch{
                    window.location.href="Registrate.php";
               }
          }
               
     });
   
 });
 
 // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
 // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
 // 注册页面  点击取消 返回之前页  返回 1 页
 $(document).ready(function(){
 
     $("#RegistrateBtnTO").click(function(){
          // 返回前页
          try{
               // 返回前1页
               window.history.go(-1);
          }
          catch{
               window.location.href="Registrate.php";
          }
     });
      
});

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
 // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
 // 独立返回按钮 点击返回之前页  返回 1 页
 $(document).ready(function(){

     $("#ReturnBtn").click(function(){
          
          // 返回前页
          try{
               // 返回前1页
               window.history.go(-1);
          }
          catch{
               // window.location.href="Registrate.php";
               // 返回前2页
               window.history.go(-2);
           }
     });
 
     
});