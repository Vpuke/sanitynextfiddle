import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import Image from 'next/image'
import client from '../../client'
import Layout from '../../views/Layout'
import Text from '../../components/Text'
import Heading from '../../components/Heading'
import { Serializers } from '../../resources/serializers'
import StyledRecipe from './style'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const Recipe = (props) => {
  const {
    title = '',
    name = '',
    mainImage,
    secondImage,
    thirdImage,
    authorImage,
    body = [],
    _updatedAt = '',
  } = props

  return (
    <Layout>
      <StyledRecipe>
        <StyledRecipe.ImageContainer>
          <Image
            src={urlFor(mainImage).url()}
            width={360}
            height={360}
            objectFit='responsive'
          />
          {secondImage && (
            <Image
              src={urlFor(secondImage).url()}
              width={360}
              height={360}
              objectFit='responsive'
            />
          )}
          {thirdImage && (
            <Image
              src={urlFor(thirdImage).url()}
              width={360}
              height={360}
              objectFit='responsive'
            />
          )}
        </StyledRecipe.ImageContainer>
        <StyledRecipe.Recipe>
          <Heading type={'h2'}>{title}</Heading>
          <BlockContent
            serializers={Serializers}
            blocks={body}
            imageOptions={{ w: 320, h: 240, fit: 'max' }}
            {...client.config()}
          />
        </StyledRecipe.Recipe>
        <div>
          {authorImage && (
            <div>
              <Image src={urlFor(authorImage).url()} width={50} height={50} />
            </div>
          )}
          <Text>{name}</Text>
          <Text>{new Date(_updatedAt).toDateString()}</Text>
        </div>
      </StyledRecipe>
    </Layout>
  )
}

const query = groq`*[_type == "recipe" && slug.current == $slug][0]{
  title,
  _updatedAt,
  mainImage,
  secondImage,
  thirdImage,
  "name": author->name,
  "authorImage": author->image,
  body
}`

Recipe.getInitialProps = async function (context) {
  const { slug = '' } = context.query
  return await client.fetch(query, { slug })
}

export default Recipe
