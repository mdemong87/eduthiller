// Require the Cloudinary library
const cloudinary = require('cloudinary').v2



cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUD_KEY,
    api_secret: process.env.NEXT_PUBLIC_CLOUD_SECRECT,
    secure: true
});



export async function photoUpload(file, size, crop) {
    const cloudresult = await cloudinary.uploader.upload(file, {
        folder: "schoolwebphoto",
        resource_type: "auto",
        width: size,
        crop: crop
    })
    return cloudresult.secure_url;
}


export async function vedioUpload(file, size, crop) {
    const cloudresult = await cloudinary.uploader.upload(file, {
        folder: "schoolwebphoto",
        resource_type: "auto",
        width: size,
        crop: crop
    })
    return cloudresult.secure_url;
}



export async function fileUpload(file, size, crop) {
    const cloudresult = await cloudinary.uploader.upload(file, {
        folder: "schoolwebphoto",
        resource_type: "auto",
        width: size,
        crop: crop
    })
    return cloudresult.secure_url;
}

