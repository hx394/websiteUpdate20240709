


			var drag = document.getElementById('myPet');
			// //点击某物体时，用drag对象即可，move和up是全局区域，
			// 也就是整个文档通用，应该使用document对象而不是drag对象(否则，采用drag对象时物体只能往右方或下方移动)
			drag.onmousedown = function(event){
				drag.style.border="3px solid black";


				 var event = event || window.event;  //兼容IE浏览器
			//    鼠标点击物体那一刻相对于物体左侧边框的距离=点击时的位置相对于浏览器最左边的距离-物体左边框相对于浏览器最左边的距离
				 var diffX = event.clientX - drag.offsetLeft;
				 var diffY = event.clientY - drag.offsetTop;
				 if(typeof drag.setCapture !== 'undefined'){
								drag.setCapture();
				 }
			document.onmousemove = function(event){

					var event = event || window.event;
					var moveX = event.clientX - diffX;
					var moveY = event.clientY - diffY;
					if(moveX < 0){
							moveX = 0
					}else if(moveX > window.innerWidth - drag.offsetWidth){
							moveX = window.innerWidth - drag.offsetWidth
					}
					if(moveY < 0){
							moveY = 0
					}else if(moveY > window.innerHeight - drag.offsetHeight){
							moveY =  window.innerHeight - drag.offsetHeight
					}
					drag.style.removeProperty("right");
					drag.style.removeProperty("bottom");
					drag.style.left = moveX + 'px';
					drag.style.top = moveY + 'px';


			}
			document.onmouseup = function(event){
					drag.style.removeProperty("border");
					this.onmousemove = null;
					this.onmouseup = null;
					 //修复低版本ie bug
					if(typeof drag.releaseCapture!='undefined'){
						 drag.releaseCapture();
					}
			}
	}

	var myPet=document.getElementById("myPet");
	myPet.addEventListener('click',sayHello);

	function tea(evt){
		var forBalloon=document.getElementById("forBalloon");
		var balloonPre=document.getElementById("balloon");
		if(balloonPre!=null){
			balloonPre.remove();
		}
		const balloon=document.createElement('div');
		balloon.id="balloon";
		var contentTea=document.createTextNode("下午茶时间！您一定累了吧。请享用大吉岭红茶。");
		balloon.appendChild(contentTea);
		forBalloon.appendChild(balloon);

		var image = new Image();
		image.src = "img/kika/kika_tea.png";
		image.onload = function(){
    //when it loads
    	document.getElementById("kika").src= image.src;
		}


	}
	function hideMe(evt){

		document.getElementById("forBalloon").remove();
		document.getElementById("myPet").remove();
	}

	function sayHello(evt){
		var forBalloon=document.getElementById("forBalloon");
		var balloonPre=document.getElementById("balloon");
		if(balloonPre!=null){
			balloonPre.remove();
		}
		const balloon=document.createElement('div');
		balloon.id="balloon";

		forBalloon.style.setProperty("background-color","#87CEFA");
		forBalloon.style.setProperty("z-index","100000");
		forBalloon.style.position="fixed";

		forBalloon.style.right="10px";
		forBalloon.style.bottom="10px";
		forBalloon.style.visibility="visible";
		forBalloon.style.width="200px";
		forBalloon.style.height="110px";
		const content=document.createTextNode("现在的时间："+ new Date().toLocaleTimeString());
		const breakLine=document.createElement('br');
		const content0=document.createTextNode("请选择：");
		const option1=document.createElement('button');
		const content1=document.createTextNode("聊聊天");
		option1.appendChild(content1);
		const option2=document.createElement('button');
		const content2=document.createTextNode("喝杯茶");
		option2.appendChild(content2);
		const option3=document.createElement('button');
		const content3=document.createTextNode("隐藏我");
		option3.appendChild(content3);
		balloon.appendChild(content);
		balloon.appendChild(breakLine);
		balloon.appendChild(content0);
		balloon.appendChild(option1);
		balloon.appendChild(option2);
		balloon.appendChild(option3);

		forBalloon.appendChild(balloon);

		option1.addEventListener('click',chat);
		option2.addEventListener('click', tea);
		option3.addEventListener('click', hideMe);


	}
	function boyfriend(evt){
		var forBalloon=document.getElementById("forBalloon");
		var balloonPre=document.getElementById("balloon");
		if(balloonPre!=null){
			balloonPre.remove();
		}
		const balloon=document.createElement('div');
		balloon.id="balloon";
		var contentBoyfriend=document.createTextNode("什么！你是哥哥的男朋友？我早就发现哥哥的性取向不正常，但没想到他喜欢男人……");
		balloon.appendChild(contentBoyfriend);
		forBalloon.appendChild(balloon);
		var image = new Image();
		image.src = "img/kika/kika_shy.png";
		image.onload = function(){
    //when it loads
    	document.getElementById("kika").src= image.src;
		}
	}
	function girlfriend(evt){
		var forBalloon=document.getElementById("forBalloon");
		var balloonPre=document.getElementById("balloon");
		if(balloonPre!=null){
			balloonPre.remove();
		}
		const balloon=document.createElement('div');
		balloon.id="balloon";
		var contentGirlfriend=document.createTextNode("你自称是哥哥的女朋友啊。那接下来是处刑时间啦~ 哥哥只要有我就够了，我会永远爱着哥哥的。请你死一次试试？");
		balloon.appendChild(contentGirlfriend);
		forBalloon.appendChild(balloon);

		var image = new Image();
		image.src = "img/kika/kika_kill.png";
		image.onload = function(){
		//when it loads
			document.getElementById("kika").src= image.src;
		}


	}
	function stranger(evt){
		var forBalloon=document.getElementById("forBalloon");
		var balloonPre=document.getElementById("balloon");
		if(balloonPre!=null){
			balloonPre.remove();
		}
		const balloon=document.createElement('div');
		balloon.id="balloon";
		var contentStranger=document.createTextNode("陌生人……虽然用枪指着你很抱歉，但请你务必和哥哥处好关系，加深感情。作为交换，我可以告诉你哥哥的一个秘密哟~");
		balloon.appendChild(contentStranger);
		forBalloon.appendChild(balloon);

		var image = new Image();
		image.src = "img/kika/kika_gun.png";
		image.onload = function(){
		//when it loads
			document.getElementById("kika").src= image.src;
		}

		const option1=document.createElement('button');
		const content1=document.createTextNode("什么秘密？");
		option1.appendChild(content1);
		balloon.appendChild(option1);
		option1.addEventListener('click',secret);

	}

	function secret(evt){
		var forBalloon=document.getElementById("forBalloon");
		var balloonPre=document.getElementById("balloon");
		if(balloonPre!=null){
			balloonPre.remove();
		}
		const balloon=document.createElement('div');
		balloon.id="balloon";
		var contentSecret=document.createTextNode("哥哥画画能力很糟糕，虽然努力画了一个吉祥物，但是还是成为了废案。给你瞧瞧吧~");
		balloon.appendChild(contentSecret);
		forBalloon.appendChild(balloon);

		var image = new Image();
		image.src = "img/kika/painting.png";
		image.onload = function(){
    //when it loads
    	document.getElementById("kika").src= image.src;
			document.getElementById("kika").style.width="278px";
		}

	}




		function chat(evt){
			console.log("chat starts!");
			var forBalloon=document.getElementById("forBalloon");
			var balloonPre=document.getElementById("balloon");
			if(balloonPre!=null){
				balloonPre.remove();
			}
			const balloon=document.createElement('div');
			balloon.id="balloon";
			var contentChat=document.createTextNode("我是主人的妹妹橘花，请问您是哥哥的什么人？");
			balloon.appendChild(contentChat);



			const option1=document.createElement('button');
			const content1=document.createTextNode("男性朋友");
			option1.appendChild(content1);
			const option2=document.createElement('button');
			const content2=document.createTextNode("女性朋友");
			option2.appendChild(content2);
			const option3=document.createElement('button');
			const content3=document.createTextNode("陌生人");
			option3.appendChild(content3);
			const breakLine=document.createElement('br');
			balloon.appendChild(breakLine);

			balloon.appendChild(option1);
			balloon.appendChild(option2);
			balloon.appendChild(option3);
			forBalloon.appendChild(balloon);

			option1.addEventListener('click',boyfriend);
			option2.addEventListener('click', girlfriend);
			option3.addEventListener('click', stranger);

		}
