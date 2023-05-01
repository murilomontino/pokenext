import type { AppProps } from 'next/app'
import Container from '~/layouts/container'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  )
}
