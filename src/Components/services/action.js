import { enhancedFetch } from "./services";

export const retrieveList = async (array) => {
    let dataList = [];
    for (let url of array) {
        dataList = [...dataList, await enhancedFetch(url)]
    }
    return dataList
  }