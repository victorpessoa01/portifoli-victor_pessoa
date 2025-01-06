export { link, lang, project };

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
        star: 2 
    },
    { 
        name: 'CSS', 
        icon: 'mdi-language-css3', 
        color: '#1572b6',
        star: 3
    },
    { 
        name: 'Vue JS', 
        icon: 'mdi-vuejs', 
        color: '#4fc08d',
        star: 2 
    },
    { 
        name: 'Vuetify', 
        icon: 'mdi-vuetify', 
        color: '#1867c0',
        star: 3 
    },
    { 
        name: 'Typescript', 
        icon: 'mdi-language-typescript', 
        color: '#007acc',
        star: 2 
    },
]



export interface Project {
    title: string
    description: string
    image: string
    deploy?: string
    repo?: string
}

const project: Project[] = [
    { 
        title: 'Biblioteca Católica Online', 
        description: 'Em desenvolvimento incial', 
        image: 'https://raw.githubusercontent.com/victorpessoa01/images/cc9a2f8b59a5a2fc3c0e9950c5ab6c9b12bb51e3/NAVBAR%20-%20catholic%20library.svg',
        deploy: '', 
        repo: 'https://github.com/victorpessoa01/'
    },
]


export default { link, lang, project };