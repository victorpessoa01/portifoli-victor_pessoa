export interface MenuItem {
    title: string,
    to: string,
    icon?: string
}

const menuItems: MenuItem[] = [
    { 
        title: 'Home', 
        to: '/', 
        icon: 'mdi-home' 
    },
    { 
        title: 'Sobre Mim', 
        to: '#about-me', 
        icon: 'mdi-account' 
    },
    { 
        title: 'Habilidades', 
        to: '#skills', 
        icon: 'mdi-star' 
    },
    { 
        title: 'Projetos', 
        to: '#project', 
        icon: 'mdi-code-tags' 
    },
]

export default menuItems