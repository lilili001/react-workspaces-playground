export const commonFun = {
    // 数字千分位格式化
    formatNum(num){
        if (num && !isNaN(num / 2)) {
            let nums = (num + '').split('.')
            let int = nums[0]
            let float = nums[1]
            let floatString = ''
            if(float){
                float = float.split('')
                if(float[0]){
                    floatString += float[0]
                }
                if(float[1]){
                    floatString += float[1]
                }
            }
            if(floatString.length === 0){
                floatString += '00'
            }

            if(floatString.length === 1){
                floatString += '0'
            }
            nums[1] = floatString
            nums[0] = nums[0].replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) { return s + ',' })
            num = nums.join('.')
            return num
        }
        return num
    },
    syntaxHighlight(json) {
        if (typeof json != 'string') {
            json = JSON.stringify(json, undefined, 2);
        }
        json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
            function(match) {
                var cls = 'number';
                if (/^"/.test(match)) {
                    if (/:$/.test(match)) {
                        cls = 'key';
                    } else {
                        cls = 'string';
                    }
                } else if (/true|false/.test(match)) {
                    cls = 'boolean';
                } else if (/null/.test(match)) {
                    cls = 'null';
                }
                return '<span class="' + cls + '">' + match + '</span>';
            }
        );
    }
}