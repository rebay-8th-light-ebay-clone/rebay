import APIHandler from 'utilities/apiHandler';
import Fetcher from 'utilities/fetcher';
import MockFetcher from 'utilities/mockFetcher';
jest.unmock('axios')

test('APIHandler can use Fetcher or MockFetcher', () => {
    const fetcher = new Fetcher();
    expect(new APIHandler(fetcher).getFetcher()).toEqual(fetcher)

    const mockFetcher = new MockFetcher({ data: {} });
    expect(new APIHandler(mockFetcher).getFetcher()).toEqual(mockFetcher)
})

test('APIHandler can make a mock get call', async () => {
    const itemData = {
        "data": {
            "data": [
                { "id": 1 },
                { "id": 2 },
                { "id": 3 },
            ]
        }
    };

    const apiHandler = new APIHandler(new MockFetcher(itemData));
    const url = '/api/items';
    const fetchResult = await apiHandler.get(url);

    expect.assertions(1);
    expect(fetchResult).toEqual(itemData.data)
})

test('APIHandler can handle a mock get call that returns an error', async () => {
    const error = {
        "error": {
            "message": "Invalid fetch"
        }
    };
    const apiHandler = new APIHandler(new MockFetcher(error));
    const url = '/api/items';
    const fetchResult = await apiHandler.get(url);

    expect.assertions(1);
    expect(fetchResult).toEqual(error)
})

test('APIHandler can make a mock post call', async () => {
    const itemData = {
        "data": {
            "data": [
                { "id": 1 },
                { "id": 2 },
                { "id": 3 },
            ]
        }
    };

    const apiHandler = new APIHandler(new MockFetcher(itemData));
    const url = '/api/items';
    const fetchResult = await apiHandler.post(url, {
        title: "Storage Bench",
        description: "Test Description"
    });

    expect.assertions(1);
    expect(fetchResult).toEqual(itemData.data)
})


// Used to make sure Fetcher can make real calls. 
// Should not be included in test suites as the axios endpoint is currently
// dependent on local development url localhost:4000
// test('APIHandler can make a real get call', async () => {
//     const apiHandler = new APIHandler(new Fetcher());
//     const url = '/api/items';
//     const fetchResult = await apiHandler.get(url);

//     expect.assertions(1);
//     expect(fetchResult).toHaveProperty('data')
// })