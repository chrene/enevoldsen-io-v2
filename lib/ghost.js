import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: `${process.env.GHOST_API_URL}`,
  key: process.env.GHOST_CONTENT_API_KEY,
  version: "v3",
});

export const getAllPosts = async () => {
  const posts = await api.posts.browse({
    limit: "all",
    include: "tags,authors",
  });

  return posts;
};

export const getBlogPosts = async () => {
  const posts = await api.posts.browse({
    limit: "all",
    include: "tags,authors",
    filter: "tags:[blog]",
  });

  return posts;
};

export const getLatestBlogPosts = async () => {
  const posts = await api.posts.browse({
    limit: "1",
    include: "tags,authors",
    filter: "tags:[blog]",
  });

  return posts;
};

export const getPost = async slug => {
  const post = await api.posts.read({ slug });

  return post;
};

export const getPages = async () => {
  const pages = await api.pages.browse({
    limit: "all",
    include: "tags,authors",
  });

  return pages;
};
export const getPage = async slug => {
  const page = await api.pages.read({ slug });

  return page;
};
