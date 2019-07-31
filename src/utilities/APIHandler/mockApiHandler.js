class MockAPIHandler {
    constructor(data) {
        this.data = data;
    }

    get = async (endpoint) => {
        const resolvedData = this.data.error ? this.data : this.data.data;
        return Promise.resolve(resolvedData);
    }

    post = async (endpoint, data) => {
        const resolvedData = this.data.error ? this.data : this.data.data;
        return Promise.resolve(resolvedData);
    }

    put = async (endpoint, data) => {
        const resolvedData = this.data.error ? this.data : this.data.data;
        return Promise.resolve(resolvedData);
    }
}

export default MockAPIHandler;