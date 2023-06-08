import Link from "next/link";
import { usePreview } from "../lib/sanity.preview";
import RenderSections from "./renderSections";

export default function PreviewSections( {query} : {query: string}) {
    const previewSections = usePreview(null, query);

    return (
    <>
        <RenderSections pageData={previewSections} />
        
    </>
    );
}