import { GALLERY_LIST_API, ALBUMS_API } from "../../../config";

export function getAlbumsList() {
    return fetch(GALLERY_LIST_API).then((res)=> res.json())
}

export function getPhotoList(id) {
    return fetch(ALBUMS_API + id).then((res)=>res.json())
}