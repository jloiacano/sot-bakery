
var mustHideAddressBar = (/android|windows\sce/i.test(navigator.userAgent.toLowerCase()));
var currentPage=new Array();
var currentPageWidth;
var currentPageHeight;
var page=new Array(); 
	page[0]= ['home',1,1]
	page[1]= ['contact',1,2]
	page[2]= ['about',2,1]
	page[3]= ['images',2,2]


function sotOnLoad()
	{
	setPageDimensions();
	currentPage=page[0];
	setTimeout("window.scrollTo(0,0)",500);
	setGalleries();
	}


function navigateHelp()
	{
	alert("use the *sweet* cake on the right to navigate ---->");
	}


function setPageDimensions()
	{
	var viewportWidth;
	var viewportHeight;
	 
	if (typeof window.innerWidth != 'undefined')
		{
		viewportWidth = window.innerWidth;
		viewportHeight = window.innerHeight;
		}
	else if (typeof document.documentElement != 'undefined' 	
		&& typeof document.documentElement.clientWidth != 'undefined' 
		&& document.documentElement.clientWidth != 0)
		{
		viewportWidth = document.documentElement.clientWidth;
		viewportHeight = document.documentElement.clientHeight;
		} 
	else
		{
		viewportWidth = document.getElementsByTagName('body')[0].clientWidth;
		viewportHeight = document.getElementsByTagName('body')[0].clientHeight;
		}
	currentPageWidth=viewportWidth;
	currentPageHeight=viewportHeight;
	}


function snapBackForMe()
	{
	setPageDimensions();
	var thisWidth = currentPageWidth;
	var thisHeight = currentPageHeight;
	var thisPage = currentPage;
	var shouldX = ((thisPage[2]-1)*thisWidth);
	var shouldY = ((thisPage[1]-1)*thisHeight);

	window.scrollTo(shouldX,shouldY);
	}


function pageScroll(arrayPage)
	{
	var thisFrom=currentPage;
	var thisTo=arrayPage;
	var thisWidth=currentPageWidth;
	var thisHeight=currentPageHeight;
	var xScroll=(thisTo[2]-thisFrom[2])*thisWidth;
	var yScroll=(thisTo[1]-thisFrom[1])*thisHeight;
	var xInc = parseInt(xScroll/25);
	var xMod = xScroll%25;
	var yInc = parseInt(yScroll/25);
	var yMod = yScroll%25;
	var xRemainInc = parseInt(xMod/20);
	var yRemainInc = parseInt(yMod/20);
	var incrementer = 0;

	var int=self.setInterval(
		function smoothScroll()
		{
		window.scrollBy(xInc,yInc);
		if (incrementer<24)
			{
			incrementer++
			}
		else
			{
			int=window.clearInterval(int)
			}
		},20);

	window.scrollBy(xMod,yMod);

	currentPage=arrayPage;
	}

function imageSizer()
	{
	var x=new Array();
	x[0] = document.getElementById("mainGalleryImage");
	x[1] = document.getElementById("galleryImage1");
	x[2] = document.getElementById("galleryImage2");
	x[3] = document.getElementById("galleryImage3");
	x[4] = document.getElementById("galleryImage4");
	x[5] = document.getElementById("galleryImage5");
	x[6] = document.getElementById("galleryImage6");
	x[7] = document.getElementById("galleryImage7");
	x[8] = document.getElementById("galleryImage8");
	x[9] = document.getElementById("galleryImage9");
	x[10] = document.getElementById("aboutHer");
	x[11] = document.getElementById("aboutHim");
	x[12] = document.getElementById("mainGalleryImageUnder");
	x[13] = document.getElementById("galleryImage1Under");
	x[14] = document.getElementById("galleryImage2Under");
	x[15] = document.getElementById("galleryImage3Under");
	x[16] = document.getElementById("galleryImage4Under");
	x[17] = document.getElementById("galleryImage5Under");
	x[18] = document.getElementById("galleryImage6Under");
	x[19] = document.getElementById("galleryImage7Under");
	x[20] = document.getElementById("galleryImage8Under");
	x[21] = document.getElementById("galleryImage9Under");
	for(i=0;i<x.length;i++)
		{
		if((x[i].scrollHeight>x[i].offsetHeight)||(x[i].scrollWidth>x[i].offsetWidth))
			{
			if(x[i].offsetHeight>x[i].offsetWidth)
				{
				x[i].firstChild.height=x[i].offsetWidth;
				x[i].height=(x[i].offsetWidth+"px");
				x[i].firstChild.width=x[i].offsetWidth;
				}
			else
				{
				x[i].firstChild.height=x[i].offsetHeight;
				x[i].firstChild.width=x[i].offsetHeight;
				}
			}
		else
			{
			if(x[i].scrollHeight>x[i].scrollWidth)
				{
				x[i].firstChild.height=x[i].scrollWidth;
				x[i].height=(x[i].offsetWidth+"px");
				x[i].firstChild.width=x[i].scrollWidth;
				}
			else
				{
				x[i].firstChild.height=x[i].scrollHeight;
				x[i].firstChild.width=x[i].scrollHeight;
				}
			}
		}
	}

var cakeImages=new Array();
cakeImages=[
	"cakeImages/marinerThemeCopyright.jpg",
	"cakeImages/skateCopyright.jpg",
	"cakeImages/skateboardCopyright.jpg",
	"cakeImages/cheeseCopyright.jpg",
	"cakeImages/designPCopyright.jpg",
	"cakeImages/flowersCopyright.jpg",
	"cakeImages/flowersCopyright2.jpg",
	"cakeImages/engagementCopyright.jpg",
	"cakeImages/newYearsCopyright.jpg",
	"cakeImages/bowsCopyright2.jpg",
	"cakeImages/bowsCopyright.jpg",
	"cakeImages/milleniumFalconCopyright.jpg",
	"cakeImages/monkeyCopyright.jpg",
	"cakeImages/beeCopyright.jpg",
	"cakeImages/halfBDayCopyright.jpg",
	"cakeImages/tardisCopyright2.jpg",
	"cakeImages/tardisCopyright.jpg",
	"cakeImages/beachCopyright.jpg",
	"cakeImages/wedding2Copyright2.jpg",
	"cakeImages/wedding2Copyright.jpg",
	"cakeImages/bookCopyright.jpg",
	"cakeImages/monkeysCopyright1.jpg",
	"cakeImages/monkeysCopyright2.jpg",
	"cakeImages/monkeysCopyright3.jpg",
	"cakeImages/steelersCopyright.jpg",
	"cakeImages/packersCopyright.jpg",
	"cakeImages/hiveCopyright.jpg",
	"cakeImages/ornamentsCopyright.jpg",
	"cakeImages/guitarCopyright.jpg",
	"cakeImages/schoolCopyright.jpg",
	"cakeImages/ghostsCopywrite.jpg",
	"cakeImages/anniversaryCopyright.jpg",
	"cakeImages/teacherCopyright.jpg",
	"cakeImages/spinnakerWinchCopyright.jpg",
	"cakeImages/wineCopyright.jpg",
	"cakeImages/concertCopyright.jpg",
	"cakeImages/carCopyright.jpg",
	"cakeImages/wedding1Copyright.jpg",
	"cakeImages/blackhawksCopyright.jpg"
	];

	var galleries=new Array();
	galleries[0]=[
		"images/cakeBlank.jpg",
		"images/cakeBlank.jpg",
		"images/cakeBlank.jpg",
		"images/cakeBlank.jpg",
		"images/cakeBlank.jpg",
		"images/cakeBlank.jpg",
		"images/cakeBlank.jpg",
		"images/cakeBlank.jpg",
		"images/cakeBlank.jpg",
		"images/cakeBlank.jpg"
		];


var numberOfGalleries;
	
	function setGalleries()
		{
		if (cakeImages.length%9==0)
			{
			numberOfGalleries=cakeImages.length/9;
			for(x=1;x<=numberOfGalleries;x++)
				{
				galleries[x]=[cakeImages[x*9-9],
					cakeImages[x*9-8],
					cakeImages[x*9-7],
					cakeImages[x*9-6],
					cakeImages[x*9-5],
					cakeImages[x*9-4],
					cakeImages[x*9-3],
					cakeImages[x*9-2],
					cakeImages[x*9-1]
					];
				}
			}
		else
			{
			numberOfGalleries=Math.floor(cakeImages.length/9)+1;
			for(x=1;x<numberOfGalleries;x++)
				{
				galleries[x]=[cakeImages[x*9-9],
					cakeImages[x*9-8],
					cakeImages[x*9-7],
					cakeImages[x*9-6],
					cakeImages[x*9-5],
					cakeImages[x*9-4],
					cakeImages[x*9-3],
					cakeImages[x*9-2],
					cakeImages[x*9-1]
					];
				}

			galleries[numberOfGalleries]=cakeImages.slice(((numberOfGalleries*9)-9),((numberOfGalleries*9)-(cakeImages.length%9)));
			for(x=1;x<=(9-cakeImages.length%9);x++)
				{
				galleries[numberOfGalleries].push("images/cakeBlank.jpg");
				}
			}
		
		}






var sotGalleryPage=1;
function forGallery(direction,image)
	{
	var images=new Array();
	images[0]=document.getElementById("mainGalleryImage");
	images[1]=document.getElementById("galleryImage1");
	images[2]=document.getElementById("galleryImage2");
	images[3]=document.getElementById("galleryImage3");
	images[4]=document.getElementById("galleryImage4");
	images[5]=document.getElementById("galleryImage5");
	images[6]=document.getElementById("galleryImage6");
	images[7]=document.getElementById("galleryImage7");
	images[8]=document.getElementById("galleryImage8");
	images[9]=document.getElementById("galleryImage9");
	var underImages=new Array();
	underImages[0]=document.getElementById("mainGalleryImageUnder");
	underImages[1]=document.getElementById("galleryImage1Under");
	underImages[2]=document.getElementById("galleryImage2Under");
	underImages[3]=document.getElementById("galleryImage3Under");
	underImages[4]=document.getElementById("galleryImage4Under");
	underImages[5]=document.getElementById("galleryImage5Under");
	underImages[6]=document.getElementById("galleryImage6Under");
	underImages[7]=document.getElementById("galleryImage7Under");
	underImages[8]=document.getElementById("galleryImage8Under");
	underImages[9]=document.getElementById("galleryImage9Under");

	if(direction == 'down')
		{
		if(sotGalleryPage==galleries.length-1)
			{
			sotGalleryPage=0;
			}
			
		for(x=1;x<=9;x++)
			{
			images[x].firstChild.src=galleries[sotGalleryPage+1][x-1];

			}
		sotGalleryPage++;
		}
	else if(direction == 'up')
		{
		if(sotGalleryPage==1)
			{
			sotGalleryPage=galleries.length;
			}
		for(x=1;x<=9;x++)
			{
			images[x].firstChild.src=galleries[sotGalleryPage-1][x-1];
			}
		sotGalleryPage--;
		}
	else if(direction == 'none')
		{
		if (images[image].firstChild.src.substr(images[image].firstChild.src.length-(galleries[0][image].length)) != galleries[0][image])    		   
			{
			underImages[image].firstChild.src=galleries[0][image]; 					
			underImages[0].firstChild.src=images[0].firstChild.src;				
			if(previousImageForSlideItDown)
				{
				underImages[previousImageForSlideItDown].firstChild.src=images[previousImageForSlideItDown].firstChild.src;
				images[previousImageForSlideItDown].firstChild.src=galleries[sotGalleryPage][previousImageForSlideItDown-1];
				}
			images[0].firstChild.style.marginTop=(0-images[0].scrollHeight)+"px";			
			images[0].firstChild.src=images[image].firstChild.src;				
			imageForSlideItFromTop=images[0].firstChild;					
			marginForSlideItFromTop=(0-images[0].scrollHeight);
			slideItFromTop();
			images[image].firstChild.style.marginTop="0px";
			slideItDownStop=images[image].scrollHeight;
			imageForSlideItDown=images[image].firstChild;
			marginForSlideItDown=0;
			slideItDownReplacementImage = galleries[0][image];
			slideItDown();
			previousImageForSlideItDown=image;
			}
		}
	}

var intervalForSlideItFromTop;
var marginForSlideItFromTop;
var imageForSlideItFromTop;

function slideItFromTop()
	{
	clearInterval(intervalForSlideItFromTop);
	intervalForSlideItFromTop=setInterval("doSlideItFromTop()",10);
	}

function doSlideItFromTop()
	{
	marginForSlideItFromTop=marginForSlideItFromTop+40;
	imageForSlideItFromTop.style.marginTop=(marginForSlideItFromTop+"px");

	if (marginForSlideItFromTop>=0)	
		{
		imageForSlideItFromTop.style.marginTop=("0px");
		clearInterval(intervalForSlideItFromTop);
		marginForSlideItFromTop=0;
		intervalForSlideItFromTop=0;	
		}
	}

var previousImageForSlideItDown;
var intervalForSlideItDown;
var marginForSlideItDown;
var imageForSlideItDown;
var slideItDownReplacementImage;


function slideItDown()
	{
	clearInterval(intervalForSlideItDown);
	intervalForSlideItDown=setInterval("doSlideItDown()",10);
	}

function doSlideItDown()
	{
	marginForSlideItDown=marginForSlideItDown+15;
	imageForSlideItDown.style.marginTop=(marginForSlideItDown+"%");

	if (marginForSlideItDown>=slideItDownStop)	
		{
		clearInterval(intervalForSlideItDown);
		imageForSlideItDown.src=slideItDownReplacementImage;
		imageForSlideItDown.style.marginTop="0%";
		intervalForSlideItDown=0;	
		}
	}

function blowItUp()
	{
	x=document.getElementById("mainGalleryImage").firstChild.src;
	y=x.substr(0,(x.length-4));
	z=x.substr((x.length-4),(x.length));
	xyz=y+"BIG"+z;
	window.open(xyz);
	}

function imageChanger(img_name, img_src)
	{
	document[img_name].src = img_src;
	}

function flavorDisplay(type)
	{
	if(document.getElementById(type).style.display=="block")
		{
		document.getElementById(type).style.display="none";
		}
	else
		{
		document.getElementById(type).style.display="block";
		}
	}

//   for making the variables  

function truncatinator()
	{
	this.spanSets=[];	
	}

function spanSet()
	{
	this.name;
	this.wordList=[];	//for the array of each word and its properties.
	this.openingTags=[];
	this.closingTags=[];
	this.spanList=[];
	}

function wordAndProps(word,index,type)
	{
	this.word=word;
	this.index=index;
	this.type=type;
	this.oppositeIndex;
	}

function span()
	{
	this.name;
	this.parent;
	this.superOpening=[];
	this.text=[];
	this.superClosing=[];
	}

var truncatinator= new truncatinator();

//   for making the variables  //    for making the variables   //   for making the variables   //   for making the variables    //
//_________________________________________________________________________________________________________________________________//
//																   //
// for setting spans, words, and properties // for setting spans, words, and properties // for setting spans, words, and properties// 


function setT()
	{
	var x = document.getElementsByTagName("span");
	var nameRef = 0;
	for(z=0;z<=x.length-1;z++)
		{
		var tempNameChecker=(x[z].id);
		if(	(tempNameChecker[tempNameChecker.length-1]=="1")
			&&
		  	(tempNameChecker[tempNameChecker.length-2]=="T")
			&&
			(tempNameChecker[tempNameChecker.length-3]=="_")
		  )  
			{
			var thisSpanSet=tempNameChecker.slice(0,(tempNameChecker.length-3));
			thisSpanSet=new spanSet();
			thisSpanSet.name=tempNameChecker.slice(0,(tempNameChecker.length-3));
			setSpans(thisSpanSet);
			setWords(thisSpanSet);
			setOppositeIndices(thisSpanSet);
			setOpeningTags(thisSpanSet);
			setClosingTags(thisSpanSet);
			truncatinator.spanSets[nameRef]=thisSpanSet;
			truncatinate(thisSpanSet);
			nameRef++;
			thisPageResize=1;
			}
		}                       
	}

function setSpans(thisSpanSet)
	{
	var epsilon = thisSpanSet.name;
	var x = document.getElementsByTagName("span");
	var setSpanNameRef = 1;
	var setSpanIndexRef= 0
	for (q=0;q<=x.length-1;q++)
		{
		for (g=0;g<=x.length-1;g++)
			{
			var thisElementId=document.getElementsByTagName("span")[g].id
			if(thisElementId == epsilon+"_T"+setSpanNameRef)
				{
				var thisSpan=document.getElementById(epsilon+"_T"+(setSpanNameRef));
				var spanMaker=document.getElementById(epsilon+"_T"+(setSpanNameRef)).id;
				spanMaker = new span();
				spanMaker.name=document.getElementById(epsilon+"_T"+(setSpanNameRef)).id;
				spanMaker.parent=document.getElementById(epsilon+"_T"+(setSpanNameRef)).parentNode.id;
				thisSpanSet.spanList[setSpanIndexRef]=spanMaker;
				setSpanNameRef++;
				setSpanIndexRef++;
				}
			}
		}
	for (q=0;q<=x.length-1;q++)
		{
		var thisElementId=document.getElementsByTagName("span")[q].id
		if(thisElementId == epsilon+"_TFinal")
			{
			var thisSpan=document.getElementById(epsilon+"_TFinal");
			var spanMaker=document.getElementById(epsilon+"_TFinal").id;
			spanMaker = new span();
			spanMaker.name=document.getElementById(epsilon+"_TFinal").id;
			spanMaker.parent=document.getElementById(epsilon+"_TFinal").parentNode.id;
			thisSpanSet.spanList[setSpanIndexRef]=spanMaker;
			setSpanIndexRef++;
			}
		}
	for (q=0;q<=x.length-1;q++)
		{
		var thisElementId=document.getElementsByTagName("span")[q].id
		if(thisElementId == epsilon+"_THidden")
			{
			var thisSpan=document.getElementById(epsilon+"_THidden");
			var spanMaker=document.getElementById(epsilon+"_THidden").id;
			spanMaker = new span();
			spanMaker.name=document.getElementById(epsilon+"_THidden").id;
			spanMaker.parent=document.getElementById(epsilon+"_THidden").parentNode.id;
			thisSpanSet.spanList[setSpanIndexRef]=spanMaker;
			setSpanIndexRef++;
			}
		}
	for (q=0;q<=x.length-1;q++)
		{
		var thisElementId=document.getElementsByTagName("span")[q].id
		if(thisElementId == epsilon+"_TWholeHidden")
			{
			var thisSpan=document.getElementById(epsilon+"_TWholeHidden");
			var spanMaker=document.getElementById(epsilon+"_TWholeHidden").id;
			spanMaker = new span();
			spanMaker.name=document.getElementById(epsilon+"_TWholeHidden").id;
			spanMaker.parent=document.getElementById(epsilon+"_TWholeHidden").parentNode.id;
			thisSpanSet.spanList[setSpanIndexRef]=spanMaker;
			setSpanIndexRef++;
			}
		}
	}

function setWords(thisSpanSet)
	{
	strArray=document.getElementById(thisSpanSet.name+'_T1').innerHTML;
	var thisWordCount=0;
	var thisWord="";
	var currentLetter;
	var currentArrayIndex=0;

	while (strArray[strArray.length-1] == "\n")
		{
		strArray=strArray.slice(0,strArray.length-1);
		}
	while (strArray[0] == "\n")
		{
		strArray=strArray.slice(1,strArray.length);
		}

	function tagChecker(passedIndex)
		{
		var word = "";
		var type = "";
		var toReturn = [];  //[0]=word(or length of word for longtags),[1]=type
	
		var typeCheck = "";
		var toCheck = "";
		var toCheckCaps = "";
		var thisStrArray = strArray;
		var tagIndex = passedIndex;
	
		for (i=0;i<4;i++)
			{
			typeCheck = typeCheck.concat(thisStrArray[(tagIndex+i)]);
			}
		typeCheck = typeCheck.toUpperCase();
	
		if((typeCheck=="<BR>")||(typeCheck=="<BR/")||(typeCheck=="<BR ")||(typeCheck=="<HR>")
				      ||(typeCheck=="<HR/")||(typeCheck=="<HR ")||(typeCheck=="<IMG"))
			{type = "standAlone";
			word = thisStrArray.slice(tagIndex,(thisStrArray.indexOf(">",tagIndex)+1));}
		else if((typeCheck=="<H1>")||(typeCheck=="<H1 "))
			{type = "h1Open";
			word = thisStrArray.slice(tagIndex,(thisStrArray.indexOf(">",tagIndex)+1));}
		else if(typeCheck=="</H1")
			{type = "h1Close";
			word = thisStrArray.slice(tagIndex,(thisStrArray.indexOf(">",tagIndex)+1));}
		else if((typeCheck=="<H2>")||(typeCheck=="<H2 "))
			{type = "h2Open";
			word = thisStrArray.slice(tagIndex,(thisStrArray.indexOf(">",tagIndex)+1));}
		else if(typeCheck=="</H2")
			{type = "h2Close";
			word = thisStrArray.slice(tagIndex,(thisStrArray.indexOf(">",tagIndex)+1));}
		else if((typeCheck=="<H3>")||(typeCheck=="<H3 "))
			{type = "h3Open";
			word = thisStrArray.slice(tagIndex,(thisStrArray.indexOf(">",tagIndex)+1));}
		else if(typeCheck=="</H3")
			{type = "h3Close";
			word = thisStrArray.slice(tagIndex,(thisStrArray.indexOf(">",tagIndex)+1));}
		else if((typeCheck=="<H4>")||(typeCheck=="<H4 "))
			{type = "h4Open";
			word = thisStrArray.slice(tagIndex,(thisStrArray.indexOf(">",tagIndex)+1));}
		else if(typeCheck=="</H4")
			{type = "h4Close";
			word = thisStrArray.slice(tagIndex,(thisStrArray.indexOf(">",tagIndex)+1));}
		else if((typeCheck=="<H5>")||(typeCheck=="<H5 "))
			{type = "h5Open";
			word = thisStrArray.slice(tagIndex,(thisStrArray.indexOf(">",tagIndex)+1));}
		else if(typeCheck=="</H5")
			{type = "h5Close";
			word = thisStrArray.slice(tagIndex,(thisStrArray.indexOf(">",tagIndex)+1));}
		else if((typeCheck=="<H6>")||(typeCheck=="<H6 "))
			{type = "h6Open";
			word = thisStrArray.slice(tagIndex,(thisStrArray.indexOf(">",tagIndex)+1));}
		else if(typeCheck=="</H6")
			{type = "h6Close";
			word = thisStrArray.slice(tagIndex,(thisStrArray.indexOf(">",tagIndex)+1));}
		else if(typeCheck=="<BLO")
			{type = "blockOpen";
			word = thisStrArray.slice(tagIndex,(thisStrArray.indexOf(">",tagIndex)+1));}
		else if(typeCheck=="</BL")
			{type = "blockClose";
			word = thisStrArray.slice(tagIndex,(thisStrArray.indexOf(">",tagIndex)+1));}
		else if(typeCheck=="<SPA")
			{type = "spanOpen";
			word = thisStrArray.slice(tagIndex,(thisStrArray.indexOf(">",tagIndex)+1));}
		else if(typeCheck=="</SP")
			{type = "spanClose";
			word = thisStrArray.slice(tagIndex,(thisStrArray.indexOf(">",tagIndex)+1));}
		else if(typeCheck.slice(0,3)=="<A ")
			{type = "anchorOpen";
			word = thisStrArray.slice(tagIndex,(thisStrArray.indexOf(">",tagIndex)+1));}
		else if(typeCheck=="</A>")
			{type = "anchorClose";
			word = thisStrArray.slice(tagIndex,(thisStrArray.indexOf(">",tagIndex)+1));}
		else if((typeCheck.slice(0,3)=="<P ")||(typeCheck.slice(0,3)=="<P>"))
			{type = "pOpen";
			word = thisStrArray.slice(tagIndex,(thisStrArray.indexOf(">",tagIndex)+1));}
		else if(typeCheck=="</P>")
			{type = "pClose";
			word = thisStrArray.slice(tagIndex,(thisStrArray.indexOf(">",tagIndex)+1));}
		else if(typeCheck=="<!--")
			{type = "standAlone";
			word = thisStrArray.slice(tagIndex,(thisStrArray.indexOf("-->",tagIndex)+3));}
		else if(typeCheck=="<ABB")
			{type = "longTag";
			thisStrArray = thisStrArray.toUpperCase();
			word = thisStrArray.slice(tagIndex,(thisStrArray.indexOf(">",thisStrArray.indexOf("/ABBR", tagIndex)+1)));
			word=word.length;}
		else if(typeCheck=="<ACR")
			{type = "longTag";
			thisStrArray = thisStrArray.toUpperCase();
			word = thisStrArray.slice(tagIndex,(thisStrArray.indexOf(">",thisStrArray.indexOf("/ACRONYM", tagIndex)+1)));
			word=word.length;}
		else if(typeCheck=="<ADD")
			{type = "longTag";
			thisStrArray = thisStrArray.toUpperCase();
			word = thisStrArray.slice(tagIndex,(thisStrArray.indexOf(">",thisStrArray.indexOf("/ADDRESS", tagIndex)+1)));
			word=word.length;}
		else if(typeCheck=="<ARE")
			{type = "longTag";
			thisStrArray = thisStrArray.toUpperCase();
			word = thisStrArray.slice(tagIndex,(thisStrArray.indexOf(">",thisStrArray.indexOf("/AREA", tagIndex)+1)));
			word=word.length;}
		else if(typeCheck=="<BUT")
			{type = "longTag";
			thisStrArray = thisStrArray.toUpperCase();
			word = thisStrArray.slice(tagIndex,(thisStrArray.indexOf(">",thisStrArray.indexOf("/BUTTON", tagIndex)+1)));
			word=word.length;}
		else if(typeCheck=="<DIV")
			{type = "longTag";
			thisStrArray = thisStrArray.toUpperCase();
			word = thisStrArray.slice(tagIndex,(thisStrArray.indexOf(">",thisStrArray.indexOf("/DIV", tagIndex)+1)));
			word=word.length;}
		else if(typeCheck=="<IFR")
			{type = "longTag";
			thisStrArray = thisStrArray.toUpperCase();
			word = thisStrArray.slice(tagIndex,(thisStrArray.indexOf(">",thisStrArray.indexOf("/IFRAME", tagIndex)+1)));
			word=word.length;}
		else if(typeCheck=="<MAP")
			{type = "longTag";
			thisStrArray = thisStrArray.toUpperCase();
			word = thisStrArray.slice(tagIndex,(thisStrArray.indexOf(">",thisStrArray.indexOf("/MAP", tagIndex)+1)));
			word=word.length;}
		else if(typeCheck=="<NOB")
			{type = "longTag";
			thisStrArray = thisStrArray.toUpperCase();
			word = thisStrArray.slice(tagIndex,(thisStrArray.indexOf(">",thisStrArray.indexOf("/NOBR", tagIndex)+1)));
			word=word.length;}
		else if(typeCheck=="<PRE")
			{type = "longTag";
			thisStrArray = thisStrArray.toUpperCase();
			word = thisStrArray.slice(tagIndex,(thisStrArray.indexOf(">",thisStrArray.indexOf("/PRE", tagIndex)+1)));
			word=word.length;}
		else if(typeCheck=="<FOR")
			{type = "longTag";
			thisStrArray = thisStrArray.toUpperCase();
			word = thisStrArray.slice(tagIndex,(thisStrArray.indexOf(">",thisStrArray.indexOf("/FORM", tagIndex)+1)));
			word=word.length;}
		else	{type="notATag"; alert(typeCheck+" is the issue")}

		toReturn=[word,type];
		return toReturn;
		}

	for (x=0; x<=strArray.length-1;x++)
		{
		if((strArray[currentArrayIndex] != " ") && (strArray[currentArrayIndex] != "\n") 
			&& (strArray[currentArrayIndex] != "<") && (currentArrayIndex != strArray.length-1))
			{
			currentLetter=strArray[currentArrayIndex].toString();
			thisWord=(thisWord.concat(currentLetter));
			}
		else if (strArray[currentArrayIndex] == "<")
			{
			if (strArray[currentArrayIndex-1] != " ")
				{
				var aWord=thisWord;
				aWord=new wordAndProps(thisWord,thisWordCount,"word");
				thisSpanSet.wordList[thisWordCount]=aWord;
				if(thisWord!="")
					{
					thisWordCount++;
					}
				thisWord="";
				}
			var checkedTag = tagChecker(currentArrayIndex);
			if (checkedTag[1]=="notATag")
				{
				currentLetter=strArray[currentArrayIndex].toString();
				thisWord=(thisWord.concat(currentLetter));
				}
			else if (checkedTag[1]=="longTag")
				{
				var thisLongTag = strArray.slice(currentArrayIndex,(currentArrayIndex+checkedTag[0]+1));
				var aWord = thisLongTag;
				aWord = new wordAndProps(thisLongTag,thisWordCount,checkedTag[1]);
				thisSpanSet.wordList[thisWordCount]=aWord;
				currentArrayIndex += (thisLongTag.length-1)
				x += (thisLongTag.length-1)
				thisWordCount++;
				thisWord="";
				}
			else	{
				var aWord=checkedTag[0];
				aWord=new wordAndProps(checkedTag[0],thisWordCount,checkedTag[1]);
				thisSpanSet.wordList[thisWordCount]=aWord;
				currentArrayIndex += (checkedTag[0].length-1)
				x += (checkedTag[0].length-1)
				thisWordCount++;
				thisWord="";
				}
			}
		else if (currentArrayIndex == strArray.length-1)
			{
			currentLetter=strArray[currentArrayIndex].toString();
			thisWord=(thisWord.concat(currentLetter));
			var aWord=thisWord;
			aWord=new wordAndProps(thisWord,thisWordCount,"word");
			thisSpanSet.wordList[thisWordCount]=aWord;
			}	
		else
			{
			var aWord=thisWord;
			aWord=new wordAndProps(thisWord,thisWordCount,"word");
			thisSpanSet.wordList[thisWordCount]=aWord;
			if(thisWord!="")
				{
				thisWordCount++;
				}
			thisWord="";
			}
		currentArrayIndex++;
		}
	}

function setOppositeIndices(aSpanSet)
	{
	thisSpanSet = aSpanSet;
	var thisCurrentIndex;
	var thisOppositeIndex;
	var thisSearchOpen;
	var thisSearchIndex;
	var thisSearchClose;
	
	for(x=0;x<=thisSpanSet.wordList.length-1;x++)
		{
		if ((thisSpanSet.wordList[x].type == "word")||(thisSpanSet.wordList[x].type == "standAlone")||
		    (thisSpanSet.wordList[x].type == "longTag"))
			{
			thisSpanSet.wordList[x].oppositeIndex = thisSpanSet.wordList[x].index;
			}
		}
	for(x=0;x<thisSpanSet.wordList.length;x++)
		{
		if (thisSpanSet.wordList[x].oppositeIndex == undefined)
			{
			thisSearchOpen = thisSpanSet.wordList[x].type;
			thisSearchIndex = x;
			switch (thisSearchOpen)
				{
				case "anchorOpen":	thisSearchClose = "anchorClose";	break;
				case "pOpen": 		thisSearchClose = "pClose";		break;
				case "blockOpen":	thisSearchClose = "blockClose";		break;
				case "spanOpen":	thisSearchClose = "spanClose";		break;
				case "h1Open": 		thisSearchClose = "h1Close"; 		break;
				case "h2Open": 		thisSearchClose = "h2Close"; 		break;
				case "h3Open": 		thisSearchClose = "h3Close"; 		break;
				case "h4Open": 		thisSearchClose = "h4Close"; 		break;
				case "h5Open": 		thisSearchClose = "h5Close"; 		break;
				case "h6Open": 		thisSearchClose = "h6Close"; 		break;
				default: break;
				}
			for(n=thisSearchIndex;n<thisSpanSet.wordList.length-thisSearchIndex;n++)
				{
				if (thisSpanSet.wordList[n].type == thisSearchClose)
					{
					thisSpanSet.wordList[x].oppositeIndex=thisSpanSet.wordList[n].index;
					thisSpanSet.wordList[n].oppositeIndex=thisSpanSet.wordList[x].index;
					thisSearchOpen = "";
					thisSearchClose = "";
					}
				}
			}
		}
	
	}

function setOpeningTags(thisSpanSet)
	{
	var theWordList=thisSpanSet.wordList;
	var theOpeningTags=[];
	var jj=0;
	for (j=0;j<theWordList.length;j++)
		{
		var theTest=theWordList[j].type.match("Open");
		if (theTest != null)
			{
			theOpeningTags[jj]=theWordList[j];
			jj++;
			}
		}
	thisSpanSet.openingTags=theOpeningTags;
	}


function setClosingTags(thisSpanSet)
	{
	var theWordList=thisSpanSet.wordList;
	var theClosingTags=[];
	var hh=0;
	for (h=0;h<theWordList.length;h++)
		{
		var theTest=theWordList[h].type.match("Close");
		if (theTest != null)
			{
			theClosingTags[hh]=theWordList[h];
			hh++;
			}
		}
	thisSpanSet.closingTags=theClosingTags;
	}

//   for truncatinating  

function truncatinate(thisSpanSet)
	{
	var notWholeHiddenSpans=thisSpanSet.spanList.length-1;
	var truncationPoint = thisSpanSet.wordList.length-1;
	var truncatedText = thisSpanSet.wordList;
	var theWordList = thisSpanSet.wordList;
	var theOpeningTags = thisSpanSet.openingTags;
	var theClosingTags = thisSpanSet.closingTags;
	var startPoint = 0;
	var theLink="";
	var isHidden=0;
	var isWholeHidden=0;
	var thisWholeHiddenParentName;
	var thisHiddenParentName;

	for(f=0;f<thisSpanSet.spanList.length;f++)
		{
		if(thisSpanSet.spanList[f].name == thisSpanSet.name+"_THidden")
			{
			isHidden=1;
			thisHiddenParentName="'"+thisSpanSet.spanList[f].parent+"'";
			}
		else if(thisSpanSet.spanList[f].name == thisSpanSet.name+"_TWholeHidden")
			{
			isWholeHidden=1;
			document.getElementById(thisSpanSet.name+"_TWholeHidden").innerHTML=showTContents(thisSpanSet.wordList,"word");
			thisWholeHiddenParentName="'"+thisSpanSet.spanList[f].parent+"'";
			notWholeHiddenSpans--;
			}
		}
	if((isHidden==1)&&(isWholeHidden==1))
		{
		theLink= '<br /><a onclick="divSee('+thisHiddenParentName+',1)">MORE </a><a onclick="divSee('+thisWholeHiddenParentName+',1)"> / ALL</a>';
		}
	if((isHidden==0)&&(isWholeHidden==1))
		{
		theLink= '<br /><a onclick="divSee('+thisWholeHiddenParentName+',1)">ALL</a>';
		}
	if((isHidden==1)&&(isWholeHidden==0))
		{
		theLink= '<br /><a onclick="divSee('+thisHiddenParentName+',1)">MORE</a>';
		}
	if((isHidden==0)&&(isWholeHidden==0))
		{
		theLink= '';
		}

	for(d=0;d<=notWholeHiddenSpans;d++)
		{
		if(thisSpanSet.spanList[d].name != thisSpanSet.name+"_TWholeHidden")
			{
			thisSpanSet.spanList[d].text = truncatedText;
			document.getElementById(thisSpanSet.spanList[d].name).innerHTML = showTContents(thisSpanSet.spanList[d].text,"word");
			var currentDiv = document.getElementById(thisSpanSet.spanList[d].parent);
			while(currentDiv.scrollHeight > currentDiv.offsetHeight)
				{
				truncationPoint--;
				truncatedText = truncatedText.slice(0,truncationPoint);
				thisSpanSet.spanList[d].text = truncatedText;
				var thisOpeningTagListIndex=0;
				var thisOpeningTagList=[];
				for (t=0;t<thisSpanSet.openingTags.length;t++)
					{
					if(
					   (thisSpanSet.openingTags[t].index<truncatedText[0].index)&&
					   (thisSpanSet.openingTags[t].oppositeIndex>truncatedText[0].index)
					  )
						{
						thisOpeningTagList[thisOpeningTagListIndex]=thisSpanSet.openingTags[t];
						thisOpeningTagListIndex++;
						}
					}
				thisSpanSet.spanList[d].superOpening=thisOpeningTagList;

				var thisClosingTagListIndex=0;
				var thisClosingTagList=[];
				for (u=0;u<thisSpanSet.closingTags.length;u++)
					{
					if(
					   (thisSpanSet.closingTags[u].index>truncatedText[truncatedText.length-1].index)&&
					   (thisSpanSet.closingTags[u].oppositeIndex<truncatedText[truncatedText.length-1].index)
					  )
						{
						thisClosingTagList[thisClosingTagListIndex]=thisSpanSet.closingTags[u];
						thisClosingTagListIndex++;
						}
					}
				thisSpanSet.spanList[d].superClosing=thisClosingTagList;
				if (thisSpanSet.spanList[d].name == thisSpanSet.name+"_TFinal")
					{
					document.getElementById(thisSpanSet.spanList[d].name).innerHTML = 
						showTContents(thisSpanSet.spanList[d].superOpening,"word")+
						showTContents(thisSpanSet.spanList[d].text,"word")+
						theLink+
						showTContents(thisSpanSet.spanList[d].superClosing,"word");
					}
				else
					{
					document.getElementById(thisSpanSet.spanList[d].name).innerHTML = 
						showTContents(thisSpanSet.spanList[d].superOpening,"word")+
						showTContents(thisSpanSet.spanList[d].text,"word")+
						showTContents(thisSpanSet.spanList[d].superClosing,"word");
					if(d==notWholeHiddenSpans)
						{
						break;
						}
					}
				}
			startPoint=startPoint+truncatedText.length;
			truncatedText=theWordList.slice(startPoint,theWordList.length);
			truncationPoint=truncatedText.length;
			}
		}
	}

//  for accessing stuff  

var prevDiv=1;
function divSee(divName, divIs)
	{
	divName=divName+"2";
	if (prevDiv == 1 && divIs == 1)
		{
		document.getElementById(divName).style.visibility="visible";
		prevDiv = divName;
		}
	else if (prevDiv == 1 && divIs == 0)
		{
		document.getElementById(divName).style.visibility="hidden";
		}
	else if (divIs == 1)
		{
		document.getElementById(prevDiv).style.visibility="hidden";	
		document.getElementById(divName).style.visibility="visible";
		prevDiv = divName;
		}
	else if (divIs == 0)
		{
		document.getElementById(divName).style.visibility="hidden";
		}
	else
		{
		alert("somethings not quite right here...");
		}
	
	}


function toBeInsertedAtBeginningOf(array,insertedPart)
	{
	thisArray = array;
	newLength = array.length;
	for(a=newLength;a>0;a--)
		{
		thisArray[a]=thisArray[a-1];
		}
	thisArray[0] = insertedPart;
	return thisArray;
	}


function getSpanSetByName(checkName)
	{
	var thisReturn;
	var thisQuery=truncatinator.spanSets;
	for(x=0;x<=truncatinator.spanSets.length;x++)
		{
		if(thisQuery[x].name==(checkName))
			{
			thisReturn=thisQuery[x];
			}
		}
	return thisReturn;
	}


function setWordProps(spanSet)
	{
	mainSpan=getSpanSetByName(spanSet);
	for(z=0;z<mainSpan.word.length;z++)
		{
		var thisWordProps=z;
		thisWordProps=new wordProps();
		thisWordProps.word=mainSpan.wordList[z];
		mainSpan.propertiesOfWord[z]=thisWordProps;
		}
	}

function showTContents(array,part)
	{
	var x = array;
	var p = part;
	var toReturn="";
	if (p =='name')
		{
		for (q=0;q<=x.length-1;q++)
			{
			thisArray=x[q];
			toReturn=(toReturn.concat(thisArray.name+"\n "));
			}
		}
	else if (p =='word')
		{
		for (q=0;q<=x.length-1;q++)
			{
			thisArray=x[q];
			if ((thisArray.word == '</a>') || (thisArray.word == '</A>'))
				{
				toReturn=(toReturn.slice(0,(toReturn.length-1)))
				toReturn=(toReturn.concat(thisArray.word+" "));
				}
			else
				{
				toReturn=(toReturn.concat(thisArray.word+" "));
				}
			}
		}
	else if (p =='type')
		{
		for (q=0;q<=x.length-1;q++)
			{
			thisArray=x[q];
			toReturn=(toReturn.concat(thisArray.type+" "));
			}
		}
	else if (p =='index')
		{
		for (q=0;q<=x.length-1;q++)
			{
			thisArray=x[q];
			toReturn=(toReturn.concat(thisArray.index+" "));
			}
		}
	else if (p =='oppositeIndex')
		{
		for (q=0;q<=x.length-1;q++)
			{
			thisArray=x[q];
			toReturn=(toReturn.concat(thisArray.oppositeIndex+" "));
			}
		}
	else if (p =='parent')
		{
		for (q=0;q<=x.length-1;q++)
			{
			thisArray=x[q];
			toReturn=(toReturn.concat(thisArray.parent+"\n "));
			}
		}
	return toReturn;
	}


//  for resizing stuff  

function sotResize()
	{
	snapBackForMe();
	if (navigator.appName == "Microsoft Internet Explorer")
		{
		x=setTimeout("retruncatinate()",500);
		}
	else
		{
		retruncatinate();
		}
	imageSizer();
	}

function sotLoad()
	{
	sotOnLoad();
	setT();
	imageSizer();
	}


function retruncatinate()
	{

	if(truncatinator.spanSets[0]==undefined){}else{
		for(x=0;x<truncatinator.spanSets.length;x++)
			{
			truncatinate(truncatinator.spanSets[x]);
			}
	}}


window.onload = sotLoad; 
window.onresize = sotResize;























