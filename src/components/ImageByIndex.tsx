import image1 from '../assets/bronze.png'
import image2 from '../assets/photo.jpg'
import image3 from '../assets/laptop.jpg'
import image4 from '../assets/img_4.jpg'

export const images: string[] = [image1, image2, image3, image4]

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex;
