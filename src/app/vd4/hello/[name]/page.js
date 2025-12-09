export default async function HelloName({ params }) {
    const {name} = await params;

    return <div>Hello {name}!</div>
}
