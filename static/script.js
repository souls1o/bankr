document.getElementById('twitterButton').addEventListener('click', function() {
    fetch('twitter.txt')
        .then(response => response.text())
        .then(url => {
            window.location.href = url.trim();
        })
        .catch(error => console.error('error', error));
});

document.getElementById('farcasterButton').addEventListener('click', function() {
    fetch('farcaster.txt')
        .then(response => response.text())
        .then(url => {
            window.location.href = url.trim(); 
        })
        .catch(error => console.error('error', error));
});
