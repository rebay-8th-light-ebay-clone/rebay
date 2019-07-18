import Fetch from 'utilities/fetch';
import axiosMock from "axios";

test('successful data fetching', async () => {
    const itemData = {
        "data": {
            "data": [
                {
                    "id": 1
                },
                {
                    "id": 2
                },
                {
                    "id": 3
                },
            ]
        }
    };

    axiosMock.get.mockResolvedValueOnce(itemData)
    const url = '/api/items';
    const fetchResult = await Fetch(url);

    expect.assertions(3);
    expect(axiosMock.get).toHaveBeenCalledTimes(1)
    expect(axiosMock.get).toHaveBeenCalledWith(url)
    expect(fetchResult).toEqual(itemData.data)
})

test('error data fetching', async () => {
    const error = {
        "error": {
            "message": "Invalid fetch"
        }
    };
    axiosMock.get.mockRejectedValue(error)
    const url = '/api/items';
    const fetchResult = await Fetch(url);

    expect.assertions(3);
    expect(axiosMock.get).toHaveBeenCalledTimes(2)
    expect(axiosMock.get).toHaveBeenCalledWith(url)
    expect(fetchResult).toEqual(error)
})