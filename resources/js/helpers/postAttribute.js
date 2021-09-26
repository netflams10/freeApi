const token = document.head.querySelector('meta[name="csrf-token"]');


module.exports = {
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}