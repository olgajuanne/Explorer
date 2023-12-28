const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTray = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const phrase = document.querySelector("#frase")

let luck = [
  'Não dê atenção às palavras vãs de más línguas.',
  'Seja orgulhoso, porém tolerante e generoso.',
  'Uma boa época para terminar tarefas antigas.',
  'Você é jovem apenas uma vez. Depois precisa inventar outra desculpa.',
  'Quando a coceira é dentro da bota, coçar o lado de fora não alivia muito.',
  'Más companhias são como um mercado de peixes: acaba-se acostumando com o mal cheiro.',
  'O cordeiro ajoelha-se para mamar.',
  'As pessoas acham difícil resistir ao seu jeito persuasivo de ser.',
  'Se o braço estiver quebrado, mantenha-o sob a manga.',
  'Você terá sorte em muitas coisas.',
  'Não tenha o olho maior do que o estômago.',
  'Se comermos menos, degustaremos mais.',
  'Não aja como uma rã sentada no fundo do poço.',
  'Pratique esportes, mas não em excesso.',
  'Pense antes de falar, mas não fale tudo o que pensar.',
  'Se o problema tem solução, não esquente a cabeça, porque tem solução. Se não tem solução, não esquente a cabeça, porque não tem solução.',
  'Dando sempre, você terá sempre.',
  'Aquele que ronca mais alto adormece primeiro.',
  'Amigos há muito distantes estarão retornando a você.',
  'Todo homem sábio começou fazendo muitas perguntas.',
  'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.'
];


btnTray.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

document.addEventListener('keydown', function(e){
  if(e.key == 'Enter' && screen2.classList.contains('hide')) {
    handleResetClick()
  } else if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    toggleScreen();
  }
})

function handleTryClick() {
  toggleScreen()
  
  let randomPhrase = Math.floor(Math.random() * luck.length) 
  phrase.innerText = luck[String(randomPhrase)];
}

function handleResetClick() {
  toggleScreen()
  
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}


