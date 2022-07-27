import { GALLERY_LIST_API } from "../../../config";

export function getAlbumsList() {
    return fetch(GALLERY_LIST_API).then((res)=> res.json())
}