import * as model from './model';

const format = {
    format(images) {
        const that = this;

            let formattedImages=   images.substring(images.indexOf("(") + 1)
            formattedImages=formattedImages.substring(0, formattedImages.length - 1);
          
           
            formattedImages=JSON.parse(formattedImages);

            formattedImages=    formattedImages.items.map((item, index) =>
            that.formatImages(item),
            
            
        );

        return {
            ...formattedImages,
        };
    },

    formatImages(image) {
        return {
            ...model.image,
            ...image,
        };
    },
};

export default format;