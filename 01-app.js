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
    /* 
    en esta parte me equivoque por respondi que devolvia '😍',
    y lo que devuelve '🥑',
    */
}, 0);