import Link from "next/link";
import { usePreview } from "../lib/sanity.preview";
import RenderSections from "./renderSections";

export default function PreviewSections( {query} : {query: string}) {
    const previewSections = usePreview(null, query);
    const sections = previewSections.pageSections?.map((data: any) => data.content) //flatten pageData and add posts to the blogPreviewSection object
		.flat(1)
		.map((newSection: any) => {
			const posts = { posts: previewSections.postData }
			const addPostData = _.merge(newSection, posts)
			return newSection._type === 'blogPreviewSection'
				? addPostData
				: newSection
		})

    return (
    <>
        <RenderSections sections={sections} />
        
    </>
    );
}