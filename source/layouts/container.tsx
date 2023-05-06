import { Inter } from 'next/font/google'
import Footer from './footer'
import Header from './header'

type ContainerProps = {
    children: React.ReactNode
}

const inter = Inter({ subsets: ['latin'] })


const Container = ({ children }: ContainerProps) => {

    return (
        <>
            <Header />
            <main
                className={`flex flex-col items-center justify-between p-24 ${inter.className}`}
            >
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Container