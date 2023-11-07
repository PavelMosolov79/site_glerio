import client from "../../lib/client";

export default function posts(req, res) {
    res.status(200).json({ name: 'John Doe'})
}

export function lamps(req, res) {
    res.status(200).json({ name: 'John Doe'})
}

export async function loadPosts(start, end) {
    const query = `*[_type == 'project'] {
        name,
        image,
        video,
        place,
        data,
        address,
        activity,
        "lamps": lamps[]->{
            "name": name,
            "article": article,
            "href_lamp": href_lamp,
            "image": image
        },
        photo[],
        tasks,
        description
    }`;
    
    const posts = await client.fetch(query) 
    console.log(posts)

    return {
        posts,
    }
}