
// SETTINGS

var hap_settings = {
	/* useOnlyMp3Format: true/false (set to true, and on browsers than do not support mp3, flash will be used to play mp3. Also set to true if you plan on using podcast, soundcloud, youtube, ofm) */
	useOnlyMp3Format: false,
	/* sound_id: unique string for player identification (if multiple player instances were used, then strings need to be different!) */
	sound_id: 'full_selector',
	
	/* playlistList: dom elements which holds list of playlists */
	playlistList: '#playlist_list',
	/* activePlaylist: set active playlist that will be loaded on beginning. 
	param1: hidden (boolean) true/false (visible/hidden playlist)
	param2: id (pass element 'id' from the dom)
	Leave empty for no playlist loaded at start like this: activePlaylist: '' */
	activePlaylist: {hidden: false, id: '#playlist1'},
	/* activeItem: active item to start with when playlist is loaded (0 = first, 1 = second, 2 = third... -1 = none) */
	activeItem: 0,
	
	/* autoOpenPlayerInPopup: true/false. Auto open player in popup (removes player in parent window when player in popup opens) */
	autoOpenPlayerInPopup: false,
	/* autoUpdateWindowData: true/false. Auto update data between parent window and popup window (current (last) playlist, active item, last volume) */
	autoUpdateWindowData: true,
	
	/* soundcloudApiKey: If you want to use SoundCloud music, register you own api key here for free: 
	'http://soundcloud.com/you/apps/new' and enter Client ID */
	soundcloudApiKey: '',
	/* soundcloud_result_limit: max number of results to retrieve from soundcloud. BEWARE! Some results may contain thousands of songs so keep this in mind!! */
	soundcloud_result_limit:4,
	
	/* podcast_result_limit: max number of results to retrieve from podcast. 250 = max possible results by google api feed. */
	podcast_result_limit: 3,
	/* yt_playlist_result_limit: max number of results to retrieve from youtube playlist. 200 = max amount youtube playlist can have. */
	yt_playlist_result_limit: 3,
	/* ofm_result_limit: max number of results to retrieve from official.fm. */
	ofm_result_limit: 3,

	/*defaultVolume: 0-1 (Irrelevant on ios mobile) */
	defaultVolume:0.5,
	/*autoPlay: true/false (false on mobile by default) */
	autoPlay:false,
	/*autoLoad: true/false (auto start sound load) */
	autoLoad:false,
	/*randomPlay: true/false */
	randomPlay:false,
	/*loopingOn: true/false (loop on the end of the playlist) */
	loopingOn:true,
	
	/* usePlaylistRollovers: true/false. Use rollovers on playlist items (mouseenter, mouseleave + callbacks) */
	usePlaylistRollovers: false,
	/* playlistItemContent: title/thumb/all. Auto create titles or thumbnails in playlist items, or both. */
	playlistItemContent: 'title',
	/* useNumbersInPlaylist: true/false. Prepend numbers in playlist items. */
	useNumbersInPlaylist: false,
	/* titleSeparator: String to append between song number and title. */
	titleSeparator: '.&nbsp;',
	
	/* autoSetSongTitle: true/false. Auto set song title in 'player_mediaName'. */
	autoSetSongTitle: true,
	
	/* useSongNameScroll: true/false. Use song name scrolling. */
	useSongNameScroll: true,
	/* scrollSpeed: speed of the scroll (number higher than zero). */
	scrollSpeed: 1,
	/* scrollSeparator: String to append between scrolling song name. */
	scrollSeparator: '&nbsp;&#42;&#42;&#42;&nbsp;',
	
	/* mediaTimeSeparator: String between current and total song time. */
	mediaTimeSeparator: '&nbsp;-&nbsp;',
	
	/* useVolumeTooltip: true/false. use tooltip over volume seekbar */
	useVolumeTooltip: true,
	
	/* useSeekbarTooltip: true/false. use tooltip over progress seekbar */
	useSeekbarTooltip: true,
	/* seekTooltipSeparator: String between current and total song position, for progress tooltip. */
	seekTooltipSeparator: '&nbsp;/&nbsp;',
	
	/* defaultArtistData: Default text for song media name. */
	defaultArtistData: 'Artist&nbsp;Name&nbsp;-&nbsp;Artist&nbsp;Title',
	
	/* useBtnRollovers: true/false. Use rollovers on buttons */
	useBtnRollovers: true,
	/* buttonsUrl: url of the buttons for normal and rollover state */
	buttonsUrl: {prev: '/assets/audioplayer/icons/set1/prev.svg', prevOn: '/assets/audioplayer/icons/set1/prev_on.png', 
				 next: '/assets/audioplayer/icons/set1/next.svg', nextOn: '/assets/audioplayer/icons/set1/next_on.png', 
				 pause: '/assets/audioplayer/icons/set1/pause.svg', pauseOn: '/assets/audioplayer/icons/set1/pause_on.png',
				 play: '/assets/audioplayer/icons/set1/play.svg', playOn: '/assets/audioplayer/icons/set1/play_on.png',
				 volume: '/assets/audioplayer/icons/set1/volume.svg', volumeOn: '/assets/audioplayer/icons/set1/volume_on.png', 
				 mute: '/assets/audioplayer/icons/set1/mute.svg', muteOn: '/assets/audioplayer/icons/set1/mute_on.png', 
				 download: '/assets/audioplayer/icons/set1/download.png', downloadOn: '/assets/audioplayer/icons/set1/download_on.png',
				 loop: '/assets/audioplayer/icons/set1/loop.png', loopOn: '/assets/audioplayer/icons/set1/loop_on.png',
				 shuffle: '/assets/audioplayer/icons/set1/shuffle.png', shuffleOn: '/assets/audioplayer/icons/set1/shuffle_on.png',
				 trackUrlIcon: '/assets/audioplayer/url.png',
				 trackDownloadIcon: '/assets/audioplayer/dlink.png',
				 trackRemoveIcon: '/assets/audioplayer/remove.png',
				 link_play: '/assets/audioplayer/link_play.png', link_pause: '/assets/audioplayer/link_pause.png'},
				 
	/* useAlertMessaging: true/false. Alert error messages to user */
	useAlertMessaging: true,
	
	/* activatePlaylistScroll: true/false. activate jScrollPane. */
	activatePlaylistScroll: false,
	/* playlistScrollOrientation: vertical/horizontal. */
	playlistScrollOrientation: 'vertical',
	
	/* sortablePlaylistItems: true/false. Make playlist items sortable */
	sortablePlaylistItems: false,
	/* useRemoveBtnInTracks: true/false. Create remove buttons in playlist items for removing tracks. */
	useRemoveBtnInTracks: false,
	
	/* autoReuseMailForDownload: true/false. download backup for ios, save email after client first enters email address and auto send all emails to the same address */
	autoReuseMailForDownload: true,
	
	/* useKeyboardNavigation: false/false. Use keyboard navigation for music (space=toggle audio, left arrow=previous media, right arrow=next media, m=toggle volume) */
	useKeyboardNavigation: false,
	
	/* getTrackInfoFromID3: false/false. Get track info from id3 tags (title, artist, album, artwork) */
	getTrackInfoFromID3: true
};





/* START PLAYER INIT */

var hap_player1, hap_players = [hap_player1];
jQuery(document).ready(function($) {
	jsReady = true;
	
	var dataArr = [{holder: $('#componentWrapper'), settings:hap_settings}];
	
	checkFlash(dataArr);
	
	//init component
	hap_players[0] = $('#componentWrapper').html5audio(hap_settings);
	
	//playlist selector dropdown
	if($("#hap_playlist").length){
		if(!isMobile && !ieBelow8){
			//http://www.bulgaria-web-developers.com/projects/javascript/selectbox/
			$("#hap_playlist").selectbox({
				onChange: function (val, inst) {
					$("#hap_playlist").selectbox("disable");
					//console.log(val, inst);
					api_loadPlaylist(hap_players[0], {hidden: false, id: '#'+val});
				}
			});
		}else{//we want default mobile scroll on selectbox
			$('#hap_playlist').change(function() {
				$("#hap_playlist").selectbox("disable");
				var val = $(this).val();
				api_loadPlaylist(hap_players[0], {hidden: false, id: '#'+val});
			});
		}
		$(".sbHolder").css('zIndex',9999);
	}
	
});
		
/* END PLAYER INIT */