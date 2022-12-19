export default {
  title: 'Vue(tdd)',
  description: 'TDD con Vue 3.',
  base: '/vue-tdd/', //  The default path during deployment / secondary address / base can be used/
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Guía', link: '/comenzar/tdd' },
      { text: 'CaribesTIC', link: 'https://caribestic.github.io/' },
      { text: 'GitHub', link: 'https://github.com/CaribesTIC/vue-tdd' }
    ],
    sidebar: [{
      text: 'Comenzar',   // required
      path: '/comenzar/',      // optional, link of the title, which should be an absolute path and must exist        
      sidebarDepth: 1,    // optional, defaults to 1
      collapsible: true,
      collapsed: false, 
      items: [
        { text: 'Desarrollo por Pruebas', link: '/comenzar/tdd' },
        { text: 'Pruebas Unitarias', link: '/comenzar/pruebas-unitarias' }                    
      ]
    }, {
      text: 'Vitest',   // required
      path: '/vitest/',
      collapsible: true,
      collapsed: true,        
      items: [
        { text: '¿Por Qué Vitest?', link: '/vitest/porque-vitest' },
        { text: 'Entorno de Prueba', link: '/vitest/entorno-de-prueba' },        
      ]
    },{
      text: 'Vue Tests Utils Esencial',
      path: '/vtu/esencial/',
      collapsible: true,
      collapsed: true,      
      items: [
        { text: '¿Qué es Vue Test Utils?', link: '/vtu/esencial/intro' },
        { text: 'Entorno de Prueba', link: '/vtu/esencial/entorno-de-prueba' },
      ]
    }] 
  }
}


