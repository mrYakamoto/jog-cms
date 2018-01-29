export default {
  title: 'Article',
  name: 'article',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Article URL',
      name: 'articleUrl',
      type: 'url'
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image'
    },
    {
      title: 'Publication',
      name: 'publication',
      type: 'reference',
      to: [{type: 'publication'}]
    }
  ]
}
