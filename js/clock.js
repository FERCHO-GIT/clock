window.onload = () => {
    var clock = document.getElementById("clock"),
        hr = "",
        flag = false;
    
    setInterval(() => {
        let date = new Date(),
            hours = date.getHours(), 
            minutes = date.getMinutes(), 
            seconds = date.getSeconds();
        
        if (hours < 10) {
            hours = `0${hours}`;
        }

        if (!flag) {
            hr = (hours < 12) ? "AM" : "PM";

            switch (hours) {
                case 13: hours = "01"; break;
                case 14: hours = "02"; break;
                case 15: hours = "03"; break;
                case 16: hours = "04"; break;
                case 17: hours = "05"; break;
                case 18: hours = "06"; break;
                case 19: hours = "07"; break;
                case 20: hours = "08"; break;
                case 21: hours = "09"; break;
                case 22: hours = "10"; break;
                case 23: hours = "11"; break;
                case 0: hours = "12"; break;
            }
        } else {
            hr = "hrs";
        }

        if (minutes < 10) {
            minutes = `0${minutes}`;
        }

        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        clock.innerHTML = `${hours}:${minutes}:${seconds} ${hr}`;
    }, 1000);

    let btnCHange = document.getElementById("btn-change");
    btnCHange.addEventListener("click", () => {
        flag = !flag;
    });
}