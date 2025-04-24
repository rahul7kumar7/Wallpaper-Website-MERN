import {useState, useEffect} from "react";
import findResolution from "../../../methods/findResolution.js";
import {common_res_16_9} from "../../../methods/common_res.js";

export default function ResizeImage169({url, height}) {
    const [resizeObj, setResizeObj] = useState([])
    const [noRes, setNoRes] = useState(false)
    useEffect(() => {
        async function fetchPossibleResolutions () {
            const bestMatchIndex = findResolution(common_res_16_9, height)
            console.log(`bestMatchIndex is ${bestMatchIndex}`)
            setResizeObj(common_res_16_9.slice(bestMatchIndex))
        }
        fetchPossibleResolutions()
    }, [url, height]);
    return (
        <div className="flex flex-col gap-1">
            Your Aspect Ratio is : 16:9
            <div className="flex flex-col gap-1">
                Other download options available:
                <ul className="flex gap-1 flex-wrap">
                    {resizeObj.map(
                        obj => Object.entries(obj).map(([_, value]) => (
                            <li className="text-blue-800 hover:underline cursor-pointer font-semibold bg-amber-500 p-1 hover:bg-amber-800 hover:text-white">
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

{/*<a href={url.replace('/upload/', `/upload/${value}/`)}>{value.replace('w_', "").replace("h_", "x").replace(",", "")}</a>*/}