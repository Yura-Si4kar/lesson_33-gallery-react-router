import useAlbumsList from '../hooks/useAlbumsList';
import AlbumsListItem from './AlbumsListItem';


export default function AlbumsList() {
    const {list, fetchList} = useAlbumsList();
    
    return (
        <>
            <button className='update_gallery-list' onClick={fetchList}>Update List</button>
            <ol className='gallery_list'>
                {list.map((albums) =>
                    <AlbumsListItem
                    key={albums.id}
                    album={albums} />
                )}
            </ol> 
        </>
  )
}
