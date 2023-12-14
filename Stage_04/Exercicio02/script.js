/*
Nesse desafio você irá criar uma lista de estudantes e, cada estudante dentro dessa lista, deverá conter os seguintes dados:
nome;
nota da primeira prova;
nota da segunda prova.

Depois de criada a lista:

Crie uma função que irá calcular a média das notas de cada aluno;
Supondo que a média, para esse concurso é 7, verifique se cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/


const students = [
  {
    name: "John",
    examOne: 9,
    examTwo: 7,
  },
  {
    name: "Anna",
    examOne: 10,
    examTwo: 7,
  },
  {
    name: "Helder",
    examOne: 9,
    examTwo: 8,
  },
  {
    name: "Diego",
    examOne: 4,
    examTwo: 7,
  }
]

let total = 0

function media(examOne, examTwo) {
  return ((examOne + examTwo) / 2).toFixed(2)
}

function mediaAluno(student){
  return `A média do(a) aluno(a) ${student.name} é: ${media(student.examOne, student.examTwo)}`
}

function aprovacao(student)   {
  let media = (student.examOne + student.examTwo) / 2;
  let condicao = media >= 7 ? `Parabéns, ${student.name}! Você foi aprovado(a) no concurso!` : `Não foi dessa vez, ${student.name}! Tente novamente!` 

  return condicao;
}


for(let student of students){
  let mediaMessage = mediaAluno(student)
  let sucesso = aprovacao(student);
  alert("Essa página diz: " + "\n" + mediaMessage + "\n"+ sucesso)
}


