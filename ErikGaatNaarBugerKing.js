const prompt = require('prompt-sync')();

let stage = 0
let Ending1 = 0
let Ending2 = 0
let Ending3 = 0
let Ending4 = 0
let endings = 0


while (endings < 3.9){
if (stage == 0) {
    console.log("Het is het jaar 3827, vanwege de atomische aanvallen van polen is bijna elk restaurant in de wereld opgeblazen. Na een lange dag werken heeft Erik Braamhaar honger, maar er is niks in de koelkast om mee te koken, uit schrik kijkt hij uit het raam, en naast alle vernietigde huizen, restaurants en ziekenhuizen ziet hij het… de burger king. Wanhopig en zonder keuzes over rijdt Erik Braamhaar naar de burger king, hij kijkt op het menu en ziet 3 menu items, de kipvingers, whopper en patat. Wat kies je? Whopper [3]. Kipvingers [14]. Patat [17]. (typ het getal in achter de optie die je wilt kiezen)")
    let P0 = prompt("wat kies je?")
    if (P0 == "3"){
        stage = 3
    } else if (P0 == "14"){
        stage = 14
    } else if (P0 == "17"){
        stage = 17
    } 
}

if (stage == 1) {
    console.log("“het spijt me eric, maar helaas is het geen vraag, u komt met ons mee” je wordt knockout geslagen en wordt wakker in hun lab. Meedoen [5]")
    let P1 = prompt("wat kies je?")
    if (P1 == "5") {
        stage = 5
    }
}

if (stage == 2) {
    console.log("Je zit thuis, de agenten weten niet waar je woont, je voelt je niet helemaal lekker van je maaltijd net, maar je overleeft de apocolyspe")
    Ending2 = 1
    endings = Ending1 + Ending2 + Ending3 + Ending4
    console.log ("gefeliciteerd, je hebt het saaie behaald, je hebt er nu " + endings + "van de 4, hoewel dit niet het slechte einde is is het wel mijn 1 na minst favoriete, dus blijf spelen")
    stage = 0
}

if (stage == 3) {
    console.log("Je eet de burger, hij is oké, niets bijzonders ofzo, beetje te duur, maar je overleeft het. Je ziet 2 mannen in zwarte pakken naar je kijken, terwijl je op je droge burger zit te knagen zitten ze je aan te staren, en notities te nemen, je weet niet waarom, maar ze benaderen je opeens, je hebt genoeg tijd om weg te rennen, of je kan naar ze luisteren, wat doe je? Rennen [22].  Luisteren [6].")
    let P3 = prompt("wat kies je?")
    if (P3 == "6"){
        stage = 6
    } else if (P3 == "22") {
        stage = 22
    }
}

if (stage == 4) {
    console.log("“GODVERDOMME WILLEM, DAT HOORDE JE NIET TE ZEGGEN.” De twee mannen lopen naar buiten om de huidige situatie te bespreken, wat doe je? Uit het raam ontsnappen [19]. Wachten tot ze terug komen [9].")
    let P4 = prompt("wat kies je?")
    if (P4 == "9") {
        stage = 9
    } else if (P4 == "19") {
        stage = 19
    }
}

if (stage == 5) {
    console.log("“oke Erik, het is tijd voor het experiment, je wordt opgesloten in deze container om terug de tijd in te gaan naar het moment dat de aanval van polen begon” je ziet een witte flits en wordt wakker in 3802 Je ziet de plek waar het allemaal fout ging, PhysInc. Loop naar physInc. Toe [16]. Investeer in je eigen techbedrijf [7]")
    let P5 = prompt("wat kies je?")
    if (P5 == "16") {
        stage =  16
    } else if (P5 == "7") {
        stage = 7
    }
}

if (stage == 6) {
    console.log("Je luistert naar de 2 mannen “goedendag Erik Braamhaar, wij zijn hier voor een belangrijk offer, wij hebben een manier gevonden om terug in de tijd te gaan en de aanval van polen te stoppen voordat ze ooit gaan gebeuren, we hebben slechts 1 ding nodig, dat jij deze burger king patat eet.”  Eet de patat [17]. Vraag waarom je de patat moet eten [12]")
    let P6 = prompt("wat kies je?")
    if (P6 == "17") {
        stage = 17
    } else if ( P6 == "12") {
        stage = 12
    }
}

if (stage == 7) {
    console.log("Met je eigen techbedrijf als concurrent tegen PhysInc. Heb je genoeg macht om hun hele operatie af te sluiten, maar je kan ook met hun samen werken, om nog machtiger te worden, wat doe je? Samen werken [13]. Bombardeer PhysInc. [20]")
    let P7 = prompt("wat kies je?")
    if (P7 == "13") {
        stage = 13 
    } else if (P7 == "20") {
        stage = 20
    }
}

if (stage == 8) {
    console.log("Je verschijnt opeens In een lab in PhysInc. De plek waar het virus vandaan kwam, je ziet het syrum op een bureau liggen, je pakt het op en steekt het in je zak, je wilt naar buiten lopen en overhoort 2 wetenschappers zeggen: “en dus als we dit in het rioolwater stoppen kan elk mens in de komende week vliegen, daardoor staan de polen geen kans” Ga door naar buiten om thuis het virus te analyseren [13].  Zeg: “hey mannen, weten we zeker dat dit gaat werken?” [11]")
    let P8 = prompt("wat kies je?")
    if (P8 == "11") {
        stage = 11
    } else if (P8 == "13") {
        stage = 13
    }
}

if (stage == 9) {
    console.log("“Oké Erik, we gaan eerlijk met je zijn, we zoeken een zo sterk moglijke man om het tijdrijzen te testen, het tijdreizen werkt door rattengif in je zenuwstelsel te pompen, maar de keuze is aan jou, het is sowieso al indrukwekkend dat je je eerste maaltijd hebt overleefd” wat doe je? Weigeren [1]. Accepteren [5]")
    let P9 = prompt("wat kies je?")
    if (P9 == "1") {
        stage = 1
    } else if (P9 = 5){
        stage = 5
    }
}

if (stage == 10) {
    console.log(" Je komt binnen, je vraagt aan je oma of alles klaar is om te beginnen, oma kijkt naar je en knikt gewoon. Je drukt op een knop verstopt achter het behang, en uit de vloer komt de tijdmachine waar jullie samen aan hebben gewerkt, dit is de kans om alles te krijgen, of alles te verliezen. Je kijkt naar je oma, die geruststellend zegt: “dit is waarvoor je bent gemaakt Erik” wat doe je? “dit is nonsens oma, ik ga hier niet mijn leven voor wagen, ik ga naar huis” [2]. “laten we dit doen” [8]")
    let P10 = prompt("wat kies je?")
    if (P10 == "2") {
        stage = 2
    } else if (P10 == "8") {
        stage = 8
    }
}

if (stage == 11) {
    console.log("Jij hoort hier helemaal niet te zijn meneer, en door hier te verschijnen heeft u talloze wetten gebroken. Hiervoor is er maar 1 oplossing, je wordt wakker in een kamer, je kijkt om je heen, en er is maar 1 ding, een zakje burger king patat, met weinig andere opties doe je wat gedaan moet worden. Eet de patat [17]")
    let P11 = prompt("wat kies je?")
    if (P11 == "17") {
        stage = 17
    }
}

if (stage == 12) {
    console.log("de ene man zegt tegen je: “geen reden, dit is simpelweg de eerste stap, maak je geen zorgen, er zit zeker geen rattengif in” hoe reageer je? Oh, oké[17]. Nee bedankt??? [4]")
    let P12 = prompt("wat kies je?")
    if (P12 == "17") {
        stage = 17
    } else if (P12 == "4") {
        stage = 4
    }
}

if (stage == 13) {
    console.log("Je bent na enkele weken in het lab van je oma, en na genoeg trial and error heb je het, de genezing van het virus dat mensen veranderd in cronenberg mug monsters, aan het begin van de oorlog verkoop je voor miljoenen de genezing van het virus aan iedereen die het wilt kopen, waardoor de aanval van polen nooit hoeft te gebeuren, je bent nu praktisch gezien een god, jij bepaald wie er mag leven, en wie er mag sterven. Met alle miljoenen euros die je hebt verdient koop je burger king, en verbrand je elke laatste locatie tot de grond. ")
    Ending3 = 1
    endings = Ending1 + Ending2 + Ending3 + Ending4
    console.log("gefeliciteerd, je hebt het evil einde bereikt, je hebt nu " + endings + " van de 4 eindes gehaald. Dit persoonlijk is mijn favoriete einde, dus lekker bezig man")   
    stage = 0
}

if (stage == 14) {
    console.log("(14) Je eet de kipvingers, je vraagt je af wat ze hierin doen, ze zijn heel vet, droog, smakeloos… hm, het begint een beetje.. moeilijk te worden, adem… te… ha…… je wordt wakker in een ziekenhuis, je ziet 2 mysterieuze mannen in een zwart pak voor je staan, ze hebben een deal voor je, met weinig keuzes over luister je naar wat ze hebben te zeggen. Luisteren [6]")
    let P14 = prompt("wat kies je?")
    if (P14 == "6") {
        stage = 6
    }
}

if (stage == 15) {
    console.log("je zit in je auto, je kan of vluchten, of schuilen bij je oma, wat doe je? Vluchten [21]. Schuilen bij oma [10]")
    let P15 = prompt("wat kies je?")
    if (P15 == "10") {
        stage = 10
    } else if (P15 = "21"){
        stage = 21
    } 
}

if (stage == 16) {
    console.log("Je staat voor de deur van physInc. je belt aan en er wordt gevraagd wat je wilt, wat zeg je? “ik heb 1 verse pepperoni pizza voor jan micheal vincent” [18]    “Ik ben hier om de toekomst te redden” [23]")
    let P16 = prompt("wat kies je?")
    if (P16 == "18") {
        stage = 18
    } else if (P16 == "23") {
        stage = 23
    }
}

if (stage == 17) {
    console.log("Burger king patat is zo smerig dat je dood neervalt")
    Ending1 = 1
    endings = Ending1 + Ending2 + Ending3 + Ending4
    console.log("gefeliciteerd, je hebt het burger king patat einde bereikt, je hebt nu " + endings + " van de 4 eindes gehaald, ik weet niet wat ik van dit einde vind, jij weet waarschijnlijk ook niet wat je ervan moet vinden, maar hey, je hebt hem, je bent 25% dichterbij, en dit kan ik zeggen, want ik durf te wedden dat dit niet het laatste einde is dat je hebt gehaald, ik ben ff gaan rekenen, de kans dat je dit einde als laatste krijgt is 4,16%, denk ik tenminste, ik heb dit in 1 minuut gedaan uit mijn hoofd, idk.")
    stage = 0
}
if (stage == 18) {
    console.log("je wordt binnengelaten en teleporteert in de kast van het lab van 2 wetenschappers die een discussie hebben, je overhoort ze praten: “Oke, dus als we hier nog een beetje kaliumnitraat bij doet explodeert het hele gebouw, dus dat moeten we niet doen, maar laten we eerst even lunchen, ik heb heel veel honger, is je pizza al aangekomen?” Gooi Kaliumnitraat bij de beker [24]. Steel het syrum en vlucht [13]")
    let P18 = prompt("wat kies je?")
    if (P18 == "13") {
        stage = 13
    } else if (P18 == "24") {
        stage = 24
    }
}

if (stage == 19) {
    console.log("Je bent buiten, je hebt je auto nodig, of je kan nu gewoon naar huis gaan, wat kies je? Naar huis [2]. Je auto zoeken [15]")
    let P19 = prompt("wat kies je?")
    if (P19 == "2") {
        stage = 2
    } else if (P19 == "15") {
        stage = 15
    }
}

if (stage == 20) {
    console.log("je valt PhysInc. aan, maar zij hebben een automatisch schild, nadat jullie gebouwen voor 10 minuten vechten eindigt het in dat jouw gebouw, hun gebouw en jij allemaal ten onder gaan, je hebt de toekomst gered, maar wat heeft het gekost?")
    Ending4 = 1
    endings = Ending1 + Ending2 + Ending3 + Ending4
    console.log("gefeliciteerd, je hebt nu " + endings + " van de 4 eindes gehaald, deze is het goede einde i guess, maar er is een andere die ik leuker vind, je hebt wel die die het moeilijkst is om te vinden, dus gefelicteerd met dat i guess, maarja, vorlijk kerstfeest")
    stage = 0
}

if (stage == 21) {
    console.log("Je rijdt met spoed naar huis, maar onderweg wordt je aangereden door een zwart busje, je auto is kapot, je probeert nog snel weg te sprinten, maar wordt gepakt door 1 van de mannen. Luister naar de man[1]")
    let P21 = prompt("wat kies je?")
    if (P21 == "1") {
        stage = 1
    }
}

if (stage == 22) {
    console.log("Je bent net buiten, je weet nog niet waar je heen gaat rennen, de twee veilige plekken waar je je kan verstoppen zijn terug thuis of bij je oma thuis, waar ga je heen? naar huis [2]. naar oma [10]")
    let P22 = prompt("wat kies je?")
    if (P22 == "2") {
        stage = 2
    } else if (P22 == "10"){
        stage = 10
    }
}

if (stage == 23) {
    console.log("“We geloven u niet, ga naar huis ofzo zoek een leven” je gaat dus naar huis, om een saai leven te lijden, maar wel voor kan bereiden op de apocolypse waardoor je het tenmisnte kan overleven.")
    Ending2 = 1
    endings = Ending1 + Ending2 + Ending3 + Ending4
    console.log ("gefeliciteerd, je hebt het saaie behaald, je hebt er nu " + endings + "van de 4, hoewel dit niet het slechte einde is is het wel mijn 1 na minst favoriete, dus blijf spelen")
    stage = 0
}

if (stage == 24) {
   console.log("Je gooit Kalium nitraat bij de beker en het hele gebouw explodeerd, jij gaat erbij mee, maar op zn minst is de toekomst veilig")
   Ending4 = 1
   endings = Ending1 + Ending2 + Ending3 + Ending4
    console.log("gefeliciteerd, je hebt nu " + endings + " van de 4 eindes gehaald, deze is het goede einde i guess, maar er is een andere die ik leuker vind, je hebt wel die die het moeilijkst is om te vinden, dus gefelicteerd met dat i guess, maarja, vorlijk kerstfeest")
    stage = 0
}

}console.log("gefeliciteerd, je hebt alle eindes behaald, hier is je beloning")
console.log("#*********#*********############################****####################################       ")
console.log("*********************####################*###########*######################################    ")
console.log("********#*****###******##############################*##########################################  ")
console.log("*****####***####*******###################################**#######################****#**++*##### ")
console.log("***+*********###%%%%###*##########################*****###****####################*********+++**#**#")
console.log("+++**++*#*****##+--=*%##***######################***********#######################***#*********#***")
console.log("****+**#%%%%*#%=::---=#%#***####################*************###*****##*********#########**##*******")
console.log("***#%%%*++**#%+::::----*@%%%##**##############****#*******************************##****************")
console.log("**%%+=+*####%*:::::--=--*####%%%##****##*##*##*************************************#***##***********")
console.log("*#@****####%%=:::::--===-*%######@%******##*******************#*********************#***************")
console.log("+%#=++*####%#=:::::--====#%#####*#%%#***********************************************###*************")
console.log("#@+=+++*###%%*-::::--==+#%#######**%%#*********************##***************************************")
console.log("*##+*+=***##%%%#*+++*#%%%########%%%%#****************##%%%%%%#*************************************")
console.log("**@%*=+*++******#%%%%%%%%%%%%%%#%%#%@%************##%%%%##%**%@########*****************************")
console.log("***##+++==**+=+**+****#***##***#%#*#%%%%##*****#%@%#*#%%%##%%**@%#######****#***********************")
console.log("****%#++=+*+=++##+**####**######@#***#######%%%***#%%##*****#%#*%@######******#**************####***")
console.log("*****%@@#+++=++##+**##%#+*###*###%%%#**##%%%###%%##*******##*#%%*#%%##*###*####*********************")
console.log("********#@#**++*#+**###+**%%#%@@@%##**********#**###########%@%@%**%@@%%%#####****************###***")
console.log("****+*****##%@%%%**####*#%@@%##**************##***#######%@#===*%%*#%#++*@%#########**##******####**")
console.log("***************##%@@%%%%%#**********************########@@=::---::-======+%@######################**")
console.log("*****+++*++************************************##****#%%*----==---=======+*%@%###################***")
console.log("********+++****+++**************************##******#@*-:::--==--=====+===+=+%@###################**")
console.log("***++++++++++++***++***********************#####**#%%*---::---::-==---=======+%%#*#################*")
console.log("*+++++++++++++++++*******************#*****#######%%=::-----=-:--=----=====+**+#@#*#################")
console.log("*++++**++++++++++++******************##***#######@%=::-::--=---====--==+========%@#***##############")
console.log("+++++*++++++++++++************************#######@*-:--::---::------:-===-======+%%#*###############")
console.log("++*+++++++++++++**************************#####%@*-:-=-----:::------:-========++*@%#*##**###########")
console.log("+**++**+++++*+++**************************####%%=::--:--===-:----==--===+====+++=*@%#*#*###*###*##**")
console.log("+***+++++***++*****************************#*#%*-::-:::--=-------=---=====--======*%%***##***######*")
console.log("*********++*+********************************#@#-:--::----:::-----=#%%#+==-+%%%*===%%#****#*******#*")
console.log("+*******+************************************#@#=-=-------:::---=*#+#*++=====#**%*%@#******###******")
console.log("*******************************************#%@+-:------==-:=**+##*+#*--====-==###@@@%#**************")
console.log("*********+*********************************%@*::-:::---==--=#@%%%%%*=====++=====+*=+%%**************")
console.log("+*******************************#*****#****#@%+--:::----:::::---==---+*+--=+++===*+=*@%************#")
console.log("**************************************#**###%%+=-::-----:::::----=--=++#=-=#*#+==++*%@#*************")
console.log("++++******++++************************###*#%%-:-------=-:::::---==---*@@+-=+#*===***%%**********####")
console.log("++++++++++++*++***********###*+********##*#%+:--:::---===-------==----==-=+=---=+++=#@#*************")
console.log("+++**++++++**+*******##**#**######***######@%=-::::----:::------=------=====--===++=*@%#**###*******")
console.log("+**+++++****************************#%@%%%%@@*=-::-----::::-----------======--===+=+%@%#####@@*#**##")
console.log("+***++**********************#%%@@%%%#%%%%%%%###%+-----=-:::-----=-----======--==+*+#@%#%%@@@@#******")
console.log("*+++************************%%+#%**##%@@#+++=++*%%=--=***==--=====---====++=====+**%@@%%%%@%##***###")
console.log("***********************##***#%*+*%@@%#*****##%####@@@@#+*%@#=----=----==+**####*%#+==+****##%%%#**#%")
console.log("**+***************#*#********##%%%@@@%@@@@%%%@@@@%***+++*++*#%#+----+%%%#######@%***#%@@@@@%%##%%%@%")
console.log("++**+++++*************************#%%%%%%%%%%@@%+=++=+**####***#%##@%*+++++++**+#%%@@@@@%%%%%@%%%%#*")
console.log("++**+++++*************************%%##%%%%%@@#==+==++*###########%#***+++++++++++*%@@%@@@@%%####****")
console.log("*=+**++++**++********#************%#%@%%@@%+====++*#@@@@@%%%%%%%%%@%%%%%#++++++++++*@@@%%%%###******")
console.log("****+++++*************************#@@%%%%#+++++*#%@@%%%%%%@@%%%%%%%%%%%%@@@#*+=++++++*##%@%#********")
console.log("+******####***********************++*#%%@@@@@@@@%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@@%%%%%%@@@%#**********")
console.log("*########*********************++*****##**#######%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#######************")
console.log("**********************************+=*##******##########%%%%%%%%%%%%%%%%%%%##########****************")
console.log("*****************************##########********#################################********************")
console.log("************************************#****************##*********+=+******************************* ")
console.log("****************************************++*********########***####***#**##**********************  ")
console.log("****************#*****************#*+**++*##**##***#####************************************    ")
console.log("  ******************************#**###%#####*###*********#***********++*******************      ")