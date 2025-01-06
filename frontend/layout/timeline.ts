export interface Timeline {
        mes: string;
        ano: string;
        description: string;
}
    
const timeline: Timeline[] = [
    { 
        mes: 'Nov', 
        ano: '2022', 
        description: 'Tive meu primeiro contato com a área de programação, o que despertou meu interesse pela tecnologia.', 
    },
    { 
        mes: 'Dez', 
        ano: '2023', 
        description: 'Fui aprovado na Jala University, ficando entre quase 2% dos selecionados em todo o Brasil e entre os 6 da minha cidade natal.', 
    },
    { 
        mes: 'Jul', 
        ano: '2024-2028', 
        description: 'Atualmente, estou aprimorando minhas habilidades com os melhores profissionais da Jala University, com o objetivo de concluir minha formação e me tornar um profissional de excelência.', 
    },
]

export default timeline