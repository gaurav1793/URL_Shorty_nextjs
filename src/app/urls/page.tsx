async function fetchUrls() {
    const response= await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/urls`);
    if(!response.ok){
        throw  new Error('faled to fetch urls');
    }
    return response.json()
}



export default async function UrlList() {
    let urls;
    try {
        urls= await fetchUrls();
        console.log(urls);
    } catch (error) {
        return (
            <div className="min-h-screen bg-gray-100 flex justify-center items-center">
                <div className="p-10 bg-white rounded-lg shadow-2xl max-w-4xl w-full">
                    <h1 className="text-3xl font-bold  mb-6 text-center text-gray-700">ERROR</h1>
                    <p className="text-center text-red-500">failed to load urls</p>
                </div>
            </div>
        )
    }
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
            <div className="p-10 bg-white rounded-lg shadow-2xl max-w-4xl w-full">
                <h1 className="text-3xl font-bold  mb-6 text-center text-gray-700">All Short URLs</h1>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th>Original Url</th>
                                <th>Short Urls</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            urls?.urls?.map((url:{
                                _id:string,
                                originalUrl:string,
                                shortUrl:string,
                            })=>{
                               return <tr key={url._id}>
                                <td>{url.originalUrl}</td>
                                <td>
                                    <a 
                                        href={`/${url.shortUrl}`}
                                        target="_blank"
                                        className="link link-primary"
                                    >{`${process.env.NEXT_PUBLIC_BASE_URL}/${url.shortUrl}`}</a>
                                </td>
                               </tr>
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}