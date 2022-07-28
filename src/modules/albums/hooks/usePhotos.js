import { useCallback, useEffect, useState } from "react"
import { getPhotoList } from "../services/galleryServices"

export default function usePhotos(id) {
    const [photos, setPhotos] = useState([]);

    const fetchList = useCallback(
      () => {
        getPhotoList(id).then(setPhotos);
      },
      [getPhotoList, setPhotos],
    )

    useEffect(() => {
        fetchList();
    }, []);
    

    return {photos, fetchList}
}