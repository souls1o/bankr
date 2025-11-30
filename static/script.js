document.getElementById('twitterButton').addEventListener('click', function() {
    fetch('static/twitter.txt')
        .then(response => response.text())
        .then(url => {
            window.location.href = url.trim();
        })
        .catch(error => console.error('error', error));
});

document.getElementById('farcasterButton').addEventListener('click', function() {
    fetch('static/farcaster.txt')
        .then(response => response.text())
        .then(url => {
            window.location.href = url.trim(); 
        })
        .catch(error => console.error('error', error));
});
