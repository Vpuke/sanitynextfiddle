import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: '7f0v1amf', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  apiVersion: '2021-04-01',
  useCdn: true, // `false` if you want to ensure fresh data
})
