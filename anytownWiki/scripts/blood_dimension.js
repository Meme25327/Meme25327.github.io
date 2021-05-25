document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let buffer = [];
    let lastKeyTime = Date.now();

    document.addEventListener('keydown', event => {
        const key = event.key.toLowerCase();
        const charList = 'abcdefghijklmnopqrstuvwxyz0123456789';      
        if (charList.indexOf(key) === -1) {
            return;
        }
        // console.log(key);
        const currentTime = Date.now();

        if (currentTime - lastKeyTime > 2000) {
            buffer = [];
        }

        const bloodAlert = "Ḇ̴͑L̵̛̟O̸̭͊Ö̷̲́Ḓ̴̀ ̶̪̔F̵̡͊O̸͍̿R̵͎̈ ̸̏ͅT̷͓̄H̴̯͐E̷̱͒ ̴̺̚Ḇ̴̿L̷̢͑Ő̸͜O̸̭͘D̸̝̍ ̵͕̓Ğ̶̞Õ̸̙D̷̜̀Ŝ̴͇" //this is just over here cause it doesnt look good sitting in the alert box...

        buffer.push(key);
        lastKeyTime = currentTime;

        //console.log(buffer);
        //console.log(lastKeyTime);

        let typedWord = buffer.join('');
        console.log(typedWord);

        if (typedWord === "blood") {
            alert(bloodAlert);
            //console.log("alert dismissed")
            window.location = "blood_dimension.html";
        }

        if (typedWord === "normal") {
            alert("Thank you for visiting the blood dimension...");
            window.location = "index.html";
        }
    });

    console.log('content loaded');
});