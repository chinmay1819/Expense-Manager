function main(){
    alert("Your Response has been submitted ! ");
    var rs=document.getElementById("reason").value;
    var am=document.getElementById("amount").value;
     
   check(rs,am);


}

function check(rs,am){
    if(am>100)
        alert("Bro u are spending too much ");

        
}
