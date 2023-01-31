import Portrait from "./sectionComponents/Portrait";

const PortraitSection = (props: any) => {
    return (
        <div className="relative my-12 max-w-[1600px] border border-pa-navy-4 bg-white px-4 shadow-lg sm:px-16 2xl:mx-auto">
            <div>
                <h3 className="mt-8 text-center font-serif text-4xl font-semibold text-pa-navy-4 sm:ml-6">
                    {props.heading}
                </h3>
            </div>
            <div className="flex flex-wrap justify-center justify-items-center w-full auto-rows-auto mx-auto mt-12">
                {props.portraitImage?.map((portrait:any, i: number) => (
                    <Portrait
                    key={i}
                        {...portrait}
                    />
                ))}
            </div>
        </div>
    );
};

export default PortraitSection;
