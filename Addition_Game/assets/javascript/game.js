$(document).ready(function() {
            console.log('document loaded')

            var randomComputer = 0
            var userGuess = 0
            var guessTotValue = 0
            var userWin = 0
            var compWin = 0

            $(document).ready(function() {
                console.log('document loaded')
      
            var randomComputer = Math.floor(Math.random() * 25 + 31)
            console.log(randomComputer)
            var c01crystal = Math.floor(Math.random() * 10 + 2)
            console.log(c01crystal)

            var c02crystal = Math.floor(Math.random() * 3 + 5)
            console.log(c02crystal)

            var c03crystal = Math.floor(Math.random() * 6 + 6)
            console.log(c03crystal)

            var c04crystal = Math.floor(Math.random() * 9 + 4)
            console.log(c04crystal)

            $('#randomComputer').html(randomComputer)
      
            $(document).ready(function() {
                console.log('document loaded')
                
                 
             
                $('#c01crystal').click(function() {
                    guessTotValue = guessTotValue + c01crystal
                    $('#userGuess').html(guessTotValue)
                  
                    if (guessTotValue == randomComputer) {
                        userWin++
                        alert('You win!')
                        $('#colWin').html('Won ' + userWin)
                        myFunction();
                        
                    }
                    
                if (guessTotValue > randomComputer) {
                    compWin++
                    alert('You Lost!')
                    $('#colLost').html('Lost ' + compWin)
                    myFunction();
                    
                    
                   
                } 
            
            }
        )
                    $('#c02crystal').click(function() {
                        guessTotValue = guessTotValue + c02crystal
                        $('#userGuess').html(guessTotValue)
                        if (guessTotValue == randomComputer) {
                            userWin++
                            alert('You win!')
                            $('#colWin').html('Won ' + userWin)
                            myFunction();
                       
                
                
                }
                    if (guessTotValue > randomComputer) {
                        compWin++
                        alert('You Lost!')
                        $('#colLost').html('Lost ' + compWin)
                        myFunction();
                   
                   
                   
                    }
                    
                }
            )
                    $('#c03crystal').click(function() {
                        guessTotValue = guessTotValue + c03crystal
                        $('#userGuess').html(guessTotValue)
                        if (guessTotValue == randomComputer) {
                            userWin++
                            alert('You win!')
                            $('#colWin').html('Won ' + userWin)
                            myFunction();
                        
                        
                        
                        }
                    if (guessTotValue > randomComputer) {
                        compWin++
                        alert('You Lost!')
                        $('#colLost').html('Lost ' + compWin)
                        myFunction();
                    
                    
                    }
                }
            )
                    $('#c04crystal').click(function() {
                        guessTotValue = guessTotValue + c04crystal
                        $('#userGuess').html(guessTotValue)
                        if (guessTotValue == randomComputer) {
                            userWin++
                            alert('You win!')
                            $('#colWin').html('Won ' + userWin)
                            myFunction();


                        }
                    if (guessTotValue > randomComputer) {
                        compWin++
                        alert('You Lost!')
                        $('#colLost').html('Lost ' + compWin)
                        myFunction();
                    }
                })
             
                    $('button').click(function() {
                        userWin = 0
                        compWin = 0
                        userGuess = 0
                        $('#colWin').html('Won ' + userWin)
                        $('#colLost').html('Lost ' + compWin)
                        $('#userGuess').html(+ userGuess)
                        location.reload();
                    }) 
                    function myFunction() {
                        guessTotValue = 0
                        $('#userGuess').html(guessTotValue)
                        randomComputer = Math.floor(Math.random() * 25 + 31)
                        $('#randomComputer').html(randomComputer)
                        c01crystal = Math.floor(Math.random() * 10 + 2)
                        c02crystal = Math.floor(Math.random() * 3 + 5)
                        c03crystal = Math.floor(Math.random() * 6 + 6)
                        c04crystal = Math.floor(Math.random() * 9 + 4);
                    }


                   })
    }) 
})


