let passmatch = () =>{
    let pass = document.getElementById("password").value;
    let repass = document.getElementById("repassword").value

    console.log(pass, repass);

    if(pass!=repass || pass == '' || repass == ''){

        document.getElementById("answer").innerHTML = "AR UDRIS"
        document.getElementById("password").style.border =" 2px solid red"
        document.getElementById("repassword").style.border =" 2px solid red"

        document.getElementById("answer").style.color = "red"

    }else{

        document.getElementById("answer").innerHTML = "UDRIS"
       
        document.getElementById("password").style.border =" 2px solid black"
        document.getElementById("repassword").style.border =" 2px solid black"

        document.getElementById("answer").style.color = "black"
    }
}

