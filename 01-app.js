var status = '😎';

setTimeout(() => {
    const status = '😍';
    console.log(status)
    const data = {
        status: '🥑',
        getStatus() {
            return this.status;
        },
    };
    console.log(data.getStatus());
}, 0);