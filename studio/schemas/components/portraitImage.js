export default {
    name: "portraitImage",
    title: "photo",
    type: "object",
    fields: [
        { name: "name", title: "Name", type: "string" },
        { name: "title", title: "Title", type: "string" },
        { name: "image", title: "Photo", type: "image" },
    ],
    preview: {
        select: {
          title: 'name',
          media: 'image' 
        }}
};
