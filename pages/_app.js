import '../styles/global.css'


function MyApp({ Component, pageProps}) {
    return  (
        <div>
            <h1>Hi! This is Prince</h1>
             <Component {...pageProps}/>
        </div>
    )
}

export default MyApp