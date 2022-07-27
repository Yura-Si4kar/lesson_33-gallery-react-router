import useAlbumsList from '../hooks/useAlbumsList';
import AlbumsListItem from './AlbumsListItem';


export default function AlbumsList() {
    const {list, fetchList} = useAlbumsList();
    
    return (
        <>
            <button onClick={fetchList}>Update List</button>
            <ol>
                {list.map((albums) =>
                    <AlbumsListItem
                    key={albums.id}
                    album={albums} />
                )}
            </ol> 
        </>
  )
}
