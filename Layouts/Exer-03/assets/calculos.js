

let alunoRow = document.querySelector(".aluno");

let notaTd1 = alunoRow.querySelector(".td-sem1");
let sem1 = Number(notaTd1.textContent);

let notaTd2 = alunoRow.querySelector(".td-sem2");
let sem2 = Number(notaTd2.textContent);

let media = alunoRow.querySelector(".td-final");

let freq = alunoRow.querySelector(".td-freq");
let frequencia = freq.textContent;



var mediaAluno = (sem1 +sem2) /2



media.textContent = mediaAluno;

// https://www.youtube.com/watch?v=gdWlws_oHPs