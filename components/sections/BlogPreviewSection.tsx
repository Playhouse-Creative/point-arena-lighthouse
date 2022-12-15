
import BlogPostPreview from "./sectionComponents/BlogPostPreview";

type Props={
    posts: any
    title: string
}

const BlogPreviewSection = (props: Props) => {
    
    

    

    return (
        <div className={"bg-blue-600 py-10"}>
            <h2
                className={"text-white text-center text-4xl font-bold font-serif tracking-wide"}
                
            >
             {props.title}
            </h2>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6 text-black bg-blue-600">
                {props.posts && props.posts.map((node: any, i: number) => (
                        
                            <BlogPostPreview key={node.id + 2} className={"bg-white "} {...node} />
                       
                    ))}
            </div>
        </div>
    );
};



export default BlogPreviewSection;