class APIHandler {
    constructor(fetcher) {
        this.fetcher = fetcher;
    }

    getFetcher = () => {
        return this.fetcher;
    }

    get = async (endpoint) => {
        const data = await this.fetcher.get(endpoint);
        return data;
    }
}

export default APIHandler;