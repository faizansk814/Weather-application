import CaptionCarousel from "../component/carousel";
import LargeWithAppLinksAndSocial from "../component/footer";
import GridListWith from "../component/middle";
import WithSubnavigation from "../component/navbar";

export default function Home() {
    return (
        <div id="parent">
            <div id="Nav">
                <WithSubnavigation />
            </div>
            <div id="mid1">
                < CaptionCarousel />
            </div>
            <div id="mid">
                < GridListWith />
            </div>
            <div id="footer">
                <LargeWithAppLinksAndSocial />
            </div>
        </div>
    )

}