import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import Image from 'next/image'
import client from '../../client'
import Layout from '../../views/Layout'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const Recipe = (props) => {
  const { title = '', name = '', mainImage, authorImage, body = [] } = props
  return (
    <Layout>
      <div>
        <Image
          src={urlFor(mainImage).url()}
          width={600}
          height={400}
          objectFit='cover'
        />
      </div>

      <h1>{title}</h1>
      <BlockContent
        blocks={body}
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
        {...client.config()}
      />
      <p>{name}</p>
      {authorImage && (
        <div>
          <Image src={urlFor(authorImage).url()} width={50} height={50} />
        </div>
      )}
    </Layout>
  )
}

const query = groq`*[_type == "recipe" && slug.current == $slug][0]{
  title,
  mainImage,
  "name": author->name,
  "authorImage": author->image,
  body
}`

Recipe.getInitialProps = async function (context) {
  const { slug = '' } = context.query
  return await client.fetch(query, { slug })
}

export default Recipe
