import PortraitSectionIcon from '/static/portraitSectionIcon'

export default {
    name: "portraitSection",
    title: "Portrait Section",
    type: "object",
    icon: PortraitSectionIcon,
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
