// 
import { pageQuery } from '@/lib/sanity.queries';
import page from '@/studio/schemas/documents/page';
import { useLiveQuery } from 'next-sanity/preview'
import RenderSections from "./renderSections";

export default function PreviewSections( {pageData} :  any) {
    const [previewSections] = useLiveQuery(pageData, pageQuery(pageData.pageSections.id));

    return (
    <>
        <RenderSections pageData={previewSections || []} />
    </>
    );
}