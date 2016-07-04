var ALL_ITEMS = function() {
		ITEMS = {
			item0: {title:'Лесная эльфийка', price:'1200 грн.', src:'../links/popular/d1.jpg', des:'Кукла ищет теплый дом и заботливых хозяев. Выполнена полностью вручную. Шилась с любовью и хорошим настроением'},
			item1: {title:'Стимп-панк леди', price:'на заказ', src:'../links/popular/d2.jpg', des:'Кукла ищет теплый дом и заботливых хозяев. Выполнена полностью вручную. Шилась с любовью и хорошим настроением'},
			item2: {title:'Японка', price:'1200 грн.', src:'../links/popular/d3.jpg', des:'Кукла ищет теплый дом и заботливых хозяев. Выполнена полностью вручную. Шилась с любовью и хорошим настроением'},
			item3: {title:'Безумный шляпник', price:'900 грн.', src:'../links/popular/d4.jpg', des:'Кукла ищет теплый дом и заботливых хозяев. Выполнена полностью вручную. Шилась с любовью и хорошим настроением'},
			item4: {title:'Ведьмак', price:'1200 грн.', src:'../links/popular/d5.jpg', des:'Кукла ищет теплый дом и заботливых хозяев. Выполнена полностью вручную. Шилась с любовью и хорошим настроением'},
			item5: {title:'<br>В ожидании чуда', price:'на заказ', src:'../links/popular/d6.jpg', des:'Кукла ищет теплый дом и заботливых хозяев. Выполнена полностью вручную. Шилась с любовью и хорошим настроением'}
		}
		return {
			getItems: function() {
				return ITEMS;
			}
		}
	}





var CREATE_ELEMENTS = {
	getHead : function(){
		return document.getElementsByTagName('header')[0];
	},
	getMain: function(){
		return document.getElementById('main');
	},
	newElem : function(name, cl){
		var newelem = document.createElement(name);
		if (cl) newelem.classList.add(cl);
		return newelem;
	},
	CLEAR : function(){
		var ch = this.getMain().childNodes;
		var k = ch.length;
		for (i= 0; i< k; i++) 
		{ 
			this.getMain().removeChild(ch[0]);
		}
	},
	SET_MENU : function(active){
		var menu_puncts = document.getElementsByClassName('punct');
		for (var i = 0; i<menu_puncts.length; i++){
			menu_puncts[i].classList.remove('active');
		}
		menu_puncts[active].classList.add('active');
	},
}

var DRAWER = {
	AddElem : function(elem) {
		this.appendChild(elem);
		return elem;
	},

	Button : function(item_name) {
		this.innerHTML = item_name['title'];
		return this;
	},

	Span : function(text) {
		this.innerHTML = text;
		return this;
	},

	AddClass : function(class_name){
		this.classList.add(class_name);
		return this;
	},

	AddImage : function(src, width){
		var img = CREATE_ELEMENTS.newElem('img');
		if (src) img.setAttribute('src', src);
		if (width) img.setAttribute('width', width);
		return img;
	},

	AddCartButton : function(){
		var cartBut = CREATE_ELEMENTS.newElem('button');
		this.Span.call(cartBut, 'Добавить в корзину');
		cartBut.setAttribute('id','cartButton');
		return cartBut;
	}

}

var DRAW_DOLLS = {
	Draw : function(ITEMS){
		for (var i in ITEMS)
		{	
			var newDiv = DRAWER.AddElem.call(this,CREATE_ELEMENTS.newElem('div','doll'));
			DRAWER.AddElem.call(newDiv,DRAWER.AddImage(ITEMS[i]['src']));
			DRAWER.AddElem.call(newDiv, DRAWER.Span.call(CREATE_ELEMENTS.newElem('span'),ITEMS[i]['title']));	
			var PRICE = '<br><b>' + ITEMS[i]['price'];
			DRAWER.AddElem.call(newDiv, DRAWER.Span.call(CREATE_ELEMENTS.newElem('span'), PRICE));
		}	

		var Divs = document.getElementsByClassName('doll');
			for(var j = 0; j < Divs.length; j++){ 
			    (function(i){
			        Divs[i].addEventListener('click', function(){
			            k = 'item' + i;
			            BUY_DOLLS.Description(ITEMS[k]);
			        });
			    }(j))   //замыкание
			}
	},
}

var BUY_DOLLS = {
	Description : function(item){
		CREATE_ELEMENTS.CLEAR();
		var newDiv = DRAWER.AddElem.call(CREATE_ELEMENTS.getMain(),CREATE_ELEMENTS.newElem('div','desc'));
		DRAWER.AddElem.call(newDiv,DRAWER.AddImage(item['src']));
		DRAWER.AddElem.call(newDiv, DRAWER.Span.call(CREATE_ELEMENTS.newElem('h3'),item['title']));
		DRAWER.AddElem.call(newDiv, DRAWER.Span.call(CREATE_ELEMENTS.newElem('h2'), item['price']));
		DRAWER.AddElem.call(newDiv, DRAWER.Span.call(CREATE_ELEMENTS.newElem('span'), item['des']));
		DRAWER.AddElem.call(newDiv, DRAWER.AddCartButton());
	}
}

