export async function api (url: string, method: string, data?: any, headers?: any ) {
    try {
        const response = await fetch(url, {
            method,
            headers: headers || {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        });
        return response.json();
    } catch (error) {
        console.log(error)
    }
};