import PropTypes from 'prop-types'
import Container from '../../components/Container'
import Main from '../Main'
import Header from '../Header'
import { ResetStyle } from '../../style/resetStyle'
import Head from 'next/head'

const Layout = (props) => {
  const { children, setPaddingTop } = props
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@100;300;400;500;700;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <ResetStyle />
      <Header />
      <Container paddingTop={setPaddingTop}>
        <Main>{children}</Main>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
  setPaddingTop: PropTypes.bool,
}

export default Layout
