const token = document.head.querySelector('meta[name="csrf-token"]');


module.exports = {
    header: {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "X-CSRF-TOKEN'": token
        }
    },
    
}