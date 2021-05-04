import Link from 'next/link'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'
import Image from 'next/image'
import HeroSection from '../views/HeroSection'
import Layout from '../views/Layout'
import Grid from '../components/Grid'
import Text from '../components/Text'

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
      <Layout setPaddingTop>
        <Grid>
          {recipes.map(
            ({
              _id,
              title = '',
              slug = '',
              _updatedAt = '',
              mainImage = '',
              categories = [],
            }) =>
              slug && (
                <div key={_id}>
                  <Link href={'/recipe/[slug]'} as={`/recipe/${slug.current}`}>
                    <a>
                      <Image
                        src={urlFor(mainImage.asset).url()}
                        width={300}
                        height={300}
                        layout={'responsive'}
                      />
                      <Text>{title}</Text>
                    </a>
                  </Link>
                  {categories &&
                    categories.map((category, key) => {
                      return <p key={key}>{category}</p>
                    })}
                  <Text>{new Date(_updatedAt).toDateString()}</Text>
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
    *[_type == 'recipe']{
      _id,
      title,
      slug,
      _updatedAt,
      mainImage,
      "categories": categories[]->title
    }
    
    `
    // "categories": categories[]->title,
  ),
})

export default Index
