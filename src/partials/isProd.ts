export const isProd =
    process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://imoplast-webapp.vercel.app";
