$(document).ready(function(){
    
    //Global variables

    var totalTime //users total time on the site
    var mouseOverElementsLog = [] //records which elements the user moused over and for how long
    var maxScreenScrolled = 0 //shows the maximum amount of the screen that was scrolled
    var pctScrolled = 0 //shows the current % of the screen the user is seeing
    var winheight //gets the window height of the users browser for calculations
    var docheight //stores the website's total height for calculations

    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

    // Calculating total time a user spent on the site

    var timeStart = Date.now(); //the time when the user first visits the site
    $(window).on('beforeunload', function(event) {
    var endTime = Date.now(); //the time when the user leaves the site
    totalTime = (endTime - timeStart)/ 1000; //the total time from when the user first visits then leaves the site
    // console.log(`Total time spent on site: ${totalTime} seconds`)
})

    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

    // Calculating the amount a user scrolled

    function amountscrolled(){
        winheight = $(window).height()
        docheight = $(document).height()
        var scrollTop = $(window).scrollTop()
        var trackLength = docheight - winheight
        pctScrolled = Math.floor(scrollTop/trackLength * 100) // gets percentage scrolled
        maxScreenScrolled = Math.max(pctScrolled); //gets the max percentage the user scrolls
        // console.log(pctScrolled + '% scrolled down the page')
        // console.log(`User's view was ${Math.round((winheight/docheight) * 100)}% of the page.`)
    }
    $(window).on("scroll", function(){
        amountscrolled()
    })
    
    
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

    // Caluclating Amount of time user spends hovering over each element

    var startTimeMouse
    $('*').on('mouseover', function(event) {
        startTimeMouse = Date.now(); //starts the mouseover time when the mouse hovers over anything
    })

    $('*').on('mouseleave', function(event){
        var endTimeMouse
        endTimeMouse = Date.now();
        var totalMouseTime = (startTimeMouse - endTimeMouse) / 1000 //gets the total mouse time (divided by 1000 milaseconds to get seconds) that the user hovers over any one object
        //console.log(`Mouseover for ${event.currentTarget} was: ${totalMouseTime} seconds`)
        mouseOverElementsLog.push(`Mouseover for ${event.currentTarget} was: ${totalMouseTime} seconds`)
    })

    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

    //Calculating total vowels pressed

    var numberVowels = 0;
    $(document).on('keydown', function(event){
       if (event.key === "a" || event.key === "e" || event.key === "i" || event.key === "o" || event.key === "u" || event.key === "A" || event.key === "E" || event.key === "I" || event.key === "O" || event.key === "U") {
         numberVowels++; //adds to numberVowels variable each time the user clicks on a vowel
        //  console.log(numberVowels)
         }
    })
    
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

    // Code logs if user left by way of one of the two links on the site

    var linkWasClicked
    $('#funny-link').on('click', function () {
        linkWasClicked = `User clicked on 'This is Funny' link to leave page.`
    })

    $('#more-kitties-link').on('click', function () {
        linkWasClicked = `User clicked on 'How do I find more crazy kitties?' link to leave page.`
    })

    

    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

    // Compiles total metrics from above code and console log's it when user leaves site

    $(window).on('unload', function(){
        console.log(`User Analytics:
        -In total the user spent ${totalTime} seconds on the site.
        -The user scrolled ${maxScreenScrolled}% of the total site and their viewscreen was ${Math.round((winheight/docheight) * 100)}% of the total page. 
        -The user clicked a total of ${numberVowels} vowel keys with the keyboard. 
        -Log of each individual item the mouse hovered over and for how long:`)
        console.table(mouseOverElementsLog)
        console.log(linkWasClicked)

    })



})