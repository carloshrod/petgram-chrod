import db from "../adapter.js";

const { get } = db;

function find({ id, favs = [] }) {
  const photo = get("photos").find({ id: +id }).value();
  return {
    ...photo,
    liked: favs.includes(id.toString()),
  };
}

function addLike({ id }) {
  return get("photos")
    .find({ id: +id })
    .update("likes", (likes) => likes + 1)
    .write();
}

function removeLike({ id }) {
  return get("photos")
    .find({ id: +id })
    .update("likes", (likes) => likes - 1)
    .write();
}

function list({ categoryId, ids, favs = [] }) {
  let photos;
  if (categoryId && categoryId !== "all") {
    photos = get("photos").filter({ categoryId: +categoryId }).value();
  } else if (ids) {
    photos = get("photos")
      .filter((photo) => ids.includes(photo.id.toString()))
      .value();
  } else {
    photos = get("photos").value();
  }

  return photos.map((photo) => ({
    ...photo,
    liked: favs.includes(photo.id.toString()),
  }));
}

export default { find, addLike, removeLike, list };
