import { Album } from "@/data/albums";
import { unstable_noStore as noStore } from "next/cache";
import { AlbumArtwork } from "./artwork";
import { fetchReccomendations } from "@/lib/reccomendations";

export async function Playlist() {
  noStore();
  const madeForYouAlbums = await fetchReccomendations();

  return (
    <>
      {madeForYouAlbums.map((album: Album) => (
        <AlbumArtwork
          key={album.name}
          album={album}
          className="w-[150px] m-2"
          aspectRatio="square"
          width={150}
          height={150}
        />
      ))}
    </>
  );
}
