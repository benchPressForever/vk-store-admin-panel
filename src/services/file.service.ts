
import {axiosWithAuth} from "../../api/interceptors.ts";


class FileService{

    IMG_URL :string = '/images/upload-sequential'
    APK_URL :string = '/apk/upload-sequential'

    async uploadImg(img : File){
        const formData = new FormData();
        formData.append('file', img);
        const response = await axiosWithAuth.post(this.IMG_URL,formData ,{
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        return response.data
    }

    async uploadApk(apk : File){
        const formData = new FormData();
        formData.append('file', apk);
        const response = await axiosWithAuth.post(this.APK_URL,formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        return response.data
    }

}

export const fileService = new FileService()