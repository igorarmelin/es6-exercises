const alunos = [
    { nome: 'Diogo', media: 5.5 },
    { nome: 'Julia', media: 9.5 },
    { nome: 'Roberto', media: 1.5 },
    { nome: 'Tiago', media: 6.0 }
];

const aprovados = alunos => alunos.filter((aluno) => aluno.media >= 6)

console.log(aprovados(alunos))