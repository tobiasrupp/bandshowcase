var hap_settings={useOnlyMp3Format:!1,sound_id:"full_selector",playlistList:"#playlist_list",activePlaylist:{hidden:!1,id:"#playlist1"},activeItem:0,autoOpenPlayerInPopup:!1,autoUpdateWindowData:!0,soundcloudApiKey:"",soundcloud_result_limit:4,podcast_result_limit:3,yt_playlist_result_limit:3,ofm_result_limit:3,defaultVolume:.5,autoPlay:!1,autoLoad:!1,randomPlay:!1,loopingOn:!0,usePlaylistRollovers:!1,playlistItemContent:"title",useNumbersInPlaylist:!1,titleSeparator:".&nbsp;",autoSetSongTitle:!0,useSongNameScroll:!0,scrollSpeed:1,scrollSeparator:"&nbsp;&#42;&nbsp;",mediaTimeSeparator:"&nbsp;-&nbsp;",useVolumeTooltip:!0,useSeekbarTooltip:!0,seekTooltipSeparator:"&nbsp;/&nbsp;",defaultArtistData:"Artist&nbsp;Name&nbsp;-&nbsp;Artist&nbsp;Title",useBtnRollovers:!0,buttonsUrl:{prev:"/assets/audioplayer/icons/set1/prev.png",prevOn:"/assets/audioplayer/icons/set1/prev_on.png",next:"/assets/audioplayer/icons/set1/next.png",nextOn:"/assets/audioplayer/icons/set1/next_on.png",pause:"/assets/audioplayer/icons/set1/pause.png",pauseOn:"/assets/audioplayer/icons/set1/pause_on.png",play:"/assets/audioplayer/icons/set1/play.png",playOn:"/assets/audioplayer/icons/set1/play_on.png",volume:"/assets/audioplayer/icons/set1/volume.png",volumeOn:"/assets/audioplayer/icons/set1/volume_on.png",mute:"/assets/audioplayer/icons/set1/mute.png",muteOn:"/assets/audioplayer/icons/set1/mute_on.png",download:"/assets/audioplayer/icons/set1/download.png",downloadOn:"/assets/audioplayer/icons/set1/download_on.png",loop:"/assets/audioplayer/icons/set1/loop.png",loopOn:"/assets/audioplayer/icons/set1/loop_on.png",shuffle:"/assets/audioplayer/icons/set1/shuffle.png",shuffleOn:"/assets/audioplayer/icons/set1/shuffle_on.png",trackUrlIcon:"/assets/audioplayer/url.png",trackDownloadIcon:"/assets/audioplayer/dlink.png",trackRemoveIcon:"/assets/audioplayer/remove.png",link_play:"/assets/audioplayer/link_play.png",link_pause:"/assets/audioplayer/link_pause.png"},useAlertMessaging:!0,activatePlaylistScroll:!1,playlistScrollOrientation:"vertical",sortablePlaylistItems:!1,useRemoveBtnInTracks:!1,autoReuseMailForDownload:!0,useKeyboardNavigation:!1,getTrackInfoFromID3:!0},hap_player1,hap_players=[hap_player1];jQuery(document).ready(function(s){jsReady=!0;var e=[{holder:s("#componentWrapper"),settings:hap_settings}];checkFlash(e),hap_players[0]=s("#componentWrapper").html5audio(hap_settings),s("#hap_playlist").length&&(isMobile||ieBelow8?s("#hap_playlist").change(function(){s("#hap_playlist").selectbox("disable");var e=s(this).val();api_loadPlaylist(hap_players[0],{hidden:!1,id:"#"+e})}):s("#hap_playlist").selectbox({onChange:function(e){s("#hap_playlist").selectbox("disable"),api_loadPlaylist(hap_players[0],{hidden:!1,id:"#"+e})}}),s(".sbHolder").css("zIndex",9999))});