'use server'
import UrlShortnerService from "@/services/UrlShortenerService";
import { revalidatePath } from "next/cache";

const shortenURL = async (formData: FormData) => {
    const originalUrl : string = formData.get('originalUrl') as string;
    console.log("Oriignal URL Passed is ", originalUrl);
    const shortenerService = new UrlShortnerService();
    const shortUrl = await shortenerService.shortenUrl(originalUrl);
    revalidatePath('/urls');
}
export default shortenURL