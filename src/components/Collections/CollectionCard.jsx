export default function CollectionCard({ imgSrc, title }) {
    return (
        <>
            <div className="collectin-card text-center group">
                <div className="overflow-hidden h-[272.5px]">
                    <img src={imgSrc} alt="collection" className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" />
                </div>
                <h3 className="mt-5.75 text-[18px] text-WarmBlack leading-6 font-Inter font-semibold uppercase">{title}</h3>
            </div>
        </>
    )
}