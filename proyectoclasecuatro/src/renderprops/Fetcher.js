export default function Fetcher({ url, render }) {
    fetch(url)
        .then(data => data.json())
        .then(json => render(json))
    return render()
}