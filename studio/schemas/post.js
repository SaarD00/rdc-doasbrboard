export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "text",
      title: "Text in the post",
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
      name: "image",
      title: "content image",
      type: "string",
    },
    {
      name: "link",
      title: "href for something",
      type: "string",
    },
    {
      name: "excerpt",
      title: "excerpt for something",
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
