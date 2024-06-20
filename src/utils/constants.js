export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const PROFILE_AVATAR =
  "https://occ-0-3216-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABUSntF8sS3XaxlL4kbgMzXhSHilR2oaXKyypWY_hXouAnTxBxaOigBfg-IX5z8rXMp4XyRdumCARSopncAJ3KG2eC7dwaI0.png?r=64f";

export const PROFILE_AVATAR2 =
  "https://occ-0-3216-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4";

export const BACKGROUD_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const TMDB_API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    // eslint-disable-next-line no-useless-concat
    Authorization: "Bearer"+" "+ process.env.REACT_APP_TMDB_KEY,
  },
};

export const NOW_PLAYING_URL ='https://api.themoviedb.org/3/movie/now_playing?page=1';
export const UPCOMING_URL ='https://api.themoviedb.org/3/movie/upcoming?page=1';
export const TOP_RATED_URL ='https://api.themoviedb.org/3/movie/top_rated?page=1';
export const POPULAR_URL ='https://api.themoviedb.org/3/movie/popular?page=1';

export const IMG_CDN_URL =
  "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];