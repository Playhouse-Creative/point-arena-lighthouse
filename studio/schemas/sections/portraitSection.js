export default {
    name: "portraitSection",
    title: "Portrait Section",
    type: "object",
    fields: [
        { name: "heading", title: "Section Heading", type: "string" },
        {
            name: "portraitImage",
            title: "Photo",
            type: "array",
            of: [{ type: "portraitImage" }],
        },
    ],
};
