import TableWare from "../../assets/images/tableware.svg";
import Holiday from "../../assets/images/holiday.svg";
import HomeDecor from "../../assets/images/homedecor.svg";
import Collection from "../../assets/images/collection.svg";
import CollectionCard from "./CollectionCard";

export default function CollectionSection() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7.5 px-5 lg:px-41.25 mt-20">
                <CollectionCard imgSrc={TableWare} title={"TableWare"} />
                <CollectionCard imgSrc={Holiday} title={"Holiday"} />
                <CollectionCard imgSrc={HomeDecor} title={"Home Decor"} />
                <CollectionCard imgSrc={Collection} title={"Collection"} />
            </div>
        </>
    )
}
