// ===============  CODIGO RAVIEL  ===============
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


// ===============  CODIGO CLAUDE 1  ===============
// import './index.css'
// import { createRoot } from 'react-dom/client'
// import { createInertiaApp } from '@inertiajs/react'

// createInertiaApp({
//   resolve: name => {
//     const pages = import.meta.glob('./*.jsx', { eager: true })
//     return pages[`./${name}.jsx`]
//   },
//   setup({ el, App, props }) {
//     createRoot(el).render(<App {...props} />)
//   },
// })


// ===============  CODIGO CLAUDE 2  ===============
import './index.css'
import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./**/*.jsx', { eager: true })
    const page = pages[`./${name}.jsx`]

    if (!page) {
      throw new Error(`Página não encontrada: ./${name}.jsx`)
    }

    return page
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})