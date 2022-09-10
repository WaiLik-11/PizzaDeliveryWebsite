import SanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = SanityClient({
    projectId: "ffw8vj4e",
    dataset: "production",
    apiVersion: "2022-09-10",
    useCdn: true,
    token: "sk2WrDSKyBSXec5vHRB23hrwChdTEnKNjokeN8VnmolFDNr0vRu7mubxzMmj9FbYoqzZYYFSHEbvEaDdFO8hA39QifWTNQvEjxRgECYxXV94xXBYXmMCyma5htYKthnSGIyaajKibbZE0QPbfXlTruANV6GyHwQf5Rz7T0UiYMi2attflAvu"
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)