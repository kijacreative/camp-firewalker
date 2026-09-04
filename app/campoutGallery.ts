import { galleryArchive, type ArchivePhoto } from "./galleryArchive";

export type CampoutPhoto = ArchivePhoto & { activity: string };

const sharedAlbum = galleryArchive.filter((photo) => photo.source === "Shared album");
const campFirewalkerArchive = galleryArchive.filter((photo) => photo.source === "Camp Firewalker archive");

function select(collection: ArchivePhoto[], indices: number[], activity: string): CampoutPhoto[] {
  return indices.map((index) => ({
    ...collection[index - 1],
    activity,
    alt: `${activity} at a Camp Firewalker campout`,
  }));
}

export const campoutGallery: CampoutPhoto[] = [
  ...select(sharedAlbum, [3, 16, 19, 72, 84, 88, 94, 113, 133, 143, 150, 179, 214, 216, 238, 253], "Campfires"),
  ...select(sharedAlbum, [4, 29, 57, 61, 73, 82, 110, 119, 132, 146, 155, 224, 236, 237, 240, 273, 284], "Camp kitchen"),
  ...select(sharedAlbum, [8, 11, 22, 23, 28, 30, 31, 40, 43, 44, 47, 53, 56, 66, 67, 74, 80, 85, 92, 93, 95, 102, 106, 118, 123, 127, 129, 136, 138, 140, 142, 144, 147, 148, 161, 162, 164, 173, 174, 176, 177, 183, 184, 189, 190, 193, 195, 197, 200, 201, 202, 207, 210, 212, 215, 218, 226, 229, 230, 231, 233, 239, 243, 244, 249, 251, 252, 260, 263, 264, 270, 271, 274, 277, 283, 286, 288], "Trails & creeks"),
  ...select(sharedAlbum, [26, 34, 48, 49, 51, 58, 64, 76, 77, 83, 86, 97, 100, 101, 103, 105, 108, 109, 111, 115, 116, 121, 124, 125, 131, 137, 145, 152, 158, 163, 167, 169, 171, 181, 182, 191, 199, 259, 261, 262, 287], "Camp life"),
  ...select(campFirewalkerArchive, [2, 4, 6, 16, 20, 21, 23, 24, 26, 27, 28, 29, 30, 34, 47, 49, 50], "Fishing"),
  ...select(campFirewalkerArchive, [7, 8, 9, 10, 11, 14, 35, 36, 37, 39, 41, 43, 44, 45, 48, 51, 52, 53], "Camp life"),
  ...select(campFirewalkerArchive, [15], "Range day"),
];
