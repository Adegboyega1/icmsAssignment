

          
         // Your web app's Firebase configuration
         var firebaseConfig = {
           apiKey: "AIzaSyCArRe0FxKm4mk4fandJSNhJ3L8te8Ka1Y",
           authDomain: "icmslogin-b4f75.firebaseapp.com",
           databaseURL: "https://icmslogin-b4f75.firebaseio.com",
           projectId: "icmslogin-b4f75",
         
         };
         // Initialize Firebase
         firebase.initializeApp(firebaseConfig);
         

            // Variable Declarations
            const auth= firebase.auth();
            const db = firebase.database();
            const sgnboard = document.getElementById('sgnboard');
            const acctsuccess = document.getElementById('acct-succes');
            const txtmail=document.getElementById('txtmail');
            const txtpwd=document.getElementById("txtpwd");
            const btnLogin=document.getElementById('btnLogin');
            const btnsignup=document.getElementById('btnsignup');
            const btnsignout=document.getElementById('btnsignout');
            const lbl=document.getElementById('lbl');
            const btlgn=document.getElementById('btnLgn');
            const lbl_msg_login =document.getElementById('lbl_msg_login');
            const SignUp=document.getElementById('SignUp');
            const sgnUp2=document.getElementById('sgnUp2');
            const sgnup3 = document.getElementById('sgnup3');
            const Login = document.getElementById('Login');
            const cls = document.getElementById('cls');
            const icons = document.getElementById('icons');
            const emailSignInput = document.getElementById('emailSignInput');
            const pwdSignInput = document.getElementById('pwdSignInput');
            const forgotpwd = document.getElementById('forgotpwd');
            const rstpwd = document.getElementById('rstpwd');
            const rstbtn = document.getElementById('rstbtn');
            const rstEmail = document.getElementById('rstEmail');
            const resetSucces = document.getElementById('reset-succes');

            //  Onload Page
            function myfxn(){
                sgnUp2.style.display='none';
                acctsuccess.style.display='none';
                icons.style.display='none';
                lbl_msg_login.innerHTML = 'Please sign in with your email and password.';
                lbl.style.display='none';
                cls.style.display = 'none';
                btnLogin.style.display='inline';
                btnsignup.style.display= 'inline';
                btnLgn.style.display='inline';
                rstpwd.style.display = 'none';
                resetSucces.style.display= 'none';
            
            }

            //  Logging In Module
            btnLogin.addEventListener('click', e=> {

                        const email = txtmail.value;
                        const pwd = txtpwd.value;
                        
                        
                        auth.signInWithEmailAndPassword(email,pwd)
                        .then(function(result){
                            lbl_msg_login.innerHTML = ' Logged In, Click Close Button to return to page .';
                             cls.style.display = 'block';
                             btnLogin.style.display = 'none';
                        })
                        .catch(function(error){
                            var errorCode = error.code;
                            var errorMessage = error.message;
                            if (errorCode === 'auth/wrong-password' || errorCode== 'auth/invalid-email') {
                                alert('Incorrect Password or User email');
                                lbl_msg_login.innerHTML = 'Incorrect Password or User email';
                                lbl_msg_login.style.display='block';
                              } else {
                                alert(errorMessage);
                              }
                            
                        });
            });
           
            // Link To Sign Up Page From Modal
            btnsignup.addEventListener('click',e=>{
                sgnUp2.style.display='block';
                Login.style.display = 'none';
                btnLogin.style.display='none';
            });
            

            // Sign Up Page
            sgnup3.addEventListener('click',e=> {
                const email = txtmail.value;
                const pwd = txtpwd.value;
                auth.createUserWithEmailAndPassword(email,pwd)
                .then (function(result){
                    btnLogin.style.display='inline';
                    sgnboard.style.display='none';
                    acctsuccess.style,display='inline';
                }
                )
                .catch (function(error){
                        // Handle Errors here.
                            var errorCode = error.code;
                            var errorMessage = error.message;
                            if (errorCode == 'auth/weak-password') {
                                acctsuccess.innerHTML= 'The password is too weak.';
                                acctsuccess.style,display='inline';
                            } else {
                                alert(errorMessage);
                            }
                            console.log(error);


                       acctsuccess.innerHTML= errorMessage;
                       acctsuccess.style,display='inline';
                       

                });
            });

            //Reset Password
            forgotpwd.addEventListener('click',e=>{

                    lbl_msg_login.innerHTML = ' Click close button.';
                    cls.style.display = 'block';
                    btnLogin.style.display = 'none';
                   rstpwd.style.display ='block';
                   const email = rstEmail.value;
                   btnLgn.style.display='inline';    
            });

            rstbtn.addEventListener('click',e=>{


                   auth.sendPasswordResetEmail(
                    rstEmail.value)
                    .then(function() {
                        resetSucces.innerHTML = 'pass word sent to mail'
                        resetSucces.style.display='inline';
                    })
                    .catch(function(error) {
                      // Error occurred. Inspect error.code.
                      var errorCode = error.code;
                      var errorMessage = error.message;
                      resetSucces.innerHTML = errorCode;
                      
                      alert(errorCode);
                      resetSucces.style.display='inline';
                      console.log(errorMessage);
                    });
            });


            // Sign Out Module
            btnsignout.addEventListener('click',e => {
                
                auth.signOut()
                .then(function()
                {  
                    window.location.href='Lgn.html';   
                });
                
                
            });

            auth.onAuthStateChanged(firebaseUser => {

                if (firebaseUser)
                {
                    console.log(firebaseUser);

                    lbl.innerHTML='Welcome'+' '+auth.currentUser.displayName;
                    lbl.style.display='inline';
                    btnsignout.style.display='inline';
                    btnsignout.innerHTML='Sign out';
                   
                    btnsignup.style.display= 'none';
                    btnLgn.style.display='none';
                    
                    btnLogin.style.display='none';
                    sgnUp2.style.display='none'; 
                    icons.style.display='block';
                   


                }
                else{

                     
                     
                     
                      
                      console.log('not logged in !'); 
                      
                      
                     
                      
                      


                }

            
            });


    
