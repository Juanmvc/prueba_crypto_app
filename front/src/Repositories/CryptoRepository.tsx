export const getCryptoData = async (): Promise<any> => {
    const url = "https://raw.githubusercontent.com/kelkoo-services/kelisto-frontend-js-challenge-crypto/master/data/response.json"
    const response = await fetch(url);
    return response
}