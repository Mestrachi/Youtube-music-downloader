import youtube_dl

def download_audio(url):
    ydl_opts = {
        'format': 'bestaudio/best',
        'postprocessors': [{
            'key': 'FFmpegExtractAudio',
            'preferredcodec': 'mp3',
            'preferredquality': '192',
        }],
    }

    with youtube_dl.YoutubeDL(ydl_opts) as ydl:
        info = ydl.extract_info(url, download=True)
        if 'entries' in info:
            info = info['entries'][0]

        title = info.get('title', 'Unknown Title')
        print(f"Downloaded: {title}")

if __name__ == "__main__":
    download_url = input("Enter the URL of the music to download: ")
    download_audio(download_url)
