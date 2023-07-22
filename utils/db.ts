

const kv = await Deno.openKv();


export async function savePost(title: string): Promise<string> {

    const id = Math.random().toString(36).slice(2);
    await kv.set(["posts", id], title);
    return id;

}

export async function getPost(id: string): Promise<string> {
    const res = await kv.get(["posts", id]);
    return <string>res.value;
}

export async function listPosts():  Promise<[string, string][]> {
    const postList: [string, string][] = [];

    for await (
        const {key, value} of kv.list<string>({prefix: ["posts"] })
    ) {
        postList.push([key[1] as string, value as string])
    }

    return postList;
}