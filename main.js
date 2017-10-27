$(document).ready(function(){
    
    var timeStart = Date.now();
    $(window).on('beforeunload', function(event) {
    var endTime = Date.now();
    var totalTime = (endTime - timeStart)/ 1000;
    console.log(`Total time spent on site: ${totalTime} seconds`)
    })

    function amountscrolled(){
        var winheight = $(window).height()
        var docheight = $(document).height()
        var scrollTop = $(window).scrollTop()
        var trackLength = docheight - winheight
        var pctScrolled = Math.floor(scrollTop/trackLength * 100) // gets percentage scrolled
        console.log(pctScrolled + '% scrolled')
    }
    $(window).on("scroll", function(){
        amountscrolled()
    })

    var startTimeMouse
    $('*').on('mouseover', function(event) {
        startTimeMouse = Date.now();
    })

    $('*').on('mouseleave', function(event){
        var endTimeMouse
        endTimeMouse = Date.now();
        var totalMouseTime = (startTimeMouse - endTimeMouse) / 1000
        console.log(`Mouseover for ${event.currentTarget} was: ${totalMouseTime} seconds`)
    })

    //count the total vowels
    var numberVowels = 0;
    $(document).on('keydown', function(event){
       if (event.key === "a" || event.key === "e" || event.key === "i" || event.key === "o" || event.key === "u" || event.key === "A" || event.key === "E" || event.key === "I" || event.key === "O" || event.key === "U") {
         numberVowels++;
         console.log(numberVowels)
         }
    })
    
    // ${'#more-kitties-link'}.on('click', function(event) {
    //     var whichLinkClicked
    // })

    var linkWasClicked
    $('#funny-link').on('click', function () {
        linkWasClicked = `User clicked on 'This is Funny' link to leave page.`
    })

    $('#more-kitties-link').on('click', function () {
        linkWasClicked = `User clicked on 'How do I find more crazy kitties?' link to leave page.`
    })
})