import Link from 'next/link'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'
import Image from 'next/image'
import HeroSection from '../views/HeroSection'
import Layout from '../views/Layout'
import Grid from '../components/Grid'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const Index = (props) => {
  const { recipes = [] } = props
  console.log('🔥 recipes', recipes)

  return (
    <>
      <div className='full-width'>
        <HeroSection />
      </div>
      <Layout>
        <Grid>
          {recipes.map(
            ({ _id, title = '', slug = '', _updatedAt = '', mainImage = '' }) =>
              slug && (
                <div key={_id}>
                  <Image
                    src={urlFor(mainImage.asset).url()}
                    width={300}
                    height={300}
                    layout={'responsive'}
                  />
                  <Link href={'/recipe/[slug]'} as={`/recipe/${slug.current}`}>
                    <a>{title}</a>
                  </Link>
                  ({new Date(_updatedAt).toDateString()})
                </div>
              )
          )}
        </Grid>
      </Layout>
    </>
  )
}

Index.getInitialProps = async () => ({
  recipes: await client.fetch(
    groq`
    *[_type == 'recipe']
    `
  ),
})

export default Index
