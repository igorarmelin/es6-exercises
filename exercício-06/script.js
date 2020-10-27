const alunos = [
    { nome: 'Diogo', media: 5.5 },
    { nome: 'Julia', media: 9.5 },
    { nome: 'Roberto', media: 1.5 },
    { nome: 'Tiago', media: 6.0 }
];

const aprovados = alunos.filter((aluno) => {
    if(aluno.media >= 6) {
        return aluno.nome
    }
})

console.log(aprovados)