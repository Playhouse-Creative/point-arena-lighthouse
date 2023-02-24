
import BlogPostPreview from "./sectionComponents/BlogPostPreview";
import { PostData } from "../../lib/types";

type Props={
    posts: PostData[]
    title: string
}

const BlogPreviewSection = (props: Props) => {
    
    

    

    return (
        <div className={"bg-pa-blue-4 py-10"}>
            <h2
                className={"text-white text-center text-xl md:text-4xl font-bold font-serif tracking-wide"}
                
            >
             {props.title}
            </h2>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 p-5 md:p-6  bg-pa-blue-4">
                {props.posts && props.posts.map((node: any, i: number) => (
                        
                            <BlogPostPreview key={i} className={"bg-white "} {...node} />
                       
                    ))}
            </div>
        </div>
    );
};



export default BlogPreviewSection;