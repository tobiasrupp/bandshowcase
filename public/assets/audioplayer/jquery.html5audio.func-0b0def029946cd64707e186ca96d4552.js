function api_playAudio(a){a&&a.playAudio()}function api_pauseAudio(a){a&&a.pauseAudio()}function api_toggleAudio(a){a&&a.toggleAudio()}function api_stopAudio(a){a&&a.stopAudio()}function api_checkAudio(a,t){a&&a.checkAudio(t)}function api_nextAudio(a){a&&a.nextAudio()}function api_previousAudio(a){a&&a.previousAudio()}function api_loadAudio(a,t){a&&a.loadAudio(t)}function api_loadPlaylist(a,t){a&&a.loadPlaylist(t)}function api_addTrack(a,t,e,l,o){a&&a.addTrack(t,e,l,o)}function api_inputAudio(a,t){a&&a.inputAudio(t)}function api_removeTrack(a,t){a&&a.removeTrack(t)}function api_destroyAudio(a){a&&a.destroyAudio()}function api_destroyPlaylist(a){a&&a.destroyPlaylist()}function api_toggleShuffle(a){a&&a.toggleShuffle()}function api_toggleLoop(a){a&&a.toggleLoop()}function api_checkScroll(a){a&&a.checkScroll()}function api_reinitScroll(a){a&&a.reinitScroll()}function api_orderPlaylist(a,t,e){a&&a.orderPlaylist(t,e)}function api_getVolume(a){return a?a.getVolume():void 0}function api_setVolume(a,t){a&&a.setVolume(t)}function api_getAutoPlay(a){return a?a.getAutoPlay():void 0}function api_setAutoPlay(a,t){a&&a.setAutoPlay(t)}function api_setTitle(a,t){a&&a.setTitle(t)}function api_getSetupDone(a){return a?a.getSetupDone():void 0}function api_getPlaylistLoaded(a){return a?a.getPlaylistLoaded():void 0}function api_getPlaylistTransition(a){return a?a.getPlaylistTransition():void 0}function api_getMediaPlaying(a){return a?a.getMediaPlaying():void 0}function api_getAudioInited(a){return a?a.getAudioInited():void 0}function api_getMediaType(a){return a?a.getMediaType():void 0}function api_getActiveItem(a){return a?a.getActiveItem():void 0}function api_getPlaylistItems(a,t){return a?a.getPlaylistItems(t):void 0}function api_getMediaCount(a){return a?a.getMediaCount():void 0}function api_getPlaylistHidden(a){return a?a.getPlaylistHidden():void 0}function api_getPlaylistList(a){return a?a.getPlaylistList():void 0}function api_getPlaylistData(a){return a?a.getPlaylistData():void 0}function api_getSoundId(a){return a?a.getSoundId():void 0}function audioPlayerSetupDone(a,t){if("popup"==t||"classic_popup"==t?a.find(".popup_open").css({cursor:"pointer",display:"block"}).bind("click",function(){return open_popup(popup_url,popup_width,popup_height,resizable),!1}):("circle_slideshow"==t||"bg_slideshow"==t)&&loadImage(),("classic_single"==t||"classic"==t||"classic_white"==t||"classic_no_time"==t||"classic_full"==t||"classic_no_time_advance"==t||"classic_no_time_no_seekbar_advance"==t||"classic_min"==t||"classic_playlist"==t||"classic_popup"==t||"wall"==t||"drag_to_play"==t||/wrap_multi/g.test(t))&&a.getTouch()&&(a.find(".controls_toggle").addClass("hap_no_hover"),a.find(".player_volume").addClass("hap_no_hover"),a.find(".controls_prev").addClass("hap_no_hover"),a.find(".controls_next").addClass("hap_no_hover"),a.find(".popup_open").addClass("hap_no_hover")),"undefined"!=typeof hap_group&&("wrap_multi"==hap_group||"wrap_multi2"==hap_group)){if("wrap_multi2"==hap_group&&"wrap_multi2_selector"==t)return;var e,l,o,i,d,p,s="",n=jQuery(a).closest(".playlistItem");void 0!=n.attr("data-type")&&(l=n.attr("data-type")),void 0!=n.attr("data-mp3")&&(o=n.attr("data-mp3")),l&&o&&(void 0!=n.attr("data-ogg")&&(s=n.attr("data-ogg")),void 0!=n.attr("data-title")&&(i=n.attr("data-title")),void 0!=n.attr("data-thumb")&&(d=n.attr("data-thumb")),void 0!=n.attr("data-download")&&(p=n.attr("data-download")),e=[{type:"local",origtype:l,mp3:o,ogg:s,title:i,thumb:d,download:p}],a.addTrack("visible","data",e[0]))}}function audioPlayerPlaylistLoaded(a,t){"undefined"!=typeof hap_group&&"wrap_multi2"==hap_group&&"wrap_multi2_selector"==t&&makeHapPlayers(a),"drag_text1"==t||"drag_thumb1"==t?a.find("li[class*=hap_draggable]").draggable({connectToSortable:".hap_sortable",helper:"clone",revert:"invalid"}):("drag_text2"==t||"drag_thumb2"==t)&&jQuery("#playlist2").droppable({tolerance:"touch",drop:function(a,t){var e=jQuery(t.draggable);e.hasClass("playlist_locked")&&e.removeClass("playlist_locked")}}),jQuery("#hap_playlist").length&&jQuery("#hap_playlist").selectbox("enable")}function audioPlayerPlaylistEnd(){}function audioPlayerSoundEnd(){}function audioPlayerSoundStart(){}function audioPlayerSoundPlay(a,t){if("undefined"!=typeof hap_group&&"undefined"!=typeof hap_players&&hap_players.length&&"undefined"!=typeof soundArr&&soundArr.length){var e=0,l=soundArr.length;for(e;l>e;e++)t!=soundArr[e].sound_id&&"undefined"!=typeof api_checkAudio&&api_checkAudio(soundArr[e].player_id,"pause")}}function audioPlayerSoundPause(){}function itemTriggered(a,t,e){if("artwork1"==t||"basic"==t||"basic_h"==t){var l=a.find(".player_thumb").find("img"),o=a.getPlaylistData(),i=o[e].thumb;l.length&&i&&l.attr("src",a.get_hap_source_path()+i)}}function playlistItemEnabled(a,t,e){"wall"==t&&jQuery(e).find("p[class=hap_title]").remove()}function playlistItemDisabled(a,t,e,l){if("wall"==t){var o=a.getPlaylistData(),i=o[l].title;if(i){var d=jQuery('<p>"'+i+'"</p>').addClass("hap_title");d.appendTo(jQuery(e)).css("marginTop",-d.outerHeight(!0)/2+"px")}}}function playlistItemRollover(a,t,e,l,o){if("wall"==t&&!o){var i=a.getPlaylistData(),d=i[l].title;if(d){var p=jQuery('<p>"'+d+'"</p>').addClass("hap_title");p.appendTo(jQuery(e)).css("marginTop",-p.outerHeight(!0)/2+"px")}}}function playlistItemRollout(a,t,e,l,o){"wall"!=t||o||jQuery(e).find("p[class=hap_title]").remove()}function playlistEmpty(a,t){("drag_text2"==t||"drag_thumb2"==t)&&(a.destroyAudio(),0==a.find("p[class=drag_info]").length&&(a.find(".playlist_inner").prepend($('<p class="drag_info">DRAG THE SONGS IN HERE!</p>')),a.loadPlaylist({hidden:!1,id:"#playlist2"})))}function dropReceive(a,t){("drag_text2"==t||"drag_thumb2"==t)&&a.find("p[class=drag_info]").remove()}function getInternetExplorerVersion(){var a=-1;if("Microsoft Internet Explorer"==navigator.appName){var t=navigator.userAgent,e=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");null!=e.exec(t)&&(a=parseFloat(RegExp.$1))}else if("Netscape"==navigator.appName){var t=navigator.userAgent,e=new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})");null!=e.exec(t)&&(a=parseFloat(RegExp.$1))}return a}function checkFlash(a,t){var e=0,l=a.length;if(html5Support){for(e=0;l>e;e++)if(a[e].settings.useOnlyMp3Format&&!mp3Support){var o="flashAudio"+e;a[e].settings.flash_id=e,a[e].settings.flashAudio="#"+o;{var i=jQuery("<div/>").addClass("flashAudio");jQuery("<div id='"+o+"'><a href='http://www.adobe.com/go/getflashplayer'><img src='http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player' /></a></div>").appendTo(i)}a[e].holder.append(i)}}else for(e;l>e;e++){var o="flashAudio"+e,d="flashMain"+e,p="circleMain"+e;a[e].settings.flash_id=e,a[e].settings.flashAudio="#"+o,a[e].settings.flashYoutube="#"+d,a[e].settings.circleMain="#"+p;{var i=jQuery("<div/>").addClass("flashAudio"),s=(jQuery("<div id='"+o+"'><a href='http://www.adobe.com/go/getflashplayer'><img src='http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player' /></a></div>").appendTo(i),jQuery("<div/>").addClass("flashMain"));jQuery("<div id='"+d+"'><a href='http://www.adobe.com/go/getflashplayer'><img src='http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player' /></a></div>").appendTo(s)}if(a[e].holder.append(i),a[e].holder.append(s),t){{var n=jQuery("<div/>").addClass("circleMain");jQuery("<div id='"+p+"'><a href='http://www.adobe.com/go/getflashplayer'><img src='http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player'/></a></div>").appendTo(n)}a[e].holder.find("div[class=circlePlayer]").append(n)}}}function embedFlashMain(a){if(0!=jQuery(".flashMain").length){jQuery(".flashMain").css("display","block");var t={},e={id:a};swfobject.embedSWF("preview.swf",a,"320px","240px","9.0.0","expressInstall.swf",t,hap_params,e)}}function embedFlashAudio(a){if(0!=jQuery(".flashAudio").length){jQuery(".flashAudio").css("display","block");var t={},e={id:a};swfobject.embedSWF("preview2.swf",a,"100px","100px","9.0.0","expressInstall.swf",t,hap_params,e)}}function embedFlashCircle(a){if(0!=jQuery(".circleMain").length){jQuery(".circleMain").css("display","block");var t={},e={id:a};swfobject.embedSWF("circle.swf",a,"160px","160px","9.0.0","expressInstall.swf",t,hap_params,e)}}function isReady(){return jsReady}function flashVideoEnd(a){hap_players[a.id]&&hap_players[a.id].flashVideoEnd()}function flashVideoStart(a){hap_players[a.id]&&hap_players[a.id].flashVideoStart()}function flashVideoPause(a){hap_players[a.id]&&hap_players[a.id].flashVideoPause()}function flashVideoResume(a){hap_players[a.id]&&hap_players[a.id].flashVideoResume()}function flashYoutubeData(a){hap_players[a.id]&&hap_players[a.id].flashYoutubeData(a.bl,a.bt,a.t,a.d)}function flashAudioEnd(a){hap_players[a.id]&&hap_players[a.id].flashAudioEnd()}function flashAudioData(a){hap_players[a.id]&&hap_players[a.id].flashAudioData(a.bl,a.bt,a.t,a.d)}function flashCircleToggle(a){hap_players[a.id]&&hap_players[a.id].flashCircleToggle()}function flashCircleOverLoader(a){hap_players[a.id]&&hap_players[a.id].flashCircleOverLoader(a.val)}function flashCircleOutLoader(a){hap_players[a.id]&&hap_players[a.id].flashCircleOutLoader()}function flashCircleSeek(a){hap_players[a.id]&&hap_players[a.id].flashCircleSeek(a.val)}function notify_popup(){if(hap_popup&&void 0!=hap_popup.initPopup){hap_settings.autoUpdateWindowData&&updatePlayerData(),hap_players&&hap_players[0]&&void 0!=hap_players[0].destroyPlaylist&&hap_players[0].destroyPlaylist(),jQuery("#componentWrapper").css("display","none");try{void 0!=hap_popup.initPopup&&hap_popup.initPopup(hap_settings),hap_players[0]&&hap_players[0].find(".popup_open").css("display","none")}catch(a){return alert("parent notify_popup error: "+a.message),!1}}}function open_player(a){hap_settings.autoUpdateWindowData&&(a&&(hap_players[0]=a),updatePlayerData(!0)),hap_players[0]=jQuery("#componentWrapper").css("display","block").html5audio(hap_settings),html5Support||hap_players[0].embedFlash(),hap_players[0].find(".popup_open").css("display","block")}function open_popup(a,t,e,l){if("undefined"==typeof a||"undefined"==typeof t||"undefined"==typeof e)return!1;var o=(window.screen.width-t)/2,i=(window.screen.height-e)/2;if(!hap_popup||hap_popup.closed){if(hap_popup=l?window.open(a,"hap_popup_window","menubar=no,toolbar=no,location=no,scrollbars=1,resizable,width="+t+",height="+e+",left="+o+",top="+i):window.open(a,"hap_popup_window","menubar=no,toolbar=no,location=no,width="+t+",height="+e+",left="+o+",top="+i),!hap_popup)return alert("Music Player can not be opened in a popup window because your browser is blocking Pop-Ups. Please allow Pop-Ups in browser for this site to use the Music Player."),!1;window.focus&&hap_popup.focus()}return!1}function updatePlayerData(a){if(!hap_players[0]||!hap_settings)return!1;isNaN(hap_players[0].getVolume())||(hap_settings.defaultVolume=hap_players[0].getVolume()),isNaN(hap_players[0].getActiveItem())||(hap_settings.activeItem=hap_players[0].getActiveItem());var t=hap_players[0].getPlaylistLoaded();if(t){var e=hap_players[0].getPlaylistHidden();if(e){var l=hap_players[0].get_hidden_playlist_holder().children();if(l.length>0){var o="playlist"+Math.floor(9999*Math.random()),i=jQuery("<ul id="+o+"/>");a&&isIE?jQuery(l.clone(!0,!0).wrap("<p>").parent().html()).appendTo(i):l.clone(!0,!0).appendTo(i),hap_players[0].getPlaylistList()&&(i.appendTo(hap_players[0].getPlaylistList()),hap_settings.activePlaylist={hidden:!0,id:"#"+o},hap_players[0].get_hidden_playlist_holder().html(""))}}else{var l=hap_players[0].find(".playlist_inner").find("ul");if(l.length>0){var o=l.attr("id");if(a&&isIE)var i=jQuery(l.clone(!0,!0).wrap("<p>").parent().html());else var i=l.clone(!0,!0);jQuery(hap_settings.playlistList).find("#"+o).remove(),i.appendTo(jQuery(hap_settings.playlistList)),hap_settings.activePlaylist={hidden:!1,id:"#"+o}}}var d=hap_players[0].getMediaPlaying();hap_settings.autoPlay=d?!0:!1}else hap_settings.activePlaylist=""}var trackList_local1=["<li class= 'playlistItem' data-type='local' data-mp3='../media/audio/1/Tim_McMorris_-_A_Bright_And_Hopeful_Future.mp3' 		 data-ogg='../media/audio/1/Tim_McMorris_-_A_Bright_And_Hopeful_Future.ogg' data-download><a class='playlistNonSelected' href='#'>Tim McMorris - A Bright And Hopeful Future</a><a class='dlink' href='#' data-dlink='../media/audio/1/Tim_McMorris_-_A_Bright_And_Hopeful_Future.mp3'><img src='media/data/dlink.png' alt = ''/></a><a class='plink' href='http://codecanyon.net/user/Tean/portfolio' target='_blank'><img src='media/data/url.png' alt = 'purchase'/></a></li>","<li class= 'playlistItem' data-type='local' data-mp3='../media/audio/1/Tim_McMorris_-_Be_My_Valentine.mp3' data-ogg='../media/audio/1/Tim_McMorris_-_Be_My_Valentine.ogg'><a class='playlistNonSelected' href='#'>Tim McMorris - Be My Valentine</a><a class='dlink' href='#' data-dlink='../media/audio/1/Tim_McMorris_-_Be_My_Valentine.mp3'><img src='media/data/dlink.png' alt = ''/></a><a class='plink' href='http://www.google.com' target='_blank'><img src='media/data/url.png' alt = 'purchase'/></a></li>","<li class= 'playlistItem' data-type='local' data-mp3='../media/audio/1/Tim_McMorris_-_Give_Our_Dreams_Their_Wings_To_Fly.mp3' data-ogg='../media/audio/1/Tim_McMorris_-_Give_Our_Dreams_Their_Wings_To_Fly.ogg' data-download><a class='playlistNonSelected' href='#'>Tim McMorris - Give Our Dreams Their Wings To Fly</a></li>","<li class= 'playlistItem' data-type='local' data-mp3='../media/audio/1/Tim_McMorris_-_Happy_Days_Are_Here_To_Stay.mp3' data-ogg='../media/audio/1/Tim_McMorris_-_Happy_Days_Are_Here_To_Stay.ogg'><a class='playlistNonSelected' href='#'>Tim McMorris - Happy Days Are Here To Stay</a><a class='plink' href='http://www.greensock.com' target='_blank'><img src='media/data/url.png' alt = 'purchase'/></a></li>"],trackList_local2=["<li class= 'playlistItem' data-type='local' data-mp3='../media/audio/2/Soundroll_-_A_Way_To_The_Top.mp3' data-ogg='../media/audio/2/Soundroll_-_A_Way_To_The_Top.ogg'><a class='playlistNonSelected' href='#'>Soundroll - A Way To The Top</a><a class='plink' href='http://codecanyon.net/user/Tean/portfolio' target='_blank'><img src='media/data/url.png' alt = 'purchase'/></a></li>","<li class= 'playlistItem' data-type='local' data-mp3='../media/audio/2/Soundroll_-_Feel_Good_Journey.mp3' data-ogg='../media/audio/2/Soundroll_-_Feel_Good_Journey.ogg'><a class='playlistNonSelected' href='#'>Soundroll - Feel Good Journey</a></li>","<li class= 'playlistItem' data-type='local' data-mp3='../media/audio/2/Soundroll_-_Fight_No_More.mp3' data-ogg='../media/audio/2/Soundroll_-_Fight_No_More.ogg'><a class='playlistNonSelected' href='#'>Soundroll - Fight No More</a><a class='plink' href='http://www.google.com' target='_blank'><img src='media/data/url.png' alt = 'purchase'/></a></li>","<li class= 'playlistItem' data-type='local' data-mp3='../media/audio/2/Soundroll_-_Funky_Boom.mp3' data-ogg='../media/audio/2/Soundroll_-_Funky_Boom.ogg'><a class='playlistNonSelected' href='#'>Soundroll - Funky Boom</a><a class='plink' href='http://codecanyon.net/user/Tean/portfolio' target='_blank'><img src='media/data/url.png' alt = 'purchase'/></a></li>","<li class= 'playlistItem' data-type='local' data-mp3='../media/audio/2/Soundroll_-_Pump_The_Club.mp3' data-ogg='../media/audio/2/Soundroll_-_Pump_The_Club.ogg'><a class='playlistNonSelected' href='#'>Soundroll - Pump The Club</a></li>","<li class= 'playlistItem' data-type='local' data-mp3='../media/audio/2/Soundroll_-_Rush.mp3' data-ogg='../media/audio/2/Soundroll_-_Rush.ogg'><a class='playlistNonSelected' href='#'>Soundroll - Rush</a></li>","<li class= 'playlistItem' data-type='local' data-mp3='../media/audio/2/Soundroll_-_Sun_Is_So_Bright.mp3' data-ogg='../media/audio/2/Soundroll_-_Sun_Is_So_Bright.ogg'><a class='playlistNonSelected' href='#'>Soundroll - Sun Is So Bright</a></li>"],trackList_local_thumb=["<li class= 'playlistItem' data-type='local' data-mp3='../media/audio/2/Soundroll_-_A_Way_To_The_Top.mp3' data-ogg='../media/audio/2/Soundroll_-_A_Way_To_The_Top.ogg'><a class='playlistNonSelected' href='#'><span class='hap_thumb'><img src='../media/audio/2/Soundroll_-_A_Way_To_The_Top.jpg' alt=''/></span><span class='hap_title'><p>Soundroll - A Way To The Top</p></span></a></li>","<li class= 'playlistItem' data-type='local' data-mp3='../media/audio/2/Soundroll_-_Feel_Good_Journey.mp3' data-ogg='../media/audio/2/Soundroll_-_Feel_Good_Journey.ogg'><a class='playlistNonSelected' href='#'><span class='hap_thumb'><img src='../media/audio/2/Soundroll_-_Feel_Good_Journey.jpg' alt=''/></span><span class='hap_title'><p>Soundroll - Feel Good Journey</p></span></a></li>"],trackList_podcast=["<li class= 'playlistItem' data-type='podcast' data-path='http://gidilounge.fm/?feed=podcast'/>","<li class= 'playlistItem' data-type='podcast' data-path='http://www.kingola.com/feed/podcast/'/>"],trackList_soundcloud=["<li class= 'playlistItem' data-type='soundcloud' data-path='http://soundcloud.com/computer-magic'/>","<li class= 'playlistItem' data-type='soundcloud' data-path='http://soundcloud.com/an21/favorites'/>"],trackList_folder=["<li class= 'playlistItem' data-type='folder' data-path='../media/audio/1/'/>","<li class= 'playlistItem' data-type='folder' data-path='../media/audio/2/'/>"],trackList_xml=["<li class= 'playlistItem' data-type='xml' data-path='xml/playlist1.xml'/>","<li class= 'playlistItem' data-type='xml' data-path='xml/playlist2.xml'/>"],trackList_yt_single=["<li class='playlistItem' data-type='youtube_single' data-path='opL4oe62XL8' ></li>","<li class='playlistItem' data-type='youtube_single' data-path='Akb7SJgGx1A' ></li>","<li class='playlistItem' data-type='youtube_single' data-path='uPOUgobWTT0' ></li>"],trackList_yt_playlist=["<li class= 'playlistItem' data-type='youtube_playlist' data-path='PLE0311B1CFA360F55'></li>"],trackList_ofm_single=["<li class= 'playlistItem' data-type='ofm_single' data-path='D4lw'></li>","<li class= 'playlistItem' data-type='ofm_single' data-path='B1pl'></li>","<li class= 'playlistItem' data-type='ofm_single' data-path='GGXE'></li>"],trackList_ofm_playlist=["<li class= 'playlistItem' data-type='ofm_playlist' data-path='1rp7'></li>"],trackList_ofm_project=["<li class= 'playlistItem' data-type='ofm_project' data-path='edB6'></li>"],trackList_database=["<li class= 'playlistItem' data-type='database_html' data-path='ap_hap' data-table='sound1'/>"],trackList_database2=["<li class= 'playlistItem' data-type='database_html' data-path='ap_hap' data-table='sound1' data-limit='3'/>"],trackList_database3=["<li class= 'playlistItem' data-type='database_html' data-path='ap_hap' data-table='sound1' data-range='1,5'/>"],trackList_mixed=["<li class= 'playlistItem' data-type='local' data-mp3='../media/audio/1/Tim_McMorris_-_A_Bright_And_Hopeful_Future.mp3' data-ogg='../media/audio/1/Tim_McMorris_-_A_Bright_And_Hopeful_Future.ogg' data-thumb='../media/audio/1/_A_Bright_And_Hopeful_Future.jpg' data-dlink='local_dlink' data-download='local_global'><a class='playlistNonSelected' href='#'>Tim McMorris - A Bright And Hopeful Future</a></li>","<li class= 'playlistItem' data-type='local' data-mp3='../media/audio/1/Tim_McMorris_-_A_Bright_And_Hopeful_Future.mp3' data-ogg='../media/audio/1/Tim_McMorris_-_A_Bright_And_Hopeful_Future.ogg' data-thumb='../media/audio/1/_A_Bright_And_Hopeful_Future.jpg' data-dlink data-download><a class='playlistNonSelected' href='#'>Tim McMorris - A Bright And Hopeful Future</a></li>","<li class= 'playlistItem' data-type='podcast' data-path='http://www.npr.org/rss/podcast.php?id=510008' data-dlink='podcast_dlink' data-download='podcast_global' data-thumb='media/default_artwork/podcast/01.jpg'/>","<li class= 'playlistItem' data-type='podcast' data-path='http://www.npr.org/rss/podcast.php?id=510008' data-dlink data-download data-thumb='media/default_artwork/podcast/01.jpg'/>","<li class= 'playlistItem' data-type='soundcloud' data-path='http://soundcloud.com/computer-magic' data-dlink='soundcloud_dlink' data-download='soundcloud_global' data-thumb='media/default_artwork/soundcloud/01.jpg'/>","<li class= 'playlistItem' data-type='soundcloud' data-path='http://soundcloud.com/computer-magic' data-dlink data-download data-thumb='media/default_artwork/soundcloud/01.jpg'/>","<li class= 'playlistItem' data-type='soundcloud' data-path='http://soundcloud.com/trance/trance-single-138-bpm-anvil' data-dlink='soundcloud_dlink_NON_DW' data-download='soundcloud_global_NON_DW' data-thumb='media/default_artwork/soundcloud/01.jpg'/>","<li class= 'playlistItem' data-type='soundcloud' data-path='http://soundcloud.com/trance/trance-single-138-bpm-anvil' data-dlink data-download data-thumb='media/default_artwork/soundcloud/01.jpg'/>","<li class= 'playlistItem' data-type='ofm_single' data-dlink='ofm_single_dlink' data-download='ofm_single_global' data-path='B1pl' data-thumb='media/default_artwork/ofm_single/01.jpg'></li>","<li class= 'playlistItem' data-type='ofm_single' data-dlink data-download data-path='B1pl' data-thumb='media/default_artwork/ofm_single/01.jpg'></li>","<li class= 'playlistItem' data-type='ofm_playlist' data-dlink='ofm_playlist_dlink' data-download='ofm_playlist_global' data-path='1rp7' data-thumb='media/default_artwork/ofm_playlist/01.jpg'></li>","<li class= 'playlistItem' data-type='ofm_playlist' data-dlink data-download data-path='1rp7' data-thumb='media/default_artwork/ofm_playlist/01.jpg'></li>","<li class= 'playlistItem' data-type='ofm_project' data-dlink='ofm_project_dlink' data-download='ofm_project_global' data-path='edB6' data-thumb='media/default_artwork/ofm_project/01.jpg'></li>","<li class= 'playlistItem' data-type='ofm_project' data-dlink data-download data-path='edB6' data-thumb='media/default_artwork/ofm_project/01.jpg'></li>","<li class= 'playlistItem' data-type='youtube_single' data-dlink='youtube_single_dlink' data-download='youtube_single_global' data-path='opL4oe62XL8' data-thumb='media/default_artwork/yt_single/01.jpg'></li>","<li class= 'playlistItem' data-type='youtube_single' data-dlink data-download data-path='opL4oe62XL8' data-thumb='media/default_artwork/yt_single/01.jpg'></li>","<li class= 'playlistItem' data-type='youtube_playlist' data-dlink='youtube_playlist_dlink' data-download='youtube_playlist_global' data-path='PLE0311B1CFA360F55' data-thumb='media/default_artwork/yt_playlist/01.jpg'></li>","<li class= 'playlistItem' data-type='youtube_playlist' data-dlink data-download data-path='PLE0311B1CFA360F55' data-thumb='media/default_artwork/yt_playlist/01.jpg'></li>"],trackList2_local1=[{type:"local",mp3:"../media/audio/1/Tim_McMorris_-_A_Bright_And_Hopeful_Future.mp3",ogg:"../media/audio/1/Tim_McMorris_-_A_Bright_And_Hopeful_Future.ogg",title:"Tim McMorris - A Bright And Hopeful Future",thumb:"../media/audio/1/Tim_McMorris_-_A_Bright_And_Hopeful_Future.jpg"},{type:"local",mp3:"../media/audio/1/Tim_McMorris_-_Be_My_Valentine.mp3",ogg:"../media/audio/1/Tim_McMorris_-_Be_My_Valentine.ogg",title:"Tim McMorris - Be My Valentine",thumb:"../media/audio/1/Tim_McMorris_-_Be_My_Valentine.jpg"},{type:"local",mp3:"../media/audio/1/Tim_McMorris_-_Give_Our_Dreams_Their_Wings_To_Fly.mp3",ogg:"../media/audio/1/Tim_McMorris_-_Give_Our_Dreams_Their_Wings_To_Fly.ogg",title:"Tim McMorris - Give Our Dreams Their Wings To Fly"},{type:"local",mp3:"../media/audio/1/Tim_McMorris_-_Happy_Days_Are_Here_To_Stay.mp3",ogg:"../media/audio/1/Tim_McMorris_-_Happy_Days_Are_Here_To_Stay.ogg",title:"Tim McMorris - Happy Days Are Here To Stay"},{type:"local",mp3:"../media/audio/1/Tim_McMorris_-_Health_Happiness_Success.mp3",ogg:"../media/audio/1/Tim_McMorris_-_Health_Happiness_Success.ogg",title:"Tim McMorris - Health Happiness Success"},{type:"local",mp3:"../media/audio/1/Tim_McMorris_-_Marketing_Advertising_Music.mp3",ogg:"../media/audio/1/Tim_McMorris_-_Marketing_Advertising_Music.ogg",title:"Tim McMorris - Marketing Advertising Music"},{type:"local",mp3:"../media/audio/3/Bluegestalt_-_Becoming.mp3",ogg:"../media/audio/3/Bluegestalt_-_Becoming.ogg",title:"Bluegestalt - Becoming"}],trackList2_local2=[{type:"local",mp3:"../media/audio/2/Soundroll_-_Funky_Boom.mp3",ogg:"../media/audio/2/Soundroll_-_Funky_Boom.ogg",title:"Soundroll - Funky Boom",download:"../media/audio/2/Soundroll_-_Funky_Boom.mp3",thumb:"../media/audio/2/Soundroll_-_Funky_Boom.jpg",plink:"http://www.google.com",dlink:!0},{type:"local",mp3:"../media/audio/2/Soundroll_-_Fight_No_More.mp3",ogg:"../media/audio/2/Soundroll_-_Fight_No_More.ogg",title:"Soundroll - Fight No More"},{type:"local",mp3:"../media/audio/2/Soundroll_-_Rush.mp3",ogg:"../media/audio/2/Soundroll_-_Rush.ogg",title:"Soundroll - Rush"}],trackList2_soundcloud=[{type:"soundcloud",path:"http://soundcloud.com/trance/trance-single-138-bpm-anvil",download:!0,dlink:!0,plink:"http://www.google.com"},{type:"soundcloud",path:"http://soundcloud.com/an21/favorites"}],trackList2_podcast=[{type:"podcast",path:"http://www.npr.org/rss/podcast.php?id=510008",download:!0},{type:"podcast",path:"http://feeds.feedburner.com/xpnmusicnotes/",plink:"http://www.google.com"},{type:"podcast",path:"http://robertkelly.libsyn.com/rss",dlink:!0,plink:"http://codecanyon.net/user/Tean/portfolio"}],trackList2_folder=[{type:"folder",path:"../media/audio/1/",download:!0},{type:"folder",path:"../media/audio/2/"}],trackList2_xml=[{type:"xml",path:"xml/playlist1.xml"},{type:"xml",path:"xml/playlist2.xml"}],trackList2_yt_single=[{type:"youtube_single",path:"opL4oe62XL8",download:"path/to/custom/youtube_single.extension"},{type:"youtube_single",path:"Akb7SJgGx1A",download:!0,plink:"http://www.google.com"},{type:"youtube_single",path:"uPOUgobWTT0"}],trackList2_yt_playlist=[{type:"youtube_playlist",path:"PLE0311B1CFA360F55",download:!0}],trackList2_ofm_single=[{type:"ofm_single",path:"D4lw",download:"path/to/custom/ofm_single.extension"},{type:"ofm_single",path:"B1pl"},{type:"ofm_single",path:"GGXE",download:!0}],trackList2_ofm_playlist=[{type:"ofm_playlist",path:"1rp7"}],trackList2_ofm_project=[{type:"ofm_project",path:"edB6"}],trackList2_database=[{type:"database_data",path:"ap_hap",table:"sound"}],trackList2_database2=[{type:"database_data",path:"ap_hap",table:"sound",limit:5}],trackList2_database3=[{type:"database_data",path:"ap_hap",table:"sound",range:"1,4"}],trackList2_mixed=[{type:"local",mp3:"../media/audio/1/Tim_McMorris_-_A_Bright_And_Hopeful_Future.mp3",ogg:"../media/audio/1/Tim_McMorris_-_A_Bright_And_Hopeful_Future.ogg",title:"Tim McMorris - A Bright And Hopeful Future",thumb:"../media/audio/1/Tim_McMorris_-_A_Bright_And_Hopeful_Future.jpg",dlink:"local_dlink",download:"path/to/custom/local.extension"},{type:"local",mp3:"../media/audio/1/Tim_McMorris_-_A_Bright_And_Hopeful_Future.mp3",ogg:"../media/audio/1/Tim_McMorris_-_A_Bright_And_Hopeful_Future.ogg",title:"Tim McMorris - A Bright And Hopeful Future",thumb:"../media/audio/1/Tim_McMorris_-_A_Bright_And_Hopeful_Future.jpg",dlink:!0,download:!0},{type:"podcast",path:"http://www.npr.org/rss/podcast.php?id=510008",dlink:"podcast_dlink",download:"path/to/custom/podcast.extension"},{type:"podcast",path:"http://www.npr.org/rss/podcast.php?id=510008",dlink:!0,download:!0},{type:"soundcloud",path:"http://soundcloud.com/computer-magic",dlink:"soundcloud_dlink",download:"path/to/custom/soundcloud.extension"},{type:"soundcloud",path:"http://soundcloud.com/computer-magic",dlink:!0,download:!0},{type:"soundcloud",path:"http://soundcloud.com/trance/trance-single-138-bpm-anvil",dlink:"soundcloud_dlink_NON_DW",download:"path/to/custom/soundcloud.extension_NON_DW"},{type:"soundcloud",path:"http://soundcloud.com/trance/trance-single-138-bpm-anvil",dlink:!0,download:!0},{type:"ofm_single",path:"B1pl",dlink:"ofm_single_dlink",download:"path/to/custom/ofm_single.extension"},{type:"ofm_single",path:"B1pl",dlink:!0,download:!0},{type:"ofm_playlist",path:"1rp7",dlink:"ofm_playlist_dlink",download:"path/to/custom/ofm_playlist.extension"},{type:"ofm_playlist",path:"1rp7",dlink:!0,download:!0},{type:"ofm_project",path:"edB6",dlink:"ofm_project_dlink",download:"path/to/custom/ofm_project.extension"},{type:"ofm_project",path:"edB6",dlink:!0,download:!0},{type:"youtube_single",path:"opL4oe62XL8",dlink:"youtube_single_dlink",download:"path/to/custom/youtube_single.extension"},{type:"youtube_single",path:"opL4oe62XL8",dlink:!0,download:!0},{type:"youtube_playlist",path:"PLE0311B1CFA360F55",dlink:"youtube_playlist_dlink",download:"path/to/custom/youtube_playlist.extension"},{type:"youtube_playlist",path:"PLE0311B1CFA360F55",dlink:!0,download:!0}],trackList2_mixed2=[{type:"local",mp3:"../media/audio/1/Tim_McMorris_-_A_Bright_And_Hopeful_Future.mp3",ogg:"../media/audio/1/Tim_McMorris_-_A_Bright_And_Hopeful_Future.ogg",title:"Tim McMorris - A Bright And Hopeful Future",download:!0,dlink:"custom/path/to/download"},{type:"podcast",path:"http://www.npr.org/rss/podcast.php?id=510008",download:!0,dlink:!0},{type:"soundcloud",path:"http://soundcloud.com/computer-magic",download:!0,dlink:!0},{type:"soundcloud",path:"http://soundcloud.com/trance/trance-single-138-bpm-anvil",download:!0,dlink:!0},{type:"youtube_single",path:"opL4oe62XL8",download:!0},{type:"ofm_single",path:"D4lw"}],titleList=["Tim McMorris - A Bright And Hopeful Future","Tim McMorris - Be My Valentine","Tim McMorris - Give Our Dreams Their Wings To Fly","Tim McMorris - Happy Days Are Here To Stay","Tim McMorris - Health Happiness Success","Tim McMorris - Marketing Advertising Music","Tim McMorris - Successful Business Venture"],titleList2=["Soundroll - A Way To The Top","Soundroll - Feel Good Journey","Soundroll - Fight No More","Soundroll - Funky Boom","Soundroll - Pump The Club","Soundroll - Rush","Soundroll - Sun Is So Bright"],audio=document.createElement("audio"),mp3Support,oggSupport,html5Support=!1,hap_source_path="";audio.canPlayType&&(html5Support=!0,mp3Support=!!audio.canPlayType&&""!=audio.canPlayType("audio/mpeg"),oggSupport=!!audio.canPlayType&&""!=audio.canPlayType('audio/ogg; codecs="vorbis"'));var isMobile=/Android|webOS|iPhone|iPad|iPod|sony|BlackBerry/i.test(navigator.userAgent),isIE=!1,ieBelow9=!1,ieBelow8=!1,ie_check=getInternetExplorerVersion();-1!=ie_check&&(isIE=!0,9>ie_check&&(ieBelow9=!0),8>ie_check&&(ieBelow8=!0));var hap_params={quality:"high",scale:"noscale",salign:"tl",wmode:"transparent",bgcolor:"#111111",devicefont:"false",allowfullscreen:"true",allowscriptaccess:"always"},jsReady=!1;