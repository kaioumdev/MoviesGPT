export const LOGO = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const USER_AVATAR = "https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png"

export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_API_KEY
    }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/"

export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web_tall_panel/BD-en-20250317-TRIFECTA-perspective_65450c69-6faa-4e0b-885c-8050f6db248f_large.jpg"

export const SUPPORTED_LANGUAGES = [{ identifier: "en", language: "English" }, { identifier: "bengali", language: "Bengali" }, { identifier: "spanish", language: "Spanish" }]


export const OPENAI_KEY = import.meta.env.VITE_OPENAI_KEY