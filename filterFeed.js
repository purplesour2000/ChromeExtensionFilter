(function(){
    console.log('[HideFBD] Running hide FB data extension...');

    //p001Start
	// select the target node
	var target = document.body;
	// create an observer instance
	var observer = new MutationObserver(function(mutations) {
	    mutations.forEach(function(mutation) {
	    	console.log('Mutation type: ' + mutation.type);
	    	 imageReplacement();
	    });
	});
	 
	// configuration of the observer:
	var config = { attributes: true, childList: true, characterData: true, subtree: true }
	 
	// pass in the target node, as well as the observer options
	observer.observe(target, config);


	    //replace all items with a cat image...
    function imageReplacement()
	{
		replaceThem(document.getElementsByClassName('userContentWrapper')); //p
	}

	function replaceThem(x)
	{
		var replace = document.createElement('img');
		console.log('x.length: '+ x.length);
		var j = x.length;
		for (var i=0;i<j;i++)
		{
			if(x[i] != null ) //'stream_pagelet'
			{
				//console.log('[HideFBD] Running hide FB data extension...');

				var y = replace.cloneNode(true);
				y.src = 'https://a248.e.akamai.net/secure.meetupstatic.com/photos/member/8/8/1/a/highres_62974842.jpeg';
				//y.src = 'https://upload.wikimedia.org/wikipedia/commons/5/53/Aclu-v-ashcroft-redacted.jpg';
				y.style.height = '93px';
				y.style.width = '128px';
				var childrenList = x[i].children;
				var selectedNode;
				for(var l=0;l<childrenList.length;l++)
				{
					console.log('----------------');
					var innerChild = childrenList[l];
					selectedNode = innerChild;
					if(innerChild != null)
					{
						var innerString = innerChild.innerHTML
						//console.log(innerString);
						if( innerString.includes("Bernie") || innerString.includes("Trump") || innerString.includes("abortion") || 
							innerString.includes("Hillary") || innerString.includes("The Other 98") ||
						    innerString.includes("the raw story") || innerString.includes("Tomi Lahren") ||
						    innerString.includes("president")	||
						    innerString.includes("DAPL")					    
						    )
						{
							//go into the children to find the lowest child
							var kids = innerChild.children;
							if(kids != null)
							{
								for(var m=0;m<kids.length;m++)
								{
									console.log(kids[m].nodeName);
									console.log(kids[m].id);

									var innerString2 = kids[m].innerHTML
									if( innerString2.includes("Bernie") || innerString2.includes("Trump") || innerString2.includes("abortion") || 
									    innerString2.includes("Hillary") || innerString2.includes("The Other 98")
									    || innerString2.includes("the raw story") || innerString2.includes("Tomi Lahren") ||
									    innerString2.includes("president") ||
									    innerString2.includes("DAPL")

									    )
				    				{
				    					selectedNode = kids[m];
				    				}
								}
								if(x[i] != null && selectedNode != null)
								{
									selectedNode.parentElement.replaceChild(y,selectedNode);
									console.log("replaced**");
								}
							}
						}
					}
				}
			}
		}
	}
}());


