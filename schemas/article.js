export default {
  title: 'Article',
  name: 'article',
  type: 'document',
  fields: [
    {
      title: 'Weight',
      name: 'weight',
      title: 'Weight (0 - 10)',
      type: 'number'
    },
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
      title: 'Published On',
      name: 'date',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: '',
        timeStep: 1440,
        calendarTodayLabel: 'Today'
      }
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
      title: 'title',
      weight: 'weight',
      publication: 'publication.name',
      media: 'image'
    },
    prepare(selection) {
      const {title, weight, media, publication} = selection

      return {
        title: title,
        subtitle: publication,
        description: `[ ${weight} ]`,
        media: media
      }
    }
  }
}
