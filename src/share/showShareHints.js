// 显示分享弹窗

const showShareHints =()=> {

	if ( document.getElementById('mask-container') ) {
		document.body.removeChild(document.getElementById('mask-container'))
	}
	else {
		let container = document.createElement('div')
		container.setAttribute('id', 'mask-container')
		let innerHtml =
		`<div className={styles['com-share-hints-container']} style="width: 100%; height:100%; position: fixed; top:0; left:0; z-index: 999;display:block; overflow: hidden">
			<img src="./images/share_reminder_wx.png"
				style="width:100%;"
				alt=""
			/>
		</div>`
		container.innerHTML = innerHtml
		document.body.appendChild(container)

		container.addEventListener('click',function(){
			document.body.removeChild(container)
		})
	}
}

export default showShareHints