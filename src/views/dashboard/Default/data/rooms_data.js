import { useEffect, useState } from 'react';

export const LoadInitialRooms = (url, body) => {
    let data
    let loading = true

    async function fetchData() {
        const response = await fetch(url, { method: 'POST', body })
        const json = await response.json()
        data = json
        loading = false
    }
    fetchData()

    return [data, loading]
}
