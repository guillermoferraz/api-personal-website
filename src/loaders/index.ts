import expressLoader from "../loaders/express";
import routesLoaders from "../loaders/routes";

//eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async ({ expressApp }: any) => {
  try {
    expressLoader({ app: expressApp });
    routesLoaders({ app: expressApp });
  } catch (err) {
    console.error("❌ Erorr on Loaders", err);
  }
};
