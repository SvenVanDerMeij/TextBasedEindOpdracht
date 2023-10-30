const prompt = require('prompt-sync')();

let stage = 0
game()

function game () {
    let P0 = prompt("Het is het jaar 3827, vanwege de atomische aanvallen van polen is bijna elk restaurant in de wereld opgeblazen. Na een lange dag werken heeft Erik Braamhaar honger, maar er is niks in de koelkast om mee te koken, uit schrik kijkt hij uit het raam, en naast alle vernietigde huizen, restaurants en ziekenhuizen ziet hij het… de burger king. Wanhopig en zonder keuzes over rijdt Erik Braamhaar naar de burger king, hij kijkt op het menu en ziet 3 menu items, de kipvingers, whopper en patat. Wat kies je? Whopper [3]. Kipvingers [14]. Patat [17] (typ het getal in achter de optie die je hebt gekozen")
    if (P0 == "3"){
        stage = 3
    } else if (P0 == "14"){
        stage = 14
    } else if (P0 == "17"){
        stage = 17
    } else {

    }
}
