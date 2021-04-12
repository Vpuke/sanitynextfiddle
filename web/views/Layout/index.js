import PropTypes from 'prop-types'
import Container from '../../components/Container'
import Main from '../Main'
import Header from '../Header'
import { ResetStyle } from '../../style/resetStyle'
import Head from 'next/head'

const Layout = (props) => {
  const { children } = props
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto&display=swap'
          rel='stylesheet'
        />
      </Head>
      <ResetStyle />
      <Header />
      <Container>
        <Main>{children}</Main>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
