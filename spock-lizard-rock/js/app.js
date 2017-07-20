$(() => {
  const $playerOneBox = $('.player1');
  const $playerTwoBox = $('.player2');
  const $result = $('.result');
  const $buttonChoice = $('.choice');
  const $resetButton = $('.reset');
  const arrayRules = {
    'rock': ['lizard', 'scissors'],
    'paper': ['spock', 'rock'],
    'scissors': ['paper', 'lizard'],
    'lizard': ['paper', 'spock'],
    'spock': ['rock', 'scissors']
  };
  const array = Object.keys(arrayRules);
  $buttonChoice.on('click', (e) => {
    const $playerOneChoice =  $(e.target).html();
    $playerOneBox.html($playerOneChoice);
    var playerTwoChoice = array[Math.floor(Math.random()*array.length)];
    $playerTwoBox.html(playerTwoChoice);
    function findWinner($playerOneChoice, playerTwoChoice) {
      if ($playerOneChoice === playerTwoChoice) return $result.html('Its a draw');
      return arrayRules[$playerOneChoice].includes(playerTwoChoice) ? $result.html('Player one wins'): $result.html('Player two wins');
    }
    findWinner($playerOneChoice, playerTwoChoice);
  });
  $resetButton.on('click', (e) => {
    $playerOneBox.html('');
    $playerTwoBox.html('');
    $result.html('');

  });
});
