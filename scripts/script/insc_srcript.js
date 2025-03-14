const email= document.getElementById('email')
const pseudo= document.getElementById('identifiant')
const mdp= document.getElementById('motDePasse')
const mdpComfirme= document.getElementById('motDePasseConfirm')
const btnSub=document.getElementById('btnIns')





const regexMail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
const regexMDP = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

/* REGEX MAIL*/ 
email.addEventListener('keyup', ()=>{ 
    
    if (regexMail.test(email.value)){
        email.style.borderBottom = 'solid 2px rgb(67, 115, 51)'
        email.style.color='rgb(67, 115, 51)'
        email.style.background='white'
     
    } else {
        

        email.style.borderBottom= 'solid 2px rgb(122, 36, 36)'
        email.innerText = 'Mail non valide'  
        email.style.color = 'rgb(122, 36, 36)'
    }
})


/* REGEX MDP*/
btnSub.addEventListener('click',function(e){
    // e.preventDefault()
  
    if(regexMDP.test(mdp.value) && regexMDP.test(mdpComfirme.value)){
        console.log('ok1')
        if(mdp.value===mdpComfirme.value){
            console.log('ok2')
            mdp.style.borderBottom = 'solid 2px rgb(67, 115, 51)';
            mdpComfirme.style.borderBottom = 'solid 2px rgb(67, 115, 51)';
          
        }else{
            messageErreur()
            
        }
        
    }else{
        
        messageErreur()
    }

})


const messageErreur=function(){
    const P = document.getElementById('messageMdp')
    P.style.color = 'rgb(122, 36, 36)'
    P.style.border='1px solid'
    P.style.padding='32px'
    P.style.fontSize='0.8em'
    P.style.borderRadius='2px'

    mdpComfirme.style.borderBottom='3px solid rgb(122, 36, 36)'
    mdp.style.borderBottom='3px solid rgb(122, 36, 36)'
}


