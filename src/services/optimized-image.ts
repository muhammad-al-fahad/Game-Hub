import noImage from '../assets/video-placeholder.jpg' 

const getCroppedImageUrl = (url: string, height: number, width: number) => {
    if(!url) return noImage

    const target = 'media/'
    const index = url.indexOf(target) + target.length
    return url.slice(0, index) + 'crop/' + height + '/' + width + '/' + url.slice(index)
}

export default getCroppedImageUrl