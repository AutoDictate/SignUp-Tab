function passCheck(){
    let t = document.querySelector(".password").value;
    for(let i=0; i<t.length;i++){
        if(t.charAt(i)==' '){
            alert("Dont't use Whitespaces");
        }
    }
    
}

function passValidate() {
    let pass = document.querySelector(".password").value;
    console.log(pass);
    let p = 0,n=0,ca=0,sa=0,sc=0;
    for (let i = 0; i < pass.length; i++) {
        let c = pass.charAt(i);
        if(c>='0' && c<='9' && n==0){
            n+=1;
            ++p;
        }        
        if(c>='a' && c<='z' && sa==0){
            sa+=1;
            ++p;
        }
        if(c>='A' && c<='Z' && ca==0){
            ca+=1;
            ++p;
        }
        else{
            if(sc ==0){
                sc+=1;
                ++p;
            }
        }
    }
    console.log(p);
    if(p!=4){
        alert ("Use some strong passwords");
    }else{
        alert("You have Successfully Signed Up");
    }
}