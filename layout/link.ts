export interface Link {
    title: string
    link: string
    icon?: string
}

const link: Link[] = [
    { 
        title: 'GitHub', 
        link:'https://github.com/victorpessoa01', 
        icon: 'mdi-github'
    },
    { 
        title: 'LinkedIn', 
        link: 'https://www.linkedin.com/in/victor-pessoa-b93703241/', 
        icon: 'mdi-linkedin' 
    },
    { 
        title: 'Mail', 
        link: 'mailto:victorpessoa0011@gmail.com', 
        icon: 'mdi-email' 
    },
]

export interface Lang {
    name: string
    icon?: string
    color: string
    star?: number
} 

const lang: Lang[] = [
    { 
        name: 'HTML', 
        icon: 'mdi-language-html5', 
        color: '#e34f26',
        star: 3 
    },
    { 
        name: 'CSS', 
        icon: 'mdi-language-css3', 
        color: '#1572b6',
        star: 2
    },
    { 
        name: 'Vue JS', 
        icon: 'mdi-vuejs', 
        color: '#4fc08d',
        star: 2 
    },
    { 
        name: 'Typescript', 
        icon: 'mdi-language-typescript', 
        color: '#007acc',
        star: 1 
    },
]

export { link, lang };
export default { link, lang };
