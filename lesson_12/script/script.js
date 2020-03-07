/*$("Document").ready(function(){
    $("button").on("click",function(){
        var x,y,z
        x=$('#username').val();
        y=$("#password").val();
        x=parseInt(x);
        y=parseInt(y);
        z=x+y;
        alert(z);
    })
})*/
$("Document").ready(function(){
    $("button").on("click",function(){
        var x,y,z,j
        x=$('#val1').val();
        y=$("#val2").val();
        j=$('#val3').val();
        x=parseInt(x);
        y=parseInt(y);
        if (j=='+'){
        z=x+y;
        alert(z);}
        else if(j=='-'){
            z=x-y;
            alert(z);
        }
        else if (j=='*') {
            z=x*y;
            alert( z );
          }
          else if (j=='/') {
            z=x/y;
            alert( z );
          }
          
    })
})