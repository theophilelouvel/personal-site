import sanityClient from "@sanity/client";

export default sanityClient({
    // Find your project ID and dataset in `sanity.json` in your studio project
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET_NAME,
    useCdn: process.env.NODE_ENV === 'production'
    // useCdn == true gives fast, cheap responses using a globally distributed cache.
    // Set this to false if your application require the freshest possible
    // data always (potentially slightly slower and a bit more expensive).
});