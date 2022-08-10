export default {
  name: "detail",
  title: "Detail",
  type: "document",
  fields: [
    {
      name: "firstext",
      title: "First Set of text. It can be a introduction or a summary",
      type: "string",
    },
    {
      name: "secondtext",
      title: "Second Set of text. It can be a introduction or a summary",
      type: "string",
    },
    {
      name: "username",
      title: "Username",
      type: "string",
    },
    {
      name: "profileImg",
      title: "Progile Image",
      type: "string",
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "image",
      title: "content image",
      type: "string",
    },
  ],

  // preview: {
  //   select: {
  //     title: 'title',
  //     author: 'author.name',
  //     media: 'mainImage',
  //   },
  //   prepare(selection) {
  //     const {author} = selection
  //     return Object.assign({}, selection, {
  //       subtitle: author && `by ${author}`,
  //     })
  //   },
  // },
};
