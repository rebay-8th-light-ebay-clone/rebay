class APIHandler {
    constructor(fetcher) {
        this.fetcher = fetcher;
    }

    getFetcher = () => {
        return this.fetcher;
    }

    get = async (endpoint) => {
        const result = await this.fetcher.get(endpoint);
        return result;
    }

    post = async (endpoint, data) => {
        const result = await this.fetcher.post(endpoint, data);
        return result;
    }
}

export default APIHandler;