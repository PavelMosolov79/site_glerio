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
    token: 'skf3JMq9um6g2P0bWw11SweHvUv6mJszFdN7s123MJxv7KwaocymZDtfDsI0fPSmw697Bpmp61EliNwuulI6lAFZuOqCyvsB7AUkWt38esleL2YmVkbTcmU3UJ3IXWqWof3jZv1Kyfto9NwIqlT7QLG0gaWQefNe5rQ8QNJ6a0NSFlyCtlYW',
    useCdn: true,
    ignoreBrowserTokenWarning: true,
});

export default client;

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)

