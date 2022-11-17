                    // Import the functions you need from the SDKs you need
                    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
                    import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";

                    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-analytics.js";
                    // TODO: Add SDKs for Firebase products that you want to use
                    // https://firebase.google.com/docs/web/setup#available-libraries
                  
                    // Your web app's Firebase configuration
                    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
                    const firebaseConfig = {
                      apiKey: "AIzaSyAbPjDP1Xbq5RCXh9dlq9WkLWLXWbbairM",
                      authDomain: "merlinconstrucciones-e3dee.firebaseapp.com",
                      projectId: "merlinconstrucciones-e3dee",
                      storageBucket: "merlinconstrucciones-e3dee.appspot.com",
                      messagingSenderId: "69223130682",
                      appId: "1:69223130682:web:bebb623c1e6c9416f63703",
                      measurementId: "G-W3RS7LTTH0"
                    };
                  
                    // Initialize Firebase
                    const app = initializeApp(firebaseConfig);
                    const analytics = getAnalytics(app);
                    const database = getDatabase(app);


                    let diseñoSelect = document.getElementById("diseñoBtn");
                    let presupuestoSelect = document.getElementById("presupuestoBtn");                   
                    let reparacionSelect = document.getElementById("reparacionBtn");
                    let form = document.getElementById("form");
                    let submit = document.getElementById("submit");
                    presupuestoSelect.addEventListener("click", selectPresupuesto);
                    reparacionSelect.addEventListener("click", selectReparacion);
                    diseñoSelect.addEventListener("click", selectDiseño);
                    submit.addEventListener("click", (e)=>{
                        e.preventDefault(e);
                        // Get VAlues
                        var name = document.getElementById("name").value;
                        var date = new Date();
                        var phone = document.getElementById("phone").value;
                        var email = document.getElementById("email").value;
                        var message = document.getElementById("message").value;
                        var selection = document.getElementById("select").value;
                    // console.log(name, date, phone, email, message, selection);

                        
                        // VALIDATION
                        if (name === "" || email === "" || phone === ""){
                            alert("Por favor completar todos los datos")
                        } else if(message === ""){
                            alert("Por favor contanos un poco de tu proyecto")
                        }else{
                        set(ref(database, "mensajes" + date + name), {
                            name: name,
                            date: date,
                            phone: phone,
                            email: email,
                            message: message,
                            selection: selection

                        });
                        alert("Mensaje enviado")
                        form.reset();
                    }});
                
                    function selectDiseño(){
                        document.querySelector("#select").value= "diseño";
                        form.scrollIntoView();
                    }
                    function selectPresupuesto(){
                        document.querySelector("#select").value= "presupuesto";
                        form.scrollIntoView();
                    }
                    function selectReparacion(){
                        document.querySelector("#select").value= "reparacion";
                        form.scrollIntoView();
                    }