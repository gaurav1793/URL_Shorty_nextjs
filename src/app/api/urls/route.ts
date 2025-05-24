import UrlShortnerService from "@/services/UrlShortenerService";
import { NextResponse } from "next/server";
import { cache } from "react";


const fetchUrl=cache(async()=>{
    const shortenerService = new UrlShortnerService();
   const response=await shortenerService.getUrls();
   return response;
})


export async function GET() {
   const urls= await fetchUrl();
   const response= NextResponse.json({urls})
   response.headers.set('cache-control','public, max-age=60 s-maxage=60,stale-while-revalidation=59');
   console.log("hello from urls route",response);
   return response;
}