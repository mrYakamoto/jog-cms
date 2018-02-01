export default {
  title: 'Publication',
  name: 'publication',
  type: 'document',
  fields: [
    {
      title: 'Weight',
      name: 'weight',
      title: 'Weight (0 - 10)',
      type: 'number'
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string'
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image'
    }
  ],
  orderings: [
    {
      title: 'Weight',
      name: 'weight',
      by: [
        {field: 'weight', direction: 'desc'}
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      weight: 'weight'
    },
    prepare(selection) {
      const {title, weight, media} = selection

      return {
        title: title,
        subtitle: `[ ${weight} ]`,
        description: '',
        media: media
      }
    }
  }
}
