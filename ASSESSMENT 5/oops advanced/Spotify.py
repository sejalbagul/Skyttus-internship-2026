# Task 9: MusicPlayer and Spotify with overridden play method

class MusicPlayer:
    def play(self):
        return "Playing music in generic player"
    
    def pause(self):
        return "Music paused"

class Spotify(MusicPlayer):
    def play(self):
        return "Playing music from Spotify with premium features"
    
    def create_playlist(self, name):
        return f"Created playlist: {name}"

# Test the classes
generic_player = MusicPlayer()
spotify_player = Spotify()

print(generic_player.play())   # Playing music in generic player
print(spotify_player.play())   # Playing music from Spotify with premium features
print(spotify_player.create_playlist("My Favorites"))  # Created playlist: My Favorites