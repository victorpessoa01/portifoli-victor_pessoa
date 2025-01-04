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
        name: 'Vuetify', 
        icon: 'mdi-vuetify', 
        color: '#1867c0',
        star: 2 
    },
    { 
        name: 'Typescript', 
        icon: 'mdi-language-typescript', 
        color: '#007acc',
        star: 1 
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
        image: 'https://private-user-images.githubusercontent.com/107116374/369535483-2920c00f-7eef-4244-803d-1f7104d3425a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzE1MzE1NTIsIm5iZiI6MTczMTUzMTI1MiwicGF0aCI6Ii8xMDcxMTYzNzQvMzY5NTM1NDgzLTI5MjBjMDBmLTdlZWYtNDI0NC04MDNkLTFmNzEwNGQzNDI1YS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMTEzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTExM1QyMDU0MTJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kYTllNTY1ZDk4NzRlNzUwNDVhNWRjZGIyM2E0MDYxMGYwYmQ2NWY3OWI2OTIwY2JhNDQ2NjIwM2YxNzEzMmQzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.wbrUv9ogHGrwKDeFWzJLHYTOlkwyQBRVKMrs4lz6Apo',
        deploy: '', 
        repo: 'https://github.com/victorpessoa01/'
    },
    // { 
    //     title: 'Jala University', 
    //     description: 'Site desenvolvido para a Jala University', 
    //     image: '/public/img/jalabackgroun.jpeg',
    //     deploy: 'https://github.com/victorpessoa01/jala-university',
    //     repo: 'https://victorpessoa01.github.io/jala-university/' 
    // },
    // { 
    //     title: 'Portifolio', 
    //     description: 'Portifolio desenvolvido para a Jala University', 
    //     image: '/img/portifolio.png',
    //     deploy: 'https://github.com/victorpessoa01/portifolio',   
    //     repo: 'https://victorpessoa01.github.io/portifolio/'
    // },
]


export default { link, lang, project };