let video = document.querySelector("ytd-player#player").getElementsByTagName("video")[0]

video.ontimeupdate = (event) => {
	if(event.target.loop == true)
		event.target.loop = false
}
video.onended = (event) => {
	document.querySelector("#navigation-button-down > ytd-button-renderer").click()
}
