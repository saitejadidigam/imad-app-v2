
var button=document.getElementById('counter');
button.onclick=function(){
    //make a request to the counter end point
    var request=new XMLHttpRequest();
    
    
    //capture the response and store it in a variable
    request.onreadystatechange=function(){
    if(request.readyState===XMLHttpRequest.DONE)  {
      if(request.status===200){
          var counter=request.responseText;
          var span=document.getElementById('count');
          span.innerHTML=counter.toString();
      } 
        
    } 
    };
    request.open('GET','http://saitejadidigam.imad.hasura-app.io/counter',true);
    request.send(null);
};
//submit name
var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    //make a request to server and send name
    //capture list of names and render it as a list
    var names=['n1','n2','n3'];
    var list='';
    for(var i=0;i<names.length;i++)
    {
        list+='<li>'+names[i]+'<li>';
    }
    var ul=document.getElementById('namelist);
    ul.innerHTML=list;
};