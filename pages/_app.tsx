import React from 'react'
import '../src/styles/globals.css'
import Nav from '../src/components/nav'
// import { ThemeProvider } from 'theme-ui'
// import theme from '../theme'


// export default function App({ Component, pageProps }) {
//     return (
//         <ThemeProvider theme = { theme }>
//             <Component {...pageProps} />
//         </ThemeProvider>
//     )
// }

export default function App({ Component, pageProps }) {
    return (
        <>
            <Nav />
            <Component {...pageProps} />
        </>
    )
}