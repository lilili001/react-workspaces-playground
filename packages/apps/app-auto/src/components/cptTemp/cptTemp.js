/**
 * Created by miyaye on 2020/1/11.
 */
/**
 * Created by author on time
 */
import url from '../../config/system.js';

class tempCtrl {
    constructor(http) {
        [this.http, this.name] = [http, 'temp'];
    }
}
tempCtrl.$inject = ['http'];
export default tempCtrl