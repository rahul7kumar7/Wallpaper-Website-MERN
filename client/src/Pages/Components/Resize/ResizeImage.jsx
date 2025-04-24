import {useState, useEffect} from "react";
import findResolution from "../../../methods/findResolution.js";
import {aspectRatioData} from "../../../methods/common_res.js";

export default function ResizeImage({url, height, ap}) {

    const [resizeObj, setResizeObj] = useState([])
    const [aspectRatioTitle, setAspectRatioTitle] = useState(undefined)
    const [noRes, setNoRes] = useState(false)
    useEffect(() => {
        async function fetchPossibleResolutions () {
            console.log('value of ap inside useEffect is', ap);
            if (!ap){
                console.log('value of ap is null', ap)
                setNoRes(true);
                return;
            }

            let fetchedAp = aspectRatioData[ap] || null;
            let selectedRes = ap || null;
            // let selectedRes = Object.keys(resolutionMap).find(key => key === ap) || null;
            if (!fetchedAp) {
                console.log('feetched ap value seems to be null.......')
                setNoRes(true);
                return;
            }
            console.log('fetchedAp is', fetchedAp);
            const bestMatchIndex = findResolution(fetchedAp, height)

            console.log('best match index for this is ', bestMatchIndex)

            // const apResArray = fetchedAp.map(obj => parseInt(Object.keys(obj)[0]))

            // if height is same as the last available resolution, setNoRes to true
            if (!bestMatchIndex) {
                console.log('bestMatchIndex value not exist', bestMatchIndex)
                setNoRes(true);
                return;
            }

            if (bestMatchIndex === fetchedAp.resolutions.length) {
                setNoRes(true);
                console.log('last resolution')
            }

            console.log('selectedRes is', selectedRes);
            const apTitle = aspectRatioData[ap]?.title || null;
            setAspectRatioTitle(apTitle);
            console.log('aspect ratio title is ', apTitle);
            console.log(`bestMatchIndex is ${bestMatchIndex}`)
            setResizeObj(fetchedAp.resolutions.slice(bestMatchIndex))

        }
        fetchPossibleResolutions()
    }, [url, height, ap]);

    console.log('value of noRes is', noRes)
    if (noRes){
        return (
                <p className="text-sm font-semibold">No resize options available. This seems to be the lowest resolution available for this wallpaper</p>
    )

    }
    return (
        <div className="flex flex-col gap-1">
            Your Aspect Ratio is : {aspectRatioTitle}
            <div className="flex flex-col gap-1">
                Other download options available:
                <ul className="flex gap-1 flex-wrap">
                    {resizeObj.map(
                        obj => Object.entries(obj).map(([_, value]) => (
                            <li key={_} className="text-blue-800 hover:underline cursor-pointer font-semibold bg-amber-500 p-1 hover:bg-amber-800 hover:text-white">
                                <a target="_blank" href={url.replace('/upload/', `/upload/${value}/`)}>{value.replace('w_', "").replace("h_", "x").replace(",", "")}
                                </a>
                                </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    )
}