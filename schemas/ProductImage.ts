import { list } from "@keystone-next/keystone";
import { cloudinaryImage } from "@keystone-next/cloudinary";
import "dotenv/config";
import { relationship } from "@keystone-next/keystone/fields";

export const ProductImage = list({
  fields: {
    product: relationship({ ref: "Product.productImage" }),
    productImage1: cloudinaryImage({
      cloudinary: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME!,
        apiKey: process.env.CLOUDINAY_API_KEY!,
        apiSecret: process.env.CLOUDINARY_API_SECRET!,
        folder: process.env.CLOUDINARY_FOLDER,
      },
    }),
    productImage2: cloudinaryImage({
      cloudinary: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME!,
        apiKey: process.env.CLOUDINAY_API_KEY!,
        apiSecret: process.env.CLOUDINARY_API_SECRET!,
        folder: process.env.CLOUDINARY_FOLDER,
      },
    }),
    productImage3: cloudinaryImage({
      cloudinary: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME!,
        apiKey: process.env.CLOUDINAY_API_KEY!,
        apiSecret: process.env.CLOUDINARY_API_SECRET!,
        folder: process.env.CLOUDINARY_FOLDER,
      },
    }),
    productImage4: cloudinaryImage({
      cloudinary: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME!,
        apiKey: process.env.CLOUDINAY_API_KEY!,
        apiSecret: process.env.CLOUDINARY_API_SECRET!,
        folder: process.env.CLOUDINARY_FOLDER,
      },
    }),
    productImage5: cloudinaryImage({
      cloudinary: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME!,
        apiKey: process.env.CLOUDINAY_API_KEY!,
        apiSecret: process.env.CLOUDINARY_API_SECRET!,
        folder: process.env.CLOUDINARY_FOLDER,
      },
    }),
  },
});
