import { NextResponse } from "next/server";

//GET method is here
export async function GET(request) {

    return NextResponse.json({
        messege: "this is the home api response"
    });
}






//POST method is here
export async function POST(request) {

    return NextResponse.json({
        messege: "this is the home api response"
    });
}




//PUT method is over here
export async function PUT(request) {

    return NextResponse.json({
        messege: "this is the home api response"
    });
}




//DELETE method is over here
export async function DELETE(request) {

    return NextResponse.json({
        messege: "this is the home api response"
    });
}
