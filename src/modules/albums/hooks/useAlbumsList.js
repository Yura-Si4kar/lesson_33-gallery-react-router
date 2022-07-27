import { useCallback, useEffect, useState } from 'react';
import { getAlbumsList } from '../services/galleryServices';


export default function useAlbumsList() {
    const [list, setList] = useState([]);

    const fetchList = useCallback(
      () => {
        getAlbumsList().then(setList);
      },
      [getAlbumsList, setList],
    )

    useEffect(() => {
        fetchList();
    }, []);
    

    return {list, fetchList}
}