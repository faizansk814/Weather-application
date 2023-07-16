import WithSubnavigation from "../component/navbar";
import InputBox from "../component/weather.input";

export default function Weather(){
    return (
        <div>
            <div>
                <WithSubnavigation />
            </div>
            <div>
                <InputBox />
            </div>
        </div>
        
    )
}