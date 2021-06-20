//momento inicial
const questions = [
  "O que aprendi hoje? ",
  "O que me deixou de cabeça baixa? Eu poderia ter feito algo para melhorar? ",
  "O que me alegrou? ", 
  " Quantas pessoas ajudei hoje? "
]

const ask = (index = 0) =>{
  process.stdout.write("\n\n" + (questions[index]) + " >" )
}
ask()

const answers = []
process.stdin.on("data", data => {
  answers.push(data.toString().trim() + '\n ')
  if(answers.length < questions.length){ //se o tamanho de respostas for menor que o tamanho de perguntas, rode a próxima pergunta
     ask(answers.length)
  }else{
    process.exit()
  }
  
})

//exibe as reflexoes
process.on('exit', () => {
console.log(`
Interessante, João

O que você aprendeu hoje foi: 
${answers[0]}

O que te aborreceu e poderia ter feito melhor: 
${answers[1]}

O que te deixou feliz nesse dia:
${answers[2]}

Você ajudou ${answers[3]} pessoas hoje!!

Volte amanhã para novas reflexões


`)
})
