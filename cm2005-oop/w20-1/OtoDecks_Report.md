# How the program works (R1)
This project is a two-deck DJ audio application. Users can build a persistent playlist by loading audio tracks, then assign any track to Deck 1 or Deck 2. Each deck provides transport controls (Play, Pause, Stop) and sliders for playback speed, volume, and track position (scrub). Between the decks, a mixer exposes a master volume control and a crossfader that blends the two decks for smooth transitions—mirroring standard DJ workflows for cueing and mixing.

# How the music library was implemented and persisted (R2)
The PlayListComponent lets users load audio tracks via juce::FileChooser, constrained to *.mp3 and *.wav. Playlist persistence is handled with juce::ApplicationProperties, which stores each track’s metadata (title and absolute file path) so the list survives app restarts.

## Load & persist flow

- The user clicks Load track.
- The buttonClicked handler fires.
- A juce::FileChooser opens with the *.mp3;*.wav filter.
- After the user confirms a file, addTrack(const juce::File& file) is called.
- The track metadata is appended to the internal std::vector<Track>.
- savePlaylist() is invoked, which iterates over the vector and writes each track’s title and path to ApplicationProperties (via its PropertySet).
- On startup, loadPlaylist() reads from ApplicationProperties and repopulates the in-memory vector, restoring the user’s playlist.