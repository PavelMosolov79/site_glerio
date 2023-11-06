import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const clientConfig = {
    projectId: '29j8wn0r',
    dataset: 'production',
}

export const client = createClient({
    projectId: '29j8wn0r',
    dataset: 'production',
    apiVersion: '2023-11-06',
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    useCdn: true,
    ignoreBrowserTokenWarning: true,
});

export default client;

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)

