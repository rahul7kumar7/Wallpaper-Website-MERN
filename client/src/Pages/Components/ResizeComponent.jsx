import {useState, useEffect} from 'react'
import ResizeImage from './Resize/ResizeImage.jsx'
import checkAspectRatio from '../../methods/checkAp.js'
import {aspectRatioData} from "../../methods/common_res.js";

// eslint-disable-next-line react/prop-types
export default function ResizeComponent({width, height, url}) {
  const [aspectRatio, setAspectRatio] = useState(null);

  useEffect(() => {
    const determineAspectRatio = async () => {
      // in order to determine we have a desktop wallpaper
      // we need to make sure width is greater than height
      if (width < height) {
        return;
      }
      const div = width / height;
      console.log('value of div is', div)
      console.log(aspectRatioData);

      for (const [key, data] of Object.entries(aspectRatioData)) {
        if (data.ratios.some(r=> checkAspectRatio(div, r))) {
          console.log('aspectRatio key is', key )
          setAspectRatio(key);
        }
      }
    }
    determineAspectRatio()
  }, [width, height]);

  console.log('value of aspectratio in ResizeComponent is', aspectRatio);
  return (
    <div>
      {aspectRatio && (
          <ResizeImage url={url} height={height} ap={aspectRatio} />
      )}

    </div>
  )
}
