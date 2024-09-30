import '@styles/globals.css';
import { title } from 'process';

export const metadata = {
    title: "Promptopia",
    description: "Discover & Share AI Prompts"
}
const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <div className="main">
                    <div className='gradient' />
                </div>
                <main className='app'>
                    {children}
                </main>
            </body>
        </html>
    )
}

export default RootLayout