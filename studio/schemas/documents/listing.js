export default {
    name: 'listing',
    type: 'document',
    title: 'Listing',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        description: 'Some frontends will require a slug to be set to be able to show the person',
        options: {
          source: 'name',
          maxLength: 96
        }
      },
      {
        name: 'image',
        type: 'mainImage',
        title: 'Image'
      },
      {
        name: 'date',
        type: 'string',
        title: 'Date',
      },
      {
          name: 'onhold',
          type: 'boolean',
          title: "On Hold"
      },
      {
        name: 'grade',
        type: 'string',
        title: 'Grade',
      },
      {
        name: 'pcgsnumber',
        type: 'string',
        title: 'PCGS#',
      },
      {
        name: 'price',
        type: 'number',
        title: 'Price',
      },
      {
        name: 'description',
        type: 'bodyPortableText',
        title: 'Description'
      }
    ],
    preview: {
      select: {
        title: 'name',
        subtitle: 'slug.current',
        media: 'image',
        price: 'price',
      }
    }
  }
  