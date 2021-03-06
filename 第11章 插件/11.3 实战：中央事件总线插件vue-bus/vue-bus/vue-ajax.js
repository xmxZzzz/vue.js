const ajax = function (options = {}) {
    options.type = (options.type || 'GET').toUpperCase();

    //将参数进行拼接：例如username=tom&gender=female
    let data = [];
    for (let i in options.data) {
        data.push(encodeURIComponent(i) + '=' + encodeURIComponent(options.data[i]));
    }
    data = data.join('&');

    //1.创建连接
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const status = xhr.status;
            if (status >= 200 && status < 300) {
                options.success && options.success(JSON.parse(xhr.responseText), xhr.responseXML);
            } else {
                options.error && options.error(status);
            }
        }
    };
    //2.建立连接：xhr.open(method, url, async, username, password);
    //3.发送连接：xhr.send(body||null);
    if (options.type === 'GET') {
        xhr.open('GET', options.url + '?' + data, true);
        xhr.send(null);
    } else if (options.type === 'POST') {
        xhr.open('POST', options.url, true);
        xhr.setRequestHeader(
            'Content-Type',
            'application/x-www-form-urlencoded'
        );
        xhr.send(data);
    }
};

export default ajax;