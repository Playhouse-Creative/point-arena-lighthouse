export const sanityConfig = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
    useCdn: true,
    apiVersion: '2022-10-30'
  }