$(function(){
	var previousRndNum = 100;
	var male = {
		forearm: 'images/maleforearm.jpg',
		shoulder: 'images/maleshoulder.jpg',
		torso: 'images/maletorso.jpg',
		back: 'images/maleback.jpg',
		calf: 'images/malecalf.jpg',
		neck: 'images/maleneck.jpg'
	};

	var female = {
		forearm: 'images/femaleforearm.jpg',
		shoulder: 'images/femaleshoulder.jpg',
		torso: 'images/femaletorso.jpg',
		back: 'images/femaleback.jpg',
		calf: 'images/femalecalf.jpg',
		neck: 'images/femaleneck.jpg'
	};

	var tattoos = {
		drunk: [
			{
				text: "彻思叔叔的芝士蛋糕",
				translation: "Uncle Tetsu’s Cheesecake",
				description: "Very popular cheesecake chain recently opened in downtown Toronto. There are lineups going around the block year-round.",
				feel: "funny",
				pinyin: "chesi shushu de zhishi dangao"
			},
			{
				text: "船麦克传脸",
				translation: "Boaty McBoatface",
				description: "A large scientific vessel costing billions of dollars that the English have decided to name Boaty McBoatface.",
				feel: "funny",
				pinyin: "chuan mai ke chuanlian"
			},
			{
				text: "宜家家具猴子",
				translation: "Ikea Monkey",
				description: "Poor monkey wearing a mini Drake jacket got lost in Ikea.",
				feel: "funny",
				pinyin: "chesi shushu de zhishi dangao"
			},
			{
				text: "垃圾熊猫",
				translation: "Trash Panda",
				description: "Toronto's very own cherished mascot, the racoon. These creatives live off of our cities trash.",
				feel: "funny",
				pinyin: "chesi shushu de zhishi dangao"
			},
			{
				text: "六神",
				translation: "6 God",
				description: "Drake, famous for starring in Degrassi, after giving the city of Toronto the nickname 'The 6', he calls himself the 6 God.",
				feel: "funny",
				pinyin: "chesi shushu de zhishi dangao"
			},
			{
				text: "甜甜圈汉堡包",
				translation: "Cronut Burgers",
				description: "A burger wrapped in a donut, famously served at the CNE and single handedly responsible for hundreds of coronary bypasses.",
				feel: "funny",
				pinyin: "chesi shushu de zhishi dangao"
			},
			{
				text: "我爱王子",
				translation: "I Love Prince",
				description: "Who DOESN'T love Prince?!",
				feel: "funny",
				pinyin: "chesi shushu de zhishi dangao"
			},
			{
				text: "花间一壶酒",
				translation: "There is a pot of wine amongst the flowers.",
				description: "This is the first line and title of a poem. It was written by China's most famous poet, Li Bai in the 8th century. Like many other ancient Chinese poets, he was known to drink a lot of alcohol while writing.",
				feel: "funny",
				pinyin: "hua jian yi hu jiu"
			},
			{
				text: "雲吞面",
				translation: "Wonton noodle soup",
				description: "Mmmm, wonton noodle soup...",
				feel: "funny",
				pinyin: "yun tun mian"
			},
			{
				text: "很酷的中文紋身",
				translation: "Cool tattoo",
				description: "You walk in to get a 'cool chinese tattoo' so you end up with 'cool chinese tattoo' in chinese.",
				feel: "funny",
				pinyin: "hen ku de guoyu shuofa"
			},
			{
				text: "屎",
				translation: "Poop",
				description: "💩",
				feel: "funny",
				pinyin: "shi"
			},
			{
				text: "喜需要控制器",
				translation: "ghibberish",
				description: "A bunch of random chinese words. Like one Agent Carter once said, 'Ain't nobody understand the words coming outta yo' mouth.'",
				feel: "funny",
				pinyin: "???"
			},
			{
				text: "希安拉博夫",
				translation: "Shia LaBeouf",
				description: "Shia surprise!",
				feel: "funny",
				pinyin: "xi an la bofū"
			}
		],
		sober:[
			{
				text: "风驰电掣",
				translation: "Greased lightning",
				description: "Literally: 'Like a gust of wind, like a flash of electricity.'",
				feel: "funny",
				pinyin: "feng chi dian che"
			},
			{
				text: "风驰电掣",
				translation: "Greased lightning",
				description: "Literally: 'Like a gust of wind, like a flash of electricity.'",
				feel: "confident",
				pinyin: "feng chi dian che"
			},
			{
				text: "理直气壮",
				translation: "Just and forceful",
				description: "Literally: 'With reason, confidence and strength.'",
				feel: "confident",
				pinyin: "li zhi qi zhuang"
			},
			{
				text: "虎口拔牙",
				translation: "To dare to do the extremely dangerous",
				description: "Literally: 'To pull teeth from a tiger's mouth'",
				feel: "confident",
				pinyin: "hu kou ba ya"
			},
			{
				text: "见义勇为",
				translation: "Do boldly what is righteous",
				description: "Literally: 'Seeing justice, and acting bravely'",
				feel: "motivational",
				pinyin: "jian yi yong wei"
			},
			{
				text: "趁热打铁",
				translation: "Strike while the iron’s hot",
				description: "This is a common idiom in both Mandarin and English! It has been used in both languages for centuries.",
				feel: "motivational",
				pinyin: "chen re da tie"
			},
			{
				text: "精益求精",
				translation: "Continually strive for perfection",
				description: "Literally: Though great, seek improvement.",
				feel: "motivational",
				pinyin: "jing yi qiu jing"
			},
			{
				text: "百折不挠",
				translation: "Never yield",
				description: "To be manipulated hundreds of times without even feeling disturbed.",
				feel: "motivational",
				pinyin: "bai zhe bu nao"
			},
			{
				text: "饮水思源",
				translation: "Be grateful for all your blessings",
				description: "Literally: 'When you drink from a stream, contemplate its source.'",
				feel: "adventurous",
				pinyin: "yin shui si yuan"
			},
			{
				text: "天马行空",
				translation: "Unconstrained in style",
				description: "Literally: 'Like a heavenly steed, soaring across the sky.'",
				feel: "adventurous",
				pinyin: "tian ma xing kong"
			},
			{
				text: "入乡随俗",
				translation: "When in Rome, do as the Romans do.",
				description: "Literally: 'Having entered a village, act in accordance with its customs.'",
				feel: "adventurous",
				pinyin: "ru xiang sui su"
			},
			{
				text: "举头望明月，低头思故乡",
				translation: "I raise my head and look at the bright moon, / Then lower my head and think of my home town",
				description: "This is an excerpt from a poem written by Li Bai, China's most famous poet.",
				feel: "adventurous",
				pinyin: "ju tou wang ming yue, di tou si gu xiang"
			},
			{
				text: "桃",
				translation: "Peach",
				description: "In Chinese mythology, the peach is often a symbol of life. There is a tale of an unworthy king who stole a peach from Heaven, and upon eating it, became immortal.",
				feel: "funny",
				pinyin: "tao"
			},
			{
				text: "无懈可击",
				translation: "Invulnerable",
				description: "Literally: ‘There are no weak points which others may attack.’",
				feel: "confident",
				pinyin: "wu xie ke ji"
			},
			{
				text: "桃园结义",
				translation: "Sworn brothers",
				description: "Literally ‘to meet at a peach orchard.’ This saying is from a classic story called The Romance of the Three Kingdoms. Several important characters made a pact to meet once a year to discuss important matters and help each other.",
				feel: "motivational",
				pinyin: "tao yuan jie yi"
			},
			{
				text: "要贏人，先要贏自己",
				translation: "To win against others, you must first win against yourself",
				description: "One must have the confidence to believe in oneself and look past your own self doubt, in order to have the ability to be successful against others.",
				feel: "motivational",
				pinyin: "yao ying ren, xian yao ying ziji"
			},
			{
				text: "千里之行始于足下",
				translation: "The journey of a thousand miles begins with a single step.",
				description: "In the 6th century BC, Laozi, an ancient Chinese philosopher coined this proverb.",
				feel: "adventurous",
				pinyin: "qian li zhi xing shi yu zu xia"
			},
			{
				text: "花间一壶酒",
				translation: "There is a pot of wine amongst the flowers.",
				description: "This is the first line and title of a poem. It was written by China's most famous poet, Li Bai in the 8th century. Like many other ancient Chinese poets, he was known to drink a lot of alcohol while writing.",
				feel: "confident",
				pinyin: "hua jian yi hu jiu"
			},
			{
				text: "四海之内皆兄弟",
				translation: "All men are brothers",
				description: "Literal translation: 'On the four seas, all are brothers'",
				feel: "adventurous",
				pinyin: "si hai zhi nei jie xiong di"
			},
			{
				text: "枪杆子里面出政权",
				translation: "Political power grows out of the barrel of a gun",
				description: "This is a quote from Mao Zedong, the longest-standing Chairman of the Chinese Communist Party. Though he helped the country develop in some ways, he was also an infamous and controversial figure.",
				feel: "confident",
				pinyin: "qiang gan zi li mian chu zheng quan"
			},
			{
				text: "天下为公",
				translation: "The world is for all.",
				description: "Before long, bloody civil strife between Mao Zedong and Chiang Kai-shek, they were working together under the skillful leadership of Sun Yatsen. There is a statue of this man in Riverdale Park.",
				feel: "adventurous",
				pinyin: "tian xia wei gong"
			},
			{
				text: "长江后浪推前浪",
				translation: "The energy of the new generation inspires the old.",
				description: "Literal translation: 'On the Changjiang river, the current waves push the preceding waves forward.'",
				feel: "motivational",
				pinyin: "changjiang hou lang tui qian lang"
			},
			{
				text: "读万卷书不如行万里路",
				translation: "There is nothing like trying.",
				description: "Literal translation: 'Reading ten thousand scrolls doesn't match walking ten thousand miles.'",
				feel: "adventurous",
				pinyin: "du wan juan shu bu ru xing wan li lu"
			},
			{
				text: "父债子还",
				translation: "The new generation can correct the mistakes of their elders.",
				description: "Literal translation: 'The child will repay the debt of their father.'",
				feel: "motivational",
				pinyin: "fu zhai zi huan"
			},
			{
				text: "酒后吐真言",
				translation: "In wine there is truth",
				description: "Literal translation: 'After drinking wine, one will expel the truth'",
				feel: "confident",
				pinyin: "jiu hou tu zhen yan"
			},
			{
				text: "良药苦口",
				translation: "A blessing in disguise.",
				description: "Literal translation: 'good medicine tastes bitter.'",
				feel: "motivational",
				pinyin: "liang yao ku kou"
			},
			{
				text: "有其父必有其子",
				translation: "Like father, like son.",
				description: "This saying is from the teachings of Confucius. Confucius was a famous Chinese philosopher from the 5th century BC.",
				feel: "confident",
				pinyin: "you qi fu bi you qi zi"
			},
			{
				text: "人算不如天算",
				translation: "The plans of the heavens take precedence over the plans of people.",
				description: "In 1980, John Lennon wrote an analagous line in an album of his. 'Life is what happens to you, while you're busy making other plans.'",
				feel: "adventurous",
				pinyin: "ren suan bu ru tian suan"
			},
			{
				text: "天高皇帝远",
				translation: "We are free to do what we want.",
				description: "Literal translation: 'The sky is large, and the emperor is far away'",
				feel: "confident",
				pinyin: "tian gao huang di yuan"
			},
			{
				text: "钱能使鬼推摩",
				translation: "Money is power.",
				description: "With money, you can make ghosts push your grindstone.",
				feel: "motivational",
				pinyin: "qian neng shi gui tui mo"
			},
			{
				text: "寸金难买寸光阴",
				translation: "Time is more precious than money.",
				description: "Literal translation: 'An inch of gold will not buy an inch of time.'",
				feel: "motivational",
				pinyin: "cun jin nan mai cun guang yin"
			},
			{
				text: "芝麻开花",
				translation: "Gradual improvement.",
				description: "Literal translation: 'Like sesame flowers - growing taller and taller.'",
				feel: "motivational",
				pinyin: "zhima kai hua"
			},
			{
				text: "仰不愧天",
				translation: "To feel no shame before God",
				description: "Literal translation: 'To raise one's head, and feel no shame.'",
				feel: "confident",
				pinyin: "yang bu kui tian"
			},
			{
				text: "心旷神怡",
				translation: "Carefree and relaxed",
				description: "Literal translation: 'with a relaxed heart and a pleased spirit.'",
				feel: "confident",
				pinyin: "xin kuang shen yi"
			},
			{
				text: "大智大勇",
				translation: "Tremendous courage and wisdom",
				description: "Literally: 'big wisdom, big courage'.",
				feel: "confident",
				pinyin: "da zhi da yong"
			},
			{
				text: "镇定自若",
				translation: "Unflappable",
				description: "Literally: 'unperturbed and at ease'",
				feel: "confident",
				pinyin: "zhen ding zi ruo"
			},
			{
				text: "鸟语花香",
				translation: "An idyllic spring day",
				description: "The songs of birds and fragrance of flowers.",
				feel: "adventurous",
				pinyin: "niao yu hua xiang"
			},
			{
				text: "生龙活虎",
				translation: "Overflowing with energy",
				description: "Literal translation: 'Lively dragons and animated tigers.'",
				feel: "confident",
				pinyin: "sheng long huo hu"
			},
			{
				text: "锦上添花",
				translation: "To decorate something already beautiful.",
				description: "Literal translation: 'To add flowers to a brocade.'",
				feel: "confident",
				pinyin: "jin shang tian hua"
			},
			{
				text: "不屈不挠",
				translation: "Tenacious",
				description: "Literal translation: 'to not submit or even bend'",
				feel: "confident",
				pinyin: "bu qu bu nao"
			},
			{
				text: "忠贞不渝",
				translation: "Faithful to the core",
				description: "Literal translation: 'unwavering loyalty and purity.'",
				feel: "confident",
				pinyin: "zhong zhen bu yu"
			},
			{
				text: "誓死不二",
				translation: "To make a vow that is honoured unto death.",
				description: "Literal translation: 'To vow until death absolves [me], and never go back on [my] word.'",
				feel: "confident",
				pinyin: "shi si bu er"
			},
			{
				text: "豁达大度",
				translation: "To be generous and open-minded",
				description: "Literal translation: 'To be generous and open-minded to a high degree.'",
				feel: "confident",
				pinyin: "huo da da du"
			},
			{
				text: "卖国求荣",
				translation: "To become a traitor for personal gain.",
				description: "Literal translation: 'To commit treason for glory'",
				feel: "adventurous",
				pinyin: "mai guo qiu rong"
			}
		]
	};
	//puts a random quote into the header whenever the page loads
	//define var tattoosKeys to store an array of the keys from object tattoos
	var tattoosKeys = Object.keys(tattoos);
	//choose one of the keys (sober, drunk) at random with Math.random
	var randomKey = tattoosKeys[Math.floor(Math.random() * tattoosKeys.length)];
	//store the chosen in tattooObject
	var tattooObject = tattoos[randomKey];
	//choose one of the quote objects at random
	var randomQuote = Math.floor(Math.random() * tattooObject.length);
	//store chosen quote object in headerQuote
	var headerQuote = tattooObject[randomQuote];
	//target .header-quote and pass the chosen quote object's quote in the html
	$('.header-quote').html('“' + headerQuote.text + '”');

	//funtion quiz used to run quiz. parameter thisIsMainPage decided if quiz is being run for first time or rerun from results page
	function quiz(thisIsMainPage){
		//store users choices in genderChoice and bodyPartChoice.
		var genderChoice = $('input[name=gender]:checked').val();
		var bodyPartChoice = $('input[name=body-part]:checked').val();

		//store the users genderChoice[bodyPartChoice] in finalBodyPart.
		var finalBodyPart;
		if (genderChoice === "male"){
			finalBodyPart = male[bodyPartChoice];
		} else {
			finalBodyPart = female[bodyPartChoice];
		}

		//store the users sobrietyChoice and feelChoice
		var sobrietyChoice = $('input[name=sobriety]:checked').val();
		var feelChoice = $('input[name=feel]:checked').val();

		//if any of the questions are not answered, alert user to answer all questions. else continue with function
		if (genderChoice === undefined){
			$(".gender h3").addClass("animated shake uaq");
			$(".gender h3").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
				$(".gender h3").removeClass("animated shake");
			});
		} else {
			$(".gender h3").removeClass("uaq");
		}
		if (bodyPartChoice === undefined){
			$(".body-part h3").addClass("animated shake uaq");
			$(".body-part h3").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
				$(".body-part h3").removeClass("animated shake");
			});
		}  else {
			$(".body-part h3").removeClass("uaq");
		}
		if (sobrietyChoice === undefined){
			$(".sobriety h3").addClass("animated shake uaq");
			$(".sobriety h3").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
				$(".sobriety h3").removeClass("animated shake");
			});
		}  else {
			$(".sobriety h3").removeClass("uaq");
		}
		if (feelChoice === undefined){
			$(".feel h3").addClass("animated shake uaq");
			$(".feel h3").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
				$(".feel h3").removeClass("animated shake");
			});
		} else {
			$(".feel h3").removeClass("uaq");
		}
		if (genderChoice != undefined && bodyPartChoice != undefined && sobrietyChoice != undefined && feelChoice != undefined){

			//take users sobrietyChoice to pull up array from object tattoos and store array in filterSobriety
			var filterSobriety = tattoos[sobrietyChoice];

			//declare array to filter by personality (filteredPersonalityArray[])
			//for loop to assign filteredSobriety[] elements to filteredPersonalityArray[]
			//if statement (feel===feelChoice) then add the new element to the filteredPersonalityArray[]
			var filteredPersonalityArray = [];

			for (var i = 0; i < filterSobriety.length; i++){
				var singleFilteredSobrietyTattoo = filterSobriety[i];

				//if sobrietyChoice is drunk, feel is always 'funny'. All drunk tattoos are funny.
				if(sobrietyChoice === "drunk"){
					feelChoice = "funny";
				}

				if(singleFilteredSobrietyTattoo.feel === feelChoice){
					filteredPersonalityArray.push(singleFilteredSobrietyTattoo);
				}
			}

			//random number to select from filteredPersonality Array
			//new var finalTattoo is the randomly selected tattoo based on users choices.
			var randomNumber = Math.floor(Math.random() * filteredPersonalityArray.length);
			while (randomNumber === previousRndNum){
				randomNumber = Math.floor(Math.random() * filteredPersonalityArray.length);
				console.log("Random number in loop: " + randomNumber);
			}
			console.log("The resulting number is: " + randomNumber);
			previousRndNum = randomNumber;



			var finalTattoo = filteredPersonalityArray[randomNumber];
			console.log(finalTattoo);

			//insert image of bodypart based on users choice, finalBodyPart from earlier in code
			$('.result-image').css("background","url('" + finalBodyPart + "') no-repeat center / cover");
			//add class of selected bodypart to properly display tattoo
			$('.result-tattoo').addClass(genderChoice + bodyPartChoice);

			//insert the finalTattoo's text into div.result-tattoo
			var finalTattooText = finalTattoo.text;
			$('.result-tattoo').html("<h1>" + finalTattooText + "</h1>");

			//fade in the tattoo
			//if from mainpage must delay by 1.5s to account for the site pages changing
			//else already on results page, no need to delay. just fade in
			if(thisIsMainPage === true){
				$('.result-tattoo').hide().delay(1500).fadeIn(800);
			} else {
				$('.result-tattoo').hide().fadeIn(800);
			}

			//insert tattoo translation, pinyin and description
			var finalTattooTranslation = finalTattoo.translation;
			var finalTattooPinyin = finalTattoo.pinyin;
			var finalTattooDescription = finalTattoo.description;

			$('.result-js-text').html("<h2>Here is your Chinese tattoo!</h2><h2>" + finalTattooText + "</h2><h3>Translation: " + finalTattooTranslation + "</h3><p class='pinyin'>Pinyin: " + finalTattooPinyin + "</p><p>" + finalTattooDescription + "</p>");

			//if from mainpage, slide mainpage to the left. slide results page in.
			if(thisIsMainPage === true){
				$('#quiz').css('left','-100%');
				$('#quiz').css('right','100%');

				$('#result').css('right','0');
				$('#result').css('left','0');
			}
		}
	};

	//run function quiz from mainpage. thisIsMainPage === true
	$('form').on('submit', function(e){
		e.preventDefault();
		quiz(true);
	});

	//rerun function quiz from results page. not mainpage therefore thisIsMainPage === false
	$('.redo').on('click', function(e){
		e.preventDefault();
		quiz(false);
	});
});