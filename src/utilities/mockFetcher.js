class MockFetcher {
    constructor(data) {
        this.data = data;
    }

    get = async (endpoint) => {
        const resolvedData = this.data.error ? this.data : this.data.data;
        return Promise.resolve(resolvedData);
    }
}

export default MockFetcher;